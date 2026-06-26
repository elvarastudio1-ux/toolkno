import { NextResponse } from "next/server";
import { createHash } from "crypto";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

function isValidUrl(raw) {
  try {
    const u = new URL(raw);
    return u.protocol === "https:" || u.protocol === "http:";
  } catch {
    return false;
  }
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const sid = searchParams.get("sid");
  const url = searchParams.get("url");

  if (!url || !isValidUrl(url)) {
    return NextResponse.redirect(new URL("/", request.url), { status: 302 });
  }

  if (sid) {
    await recordClick(sid, url, request).catch((err) =>
      console.error("[newsletter/click]", err)
    );
  }

  return NextResponse.redirect(url, { status: 302 });
}

async function recordClick(sendId, url, request) {
  const send = await prisma.newsletterSend.findUnique({
    where: { id: sendId },
    select: { id: true, subscriberId: true, clickedAt: true, status: true },
  });
  if (!send) return;

  const now = new Date();

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "";
  const ipHash = ip ? createHash("sha256").update(ip).digest("hex") : null;
  const userAgent = request.headers.get("user-agent")?.slice(0, 512) ?? null;

  await prisma.$transaction([
    prisma.newsletterClick.create({
      data: { sendId, url, clickedAt: now, ipAddressHash: ipHash, userAgent },
    }),
    prisma.newsletterSend.update({
      where: { id: sendId },
      data: {
        clickedAt: send.clickedAt ?? now,
        // Only advance status forward
        ...(!["clicked", "bounced", "complained"].includes(send.status)
          ? { status: "clicked" }
          : {}),
      },
    }),
    prisma.subscriber.update({
      where: { id: send.subscriberId },
      data: {
        lastClickedAt: now,
        clickCount: { increment: 1 },
      },
    }),
  ]);
}
