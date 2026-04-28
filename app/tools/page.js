import ToolExplorer from "@/components/home/ToolExplorer";
import AdUnit from "@/components/layout/AdUnit";
import { buildMetadata } from "@/lib/metadata";
import { tools } from "@/lib/tools";

export function generateMetadata() {
  return buildMetadata({
    title: "All Tools",
    description: "Browse the full Toolkno directory of free and upcoming tools across text, developer, math, and finance categories.",
    path: "/tools"
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

      <section className="mt-10">
        <ToolExplorer tools={tools} initialQuery={initialQuery} />
      </section>
    </main>
  );
}
