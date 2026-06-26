import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendWelcomeEmail } from "@/lib/newsletter/email";

export const dynamic = "force-dynamic";

// 64-char lowercase hex — matches generateToken() output
const TOKEN_REGEX = /^[a-f0-9]{64}$/;

function errorRedirect(request, reason) {
  return NextResponse.redirect(
    new URL(`/newsletter/confirm-error?reason=${reason}`, request.url),
    { status: 303 }
  );
}

export async function POST(request) {
  try {
    // Parse form-encoded body sent by the HTML confirmation form (EC-002)
    const formData = await request.formData().catch(() => null);
    const token = formData ? String(formData.get("token") ?? "").trim() : "";

    // ── 1. Basic format guard ─────────────────────────────────────────────────
    if (!token || !TOKEN_REGEX.test(token)) {
      return errorRedirect(request, "invalid");
    }

    // ── 2. Look up the token ──────────────────────────────────────────────────
    const tokenRecord = await prisma.subscriberToken.findUnique({
      where: { token },
      include: {
        subscriber: {
          include: {
            // Check for a prior resubscribe event to determine welcome variant (FR-020)
            events: {
              where: { eventType: "resubscribe" },
              take: 1,
            },
          },
        },
      },
    });

    // Token not found or wrong type
    if (!tokenRecord || tokenRecord.type !== "confirmation") {
      return errorRedirect(request, "invalid");
    }

    // ── 3. Already used → idempotent success (EC-008) ────────────────────────
    if (tokenRecord.usedAt) {
      return NextResponse.redirect(
        new URL("/newsletter/confirmed", request.url),
        { status: 303 }
      );
    }

    // ── 4. Expired token ──────────────────────────────────────────────────────
    if (tokenRecord.expiresAt && tokenRecord.expiresAt < new Date()) {
      return errorRedirect(request, "expired");
    }

    const { subscriber } = tokenRecord;

    // ── 5. Confirm the subscriber ─────────────────────────────────────────────
    await prisma.$transaction([
      prisma.subscriberToken.update({
        where: { id: tokenRecord.id },
        data: { usedAt: new Date() },
      }),
      prisma.subscriber.update({
        where: { id: subscriber.id },
        data: {
          status: "confirmed",
          confirmedAt: new Date(),
        },
      }),
      prisma.subscriberEvent.create({
        data: {
          subscriberId: subscriber.id,
          eventType: "confirmed",
          previousStatus: subscriber.status,
          newStatus: "confirmed",
          actor: "subscriber",
        },
      }),
    ]);

    // ── 6. Fire-and-forget welcome email (FR-017, FR-020) ────────────────────
    const welcomeVariant = subscriber.events.length > 0 ? "returning" : "new";
    sendWelcomeEmail({ to: subscriber.email, variant: welcomeVariant }).catch((err) =>
      console.error("[newsletter/confirm] welcome email failed", err)
    );

    // ── 7. Redirect to success page with subscription cookie ─────────────────
    const response = NextResponse.redirect(
      new URL("/newsletter/confirmed", request.url),
      { status: 303 }
    );
    // PRD-002 §15: functional cookie, 365 days. Not HttpOnly — NewsletterSignup.js reads it.
    response.cookies.set("toolkno_subscribed", "1", {
      path: "/",
      maxAge: 365 * 24 * 60 * 60,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });
    return response;
  } catch (error) {
    console.error("[newsletter/confirm]", error);
    return errorRedirect(request, "invalid");
  }
}
