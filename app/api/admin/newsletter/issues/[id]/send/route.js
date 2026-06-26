import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-auth";
import { sendIssue } from "@/lib/newsletter/send";

export const dynamic = "force-dynamic";

// POST /api/admin/newsletter/issues/[id]/send — send immediately (or resume)
export async function POST(_request, { params }) {
  const { error } = await requireAdmin();
  if (error) return error;

  const { id } = await params;

  const issue = await prisma.newsletterIssue.findUnique({ where: { id } });
  if (!issue) {
    return NextResponse.json({ error: "Issue not found." }, { status: 404 });
  }
  if (issue.status === "sent") {
    return NextResponse.json(
      { error: "Issue has already been sent." },
      { status: 409 }
    );
  }
  if (issue.status === "cancelled") {
    return NextResponse.json(
      { error: "Cancelled issues cannot be sent." },
      { status: 409 }
    );
  }

  const result = await sendIssue(id);
  return NextResponse.json({ success: true, ...result });
}
