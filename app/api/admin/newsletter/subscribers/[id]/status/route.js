import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

const ALLOWED_STATUSES = [
  "pending",
  "confirmed",
  "unsubscribed",
  "bounced",
  "complained",
  "inactive",
];

// POST /api/admin/newsletter/subscribers/[id]/status — manual status override
export async function POST(request, { params }) {
  const { error, session } = await requireAdmin();
  if (error) return error;

  const { id } = await params;

  const subscriber = await prisma.subscriber.findUnique({ where: { id } });
  if (!subscriber) {
    return NextResponse.json({ error: "Subscriber not found." }, { status: 404 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const { status } = body ?? {};
  if (!status || !ALLOWED_STATUSES.includes(status)) {
    return NextResponse.json(
      { error: `status must be one of: ${ALLOWED_STATUSES.join(", ")}.` },
      { status: 422 }
    );
  }

  if (subscriber.status === status) {
    return NextResponse.json({ subscriber });
  }

  const now = new Date();
  const statusTimestamps = {
    confirmed: { confirmedAt: now },
    unsubscribed: { unsubscribedAt: now },
    bounced: { bouncedAt: now },
    complained: { complainedAt: now },
  };

  const updated = await prisma.$transaction(async (tx) => {
    const s = await tx.subscriber.update({
      where: { id },
      data: {
        status,
        ...(statusTimestamps[status] ?? {}),
      },
    });
    await tx.subscriberEvent.create({
      data: {
        subscriberId: id,
        eventType: "status_override",
        previousStatus: subscriber.status,
        newStatus: status,
        actor: `admin:${session.user.id}`,
      },
    });
    return s;
  });

  return NextResponse.json({ subscriber: updated });
}
