import { resend } from "@/lib/resend";
import { siteConfig } from "@/lib/site";

const FROM = process.env.EMAIL_FROM
  ? `ToolKno <${process.env.EMAIL_FROM}>`
  : "ToolKno <hello@toolkno.com>";

// ─── Confirmation email (FR-012 to FR-015) ───────────────────────────────────

function confirmationHtml(confirmUrl) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Confirm your ToolKno subscription</title>
</head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;">
  <span style="display:none;font-size:1px;color:#f8fafc;max-height:0;max-width:0;opacity:0;overflow:hidden;">One click to confirm &mdash; takes 2 seconds.</span>
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#f8fafc;">
    <tr>
      <td align="center" style="padding:40px 20px;">
        <table width="600" cellpadding="0" cellspacing="0" role="presentation" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;border:1px solid #e2e8f0;">
          <tr>
            <td style="padding:32px 40px 0;">
              <p style="margin:0;font-size:20px;font-weight:700;color:#0f172a;letter-spacing:-0.01em;">ToolKno</p>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 40px;">
              <h1 style="margin:0 0 16px;font-size:22px;font-weight:700;color:#0f172a;letter-spacing:-0.01em;">Confirm your subscription</h1>
              <p style="margin:0 0 24px;font-size:15px;line-height:1.6;color:#475569;">
                You asked to subscribe to the ToolKno newsletter &mdash; honest software takes, tool comparisons, and workflow guides, twice a month. Click the button below to confirm.
              </p>
              <table cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td style="border-radius:8px;background:#0ea5e9;">
                    <a href="${confirmUrl}" style="display:inline-block;padding:13px 28px;font-size:15px;font-weight:600;color:#ffffff;text-decoration:none;border-radius:8px;">
                      Confirm my subscription
                    </a>
                  </td>
                </tr>
              </table>
              <p style="margin:24px 0 0;font-size:13px;line-height:1.6;color:#94a3b8;">
                Or copy this link into your browser:<br>
                <a href="${confirmUrl}" style="color:#0ea5e9;word-break:break-all;font-size:12px;">${confirmUrl}</a>
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:0 40px 32px;">
              <hr style="border:none;border-top:1px solid #f1f5f9;margin:0 0 20px;">
              <p style="margin:0;font-size:12px;line-height:1.6;color:#94a3b8;">
                This link expires in 48 hours.<br>
                If you didn&rsquo;t request this, you can safely ignore this email &mdash; you won&rsquo;t be subscribed.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function confirmationText(confirmUrl) {
  return `Confirm your ToolKno subscription

You asked to subscribe to the ToolKno newsletter — honest software takes, tool comparisons, and workflow guides, twice a month.

Confirm your subscription by clicking the link below:
${confirmUrl}

This link expires in 48 hours.
If you didn't request this, you can safely ignore this email.

— ToolKno
${siteConfig.url}`;
}

export async function sendConfirmationEmail({ to, token }) {
  const confirmUrl = `${siteConfig.url}/newsletter/confirm?token=${token}`;

  const { data, error } = await resend.emails.send({
    from: FROM,
    to,
    subject: "Confirm your ToolKno subscription",
    html: confirmationHtml(confirmUrl),
    text: confirmationText(confirmUrl),
    headers: { "X-Email-Type": "newsletter-confirmation" },
  });

  if (error) throw new Error(`[resend] ${error.message}`);
  return data;
}

// ─── Welcome email (FR-017 to FR-021) ────────────────────────────────────────

