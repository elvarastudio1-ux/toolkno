import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { razorpay } from "@/lib/razorpay";
import { siteConfig } from "@/lib/site";

export async function POST(request) {
  try {
    const session = await getSession();

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    const body = await request.json().catch(() => ({}));
    const cycle = body.cycle === "yearly" ? "yearly" : "monthly";
    const amount = cycle === "yearly" ? siteConfig.plans.proYearly.amount : siteConfig.plans.proMonthly.amount;

    const order = await razorpay.orders.create({
      amount,
      currency: "INR",
      receipt: `toolkno_${session.user.id}_${Date.now()}`,
      notes: {
        userId: session.user.id,
        cycle
      }
    });

    await prisma.payment.create({
      data: {
        userId: session.user.id,
        razorpayOrderId: order.id,
        amount,
        status: "pending"
      }
    });

    return NextResponse.json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Unable to create payment order." },
      { status: 500 }
    );
  }
}
