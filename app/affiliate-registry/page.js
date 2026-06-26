import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig, absoluteUrl } from "@/lib/site";
import ProseSection from "@/components/editorial/ProseSection";

const REGISTRY_VERSION = "1.0.0";
const REGISTRY_UPDATED_ISO = "2026-06-26";
const REGISTRY_UPDATED_LABEL = "June 26, 2026";

// Active affiliate relationships. Empty until ToolKno is approved for a program.
// Each entry: { company, product, relationship, reviewEligibility, notes }
const affiliatePartners = [];

const versionHistory = [
  ["1.0.0", REGISTRY_UPDATED_LABEL, "Registry published. No active affiliate relationships yet."],
];

export function generateMetadata() {
  return buildMetadata({
    title: "Affiliate Registry",
    description:
      "Every company ToolKno has an affiliate relationship with, listed in public. We disclose every relationship before any affiliate link appears in an article, and commission never affects our editorial verdict.",
    path: "/affiliate-registry",
    keywords: [
      "ToolKno affiliate registry",
      "affiliate disclosure",
      "editorial independence",
      "affiliate relationships",
    ],
  });
}

// JSON-LD — reuses the inline <script type="application/ld+json"> pattern from app/page.js
const registrySchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "ToolKno Affiliate Registry",
  description:
    "A public list of every affiliate relationship ToolKno holds, with our disclosure policy and editorial-independence commitments.",
  url: absoluteUrl("/affiliate-registry"),
  dateModified: REGISTRY_UPDATED_ISO,
  inLanguage: "en",
  isPartOf: {
    "@type": "WebSite",
    name: "ToolKno",
    url: siteConfig.url,
  },
  publisher: {
    "@type": "Organization",
    name: "ToolKno",
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(siteConfig.socialImage),
    },
  },
  mainEntity: {
    "@type": "ItemList",
    name: "Active affiliate relationships",
    numberOfItems: affiliatePartners.length,
    itemListElement: affiliatePartners.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.company,
    })),
  },
};

