import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

// POST /api/admin/newsletter/issues/[id]/schedule — schedule for future delivery
export async function POST(request, { params }) {
  const { error } = await requireAdmin();
  if (error) return error;

  const { id } = await params;

  const issue = await prisma.newsletterIssue.findUnique({ where: { id } });
  if (!issue) {
    return NextResponse.json({ error: "Issue not found." }, { status: 404 });
  }
  if (!["draft", "scheduled"].includes(issue.status)) {
    return NextResponse.json(
      { error: "Only draft or scheduled issues can be scheduled." },
      { status: 409 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const scheduledAt = body?.scheduledAt ? new Date(body.scheduledAt) : null;
  if (!scheduledAt || isNaN(scheduledAt.getTime())) {
    return NextResponse.json(
      { error: "scheduledAt must be a valid ISO date string." },
      { status: 422 }
    );
  }
  if (scheduledAt <= new Date()) {
    return NextResponse.json(
      { error: "scheduledAt must be in the future." },
      { status: 422 }
    );
  }

  const updated = await prisma.newsletterIssue.update({
    where: { id },
    data: { status: "scheduled", scheduledAt },
  });

  return NextResponse.json({ issue: updated });
}

// DELETE /api/admin/newsletter/issues/[id]/schedule — cancel schedule, return to draft
export async function DELETE(_request, { params }) {
  const { error } = await requireAdmin();
  if (error) return error;

  const { id } = await params;

  const issue = await prisma.newsletterIssue.findUnique({ where: { id } });
  if (!issue) {
    return NextResponse.json({ error: "Issue not found." }, { status: 404 });
  }
  if (issue.status !== "scheduled") {
    return NextResponse.json(
      { error: "Issue is not scheduled." },
      { status: 409 }
    );
  }

  const updated = await prisma.newsletterIssue.update({
    where: { id },
    data: { status: "draft", scheduledAt: null },
  });

  return NextResponse.json({ issue: updated });
}
