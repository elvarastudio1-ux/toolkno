import BillingCard from "@/components/dashboard/BillingCard";
import { getSession } from "@/lib/auth";
import { buildMetadata } from "@/lib/metadata";

export function generateMetadata() {
  return buildMetadata({
    title: "Billing",
    description: "Upgrade to Toolkno Pro with Razorpay to remove ads and unlock upcoming premium capabilities.",
    path: "/billing"
  });
}

export default async function BillingPage() {
  const session = await getSession();

  return (
    <section className="space-y-8">
      <BillingCard
        plan={session.user.plan}
        planExpiresAt={session.user.planExpiresAt}
        email={session.user.email}
        name={session.user.name}
      />
      <div className="rounded-[2rem] border border-slate-200 bg-surface p-6">
        <h2 className="font-heading text-3xl font-bold text-text">Pro includes</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            "Everything in Free",
            "Zero ads across all tools",
            "AI-powered tools",
            "Bulk processing",
            "Priority support",
            "API access"
          ].map((feature) => (
            <div key={feature} className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-muted">
              {feature}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