function welcomeHtml(isReturning) {
  const greeting = isReturning ? "Welcome back to ToolKno." : "Welcome to ToolKno.";
  const toolsUrl = `${siteConfig.url}/tools`;
  const aboutUrl = `${siteConfig.url}/about`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>You're in. Here's what to expect.</title>
</head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;">
  <span style="display:none;font-size:1px;color:#f8fafc;max-height:0;max-width:0;opacity:0;overflow:hidden;">Honest software takes, twice a month. No affiliate pressure.</span>
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#f8fafc;">
    <tr>
      <td align="center" style="padding:40px 20px;">
        <table width="600" cellpadding="0" cellspacing="0" role="presentation" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;border:1px solid #e2e8f0;">
          <tr>
            <td style="padding:32px 40px 0;">
              <p style="margin:0;font-size:20px;font-weight:700;color:#0f172a;letter-spacing:-0.01em;">ToolKno</p>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 40px 0;">
              <h1 style="margin:0 0 16px;font-size:22px;font-weight:700;color:#0f172a;letter-spacing:-0.01em;">${greeting}</h1>
              <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#334155;">
                Twice a month you&rsquo;ll get a short, direct email covering one of three things: honest software reviews that cut through the marketing, practical workflow guides built around tools you already use, and AI tool comparisons that are upfront about what the tools can&rsquo;t do. No filler. No affiliate pressure.
              </p>
              <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#334155;">
                Here&rsquo;s what I commit to in every issue:
              </p>
              <table cellpadding="0" cellspacing="0" role="presentation" width="100%" style="margin-bottom:24px;">
                <tr>
                  <td style="padding:14px 18px;background:#f8fafc;border-radius:8px;border-left:3px solid #0ea5e9;margin-bottom:8px;font-size:14px;line-height:1.6;color:#334155;">
                    No affiliate recommendation without disclosing the exact relationship and what I actually tested.
                  </td>
                </tr>
                <tr><td style="height:8px;"></td></tr>
                <tr>
                  <td style="padding:14px 18px;background:#f8fafc;border-radius:8px;border-left:3px solid #0ea5e9;font-size:14px;line-height:1.6;color:#334155;">
                    All software comparisons are tested on the same tasks &mdash; no vendor-supplied benchmarks, no press kit screenshots.
                  </td>
                </tr>
                <tr><td style="height:8px;"></td></tr>
                <tr>
                  <td style="padding:14px 18px;background:#f8fafc;border-radius:8px;border-left:3px solid #0ea5e9;font-size:14px;line-height:1.6;color:#334155;">
                    If a tool I previously recommended gets worse, I&rsquo;ll say so &mdash; even if that&rsquo;s inconvenient.
                  </td>
                </tr>
              </table>
              <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#334155;">
                <strong style="color:#0f172a;">Coming up next:</strong> I&rsquo;m comparing five AI writing assistants &mdash; Jasper, Copy.ai, Rytr, Sudowrite, and Claude &mdash; on the same brief: a 500-word product description for a SaaS tool. You&rsquo;ll see every output side by side with my unfiltered notes on where each one surprised me and where each one fell flat.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:0 40px 32px;">
              <hr style="border:none;border-top:1px solid #f1f5f9;margin:0 0 20px;">
              <table cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td style="padding-right:16px;">
                    <a href="${siteConfig.url}" style="font-size:13px;color:#0ea5e9;text-decoration:none;font-weight:500;">Home</a>
                  </td>
                  <td style="padding-right:16px;">
                    <a href="${toolsUrl}" style="font-size:13px;color:#0ea5e9;text-decoration:none;font-weight:500;">Browse tools</a>
                  </td>
                  <td>
                    <a href="${aboutUrl}" style="font-size:13px;color:#0ea5e9;text-decoration:none;font-weight:500;">About</a>
                  </td>
                </tr>
              </table>
              <p style="margin:16px 0 0;font-size:12px;line-height:1.5;color:#94a3b8;">
                You received this because you subscribed at <a href="${siteConfig.url}" style="color:#94a3b8;">${siteConfig.url}</a>.<br>
                No tracking pixel. No link tracking. Just email.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function welcomeText(isReturning) {
  const greeting = isReturning ? "Welcome back to ToolKno." : "Welcome to ToolKno.";
  const toolsUrl = `${siteConfig.url}/tools`;
  const aboutUrl = `${siteConfig.url}/about`;

  return `${greeting}

Twice a month you'll get a short, direct email covering one of three things: honest software reviews that cut through the marketing, practical workflow guides built around tools you already use, and AI tool comparisons that are upfront about what the tools can't do.

What I commit to in every issue:

- No affiliate recommendation without disclosing the exact relationship and what I actually tested.
- All software comparisons are tested on the same tasks — no vendor-supplied benchmarks, no press kit screenshots.
- If a tool I previously recommended gets worse, I'll say so — even if that's inconvenient.

Coming up next: I'm comparing five AI writing assistants — Jasper, Copy.ai, Rytr, Sudowrite, and Claude — on the same brief: a 500-word product description for a SaaS tool. You'll see every output side by side with my unfiltered notes.

—

Home: ${siteConfig.url}
Browse tools: ${toolsUrl}
About: ${aboutUrl}

You received this because you subscribed at ${siteConfig.url}.
No tracking pixel. No link tracking. Just email.`;
}

// ─── Management link email (FR-026, AC-016) ──────────────────────────────────

function managementLinkHtml(managementUrl) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Manage your ToolKno newsletter subscription</title>
</head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;">
  <span style="display:none;font-size:1px;color:#f8fafc;max-height:0;max-width:0;opacity:0;overflow:hidden;">Update your preferences or unsubscribe in one click.</span>
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#f8fafc;">
    <tr>
      <td align="center" style="padding:40px 20px;">
        <table width="600" cellpadding="0" cellspacing="0" role="presentation" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;border:1px solid #e2e8f0;">
          <tr>
            <td style="padding:32px 40px 0;">
              <p style="margin:0;font-size:20px;font-weight:700;color:#0f172a;letter-spacing:-0.01em;">ToolKno</p>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 40px;">
              <h1 style="margin:0 0 16px;font-size:22px;font-weight:700;color:#0f172a;letter-spacing:-0.01em;">Manage your subscription</h1>
              <p style="margin:0 0 24px;font-size:15px;line-height:1.6;color:#475569;">
                Click the button below to update your delivery preferences or unsubscribe from the ToolKno newsletter. This link expires in 4 hours.
              </p>
              <table cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td style="border-radius:8px;background:#0ea5e9;">
                    <a href="${managementUrl}" style="display:inline-block;padding:13px 28px;font-size:15px;font-weight:600;color:#ffffff;text-decoration:none;border-radius:8px;">
                      Manage preferences
                    </a>
                  </td>
                </tr>
              </table>
              <p style="margin:24px 0 0;font-size:13px;line-height:1.6;color:#94a3b8;">
                Or copy this link into your browser:<br>
                <a href="${managementUrl}" style="color:#0ea5e9;word-break:break-all;font-size:12px;">${managementUrl}</a>
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:0 40px 32px;">
              <hr style="border:none;border-top:1px solid #f1f5f9;margin:0 0 20px;">
              <p style="margin:0;font-size:12px;line-height:1.6;color:#94a3b8;">
                If you didn&rsquo;t request this link, you can safely ignore this email. Your subscription is unchanged.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function managementLinkText(managementUrl) {
  return `Manage your ToolKno newsletter subscription

Click the link below to update your delivery preferences or unsubscribe from the ToolKno newsletter. This link expires in 4 hours.

${managementUrl}

If you didn't request this link, you can safely ignore this email. Your subscription is unchanged.

— ToolKno
${siteConfig.url}`;
}

export async function sendManagementLinkEmail({ to, token }) {
  const managementUrl = `${siteConfig.url}/newsletter/preferences?token=${token}`;

  const { data, error } = await resend.emails.send({
    from: FROM,
    to,
    subject: "Manage your ToolKno newsletter subscription",
    html: managementLinkHtml(managementUrl),
    text: managementLinkText(managementUrl),
    headers: { "X-Email-Type": "newsletter-management" },
  });

  if (error) throw new Error(`[resend] ${error.message}`);
  return data;
}

// ─── Welcome email (FR-017 to FR-021) ────────────────────────────────────────

export async function sendWelcomeEmail({ to, variant = "new" }) {
  const isReturning = variant === "returning";

  const { data, error } = await resend.emails.send({
    from: FROM,
    to,
    subject: "You're in. Here's what to expect.",
    html: welcomeHtml(isReturning),
    text: welcomeText(isReturning),
    headers: { "X-Email-Type": `newsletter-welcome-${variant}` },
  });

  if (error) throw new Error(`[resend] ${error.message}`);
  return data;
}
