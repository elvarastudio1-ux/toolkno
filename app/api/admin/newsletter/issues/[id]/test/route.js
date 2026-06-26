import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { sendTestIssue } from "@/lib/newsletter/send";

export const dynamic = "force-dynamic";

// POST /api/admin/newsletter/issues/[id]/test
// Sends a [TEST] email to up to 5 addresses. No NewsletterSend records created.
export async function POST(request, { params }) {
  const { error } = await requireAdmin();
  if (error) return error;

  const { id } = await params;

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const { emails } = body ?? {};
  if (!Array.isArray(emails) || emails.length === 0) {
    return NextResponse.json(
      { error: "emails must be a non-empty array." },
      { status: 422 }
    );
  }
  if (emails.length > 5) {
    return NextResponse.json(
      { error: "Maximum 5 test recipients allowed." },
      { status: 422 }
    );
  }

  const result = await sendTestIssue(id, emails);
  return NextResponse.json(result);
}
