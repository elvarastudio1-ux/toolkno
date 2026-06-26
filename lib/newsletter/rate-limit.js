import { prisma } from "@/lib/prisma";

/**
 * Fixed-window rate limiting via the RateLimitEntry table (PRD-002 Section 8).
 * Limits: 5 requests per IP per hour, 3 requests per email per hour.
 *
 * Key format:
 *   "ip:<ip-address>"    → max 5 per hour
 *   "email:<normalised>" → max 3 per hour
 *
 * Returns true if the caller is rate-limited, false if the request may proceed.
 * Increments the attempt counter as a side effect.
 */

const WINDOW_MS = 60 * 60 * 1000; // 1 hour

const MAX_ATTEMPTS = {
  ip: 5,
  email: 3,
};

function keyType(key) {
  if (key.startsWith("ip:")) return "ip";
  if (key.startsWith("email:")) return "email";
  return "ip";
}

export async function checkRateLimit(key) {
  const now = new Date();
  const max = MAX_ATTEMPTS[keyType(key)];
  const expiresAt = new Date(now.getTime() + WINDOW_MS);

  // Remove expired entries for this key to keep the table lean
  await prisma.rateLimitEntry.deleteMany({
    where: { key, expiresAt: { lt: now } },
  });

  const entry = await prisma.rateLimitEntry.findFirst({ where: { key } });

  if (!entry) {
    await prisma.rateLimitEntry.create({
      data: { key, attempts: 1, windowStart: now, expiresAt },
    });
    return false;
  }

  if (entry.attempts >= max) {
    return true;
  }

  await prisma.rateLimitEntry.update({
    where: { id: entry.id },
    data: { attempts: { increment: 1 } },
  });

  return false;
}
