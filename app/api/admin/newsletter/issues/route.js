import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

// GET /api/admin/newsletter/issues — list all issues with send stats
export async function GET() {
  const { error } = await requireAdmin();
  if (error) return error;

  const issues = await prisma.newsletterIssue.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      issueNumber: true,
      slug: true,
      subject: true,
      status: true,
      audienceType: true,
      scheduledAt: true,
      sentAt: true,
      sentCount: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return NextResponse.json({ issues });
}

// POST /api/admin/newsletter/issues — create draft issue
export async function POST(request) {
  const { error } = await requireAdmin();
  if (error) return error;

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const { subject, slug, preheader, htmlContent, textContent, audienceType } =
    body ?? {};

  if (
    !subject?.trim() ||
    !slug?.trim() ||
    !htmlContent?.trim() ||
    !textContent?.trim()
  ) {
    return NextResponse.json(
      { error: "subject, slug, htmlContent, and textContent are required." },
      { status: 422 }
    );
  }

  // Validate slug format
  if (!/^[a-z0-9-]+$/.test(slug.trim())) {
    return NextResponse.json(
      { error: "slug must be lowercase alphanumeric with hyphens only." },
      { status: 422 }
    );
  }

  try {
    const issue = await prisma.newsletterIssue.create({
      data: {
        subject: subject.trim(),
        slug: slug.trim(),
        preheader: preheader?.trim() ?? null,
        htmlContent: htmlContent.trim(),
        textContent: textContent.trim(),
        audienceType: audienceType ?? "all_confirmed",
        status: "draft",
      },
    });

    return NextResponse.json({ issue }, { status: 201 });
  } catch (err) {
    if (err.code === "P2002") {
      return NextResponse.json(
        { error: "An issue with this slug already exists." },
        { status: 409 }
      );
    }
    throw err;
  }
}
