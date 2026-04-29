import Link from "next/link";
import ToolExplorer from "@/components/home/ToolExplorer";
import AdUnit from "@/components/layout/AdUnit";
import { buildMetadata } from "@/lib/metadata";
import { tools, categoryMeta, getToolsByCategory } from "@/lib/tools";

export function generateMetadata({ searchParams }) {
  const hasQuery = Boolean(searchParams?.q);
  return buildMetadata({
    title: "All Tools",
    description: "Browse the full Toolkno directory of free and upcoming tools across text, developer, math, and finance categories.",
    path: "/tools",
    noIndex: hasQuery
  });
}

export default function ToolsPage({ searchParams }) {
  const initialQuery = searchParams?.q || "";

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <section>
        <p className="text-xs uppercase tracking-[0.2em] text-accent">Tool directory</p>
        <h1 className="mt-4 font-heading text-5xl font-bold text-text">60 Free Text Tools</h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-muted">
          Browse all 60 live free tools, filter by category, and search instantly by tool name. Every utility
          is built for fast browser-based work with mobile-first design and search-friendly tool pages.
        </p>
      </section>

      <section className="mt-10">
        <AdUnit slot="4100011101" format="horizontal" />
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-2xl font-bold text-text sm:text-3xl">Browse by category</h2>
        <p className="mt-2 text-sm text-muted">Pick a category to see all tools focused on that job.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(categoryMeta).map(([key, value]) => {
            const count = getToolsByCategory(key).length;
            return (
              <Link
                key={key}
                href={`/tools/category/${key}`}
                className="group flex items-start justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-sky-400"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-900">{value.label}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{value.tagline}</p>
                </div>
                <span className="shrink-0 rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {count}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-2xl font-bold text-text sm:text-3xl">Search every tool</h2>
        <div className="mt-6">
          <ToolExplorer tools={tools} initialQuery={initialQuery} />
        </div>
      </section>
    </main>
  );
}
