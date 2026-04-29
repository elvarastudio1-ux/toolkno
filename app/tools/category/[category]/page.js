import Link from "next/link";
import { notFound } from "next/navigation";
import AdUnit from "@/components/layout/AdUnit";
import Breadcrumbs from "@/components/tools/Breadcrumbs";
import ToolCard from "@/components/tools/ToolCard";
import { buildMetadata } from "@/lib/metadata";
import { categoryMeta, getAllCategorySlugs, getToolsByCategory, tools } from "@/lib/tools";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return getAllCategorySlugs().map((category) => ({ category }));
}

export const dynamicParams = false;

export function generateMetadata({ params }) {
  const meta = categoryMeta[params.category];
  if (!meta) {
    return buildMetadata({
      title: "Category not found",
      description: "Browse the full Toolkno tool directory.",
      path: `/tools/category/${params.category}`,
      noIndex: true
    });
  }
  const count = getToolsByCategory(params.category).length;
  return buildMetadata({
    title: `${meta.headline} — ${count} free tools | Toolkno`,
    description: `${meta.tagline} ${count} free tools that work in your browser, no signup required.`,
    path: `/tools/category/${params.category}`
  });
}

export default function CategoryPage({ params }) {
  const meta = categoryMeta[params.category];
  if (!meta) notFound();

  const categoryTools = getToolsByCategory(params.category);
  const otherCategories = Object.entries(categoryMeta)
    .filter(([key]) => key !== params.category)
    .slice(0, 6);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools" },
    { label: meta.label }
  ];

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: meta.headline,
    description: meta.tagline,
    numberOfItems: categoryTools.length,
    itemListElement: categoryTools.map((tool, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: `${siteConfig.url}/tools/${tool.slug}`,
      name: tool.name
    }))
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumbs items={breadcrumbItems} />

      <section className="mt-4 rounded-[2rem] border border-slate-200 bg-surface p-6 sm:p-10">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">{meta.label}</p>
        <h1 className="mt-3 font-heading text-3xl font-bold text-text sm:text-5xl">{meta.headline}</h1>
        <p className="mt-4 text-base text-muted sm:text-lg">{meta.tagline}</p>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-muted">{meta.intro}</p>
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-500">
          <span><strong className="text-slate-700">{categoryTools.length}</strong> tools in this category</span>
          <span>· Free forever</span>
          <span>· No signup</span>
          <span>· Works in your browser</span>
        </div>
      </section>

      <section className="mt-8">
        <AdUnit slot={siteConfig.adSlots.top} format="horizontal" />
      </section>

      <section className="mt-8">
        <h2 className="font-heading text-2xl font-bold text-text sm:text-3xl">All {meta.label.toLowerCase()}</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categoryTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-[2rem] border border-slate-200 bg-surface p-6 sm:p-8">
        <h2 className="font-heading text-2xl font-bold text-text">Browse other categories</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {otherCategories.map(([key, value]) => (
            <Link
              key={key}
              href={`/tools/category/${key}`}
              className="group flex items-start justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-sky-400"
            >
              <div>
                <p className="text-sm font-semibold text-slate-900">{value.label}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">{value.tagline}</p>
              </div>
              <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.18em] text-sky-500 transition group-hover:translate-x-1">Open →</span>
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/tools" className="text-sm font-semibold text-accent">
            See all 60 tools →
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
    </main>
  );
}
