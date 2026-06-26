import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig, absoluteUrl } from "@/lib/site";

const METHODOLOGY_VERSION = "1.0.0";
const METHODOLOGY_UPDATED_ISO = "2026-06-26";
const METHODOLOGY_UPDATED_LABEL = "June 26, 2026";

export function generateMetadata() {
  return buildMetadata({
    title: "Editorial Methodology",
    description:
      "Exactly how ToolKno tests software: the criteria we evaluate, how we weight them, our minimum testing periods, evidence standards, and how we handle affiliate conflicts of interest.",
    path: "/methodology",
    keywords: [
      "ToolKno methodology",
      "software review methodology",
      "how ToolKno tests software",
      "editorial independence",
      "affiliate disclosure policy",
    ],
  });
}

// JSON-LD — reuses the inline <script type="application/ld+json"> pattern from app/page.js
const methodologySchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "ToolKno Editorial Methodology",
  description:
    "How ToolKno tests and evaluates software: criteria, weighting, testing periods, evidence standards, editorial independence, and conflict-of-interest handling.",
  url: absoluteUrl("/methodology"),
  datePublished: METHODOLOGY_UPDATED_ISO,
  dateModified: METHODOLOGY_UPDATED_ISO,
  version: METHODOLOGY_VERSION,
  inLanguage: "en",
  author: {
    "@type": "Organization",
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
};

const evaluationCriteria = [
  ["Accuracy", "Does the software do what it claims, correctly, on real work — not on a demo?"],
  ["Speed and performance", "How it behaves under normal daily load, not in a vendor benchmark."],
  ["Usability", "How quickly a real user reaches the result they came for, and where the friction is."],
  ["Pricing", "What it actually costs, what the free tier includes, and what the paid tier adds."],
  ["Key features", "The capabilities that matter for the use case the review serves."],
  ["What's missing", "The gaps — the things a reader would reasonably expect that the product does not do."],
];

const testingPeriods = [
  ["Review", "21 days", "Active daily or near-daily use for the software's primary purpose."],
  ["Comparison", "21 days per product", "Each product compared must meet the minimum individually."],
  ["Buying guide", "N/A — references existing reviews", "Links to published ToolKno reviews; no new product evaluations inside the guide."],
  ["Tool page", "7 days", "Using the ToolKno tool category to evaluate claims; not a vendor product review."],
];

const evidenceTypes = [
  [
    "Direct observation",
    "Written in first person, from the testing period. “During three weeks of testing, the autocorrect overrode my deliberate stylistic choices four times without warning.”",
  ],
  [
    "Verified vendor documentation",
    "Linked to a primary source. “The Business plan costs $15 per member per month (source: vendor pricing page, verified June 2026).”",
  ],
  [
    "Named third-party data",
    "From a primary source, not a secondary source citing the primary. Named, with a publication date.",
  ],
  [
    "Direct user interview",
    "Spoke with at least three independent, identified users and quotes or paraphrases their specific experience.",
  ],
];

const notEvidence = [
  "“Users generally find…”",
  "“Most experts agree…”",
  "“Studies show…” without a named, dated, primary source",
  "Unattributed statistics",
  "Social-media impressions",
  "Any claim that cannot be verified",
];

const updatePolicy = [
  ["12 months since publication", "Full audit: re-test key features, update all factual claims and pricing.", "Within 30 days of the anniversary"],
  ["Major price change", "Update the pricing section.", "Within 7 days"],
  ["Feature removed", "Update the features section; reconsider the verdict.", "Within 7 days"],
  ["Product acquired", "Add an acquisition notice; flag for full audit.", "Notice within 7 days, audit within 90 days"],
  ["Verdict changes", "Document the change in the article's Update History.", "Same day as the change"],
  ["Affiliate terms change", "Update disclosure language if needed.", "Within 7 days"],
];

const versionHistory = [
  ["1.0.0", METHODOLOGY_UPDATED_LABEL, "Initial public methodology published."],
];

