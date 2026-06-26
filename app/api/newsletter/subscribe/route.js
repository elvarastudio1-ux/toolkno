import { createHash } from "crypto";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isValidEmailFormat } from "@/lib/newsletter/validate";
import { normaliseEmail } from "@/lib/newsletter/normalise";
import { isDisposableEmail } from "@/lib/newsletter/disposable-domains";
import { generateToken, tokenExpiresAt } from "@/lib/newsletter/tokens";
import { checkRateLimit } from "@/lib/newsletter/rate-limit";

export const dynamic = "force-dynamic";

// Same success message for all cases — prevents subscriber enumeration (FR-009, FR-011)
const SUCCESS = NextResponse.json(
  { success: true, message: "Check your email to confirm your subscription." },
  { status: 200 }
);

function getClientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? null;
}

// PRD-002 Section 14: raw IPs are never persisted — store SHA-256 hash only
function hashIp(ip) {
  if (!ip) return null;
  return createHash("sha256").update(ip).digest("hex");
}

export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    const rawEmail = String(body.email ?? "").trim();
    const source = String(body.source ?? "unknown").slice(0, 100);
    const ip = getClientIp(request);
    const userAgent = request.headers.get("user-agent")?.slice(0, 500) ?? null;

    // ── 1. Format validation (FR-029) ─────────────────────────────────────────
    if (!isValidEmailFormat(rawEmail)) {
      return NextResponse.json(
        { error: { code: "VALIDATION_ERROR", field: "email", message: "Please enter a valid email address." } },
        { status: 400 }
      );
    }

    const email = rawEmail.toLowerCase();
    const emailNormalized = normaliseEmail(email);

    // ── 2. Disposable email check (FR-032) ────────────────────────────────────
    if (isDisposableEmail(email)) {
      return NextResponse.json(
        { error: { code: "DISPOSABLE_EMAIL", message: "Please use a non-temporary email address." } },
        { status: 422 }
      );
    }

    // ── 3. Rate limiting — IP then email (PRD-002 Section 8) ─────────────────
    //    Order: validate format/disposable first (cheap), then hit the DB for rate limits.
    if (ip) {
      const ipLimited = await checkRateLimit(`ip:${ip}`);
      if (ipLimited) {
        return NextResponse.json(
          { error: { code: "RATE_LIMIT_EXCEEDED", message: "Too many requests. Please wait a moment and try again.", retryAfter: 3600 } },
          { status: 429, headers: { "Retry-After": "3600" } }
        );
      }
    }

    const emailLimited = await checkRateLimit(`email:${emailNormalized}`);
    if (emailLimited) {
      return NextResponse.json(
        { error: { code: "RATE_LIMIT_EXCEEDED", message: "Too many requests. Please wait a moment and try again.", retryAfter: 3600 } },
        { status: 429, headers: { "Retry-After": "3600" } }
      );
    }

    // ── 4. Subscriber lookup and re-subscribe logic ───────────────────────────
    const existing = await prisma.subscriber.findUnique({ where: { emailNormalized } });

    if (existing) {
      // FR-009: Already confirmed → success (no change, no email, prevents enumeration)
      if (existing.status === "confirmed" || existing.status === "inactive") {
        return SUCCESS;
      }

      // FR-011: Bounced or complained → success (permanent suppression, no action)
      if (existing.status === "bounced" || existing.status === "complained") {
        return SUCCESS;
      }

      // FR-008: Still pending → invalidate previous token, issue a fresh one
      if (existing.status === "pending") {
        const newToken = generateToken();

        await prisma.$transaction([
          // Invalidate all outstanding confirmation tokens for this subscriber
          prisma.subscriberToken.updateMany({
            where: { subscriberId: existing.id, type: "confirmation", usedAt: null },
            data: { usedAt: new Date() },
          }),
          prisma.subscriberToken.create({
            data: {
              subscriberId: existing.id,
              token: newToken,
              type: "confirmation",
              expiresAt: tokenExpiresAt(48),
            },
          }),
          prisma.subscriberEvent.create({
            data: {
              subscriberId: existing.id,
              eventType: "resubscribe_pending",
              previousStatus: "pending",
              newStatus: "pending",
              metadata: { source },
              actor: "subscriber",
            },
          }),
        ]);

        // TODO (Milestone 8): Send confirmation email
        // await sendConfirmationEmail({ to: existing.email, token: newToken });

        return SUCCESS;
      }

      // FR-010: Previously unsubscribed → move back to pending, issue new token
      if (existing.status === "unsubscribed") {
        const newToken = generateToken();

        await prisma.$transaction([
          prisma.subscriber.update({
            where: { id: existing.id },
            data: {
              status: "pending",
              source,
              ipAddressHash: hashIp(ip),
              userAgent,
              subscribedAt: new Date(),
            },
          }),
          prisma.subscriberToken.create({
            data: {
              subscriberId: existing.id,
              token: newToken,
              type: "confirmation",
              expiresAt: tokenExpiresAt(48),
            },
          }),
          prisma.subscriberEvent.create({
            data: {
              subscriberId: existing.id,
              eventType: "resubscribe",
              previousStatus: "unsubscribed",
              newStatus: "pending",
              metadata: { source },
              actor: "subscriber",
            },
          }),
        ]);

        // TODO (Milestone 8): Send confirmation email
        // await sendConfirmationEmail({ to: existing.email, token: newToken });

        return SUCCESS;
      }
    }

    // ── 5. New subscriber ─────────────────────────────────────────────────────
    const newToken = generateToken();

    await prisma.subscriber.create({
      data: {
        email,
        emailNormalized,
        status: "pending",
        source,
        ipAddressHash: hashIp(ip),
        userAgent,
        tokens: {
          create: {
            token: newToken,
            type: "confirmation",
            expiresAt: tokenExpiresAt(48),
          },
        },
        events: {
          create: {
            eventType: "subscribed",
            newStatus: "pending",
            metadata: { source },
            actor: "subscriber",
          },
        },
      },
    });

    // TODO (Milestone 8): Send confirmation email
    // await sendConfirmationEmail({ to: email, token: newToken });

    return SUCCESS;
  } catch (error) {
    console.error("[newsletter/subscribe]", error);
    return NextResponse.json(
      { error: { code: "INTERNAL_ERROR", message: "Something went wrong. Please try again." } },
      { status: 500 }
    );
  }
}
