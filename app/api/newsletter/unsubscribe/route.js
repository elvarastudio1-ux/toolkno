import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

const TOKEN_REGEX = /^[a-f0-9]{64}$/;

async function processUnsubscribe(token) {
  const tokenRecord = await prisma.subscriberToken.findUnique({
    where: { token },
    include: { subscriber: { select: { id: true, status: true } } },
  });

  if (!tokenRecord || tokenRecord.type !== "unsubscribe") return false;

  const { subscriber } = tokenRecord;

  // Already unsubscribed — idempotent
  if (subscriber.status === "unsubscribed") return true;

  const now = new Date();
  await prisma.$transaction([
    prisma.subscriber.update({
      where: { id: subscriber.id },
      data: { status: "unsubscribed", unsubscribedAt: now },
    }),
    prisma.subscriberEvent.create({
      data: {
        subscriberId: subscriber.id,
        eventType: "unsubscribed",
        previousStatus: subscriber.status,
        newStatus: "unsubscribed",
        actor: "subscriber",
      },
    }),
  ]);

  return true;
}

// GET — user clicks unsubscribe link in email
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const token = String(searchParams.get("token") ?? "").trim();

  if (!token || !TOKEN_REGEX.test(token)) {
    return NextResponse.redirect(
      new URL("/newsletter/unsubscribed?error=invalid", request.url),
      { status: 303 }
    );
  }

  const ok = await processUnsubscribe(token).catch(() => false);
  if (!ok) {
    return NextResponse.redirect(
      new URL("/newsletter/unsubscribed?error=invalid", request.url),
      { status: 303 }
    );
  }

  return NextResponse.redirect(
    new URL("/newsletter/unsubscribed", request.url),
    { status: 303 }
  );
}

// POST — List-Unsubscribe-Post one-click (RFC 8058)
export async function POST(request) {
  const { searchParams } = new URL(request.url);
  const token = String(searchParams.get("token") ?? "").trim();

  if (!token || !TOKEN_REGEX.test(token)) {
    return NextResponse.json({ error: "Invalid token." }, { status: 400 });
  }

  await processUnsubscribe(token).catch((err) =>
    console.error("[newsletter/unsubscribe]", err)
  );

  // RFC 8058 §3.2: respond with 200 regardless so MUAs don't retry
  return NextResponse.json({ success: true }, { status: 200 });
}
