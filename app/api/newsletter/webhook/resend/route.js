import { NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "crypto";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

// Verify Svix/Resend webhook signature (HMAC-SHA256)
function verifySignature(rawBody, headers) {
  const msgId = headers.get("svix-id");
  const msgTimestamp = headers.get("svix-timestamp");
  const msgSignature = headers.get("svix-signature");
  const secret = process.env.RESEND_WEBHOOK_SECRET;

  if (!msgId || !msgTimestamp || !msgSignature || !secret) return false;

  // Reject replays older than 5 minutes
  const ts = parseInt(msgTimestamp, 10);
  if (isNaN(ts) || Math.abs(Date.now() / 1000 - ts) > 300) return false;

  const secretStr = secret.startsWith("whsec_") ? secret.slice(6) : secret;
  const secretBytes = Buffer.from(secretStr, "base64");

  const toSign = `${msgId}.${msgTimestamp}.${rawBody}`;
  const expected = createHmac("sha256", secretBytes)
    .update(toSign)
    .digest("base64");
  const expectedBuf = Buffer.from(expected, "base64");

  return msgSignature.split(" ").some((sig) => {
    const parts = sig.split(",");
    if (parts[0] !== "v1" || !parts[1]) return false;
    try {
      const provided = Buffer.from(parts[1], "base64");
      if (provided.length !== expectedBuf.length) return false;
      return timingSafeEqual(provided, expectedBuf);
    } catch {
      return false;
    }
  });
}

export async function POST(request) {
  const rawBody = await request.text();

  if (!verifySignature(rawBody, request.headers)) {
    return NextResponse.json({ error: "Invalid signature." }, { status: 401 });
  }

  let payload;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const { type, data } = payload;
  const emailId = data?.email_id;

  if (!emailId) {
    return NextResponse.json({ ok: true }); // Unknown event shape — ack and ignore
  }

  try {
    await handleEvent(type, emailId, data);
  } catch (err) {
    console.error(`[webhook/resend] ${type}`, err);
    // Return 200 to prevent Resend from retrying on application errors
  }

  return NextResponse.json({ ok: true });
}

async function handleEvent(type, emailId, data) {
  switch (type) {
    case "email.delivered": {
      const send = await prisma.newsletterSend.findFirst({
        where: { resendMessageId: emailId },
      });
      if (send && send.status === "pending") {
        await prisma.newsletterSend.update({
          where: { id: send.id },
          data: { status: "sent", sentAt: new Date() },
        });
      }
      break;
    }

    case "email.bounced": {
      const send = await prisma.newsletterSend.findFirst({
        where: { resendMessageId: emailId },
        include: { subscriber: { select: { id: true, status: true } } },
      });
      if (!send) break;

      const now = new Date();
      await prisma.$transaction([
        prisma.newsletterSend.update({
          where: { id: send.id },
          data: { status: "bounced", bouncedAt: now },
        }),
        prisma.subscriber.update({
          where: { id: send.subscriberId },
          data: { status: "bounced", bouncedAt: now },
        }),
        prisma.subscriberEvent.create({
          data: {
            subscriberId: send.subscriberId,
            eventType: "bounced",
            previousStatus: send.subscriber.status,
            newStatus: "bounced",
            actor: "system",
            metadata: { emailId, bounceMessage: data?.bounce?.message ?? null },
          },
        }),
      ]);
      break;
    }

    case "email.complained": {
      const send = await prisma.newsletterSend.findFirst({
        where: { resendMessageId: emailId },
        include: { subscriber: { select: { id: true, status: true } } },
      });
      if (!send) break;

      const now = new Date();
      await prisma.$transaction([
        prisma.newsletterSend.update({
          where: { id: send.id },
          data: { status: "complained", complainedAt: now },
        }),
        prisma.subscriber.update({
          where: { id: send.subscriberId },
          data: { status: "complained", complainedAt: now },
        }),
        prisma.subscriberEvent.create({
          data: {
            subscriberId: send.subscriberId,
            eventType: "complained",
            previousStatus: send.subscriber.status,
            newStatus: "complained",
            actor: "system",
            metadata: { emailId },
          },
        }),
      ]);
      break;
    }

    default:
      // Unhandled event type — ack silently
      break;
  }
}
