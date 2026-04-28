import Link from "next/link";
import AdUnit from "@/components/layout/AdUnit";
import ToolExplorer from "@/components/home/ToolExplorer";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { buildMetadata } from "@/lib/metadata";
import { tools } from "@/lib/tools";
import { siteConfig } from "@/lib/site";

export function generateMetadata() {
  return buildMetadata({
    title: "Toolkno Home",
    description:
      "Discover fast, free online tools for counting words, formatting JSON, converting case, generating slugs, and more with an ad-supported platform built for everyday work."
  });
}

export default function HomePage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-12" style={{ background: "#ffffff" }}>
          <span className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
            60+ Tools · Zero Signup Required
          </span>
          <div className="mt-6 max-w-3xl">
            <h1 className="font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl">
              Fast online tools for{" "}
              <span className="text-sky-500">text, developers</span>{" "}
              &amp; more
            </h1>
            <p className="mt-5 max-w-[480px] text-base leading-7 text-slate-500">
              Toolkno brings practical browser-based utilities into one polished workspace. Start free,
              skip friction, and upgrade later when you want an ad-free experience.
            </p>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/tools"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-sky-500 px-5 text-sm font-semibold text-white transition hover:bg-sky-600"
            >
              Explore All Tools
            </Link>
            <Link
              href="/pricing"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-900 transition hover:border-sky-500 hover:text-sky-500"
            >
              View Pricing
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-12 gap-y-4">
            {[
              ["60+", "Free Tools"],
              ["0", "Signup Required"],
              ["100%", "Free to Use"]
            ].map(([num, label]) => (
              <div key={label}>
                <div className="font-heading text-3xl font-semibold text-sky-500">{num}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.15em] text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AdUnit slot={siteConfig.adSlots.hero} format="horizontal" />
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        {[
          { icon: "⚡", title: "Lightning Fast", body: "Every tool runs entirely in your browser — no servers, no waiting." },
          { icon: "🔒", title: "100% Private", body: "Your text never leaves your device. Nothing is uploaded or stored." },
          { icon: "✦", title: "No Signup", body: "Open any tool and use it instantly. No account walls, no friction." }
        ].map((feature) => (
          <div key={feature.title} className="flex min-h-[120px] flex-col rounded-xl border border-slate-200 bg-slate-50 p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white text-2xl">{feature.icon}</div>
            <p className="mt-5 text-base font-semibold text-slate-800">{feature.title}</p>
            <p className="mt-2 text-sm leading-6 text-slate-500">{feature.body}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Explore categories</p>
            <h2 className="mt-3 font-heading text-4xl font-bold text-text">Search, filter, and launch all 60 tools</h2>
          </div>
          <Link href="/tools" className="text-sm font-semibold text-accent">
            View full directory
          </Link>
        </div>
        <ToolExplorer tools={tools} />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <AdUnit slot={siteConfig.adSlots.middle} format="rectangle" />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-warning">Tool categories</p>
            <h2 className="mt-3 font-heading text-4xl font-bold text-text">Counters, cleaners, analyzers, and converters</h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              The library now covers counting, case conversion, text cleanup, sorting, splitting, generation,
              analysis, privacy, utilities, browser speech features, and developer-oriented encoding tools.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {tools.slice(0, 10).map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm text-text transition hover:border-accent hover:text-accent"
                >
                  {tool.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Why Toolkno</p>
            <div className="mt-6 space-y-5">
              <div>
                <h3 className="font-heading text-2xl font-bold text-text">Speed first</h3>
                <p className="mt-2 text-sm leading-7 text-muted">
                  Every tool opens fast, works instantly, and keeps the interface focused on results.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-text">Free where it matters</h3>
                <p className="mt-2 text-sm leading-7 text-muted">
                  Core utilities stay available without account walls so quick work stays quick.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-text">Upgrade ready</h3>
                <p className="mt-2 text-sm leading-7 text-muted">
                  Billing, auth, email, and future premium access are already wired for growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-5 rounded-2xl bg-sky-500 px-6 py-12 text-center sm:flex-row sm:justify-between sm:px-12 sm:text-left">
          <div>
            <h2 className="font-heading text-[22px] font-semibold text-white">Ready to get started?</h2>
            <p className="mt-1 text-sm text-sky-100">60+ free tools. No signup required.</p>
          </div>
          <Link
            href="/tools"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-white px-6 text-sm font-semibold text-sky-500 transition hover:bg-sky-50"
          >
            Explore All Tools
          </Link>
        </div>
      </section>
    </main>
  );
}
