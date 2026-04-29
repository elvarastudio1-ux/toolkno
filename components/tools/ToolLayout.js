import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Breadcrumbs from "@/components/tools/Breadcrumbs";
import { siteConfig } from "@/lib/site";
import { getRelatedTools } from "@/lib/tools";

export default function ToolLayout({ title, description, category, relatedTools = [], children }) {
  const resolvedRelatedTools = getRelatedTools(relatedTools);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools" },
    { label: title }
  ];

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumbs items={breadcrumbItems} />
      <section className="mt-4 rounded-[2rem] border border-slate-200 bg-surface p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <Badge tone="accent">FREE</Badge>
          {category ? <Badge>{category}</Badge> : null}
        </div>
        <h1 className="mt-5 font-heading text-4xl font-bold text-text sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-4xl text-base leading-8 text-muted">{description}</p>
      </section>

      <section className="mt-0">{children}</section>

      <section className="mt-10 rounded-[2rem] border border-slate-200 bg-surface p-6 sm:p-8">
        <h2 className="font-heading text-3xl font-bold text-text">Related tools you might like</h2>
        <p className="mt-2 text-sm text-muted">Hand-picked tools that pair well with this one.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {resolvedRelatedTools.map((relatedTool) => (
            <Link
              key={relatedTool.slug}
              href={`/tools/${relatedTool.slug}`}
              className="group flex items-start justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-sky-400"
            >
              <div>
                <p className="text-sm font-semibold text-slate-900">{relatedTool.name}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">{relatedTool.description}</p>
              </div>
              <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.18em] text-sky-500 transition group-hover:translate-x-1">Open →</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
