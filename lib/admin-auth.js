import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";

export async function requireAdmin() {
  const session = await getSession();
  if (!session?.user?.id) {
    return { error: NextResponse.json({ error: "Unauthorized." }, { status: 401 }) };
  }
  if (session.user.role !== "admin") {
    return { error: NextResponse.json({ error: "Forbidden." }, { status: 403 }) };
  }
  return { session };
}
