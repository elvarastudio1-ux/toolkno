import Link from "next/link";
import Badge from "@/components/ui/Badge";
import { siteConfig } from "@/lib/site";
import { getRelatedTools } from "@/lib/tools";

export default function ToolLayout({ title, description, category, relatedTools = [], children }) {
  const resolvedRelatedTools = getRelatedTools(relatedTools);
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${title} - Toolkno`,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR"
    },
    description,
    url: `${siteConfig.url}`
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] border border-slate-200 bg-surface p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <Badge tone="accent">FREE</Badge>
          {category ? <Badge>{category}</Badge> : null}
        </div>
        <h1 className="mt-5 font-heading text-4xl font-bold text-text sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-4xl text-base leading-8 text-muted">{description}</p>
      </section>

      <section className="mt-0">{children}</section>

      <section className="mt-10 rounded-[2rem] border border-slate-200 bg-surface p-6 sm:p-8">
        <h2 className="font-heading text-3xl font-bold text-text">Related tools</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {resolvedRelatedTools.map((relatedTool) => (
            <Link
              key={relatedTool.slug}
              href={`/tools/${relatedTool.slug}`}
              className="rounded-full border border-slate-200 px-4 py-2 text-sm text-text transition hover:border-accent hover:text-accent"
            >
              {relatedTool.name}
            </Link>
          ))}
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  );
}
