import { createHash } from "crypto";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isValidEmailFormat } from "@/lib/newsletter/validate";
import { normaliseEmail } from "@/lib/newsletter/normalise";
import { isDisposableEmail } from "@/lib/newsletter/disposable-domains";
import { generateToken, tokenExpiresAt } from "@/lib/newsletter/tokens";
import { checkRateLimit } from "@/lib/newsletter/rate-limit";
import { sendConfirmationEmail } from "@/lib/newsletter/email";

export const dynamic = "force-dynamic";

const SOURCE = "resubscribe_page";

const SUCCESS = NextResponse.json(
  { success: true, message: "Check your email to confirm your subscription." },
  { status: 200 }
);

function getClientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? null;
}

function hashIp(ip) {
  if (!ip) return null;
  return createHash("sha256").update(ip).digest("hex");
}

export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    const rawEmail = String(body.email ?? "").trim();
    const ip = getClientIp(request);
    const userAgent = request.headers.get("user-agent")?.slice(0, 500) ?? null;

    if (!isValidEmailFormat(rawEmail)) {
      return NextResponse.json(
        { error: { code: "VALIDATION_ERROR", field: "email", message: "Please enter a valid email address." } },
        { status: 400 }
      );
    }

    const email = rawEmail.toLowerCase();
    const emailNormalized = normaliseEmail(email);

    if (isDisposableEmail(email)) {
      return NextResponse.json(
        { error: { code: "DISPOSABLE_EMAIL", message: "Please use a non-temporary email address." } },
        { status: 422 }
      );
    }

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

    const existing = await prisma.subscriber.findUnique({ where: { emailNormalized } });

    if (existing) {
      if (["confirmed", "inactive", "bounced", "complained"].includes(existing.status)) {
        return SUCCESS;
      }

      if (existing.status === "pending") {
        const newToken = generateToken();
        await prisma.$transaction([
          prisma.subscriberToken.updateMany({
            where: { subscriberId: existing.id, type: "confirmation", usedAt: null },
            data: { usedAt: new Date() },
          }),
          prisma.subscriberToken.create({
            data: { subscriberId: existing.id, token: newToken, type: "confirmation", expiresAt: tokenExpiresAt(48) },
          }),
          prisma.subscriberEvent.create({
            data: { subscriberId: existing.id, eventType: "resubscribe_pending", previousStatus: "pending", newStatus: "pending", metadata: { source: SOURCE }, actor: "subscriber" },
          }),
        ]);
        sendConfirmationEmail({ to: existing.email, token: newToken }).catch((err) =>
          console.error("[newsletter/resubscribe] confirmation email failed", err)
        );
        return SUCCESS;
      }

      if (existing.status === "unsubscribed") {
        const newToken = generateToken();
        await prisma.$transaction([
          prisma.subscriber.update({
            where: { id: existing.id },
            data: { status: "pending", source: SOURCE, ipAddressHash: hashIp(ip), userAgent, subscribedAt: new Date() },
          }),
          prisma.subscriberToken.create({
            data: { subscriberId: existing.id, token: newToken, type: "confirmation", expiresAt: tokenExpiresAt(48) },
          }),
          prisma.subscriberEvent.create({
            data: { subscriberId: existing.id, eventType: "resubscribe", previousStatus: "unsubscribed", newStatus: "pending", metadata: { source: SOURCE }, actor: "subscriber" },
          }),
        ]);
        sendConfirmationEmail({ to: existing.email, token: newToken }).catch((err) =>
          console.error("[newsletter/resubscribe] confirmation email failed", err)
        );
        return SUCCESS;
      }
    }

    // New subscriber who arrived on the resubscribe page — handle gracefully
    const newToken = generateToken();
    await prisma.subscriber.create({
      data: {
        email,
        emailNormalized,
        status: "pending",
        source: SOURCE,
        ipAddressHash: hashIp(ip),
        userAgent,
        tokens: { create: { token: newToken, type: "confirmation", expiresAt: tokenExpiresAt(48) } },
        events: { create: { eventType: "subscribed", newStatus: "pending", metadata: { source: SOURCE }, actor: "subscriber" } },
      },
    });
    sendConfirmationEmail({ to: email, token: newToken }).catch((err) =>
      console.error("[newsletter/resubscribe] confirmation email failed", err)
    );
    return SUCCESS;
  } catch (error) {
    console.error("[newsletter/resubscribe]", error);
    return NextResponse.json(
      { error: { code: "INTERNAL_ERROR", message: "Something went wrong. Please try again." } },
      { status: 500 }
    );
  }
}
