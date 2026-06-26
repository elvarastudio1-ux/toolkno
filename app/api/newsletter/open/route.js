import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

// Minimal 1×1 transparent GIF
const PIXEL_GIF = Buffer.from(
  "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  "base64"
);

const PIXEL_HEADERS = {
  "Content-Type": "image/gif",
  "Cache-Control": "no-store, no-cache, must-revalidate",
  Pragma: "no-cache",
};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const sid = searchParams.get("sid");

  if (sid) {
    await recordOpen(sid).catch((err) =>
      console.error("[newsletter/open]", err)
    );
  }

  return new NextResponse(PIXEL_GIF, { status: 200, headers: PIXEL_HEADERS });
}

async function recordOpen(sendId) {
  const send = await prisma.newsletterSend.findUnique({
    where: { id: sendId },
    select: { id: true, subscriberId: true, openedAt: true, status: true },
  });
  if (!send) return;

  const now = new Date();

  await prisma.$transaction([
    prisma.newsletterSend.update({
      where: { id: sendId },
      data: {
        openedAt: send.openedAt ?? now,
        lastOpenedAt: now,
        openCount: { increment: 1 },
        // Only advance status forward (sent → opened); never downgrade
        ...(send.status === "sent" ? { status: "opened" } : {}),
      },
    }),
    prisma.subscriber.update({
      where: { id: send.subscriberId },
      data: {
        lastOpenedAt: now,
        openCount: { increment: 1 },
      },
    }),
  ]);
}
