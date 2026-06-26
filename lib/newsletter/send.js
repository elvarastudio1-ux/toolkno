import { prisma } from "@/lib/prisma";
import { resend } from "@/lib/resend";
import { siteConfig } from "@/lib/site";
import { generateToken } from "./tokens";

const FROM = process.env.EMAIL_FROM
  ? `ToolKno <${process.env.EMAIL_FROM}>`
  : "ToolKno <hello@toolkno.com>";

const BATCH_SIZE = 100;
const BATCH_DELAY_MS = 100;

// ─── Token helpers ────────────────────────────────────────────────────────────

async function getOrCreateUnsubscribeToken(subscriberId) {
  const existing = await prisma.subscriberToken.findFirst({
    where: { subscriberId, type: "unsubscribe" },
    select: { token: true },
  });
  if (existing) return existing.token;

  const token = generateToken();
  await prisma.subscriberToken.create({
    data: {
      subscriberId,
      token,
      type: "unsubscribe",
      expiresAt: null, // Unsubscribe tokens never expire (FR-023)
    },
  });
  return token;
}

// ─── Email HTML builder ───────────────────────────────────────────────────────

function wrapLinks(html, sendId) {
  return html.replace(/href="(https?:\/\/[^"]+)"/g, (_match, url) => {
    const trackUrl = `${siteConfig.url}/api/newsletter/click?sid=${encodeURIComponent(sendId)}&url=${encodeURIComponent(url)}`;
    return `href="${trackUrl}"`;
  });
}

