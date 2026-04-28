import UserStats from "@/components/dashboard/UserStats";
import BillingCard from "@/components/dashboard/BillingCard";
import { getSession } from "@/lib/auth";
import { buildMetadata } from "@/lib/metadata";
import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/subscription";

export function generateMetadata() {
  return buildMetadata({
    title: "Dashboard",
    description: "Manage your Toolkno account, view billing status, and review recent payments.",
    path: "/dashboard"
  });
}

export default async function DashboardPage() {
  const session = await getSession();
  const payments = await prisma.payment.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: "desc" },
    take: 5
  });

  const stats = [
    {
      label: "Current plan",
      value: session.user.plan === "paid" ? "Pro" : "Free",
      helper: "Upgrade any time from billing."
    },
    {
      label: "Plan expires",
      value: formatDate(session.user.planExpiresAt),
      helper: "Renews when your next payment is processed."
    },
    {
      label: "Successful payments",
      value: String(payments.filter((payment) => payment.status === "success").length),
      helper: "Completed Razorpay transactions."
    },
    {
      label: "Tools available",
      value: "60+",
      helper: "More tools are rolling out soon."
    }
  ];

  return (
    <div className="space-y-8">
      <UserStats stats={stats} />
      <BillingCard
        plan={session.user.plan}
        planExpiresAt={session.user.planExpiresAt}
        email={session.user.email}
        name={session.user.name}
      />
      <section className="rounded-[2rem] border border-slate-200 bg-surface p-6">
        <h2 className="font-heading text-3xl font-bold text-text">Recent payments</h2>
        <div className="mt-6 space-y-3">
          {payments.length ? (
            payments.map((payment) => (
              <div
                key={payment.id}
                className="flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4"
              >
                <div>
                  <p className="text-sm font-semibold text-text">Order {payment.razorpayOrderId}</p>
                  <p className="text-sm text-muted">
                    {new Intl.DateTimeFormat("en-IN", { dateStyle: "medium" }).format(new Date(payment.createdAt))}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-text">₹{(payment.amount / 100).toFixed(0)}</p>
                  <p className="text-sm uppercase tracking-[0.2em] text-accent">{payment.status}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-muted">No payments yet. Your account is still on the free plan.</p>
          )}
        </div>
      </section>
    </div>
  );
}
