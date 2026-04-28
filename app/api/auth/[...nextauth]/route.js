export const dynamic = "force-dynamic";

export async function GET() {
  return new Response("Auth disabled", { status: 200 });
}

export async function POST() {
  return new Response("Auth disabled", { status: 200 });
}