function Card({ id, eyebrow, title, children }) {
  const headingId = `${id}-heading`;
  return (
    <section
      aria-labelledby={headingId}
      className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
    >
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={headingId}
        className="mt-3 font-heading text-2xl font-bold text-slate-900 sm:text-3xl"
      >
        {title}
      </h2>
      <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">{children}</div>
    </section>
  );
}

export default function MethodologyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(methodologySchema) }}
      />

      <article className="space-y-6">
        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <header className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
            Editorial methodology
          </p>
          <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            How ToolKno tests software
          </h1>
          <p className="mt-6 text-base leading-8 text-slate-600">
            Every review, comparison, and buying guide on ToolKno is held to the standards on
            this page. It describes exactly what we evaluate, how we weight it, how long we test
            before we publish, what counts as evidence, and how we handle the conflict of
            interest that affiliate relationships create. If a claim in a ToolKno article
            can&rsquo;t be traced back to something on this page, the claim doesn&rsquo;t belong
            in the article.
          </p>
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-3 border-t border-slate-100 pt-6 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-[0.15em] text-slate-400">Version</dt>
              <dd className="mt-1 font-semibold text-slate-900">{METHODOLOGY_VERSION}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.15em] text-slate-400">Last updated</dt>
              <dd className="mt-1 font-semibold text-slate-900">
                <time dateTime={METHODOLOGY_UPDATED_ISO}>{METHODOLOGY_UPDATED_LABEL}</time>
              </dd>
            </div>
          </dl>
        </header>

        {/* ── Editorial philosophy ─────────────────────────────────────────── */}
        <Card id="philosophy" eyebrow="Why we publish" title="Editorial philosophy">
          <p>
            ToolKno publishes editorial content in three formats: reviews, comparisons, and
            buying guides. Every piece exists to help a specific reader make a specific decision.
            It is not published for search rankings, for content velocity, or for affiliate
            revenue alone.
          </p>
          <p>
            Trust is the product. A single authoritative review of one product is worth more than
            shallow coverage of twenty. We would rather publish nothing in a given period than
            publish something we have not genuinely tested.
          </p>
        </Card>

        {/* ── Testing methodology ──────────────────────────────────────────── */}
        <Card id="testing" eyebrow="How we test" title="Testing methodology">
          <p>Every review moves through the same process, in this order:</p>
          <ol className="ml-5 list-decimal space-y-3">
            <li>
              <strong className="font-semibold text-slate-900">Selection.</strong> A product is
              reviewed when it is in a category we cover, used by our audience, and either has no
              honest independent review or the existing reviews are more than 18 months out of
              date.
            </li>
            <li>
              <strong className="font-semibold text-slate-900">Testing.</strong> A minimum of 21
              days of active use for the product&rsquo;s real purpose &mdash; not periodic
              check-ins, and not a tour of the interface.
            </li>
            <li>
              <strong className="font-semibold text-slate-900">Documentation.</strong> Testing
              notes are kept throughout the period. An impression formed in week one that changes
              by week three is recorded as a change, not smoothed into a single verdict.
            </li>
            <li>
              <strong className="font-semibold text-slate-900">Drafting.</strong> The review is
              written after testing ends, so that the act of writing does not shape the test.
            </li>
            <li>
              <strong className="font-semibold text-slate-900">Fact-checking.</strong> Every
              factual claim &mdash; pricing, feature names, company information &mdash; is verified
              against the product&rsquo;s current documentation at the time of publication.
            </li>
            <li>
              <strong className="font-semibold text-slate-900">Disclosure.</strong> Any affiliate
              relationship is disclosed inline, at the point of the link.
            </li>
            <li>
              <strong className="font-semibold text-slate-900">Updating.</strong> Reviews are
              audited every 12 months, or within 30 days of a major product change.
            </li>
          </ol>
        </Card>

        {/* ── Evaluation criteria ──────────────────────────────────────────── */}
        <Card id="criteria" eyebrow="What we evaluate" title="Evaluation criteria">
          <p>
            Reviews and comparisons evaluate the same core criteria. Each is assessed from
            testing evidence, not from the vendor&rsquo;s specification sheet.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <caption className="sr-only">ToolKno evaluation criteria</caption>
              <thead>
                <tr className="border-b border-slate-200">
                  <th scope="col" className="py-2 pr-4 font-semibold text-slate-900">
                    Criterion
                  </th>
                  <th scope="col" className="py-2 font-semibold text-slate-900">
                    What it measures
                  </th>
                </tr>
              </thead>
              <tbody>
                {evaluationCriteria.map(([name, desc]) => (
                  <tr key={name} className="border-b border-slate-100 align-top">
                    <th scope="row" className="py-3 pr-4 font-semibold text-slate-900">
                      {name}
                    </th>
                    <td className="py-3 text-slate-600">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* ── Criteria weighting ───────────────────────────────────────────── */}
        <Card id="weighting" eyebrow="How we weight" title="Criteria weighting">
          <p>
            ToolKno does not apply a single fixed weighting to every product. Criteria are
            weighted by their relevance to the specific decision a review or comparison serves.
            Accuracy matters most in a grammar checker; pricing and lock-in matter most when
            choosing a platform you&rsquo;ll build on for years.
          </p>
          <p>
            Because of this, every comparison opens by defining its use case in one sentence, and
            every verdict states <em>which</em> criteria drove the recommendation and for whom.
            A verdict that does not explain what it weighted, and why, is not a finished verdict.
            &ldquo;It depends&rdquo; without saying what it depends on is not a verdict at all.
          </p>
        </Card>

        {/* ── Testing periods ──────────────────────────────────────────────── */}
        <Card id="periods" eyebrow="How long we test" title="Testing periods">
          <p>
            These are minimums, not targets. &ldquo;Active use&rdquo; means using the product to
            accomplish real work, not exploring its interface.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <caption className="sr-only">Minimum testing periods by content type</caption>
              <thead>
                <tr className="border-b border-slate-200">
                  <th scope="col" className="py-2 pr-4 font-semibold text-slate-900">
                    Content type
                  </th>
                  <th scope="col" className="py-2 pr-4 font-semibold text-slate-900">
                    Minimum period
                  </th>
                  <th scope="col" className="py-2 font-semibold text-slate-900">
                    What testing means
                  </th>
                </tr>
              </thead>
              <tbody>
                {testingPeriods.map(([type, period, meaning]) => (
                  <tr key={type} className="border-b border-slate-100 align-top">
                    <th scope="row" className="py-3 pr-4 font-semibold text-slate-900">
                      {type}
                    </th>
                    <td className="py-3 pr-4 text-slate-600">{period}</td>
                    <td className="py-3 text-slate-600">{meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* ── Evidence standards ───────────────────────────────────────────── */}
        <Card id="evidence" eyebrow="What counts as proof" title="Evidence standards">
          <p>
            Every claim in a published article rests on exactly one of four kinds of evidence:
          </p>
          <ul className="space-y-3">
            {evidenceTypes.map(([name, desc]) => (
              <li
                key={name}
                className="rounded-lg border-l-4 border-sky-400 bg-slate-50 px-4 py-3"
              >
                <p className="font-semibold text-slate-900">{name}</p>
                <p className="mt-1 text-slate-600">{desc}</p>
              </li>
            ))}
          </ul>
          <p className="font-semibold text-slate-900">What we do not accept as evidence:</p>
          <ul className="ml-5 list-disc space-y-1">
            {notEvidence.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>

        {/* ── Editorial independence ───────────────────────────────────────── */}
        <Card id="independence" eyebrow="Who decides" title="Editorial independence">
          <p>
            The editor makes every editorial decision. No vendor has approval rights over a review
            of their product, before or after publication. No affiliate manager can request
            changes to editorial content as a condition of a partnership.
          </p>
          <p>
            If testing shows that a high-commission product is mediocre or worse than a
            no-commission alternative, the verdict says so and recommends the better product. The
            affiliate income from that decision is zero. The trust is worth more.
          </p>
          <p>
            If a vendor requests a correction, the fact is verified. If it is wrong, it is
            corrected and documented. The verdict itself is not changed by vendor communication
            unless the testing evidence independently supports a change.
          </p>
        </Card>

        {/* ── Affiliate disclosure ─────────────────────────────────────────── */}
        <Card id="affiliate-disclosure" eyebrow="How we disclose" title="Affiliate disclosure policy">
          <p>
            ToolKno earns affiliate commissions on some links. Disclosure is never buried in a
            footer or a generic policy page. It appears twice in every article that contains
            affiliate links:
          </p>
          <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
              At the top of the article
            </p>
            <p className="mt-2 italic text-slate-600">
              &ldquo;ToolKno earns a commission if you purchase products through some links in
              this article. This does not affect which products we recommend or how we evaluate
              them.&rdquo;
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
              Beside every affiliate link
            </p>
            <p className="mt-2 italic text-slate-600">
              &ldquo;(affiliate link &mdash; ToolKno earns a commission if you purchase through
              this link)&rdquo;
            </p>
          </div>
          <p>
            If either disclosure is missing, the article does not ship. The commission rate on a
            product never changes its editorial position.
          </p>
        </Card>

        {/* ── Conflict of interest ─────────────────────────────────────────── */}
        <Card id="conflicts" eyebrow="How we stay honest" title="Conflict-of-interest handling">
          <p>
            Affiliate revenue creates an obvious incentive to favour the products that pay the
            most. We manage that conflict structurally rather than relying on good intentions:
          </p>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              Every affiliate relationship and its commission rate is recorded in an internal
              affiliate registry.
            </li>
            <li>
              Editorial verdicts are compared against commission rates on a quarterly basis to
              check for any correlation between what we recommend and what pays us most.
            </li>
            <li>
              Revenue decisions are made after editorial decisions, never instead of them. We ask
              whether content is true and useful first; whether it can be monetised second.
            </li>
          </ul>
        </Card>

        {/* ── Update policy ────────────────────────────────────────────────── */}
        <Card id="updates" eyebrow="How we keep it current" title="Update policy">
          <p>
            A review is a living document. Published content is revisited when any of the
            following happens:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <caption className="sr-only">When and how ToolKno updates published content</caption>
              <thead>
                <tr className="border-b border-slate-200">
                  <th scope="col" className="py-2 pr-4 font-semibold text-slate-900">
                    Trigger
                  </th>
                  <th scope="col" className="py-2 pr-4 font-semibold text-slate-900">
                    Action
                  </th>
                  <th scope="col" className="py-2 font-semibold text-slate-900">
                    Deadline
                  </th>
                </tr>
              </thead>
              <tbody>
                {updatePolicy.map(([trigger, action, deadline]) => (
                  <tr key={trigger} className="border-b border-slate-100 align-top">
                    <th scope="row" className="py-3 pr-4 font-semibold text-slate-900">
                      {trigger}
                    </th>
                    <td className="py-3 pr-4 text-slate-600">{action}</td>
                    <td className="py-3 text-slate-600">{deadline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* ── Corrections ──────────────────────────────────────────────────── */}
        <Card id="corrections" eyebrow="When we get it wrong" title="Corrections policy">
          <p>
            A factual error found by a reader or by self-audit is corrected within 24 hours and
            noted in the article&rsquo;s Update History. The notice reads: &ldquo;Correction,
            [date]: [original claim] was incorrect. [Correct claim].&rdquo;
          </p>
          <p>
            A published verdict is never changed silently. When a recommendation changes &mdash;
            because the product improved, degraded, or was acquired &mdash; the article records
            the original verdict, the new verdict, the date, and the reason. The original
            publication date is preserved so readers who relied on the old verdict can see exactly
            what changed and when.
          </p>
        </Card>

        {/* ── Version history ──────────────────────────────────────────────── */}
        <Card id="version-history" eyebrow="What changed here" title="Version history">
          <p>
            This methodology is version-controlled. When it changes, every published review is
            re-evaluated against the new version.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <caption className="sr-only">Methodology version history</caption>
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
        </Card>

        {/* ── Footer links ─────────────────────────────────────────────────── */}
        <section
          aria-labelledby="more-heading"
          className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
        >
          <h2 id="more-heading" className="font-heading text-lg font-bold text-slate-900">
            Read more
          </h2>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
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
            <Link
              href="/tools"
              className="font-semibold text-sky-600 underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
            >
              Free tools
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
