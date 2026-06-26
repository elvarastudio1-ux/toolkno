import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

// PATCH /api/admin/newsletter/issues/[id] — update a draft issue
export async function PATCH(request, { params }) {
  const { error } = await requireAdmin();
  if (error) return error;

  const { id } = await params;

  const issue = await prisma.newsletterIssue.findUnique({ where: { id } });
  if (!issue) {
    return NextResponse.json({ error: "Issue not found." }, { status: 404 });
  }
  if (issue.status !== "draft") {
    return NextResponse.json(
      { error: "Only draft issues can be edited." },
      { status: 409 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const { subject, slug, preheader, htmlContent, textContent, audienceType } =
    body ?? {};

  // Validate slug if provided
  if (slug !== undefined && !/^[a-z0-9-]+$/.test(slug.trim())) {
    return NextResponse.json(
      { error: "slug must be lowercase alphanumeric with hyphens only." },
      { status: 422 }
    );
  }

  try {
    const updated = await prisma.newsletterIssue.update({
      where: { id },
      data: {
        ...(subject !== undefined ? { subject: subject.trim() } : {}),
        ...(slug !== undefined ? { slug: slug.trim() } : {}),
        ...(preheader !== undefined ? { preheader: preheader?.trim() ?? null } : {}),
        ...(htmlContent !== undefined ? { htmlContent: htmlContent.trim() } : {}),
        ...(textContent !== undefined ? { textContent: textContent.trim() } : {}),
        ...(audienceType !== undefined ? { audienceType } : {}),
      },
    });

    return NextResponse.json({ issue: updated });
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
