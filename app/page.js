import Link from "next/link";
import AdUnit from "@/components/layout/AdUnit";
import ToolExplorer from "@/components/home/ToolExplorer";
import ToolCard from "@/components/tools/ToolCard";
import { buildMetadata } from "@/lib/metadata";
import { tools, getToolBySlug } from "@/lib/tools";
import { siteConfig } from "@/lib/site";

export function generateMetadata() {
  return buildMetadata({
    title: "Free Text Tools, Software Reviews & AI Guides",
    description:
      "Toolkno gives you 60+ free browser-based text tools alongside honest software reviews, AI tool comparisons, and practical workflow guides. No signup, instant results.",
    path: "/"
  });
}

const featuredSlugs = [
  { slug: "word-counter", useCase: "Hit your blog post or essay word target without guessing." },
  { slug: "remove-duplicate-lines", useCase: "Clean up email lists, slugs, or CSV exports in one click." },
  { slug: "text-compare-tool", useCase: "Spot what changed between two drafts instantly." }
];

const popularSlugs = [
  "character-counter",
  "case-converter",
  "remove-extra-spaces",
  "title-case-converter",
  "find-and-replace-text",
  "readability-checker",
  "lorem-ipsum-generator",
  "text-to-binary-converter"
];

export default function HomePage() {
  const featured = featuredSlugs
    .map((f) => ({ ...f, tool: getToolBySlug(f.slug) }))
    .filter((f) => f.tool);
  const popular = popularSlugs.map(getToolBySlug).filter(Boolean);

  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-12">
          <span className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
            60+ free tools · No signup · Works offline in your browser
          </span>
          <div className="mt-6 max-w-3xl">
            <h1 className="font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl">
              Fix your text in seconds —{" "}
              <span className="text-sky-500">no signup, no uploads</span>
            </h1>
            <p className="mt-5 max-w-[560px] text-base leading-7 text-slate-500">
              Count words. Remove duplicates. Convert case. Compare drafts. Toolkno gives you 60+ small,
              fast tools that just work — right here in your browser. Your text never leaves your device.
            </p>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/tools/word-counter"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-sky-500 px-5 text-sm font-semibold text-white transition hover:bg-sky-600"
            >
              Try Word Counter — free
            </Link>
            <Link
              href="/tools"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-900 transition hover:border-sky-500 hover:text-sky-500"
            >
              Browse all 60 tools
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-12 gap-y-4">
            {[
              ["60+", "Free tools"],
              ["0", "Signup needed"],
              ["100%", "In your browser"]
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

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Try one now</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-text sm:text-4xl">3 tools people use every day</h2>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500">
            No tour. No signup. Click one and you're working in 2 seconds.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {featured.map(({ tool, useCase }) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-sky-400"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">Use case</div>
              <p className="mt-2 text-sm leading-6 text-slate-600">{useCase}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="font-heading text-lg font-semibold text-slate-900">{tool.name}</span>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500 transition group-hover:translate-x-1">Try free →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 py-6 sm:px-6 md:grid-cols-3 lg:px-8">
        {[
          { title: "Free, every tool", body: "All 60 tools are free. No paywall, no daily limit, no email wall." },
          { title: "Your text stays yours", body: "Tools run in your browser. Nothing is uploaded, logged, or stored." },
          { title: "No signup, ever", body: "Open a tool, paste, get the result. That's it." }
        ].map((feature) => (
          <div key={feature.title} className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-semibold text-slate-800">{feature.title}</p>
            <p className="mt-2 text-sm leading-6 text-slate-500">{feature.body}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Popular tools</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-text sm:text-4xl">What people use most</h2>
          </div>
          <Link href="/tools" className="text-sm font-semibold text-accent">
            See all 60 →
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {popular.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} compact />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Browse the full directory</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-text sm:text-4xl">Search, filter, and launch any tool</h2>
        </div>
        <ToolExplorer tools={tools} />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <AdUnit slot={siteConfig.adSlots.middle} format="rectangle" />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-warning">Why people stay</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-text sm:text-4xl">Small tools that solve real problems</h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              You don't always need a full editor. Sometimes you just want to know your word count,
              dedupe a list, fix the casing, or check what changed. That's what Toolkno is for.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {tools.slice(0, 12).map((tool) => (
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
            <p className="text-xs uppercase tracking-[0.2em] text-accent">How Toolkno is different</p>
            <div className="mt-6 space-y-5">
              <div>
                <h3 className="font-heading text-xl font-bold text-text">Built for speed</h3>
                <p className="mt-2 text-sm leading-7 text-muted">No splash screens. Open the page, paste, done.</p>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-text">Private by design</h3>
                <p className="mt-2 text-sm leading-7 text-muted">Tools run client-side. Nothing is sent to a server.</p>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-text">Honest free tier</h3>
                <p className="mt-2 text-sm leading-7 text-muted">All 60 tools, all features, free. Ads keep it that way.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-5 rounded-2xl bg-sky-500 px-6 py-12 text-center sm:flex-row sm:justify-between sm:px-12 sm:text-left">
          <div>
            <h2 className="font-heading text-[22px] font-semibold text-white">Pick a tool. Get back to work.</h2>
            <p className="mt-1 text-sm text-sky-100">60 free tools. No signup. Your text never leaves your browser.</p>
          </div>
          <Link
            href="/tools"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-white px-6 text-sm font-semibold text-sky-500 transition hover:bg-sky-50"
          >
            Browse all tools →
          </Link>
        </div>
      </section>
    </main>
  );
}
