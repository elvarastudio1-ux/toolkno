import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

// Mask email for AR-002 (partial visibility in list view)
function maskEmail(email) {
  const at = email.indexOf("@");
  if (at < 1) return "***";
  const local = email.slice(0, at);
  const domain = email.slice(at);
  const visible = local.length <= 2
    ? local[0] + "*"
    : local[0] + "*".repeat(local.length - 2) + local[local.length - 1];
  return `${visible}${domain}`;
}

// GET /api/admin/newsletter/subscribers
// Query params: ?page=1&limit=50&status=confirmed&q=email
export async function GET(request) {
  const { error } = await requireAdmin();
  if (error) return error;

  const { searchParams } = new URL(request.url);
  const page = Math.max(1, parseInt(searchParams.get("page") ?? "1", 10));
  const limit = Math.min(100, Math.max(1, parseInt(searchParams.get("limit") ?? "50", 10)));
  const status = searchParams.get("status") ?? undefined;
  const q = searchParams.get("q")?.trim() ?? "";

  const where = {
    ...(status ? { status } : {}),
    ...(q ? { email: { contains: q, mode: "insensitive" } } : {}),
  };

  const [total, rows] = await prisma.$transaction([
    prisma.subscriber.count({ where }),
    prisma.subscriber.findMany({
      where,
      orderBy: { subscribedAt: "desc" },
      skip: (page - 1) * limit,
      take: limit,
      select: {
        id: true,
        email: true,
        status: true,
        source: true,
        frequency: true,
        subscribedAt: true,
        confirmedAt: true,
        openCount: true,
        clickCount: true,
        issuesReceived: true,
      },
    }),
  ]);

  const subscribers = rows.map((s) => ({
    ...s,
    emailMasked: maskEmail(s.email),
    email: undefined, // strip raw email from list response
  }));

  return NextResponse.json({
    subscribers,
    total,
    page,
    pages: Math.ceil(total / limit),
  });
}
