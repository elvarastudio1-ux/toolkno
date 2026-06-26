import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { validateManagementToken } from "@/lib/newsletter/management-token";

export const dynamic = "force-dynamic";

const VALID_FREQUENCIES = ["every_issue", "digest_only"];

function maskEmail(email) {
  const at = email.indexOf("@");
  if (at < 1) return "***@***";
  const local = email.slice(0, at);
  const domain = email.slice(at);
  const visible =
    local.length <= 2
      ? local[0] + "*"
      : local[0] + "*".repeat(Math.max(1, local.length - 2)) + local[local.length - 1];
  return `${visible}${domain}`;
}

// GET /api/newsletter/preferences?token=[token]
export async function GET(request) {
  const token = new URL(request.url).searchParams.get("token") ?? "";
  const record = await validateManagementToken(token);
  if (!record) {
    return NextResponse.json({ error: "Invalid or expired token." }, { status: 401 });
  }
  const { subscriber } = record;
  return NextResponse.json({
    emailMasked: maskEmail(subscriber.email),
    status: subscriber.status,
    frequency: subscriber.frequency,
  });
}

// PATCH /api/newsletter/preferences
export async function PATCH(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const { token, frequency } = body ?? {};
  const record = await validateManagementToken(token ?? "");
  if (!record) {
    return NextResponse.json({ error: "Invalid or expired token." }, { status: 401 });
  }

  if (!frequency || !VALID_FREQUENCIES.includes(frequency)) {
    return NextResponse.json(
      { error: `frequency must be one of: ${VALID_FREQUENCIES.join(", ")}.` },
      { status: 422 }
    );
  }

  const { subscriber } = record;

  await prisma.$transaction([
    prisma.subscriber.update({
      where: { id: subscriber.id },
      data: { frequency },
    }),
    prisma.subscriberEvent.create({
      data: {
        subscriberId: subscriber.id,
        eventType: "preferences_update",
        metadata: { field: "frequency", from: subscriber.frequency, to: frequency },
        actor: "subscriber",
      },
    }),
  ]);

  return NextResponse.json({ frequency });
}

// DELETE /api/newsletter/preferences
export async function DELETE(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const { token } = body ?? {};
  const record = await validateManagementToken(token ?? "");
  if (!record) {
    return NextResponse.json({ error: "Invalid or expired token." }, { status: 401 });
  }

  const { subscriber } = record;
  const now = new Date();

  await prisma.$transaction([
    prisma.subscriber.update({
      where: { id: subscriber.id },
      data: { status: "unsubscribed", unsubscribedAt: now },
    }),
    prisma.subscriberToken.update({
      where: { id: record.id },
      data: { usedAt: now },
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

  return NextResponse.json({ success: true });
}
