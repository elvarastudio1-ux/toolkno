import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

function escapeCsv(value) {
  if (value === null || value === undefined) return "";
  const str = String(value);
  if (str.includes(",") || str.includes('"') || str.includes("\n")) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

// GET /api/admin/newsletter/subscribers/export — CSV download
export async function GET(request) {
  const { error } = await requireAdmin();
  if (error) return error;

  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status") ?? undefined;

  const subscribers = await prisma.subscriber.findMany({
    where: status ? { status } : {},
    orderBy: { subscribedAt: "desc" },
    select: {
      email: true,
      status: true,
      source: true,
      frequency: true,
      subscribedAt: true,
      confirmedAt: true,
      unsubscribedAt: true,
      bouncedAt: true,
      complainedAt: true,
      openCount: true,
      clickCount: true,
      issuesReceived: true,
    },
  });

  const header =
    "email,status,source,frequency,subscribedAt,confirmedAt,unsubscribedAt,bouncedAt,complainedAt,openCount,clickCount,issuesReceived\n";

  const rows = subscribers
    .map((s) =>
      [
        escapeCsv(s.email),
        escapeCsv(s.status),
        escapeCsv(s.source),
        escapeCsv(s.frequency),
        s.subscribedAt?.toISOString() ?? "",
        s.confirmedAt?.toISOString() ?? "",
        s.unsubscribedAt?.toISOString() ?? "",
        s.bouncedAt?.toISOString() ?? "",
        s.complainedAt?.toISOString() ?? "",
        s.openCount,
        s.clickCount,
        s.issuesReceived,
      ].join(",")
    )
    .join("\n");

  const csv = header + rows;
  const filename = `subscribers-${new Date().toISOString().slice(0, 10)}.csv`;

  return new NextResponse(csv, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "no-store",
    },
  });
}
