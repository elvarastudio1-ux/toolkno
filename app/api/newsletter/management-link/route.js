import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isValidEmailFormat } from "@/lib/newsletter/validate";
import { normaliseEmail } from "@/lib/newsletter/normalise";
import { generateToken, tokenExpiresAt } from "@/lib/newsletter/tokens";
import { sendManagementLinkEmail } from "@/lib/newsletter/email";

export const dynamic = "force-dynamic";

// Identical response regardless of outcome — prevents subscriber enumeration
const SUCCESS = NextResponse.json({
  success: true,
  message: "If that email is on our list, you'll receive a management link shortly.",
});

export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    const rawEmail = String(body.email ?? "").trim();

    if (!isValidEmailFormat(rawEmail)) return SUCCESS;

    const email = rawEmail.toLowerCase();
    const emailNormalized = normaliseEmail(email);

    const subscriber = await prisma.subscriber.findUnique({ where: { emailNormalized } });

    if (subscriber?.status === "confirmed") {
      const token = generateToken();
      await prisma.subscriberToken.create({
        data: {
          subscriberId: subscriber.id,
          token,
          type: "management",
          expiresAt: tokenExpiresAt(4),
        },
      });
      sendManagementLinkEmail({ to: subscriber.email, token }).catch((err) =>
        console.error("[newsletter/management-link] email failed", err)
      );
    }

    return SUCCESS;
  } catch (error) {
    console.error("[newsletter/management-link]", error);
    return SUCCESS;
  }
}
