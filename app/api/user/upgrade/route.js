import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { resend } from "@/lib/resend";
import { getExpiryDate } from "@/lib/subscription";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-dynamic";

function getBillingCycleFromAmount(amount) {
  if (amount === siteConfig.plans.proYearly.amount) return "yearly";
  if (amount === siteConfig.plans.proMonthly.amount) return "monthly";
  return null;
}

export async function POST(request) {
  try {
    const session = await getSession();

    if (!session?.user?.id || !session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    const { orderId, paymentId } = await request.json();

    if (!orderId || !paymentId) {
      return NextResponse.json({ error: "Order ID and payment ID are required." }, { status: 400 });
    }

    const payment = await prisma.payment.findFirst({
      where: {
        userId: session.user.id,
        razorpayOrderId: orderId
      }
    });

    if (!payment) {
      return NextResponse.json({ error: "Payment order not found." }, { status: 404 });
    }

    if (payment.status !== "success") {
      return NextResponse.json({ error: "Payment has not been verified yet." }, { status: 400 });
    }

    if (payment.razorpayPaymentId && payment.razorpayPaymentId !== paymentId) {
      return NextResponse.json({ error: "Payment ID mismatch." }, { status: 400 });
    }

    const cycle = getBillingCycleFromAmount(payment.amount);
    if (!cycle) {
      return NextResponse.json({ error: "Unsupported payment amount." }, { status: 400 });
    }

    const planExpiresAt = getExpiryDate(cycle);

    const user = await prisma.$transaction(async (tx) => {
      await tx.payment.update({
        where: { razorpayOrderId: orderId },
        data: {
          razorpayPaymentId: paymentId,
          status: "success"
        }
      });

      return tx.user.update({
        where: { id: session.user.id },
        data: {
          plan: "paid",
          planExpiresAt
        }
      });
    });

    try {
      await resend.emails.send({
        from: process.env.EMAIL_FROM,
        to: session.user.email,
        subject: "Welcome to Toolkno Pro",
        html: `
          <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;padding:32px;background:#111118;color:#f0ede6;border-radius:24px">
            <p style="letter-spacing:0.2em;text-transform:uppercase;color:#5DCAA5;font-size:12px;margin:0 0 16px">Toolkno Pro</p>
            <h1 style="font-size:28px;line-height:1.2;margin:0 0 12px">Your upgrade is active</h1>
            <p style="font-size:16px;line-height:1.7;color:#d4d2cb;margin:0 0 24px">Thanks for upgrading. Your Toolkno Pro access is now active and will stay available until ${new Intl.DateTimeFormat("en-IN", { dateStyle: "medium" }).format(planExpiresAt)}.</p>
            <a href="${process.env.NEXT_PUBLIC_SITE_URL || "https://toolkno.com"}/dashboard" style="display:inline-block;padding:14px 24px;background:#5DCAA5;color:#0a0a0f;border-radius:999px;font-weight:700;text-decoration:none">Open dashboard</a>
          </div>
        `
      });
    } catch (emailError) {
      console.error("Upgrade email failed", emailError);
    }

    return NextResponse.json({ success: true, user });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Unable to upgrade user." },
      { status: 500 }
    );
  }
}
