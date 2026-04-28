import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request) {
  try {
    const { name, email } = await request.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    const user = await prisma.user.upsert({
      where: { email },
      update: {
        name
      },
      create: {
        name,
        email,
        plan: "free"
      }
    });

    return NextResponse.json({ success: true, userId: user.id });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Unable to create account." },
      { status: 500 }
    );
  }
}
