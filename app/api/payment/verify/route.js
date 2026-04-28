import crypto from "crypto";
import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function POST(request) {
  try {
    const session = await getSession();

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    const { razorpayOrderId, razorpayPaymentId, razorpaySignature } = await request.json();

    if (!razorpayOrderId || !razorpayPaymentId || !razorpaySignature) {
      return NextResponse.json({ error: "Missing payment verification fields." }, { status: 400 });
    }

    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpayOrderId}|${razorpayPaymentId}`)
      .digest("hex");

    if (generatedSignature !== razorpaySignature) {
      await prisma.payment.updateMany({
        where: {
          userId: session.user.id,
          razorpayOrderId
        },
        data: {
          razorpayPaymentId,
          status: "failed"
        }
      });

      return NextResponse.json({ error: "Invalid payment signature." }, { status: 400 });
    }

    await prisma.payment.updateMany({
      where: {
        userId: session.user.id,
        razorpayOrderId
      },
      data: {
        razorpayPaymentId,
        status: "success"
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Unable to verify payment." },
      { status: 500 }
    );
  }
}
