import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

// GET /api/admin/newsletter/issues/[id]/analytics
export async function GET(_request, { params }) {
  const { error } = await requireAdmin();
  if (error) return error;

  const { id } = await params;

  const issue = await prisma.newsletterIssue.findUnique({
    where: { id },
    select: { id: true, subject: true, status: true, sentAt: true, sentCount: true },
  });
  if (!issue) {
    return NextResponse.json({ error: "Issue not found." }, { status: 404 });
  }

  const sends = await prisma.newsletterSend.findMany({
    where: { issueId: id },
    select: {
      status: true,
      openedAt: true,
      openCount: true,
      clickedAt: true,
      bouncedAt: true,
      complainedAt: true,
    },
  });

  const topLinks = await prisma.newsletterClick.groupBy({
    by: ["url"],
    where: { send: { issueId: id } },
    _count: { url: true },
    orderBy: { _count: { url: "desc" } },
    take: 10,
  });

  const total = sends.length;
  const delivered = sends.filter(
    (s) => !["failed", "pending"].includes(s.status)
  ).length;
  const uniqueOpens = sends.filter((s) => s.openedAt).length;
  const totalOpens = sends.reduce((sum, s) => sum + s.openCount, 0);
  const uniqueClicks = sends.filter((s) => s.clickedAt).length;
  const bounced = sends.filter((s) => s.bouncedAt).length;
  const complained = sends.filter((s) => s.complainedAt).length;

  const pct = (n, d) => (d > 0 ? Number(((n / d) * 100).toFixed(1)) : 0);

  return NextResponse.json({
    issue,
    stats: {
      total,
      delivered,
      failed: total - delivered,
      uniqueOpens,
      totalOpens,
      uniqueClicks,
      bounced,
      complained,
      openRate: pct(uniqueOpens, delivered),
      clickRate: pct(uniqueClicks, delivered),
      clickToOpenRate: pct(uniqueClicks, uniqueOpens),
      bounceRate: pct(bounced, total),
    },
    topLinks: topLinks.map((r) => ({ url: r.url, clicks: r._count.url })),
  });
}
