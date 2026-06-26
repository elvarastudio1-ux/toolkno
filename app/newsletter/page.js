import { buildMetadata } from "@/lib/metadata";
import NewsletterSignup from "@/components/home/NewsletterSignup";

export function generateMetadata() {
  return buildMetadata({
    title: "Newsletter",
    description:
      "Honest software reviews, tool comparisons, and workflow guides — no marketing fluff. Subscribe to the ToolKno newsletter, delivered twice a month.",
    path: "/newsletter",
    keywords: ["software newsletter", "tool reviews newsletter", "AI tools newsletter", "honest software takes"],
  });
}

const commitments = [
  {
    text: "No affiliate recommendation without disclosing the exact relationship and what I actually tested.",
  },
  {
    text: "All software comparisons are tested on the same tasks — no vendor-supplied benchmarks, no press kit screenshots.",
  },
  {
    text: "If a tool I previously recommended gets worse, I'll say so — even if that's inconvenient.",
  },
];

const content = [
  {
    title: "Honest reviews",
    description:
      "Software reviews that cut through the marketing and show you what the tool actually does in practice.",
  },
  {
    title: "Tool comparisons",
    description:
      "Head-to-head comparisons tested on identical tasks — no vendor screenshots, no press kit copy.",
  },
  {
    title: "Workflow guides",
    description:
      "Practical guides built around tools you already use or are considering adding to your stack.",
  },
];

export default function NewsletterPage() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 pb-14 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">
            ToolKno Newsletter
          </p>
          <h1 className="font-heading mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Honest software takes,
            <br className="hidden sm:block" /> twice a month.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Honest software reviews, practical workflow guides, and AI tool
            comparisons — without the affiliate pressure or marketing fluff.
          </p>
          <div className="mx-auto mt-10 max-w-md">
            <NewsletterSignup source="newsletter_landing" />
          </div>
        </div>
      </section>

      {/* ── Commitments ──────────────────────────────────────────────────────── */}
      <section className="border-t border-slate-100 bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-heading text-xl font-bold text-slate-900">
              Three commitments in every issue.
            </h2>
            <ul className="mt-6 space-y-4" aria-label="Editorial commitments">
              {commitments.map(({ text }, i) => (
                <li
                  key={i}
                  className="rounded-lg border-l-4 border-sky-400 bg-white px-5 py-4 shadow-sm"
                >
                  <p className="text-sm leading-6 text-slate-700">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── What you'll receive ───────────────────────────────────────────────── */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-heading text-xl font-bold text-slate-900">
              What you&#39;ll receive.
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {content.map(({ title, description }) => (
                <div key={title} className="rounded-xl border border-slate-200 bg-white p-5">
                  <p className="font-heading text-sm font-semibold text-slate-900">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