function buildIssueHtml(issue, sendId, unsubscribeUrl) {
  let content = issue.htmlContent;
  if (sendId) content = wrapLinks(content, sendId);

  const preheader = issue.preheader
    ? `<span style="display:none;font-size:1px;color:#f8fafc;max-height:0;max-width:0;opacity:0;overflow:hidden;">${issue.preheader}&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;</span>`
    : "";

  const pixelTag = sendId
    ? `<img src="${siteConfig.url}/api/newsletter/open?sid=${encodeURIComponent(sendId)}" width="1" height="1" alt="" style="display:block;width:1px;height:1px;border:0;" />`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>${issue.subject}</title>
</head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;">
${preheader}
<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#f8fafc;">
  <tr>
    <td align="center" style="padding:40px 20px;">
      <table width="600" cellpadding="0" cellspacing="0" role="presentation" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;border:1px solid #e2e8f0;">
        <tr>
          <td style="padding:28px 40px 0;">
            <p style="margin:0;font-size:20px;font-weight:700;color:#0f172a;letter-spacing:-0.01em;">ToolKno</p>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 40px 0;color:#0f172a;font-size:15px;line-height:1.7;">
            ${content}
          </td>
        </tr>
        <tr>
          <td style="padding:0 40px 32px;">
            <hr style="border:none;border-top:1px solid #f1f5f9;margin:28px 0 20px;" />
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td style="font-size:12px;color:#94a3b8;line-height:1.7;">
                  You received this because you subscribed at
                  <a href="${siteConfig.url}" style="color:#94a3b8;">${siteConfig.url}</a>.<br />
                  <a href="${unsubscribeUrl}" style="color:#64748b;">Unsubscribe</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
${pixelTag}
</body>
</html>`;
}

function buildIssueText(issue, unsubscribeUrl) {
  return `${issue.textContent}

---
You received this because you subscribed at ${siteConfig.url}.
Unsubscribe: ${unsubscribeUrl}`;
}

// ─── Send issue to all confirmed subscribers ──────────────────────────────────

export async function sendIssue(issueId) {
  const issue = await prisma.newsletterIssue.findUnique({
    where: { id: issueId },
  });

  if (!issue) throw new Error(`Issue ${issueId} not found`);
  if (!["draft", "scheduled", "sending"].includes(issue.status)) {
    throw new Error(`Issue ${issueId} has status "${issue.status}" and cannot be sent`);
  }

  const subscribers = await prisma.subscriber.findMany({
    where: { status: "confirmed" },
    select: { id: true, email: true },
  });

  if (subscribers.length === 0) {
    await prisma.newsletterIssue.update({
      where: { id: issueId },
      data: { status: "sent", sentAt: new Date(), sentCount: 0 },
    });
    return { sentCount: 0 };
  }

  // Create pending send records — skipDuplicates enables resumable sends (ES-005)
  await prisma.newsletterSend.createMany({
    data: subscribers.map((s) => ({
      issueId,
      subscriberId: s.id,
      emailSnapshot: s.email,
      status: "pending",
    })),
    skipDuplicates: true,
  });

  await prisma.newsletterIssue.update({
    where: { id: issueId },
    data: { status: "sending" },
  });

  const pendingSends = await prisma.newsletterSend.findMany({
    where: { issueId, status: "pending" },
    include: { subscriber: { select: { email: true } } },
  });

  for (let i = 0; i < pendingSends.length; i += BATCH_SIZE) {
    const chunk = pendingSends.slice(i, i + BATCH_SIZE);

    const payloads = await Promise.all(
      chunk.map(async (send) => {
        const unsubToken = await getOrCreateUnsubscribeToken(send.subscriberId);
        const unsubUrl = `${siteConfig.url}/newsletter/unsubscribe?token=${unsubToken}`;
        return {
          from: FROM,
          to: [send.subscriber.email],
          subject: issue.subject,
          html: buildIssueHtml(issue, send.id, unsubUrl),
          text: buildIssueText(issue, unsubUrl),
          headers: {
            "List-Unsubscribe": `<${unsubUrl}>, <mailto:unsubscribe@toolkno.com?subject=unsubscribe>`,
            "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
          },
        };
      })
    );

    const { data: batchData, error: batchError } = await resend.batch.send(payloads);
    const now = new Date();

    if (batchError || !batchData?.data) {
      await prisma.newsletterSend.updateMany({
        where: { id: { in: chunk.map((s) => s.id) } },
        data: {
          status: "failed",
          failedAt: now,
          failureReason: batchError?.message ?? "batch_failed",
        },
      });
    } else {
      await Promise.all(
        chunk.map(async (send, idx) => {
          const result = batchData.data[idx];
          if (result?.id) {
            await prisma.newsletterSend.update({
              where: { id: send.id },
              data: { resendMessageId: result.id, status: "sent", sentAt: now },
            });
          } else {
            await prisma.newsletterSend.update({
              where: { id: send.id },
              data: { status: "failed", failedAt: now, failureReason: "no_resend_id" },
            });
          }
        })
      );
    }

    // 100ms delay between batches to avoid Resend rate limits (ES-005)
    if (i + BATCH_SIZE < pendingSends.length) {
      await new Promise((r) => setTimeout(r, BATCH_DELAY_MS));
    }
  }

  const sentCount = await prisma.newsletterSend.count({
    where: { issueId, status: "sent" },
  });

  await prisma.newsletterIssue.update({
    where: { id: issueId },
    data: { status: "sent", sentAt: new Date(), sentCount },
  });

  return { sentCount };
}

// ─── Test send (AR-005): no DB records, [TEST] prefix, max 5 recipients ──────

export async function sendTestIssue(issueId, testEmails) {
  const issue = await prisma.newsletterIssue.findUnique({
    where: { id: issueId },
  });
  if (!issue) throw new Error(`Issue ${issueId} not found`);

  const recipients = testEmails.slice(0, 5);
  const subject = `[TEST] ${issue.subject}`;
  const previewUnsubUrl = `${siteConfig.url}/newsletter/unsubscribe`;

  for (const to of recipients) {
    await resend.emails.send({
      from: FROM,
      to,
      subject,
      html: buildIssueHtml(issue, null, previewUnsubUrl),
      text: buildIssueText(issue, previewUnsubUrl),
    });
  }

  return { sent: recipients.length };
}
