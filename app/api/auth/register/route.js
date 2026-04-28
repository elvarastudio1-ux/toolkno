export async function POST() {
  return new Response(JSON.stringify({ status: "disabled" }), {
    status: 200,
  });
}