import Link from "next/link";
import Button from "@/components/ui/Button";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export function generateMetadata() {
  return buildMetadata({
    title: "Pricing",
    description: "Compare Toolkno Free and Pro plans, then upgrade with Razorpay for an ad-free workspace.",
    path: "/pricing"
  });
}

export default function PricingPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">Pricing plans</p>
        <h1 className="mt-4 font-heading text-5xl font-bold text-text sm:text-6xl">Free now, Pro when you are ready</h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted">
          Toolkno keeps core utilities available for everyone while preparing a premium layer for teams that
          want an ad-free workflow and advanced features.
        </p>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-200 bg-surface p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Free plan</p>
          <h2 className="mt-4 font-heading text-4xl font-bold text-text">{siteConfig.plans.free.price}</h2>
          <div className="mt-6 space-y-3">
            {siteConfig.plans.free.features.map((feature) => (
              <div key={feature} className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-muted">
                {feature}
              </div>
            ))}
          </div>
          <Button as={Link} href="/tools" variant="secondary" className="mt-6 w-full">
            Start using free tools
          </Button>
        </div>

        <div className="rounded-[2rem] border border-accent/30 bg-gradient-to-br from-accent/10 to-surface p-8 shadow-glow">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Pro plan</p>
          <h2 className="mt-4 font-heading text-4xl font-bold text-text">Rs. 199/month or Rs. 1499/year</h2>
          <div className="mt-6 space-y-3">
            {siteConfig.plans.proMonthly.features.map((feature) => (
              <div key={feature} className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-muted">
                {feature}
              </div>
            ))}
          </div>
          <Button as={Link} href="/billing" className="mt-6 w-full">
            Upgrade with Razorpay
          </Button>
        </div>
      </section>
    </main>
  );
}
