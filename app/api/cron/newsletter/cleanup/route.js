import { timingSafeEqual } from "crypto";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;

function isValidSecret(provided) {
  const expected = process.env.CRON_SECRET;
  if (!provided || !expected) return false;
  try {
    const a = Buffer.from(provided);
    const b = Buffer.from(expected);
    if (a.length !== b.length) return false;
    return timingSafeEqual(a, b);
  } catch {
    return false;
  }
}

// GET /api/cron/newsletter/cleanup
// Invoked daily by Vercel Cron. Vercel adds Authorization: Bearer [CRON_SECRET] automatically.
export async function GET(request) {
  const authorization = request.headers.get("authorization") ?? "";
  const token = authorization.startsWith("Bearer ") ? authorization.slice(7) : "";

  if (!isValidSecret(token)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const start = Date.now();
  const cutoff = new Date(start - SEVEN_DAYS_MS);

  console.log(`[cron/newsletter/cleanup] start cutoff=${cutoff.toISOString()}`);

  const result = await prisma.subscriber.deleteMany({
    where: {
      status: "pending",
      subscribedAt: { lt: cutoff },
    },
  });

  const durationMs = Date.now() - start;

  console.log(
    `[cron/newsletter/cleanup] complete deleted=${result.count} durationMs=${durationMs}`
  );

  return NextResponse.json({ deleted: result.count, durationMs });
}
