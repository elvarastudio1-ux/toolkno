import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import Button from "@/components/ui/Button";

export default async function PaidToolWrapper({ children, callbackUrl = "/tools" }) {
  const session = await getSession();

  if (!session) {
    redirect(`/login?callbackUrl=${encodeURIComponent(callbackUrl)}`);
  }

  if (session.user.plan !== "paid") {
    return (
      <div className="rounded-4xl border border-warning/20 bg-warning/10 p-8 text-center">
        <h2 className="font-heading text-3xl font-bold text-text">This is a Pro Tool</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted">
          Upgrade to Toolkno Pro for zero ads, premium tools, AI features, and bulk processing.
        </p>
        <div className="mt-6 flex justify-center">
          <Button as={Link} href="/billing">
            Upgrade Now
          </Button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