export default function AffiliateRegistryPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(registrySchema) }}
      />

      <article className="space-y-6">
        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <header className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
            Transparency
          </p>
          <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Affiliate registry
          </h1>
          <p className="mt-6 text-base leading-8 text-slate-600">
            Some of the links in ToolKno articles earn us a commission. This page lists every
            company we have that kind of relationship with &mdash; in public, in one place. No
            affiliate link appears in an article before the relationship behind it is listed here,
            and a commission never changes which product we recommend.
          </p>
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-3 border-t border-slate-100 pt-6 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-[0.15em] text-slate-400">Version</dt>
              <dd className="mt-1 font-semibold text-slate-900">{REGISTRY_VERSION}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.15em] text-slate-400">Last updated</dt>
              <dd className="mt-1 font-semibold text-slate-900">
                <time dateTime={REGISTRY_UPDATED_ISO}>{REGISTRY_UPDATED_LABEL}</time>
              </dd>
            </div>
          </dl>
        </header>

        {/* ── Purpose ──────────────────────────────────────────────────────── */}
        <ProseSection id="purpose" eyebrow="Why this exists" title="Purpose">
          <p>
            This registry exists so that anyone reading a ToolKno review can check, independently,
            exactly where our commercial incentives lie. It is the public companion to the
            disclosure we place inside every article.
          </p>
          <p>
            It also keeps us honest internally. Because every relationship is listed here, every
            recommendation we make can be checked against what we stand to earn &mdash; by readers,
            and by us, in a quarterly review of verdicts against commission rates.
          </p>
        </ProseSection>

        {/* ── How affiliate relationships work ─────────────────────────────── */}
        <ProseSection
          id="how-it-works"
          eyebrow="How it works"
          title="How affiliate relationships work"
        >
          <p>
            An affiliate relationship means that when a reader buys a product through one of our
            links, the company pays ToolKno a commission. It costs the reader nothing extra.
          </p>
          <p>
            We only ever add an affiliate link to a product we have actually tested and chosen to
            recommend on the merits. We do not add a product to ToolKno because it has an affiliate
            program, and we do not join a program in order to justify a recommendation. The
            sequence is always: test the product, reach a verdict, then &mdash; if and only if the
            verdict is positive and a program exists &mdash; disclose and link.
          </p>
        </ProseSection>

        {/* ── Editorial independence ───────────────────────────────────────── */}
        <ProseSection
          id="independence"
          eyebrow="Independence"
          title="Editorial independence statement"
        >
          <p>
            If testing shows that a high-commission product is worse than a no-commission
            alternative, our verdict says so and recommends the better product. The commission we
            forgo by doing this is the price of the registry meaning anything at all.
          </p>
          <p>
            No vendor has approval rights over a review of their product. No affiliate manager can
            request changes to editorial content as a condition of a partnership. The full process
            is documented in our{" "}
            <Link
              href="/methodology"
              className="font-semibold text-sky-600 underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
            >
              editorial methodology
            </Link>
            .
          </p>
        </ProseSection>

        {/* ── Disclosure policy ────────────────────────────────────────────── */}
        <ProseSection id="disclosure" eyebrow="How we disclose" title="Disclosure policy">
          <p>
            Every article that contains affiliate links carries disclosure in two places &mdash;
            never buried in a footer:
          </p>
          <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
              At the top of the article
            </p>
            <p className="mt-2 italic text-slate-600">
              &ldquo;ToolKno earns a commission if you purchase products through some links in this
              article. This does not affect which products we recommend or how we evaluate
              them.&rdquo;
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
              Beside every affiliate link
            </p>
            <p className="mt-2 italic text-slate-600">
              &ldquo;(affiliate link &mdash; ToolKno earns a commission if you purchase through this
              link)&rdquo;
            </p>
          </div>
          <p>If either disclosure is missing, the article does not ship.</p>
        </ProseSection>

        {/* ── Registry table ───────────────────────────────────────────────── */}
        <section
          aria-labelledby="registry-heading"
          className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
            The registry
          </p>
          <h2
            id="registry-heading"
            className="mt-3 font-heading text-2xl font-bold text-slate-900 sm:text-3xl"
          >
            Active affiliate relationships
          </h2>

          {affiliatePartners.length === 0 ? (
            <div className="mt-6 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-6 py-8 text-center">
              <p className="text-sm font-semibold text-slate-900">
                ToolKno currently has no active affiliate relationships.
              </p>
              <p className="mx-auto mt-2 max-w-md text-sm leading-7 text-slate-600">
                When we join an affiliate program, it will be listed here before any affiliate link
                appears in an article. Until then, nothing we publish earns us a commission.
              </p>
            </div>
          ) : (
            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <caption className="sr-only">
                  Companies ToolKno holds an affiliate relationship with
                </caption>
                <thead>
                  <tr className="border-b border-slate-200">
                    <th scope="col" className="py-2 pr-4 font-semibold text-slate-900">
                      Company
                    </th>
                    <th scope="col" className="py-2 pr-4 font-semibold text-slate-900">
                      Product
                    </th>
                    <th scope="col" className="py-2 pr-4 font-semibold text-slate-900">
                      Affiliate relationship
                    </th>
                    <th scope="col" className="py-2 pr-4 font-semibold text-slate-900">
                      Review eligibility
                    </th>
                    <th scope="col" className="py-2 font-semibold text-slate-900">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {affiliatePartners.map((p) => (
                    <tr key={p.company} className="border-b border-slate-100 align-top">
                      <th scope="row" className="py-3 pr-4 font-semibold text-slate-900">
                        {p.company}
                      </th>
                      <td className="py-3 pr-4 text-slate-600">{p.product}</td>
                      <td className="py-3 pr-4 text-slate-600">{p.relationship}</td>
                      <td className="py-3 pr-4 text-slate-600">{p.reviewEligibility}</td>
                      <td className="py-3 text-slate-600">{p.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* ── Version history ──────────────────────────────────────────────── */}
        <ProseSection id="version-history" eyebrow="What changed here" title="Version history">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <caption className="sr-only">Affiliate registry version history</caption>
              <thead>
                <tr className="border-b border-slate-200">
                  <th scope="col" className="py-2 pr-4 font-semibold text-slate-900">
                    Version
                  </th>
                  <th scope="col" className="py-2 pr-4 font-semibold text-slate-900">
                    Date
                  </th>
                  <th scope="col" className="py-2 font-semibold text-slate-900">
                    Change
                  </th>
                </tr>
              </thead>
              <tbody>
                {versionHistory.map(([version, date, change]) => (
                  <tr key={version} className="border-b border-slate-100 align-top">
                    <th scope="row" className="py-3 pr-4 font-semibold text-slate-900">
                      {version}
                    </th>
                    <td className="py-3 pr-4 text-slate-600">{date}</td>
                    <td className="py-3 text-slate-600">{change}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ProseSection>

        {/* ── Read more ────────────────────────────────────────────────────── */}
        <section
          aria-labelledby="more-heading"
          className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
        >
          <h2 id="more-heading" className="font-heading text-lg font-bold text-slate-900">
            Read more
          </h2>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link
              href="/methodology"
              className="font-semibold text-sky-600 underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
            >
              Editorial methodology
            </Link>
            <Link
              href="/about"
              className="font-semibold text-sky-600 underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
            >
              About ToolKno
            </Link>
            <Link
              href="/newsletter"
              className="font-semibold text-sky-600 underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
            >
              The newsletter
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
