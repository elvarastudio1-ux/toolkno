import { notFound } from "next/navigation";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import ProseSection from "@/components/editorial/ProseSection";
import AffiliateDisclosure from "@/components/reviews/AffiliateDisclosure";
import ReviewSchemaScripts from "@/components/reviews/ReviewSchemaScripts";
import { getPublishedReviewBySlug, getPublishedReviewSlugs } from "@/lib/reviews/data";

// Static generation from the DB + on-demand ISR (PRD-003 PERF-001).
// Pre-renders published reviews where the DB is available (production build);
// renders on-demand elsewhere. revalidate is the safety window; M17 adds
// on-demand revalidation on publish/edit.
export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = await getPublishedReviewSlugs();
  return slugs.map((slug) => ({ slug }));
}

function reviewYear(review) {
  return new Date(review.publishedAt ?? review.testingEndedAt).getFullYear();
}

function weeksTested(review) {
  const ms = new Date(review.testingEndedAt) - new Date(review.testingStartedAt);
  return Math.max(1, Math.round(ms / (7 * 24 * 60 * 60 * 1000)));
}

function formatDate(value) {
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function isoDate(value) {
  return new Date(value).toISOString().split("T")[0];
}

// Renders a multi-paragraph text field as discrete <p> elements.
function Paragraphs({ text }) {
  return text
    .split(/\n\n+/)
    .map((para) => para.trim())
    .filter(Boolean)
    .map((para, i) => <p key={i}>{para}</p>);
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const review = await getPublishedReviewBySlug(slug);
  if (!review) {
    return buildMetadata({
      title: "Review not found",
      description: "This review could not be found.",
      path: `/reviews/${slug}`,
      noIndex: true,
    });
  }
  return buildMetadata({
    title: review.metaTitle || `${review.productName} Review: ${reviewYear(review)} Finding`,
    description: review.metaDescription || review.excerpt,
    path: `/reviews/${slug}`,
    keywords: [
      `${review.productName} review`,
      `${review.productName} ${reviewYear(review)}`,
      review.productCategory,
    ],
  });
}

export default async function ReviewPage({ params }) {
  const { slug } = await params;
  const review = await getPublishedReviewBySlug(slug);
  if (!review) notFound();

  const weeks = weeksTested(review);

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <ReviewSchemaScripts review={review} />
      <article className="space-y-6">
        {/* ── Header / verdict (above the fold) ────────────────────────────── */}
        <header className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
            {review.productCategory} review
          </p>
          <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {review.productName} Review
          </h1>

          <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-500">
            <span>
              Tested for {weeks} {weeks === 1 ? "week" : "weeks"}
            </span>
            <span aria-hidden="true">·</span>
            <Link
              href="/methodology"
              className="font-semibold text-sky-600 underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
            >
              How we test
            </Link>
          </p>

          {/* The verdict — one sentence, above the fold (Editorial Standards §4.1) */}
          <div className="mt-8 rounded-xl border-l-4 border-sky-400 bg-slate-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
              The verdict
            </p>
            <p className="mt-2 text-lg font-medium leading-8 text-slate-900">{review.verdict}</p>
          </div>

          {review.isAffiliate ? <AffiliateDisclosure /> : null}

          {review.publishedAt ? (
            <p className="mt-6 border-t border-slate-100 pt-4 text-xs text-slate-400">
              Published{" "}
              <time dateTime={isoDate(review.publishedAt)}>{formatDate(review.publishedAt)}</time>
              {review.pricingVerifiedAt ? (
                <>
                  {" "}
                  · Pricing verified{" "}
                  <time dateTime={isoDate(review.pricingVerifiedAt)}>
                    {formatDate(review.pricingVerifiedAt)}
                  </time>
                </>
              ) : null}
            </p>
          ) : null}
        </header>

        {/* ── 2. Who this review is for ────────────────────────────────────── */}
        <ProseSection id="who-for" eyebrow="Who it's for" title="Who this review is for">
          <Paragraphs text={review.whoFor} />
        </ProseSection>

        {/* ── 3. What I tested and how ─────────────────────────────────────── */}
        <ProseSection id="testing" eyebrow="The test" title="What I tested and how">
          {review.accountTierTested ? (
            <p className="text-sm text-slate-500">
              Account tier tested: <span className="font-medium text-slate-700">{review.accountTierTested}</span>
            </p>
          ) : null}
          <Paragraphs text={review.testingSummary} />
        </ProseSection>

        {/* ── 4. What works ────────────────────────────────────────────────── */}
        <ProseSection id="what-works" eyebrow="Strengths" title="What works">
          <Paragraphs text={review.whatWorks} />
        </ProseSection>

        {/* ── 5. What doesn't work ─────────────────────────────────────────── */}
        <ProseSection id="what-doesnt-work" eyebrow="Weaknesses" title="What doesn't work">
          <Paragraphs text={review.whatDoesntWork} />
        </ProseSection>

        {/* ── 6. Pricing ───────────────────────────────────────────────────── */}
        <ProseSection id="pricing" eyebrow="Cost" title="Pricing">
          <Paragraphs text={review.pricingNotes} />
        </ProseSection>

        {/* ── 7. Alternatives to consider ──────────────────────────────────── */}
        {review.alternatives.length > 0 ? (
          <ProseSection id="alternatives" eyebrow="Other options" title="Alternatives to consider">
            <ul className="space-y-3">
              {review.alternatives.map((alt) => (
                <li
                  key={alt.id}
                  className="rounded-lg border-l-4 border-sky-400 bg-slate-50 px-4 py-3"
                >
                  <p className="font-semibold text-slate-900">
                    {alt.linkSlug ? (
                      <Link
                        href={`/reviews/${alt.linkSlug}`}
                        className="text-sky-600 underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                      >
                        {alt.name}
                      </Link>
                    ) : (
                      alt.name
                    )}
                  </p>
                  <p className="mt-1 text-slate-600">{alt.whenBetter}</p>
                </li>
              ))}
            </ul>
          </ProseSection>
        ) : null}

        {/* ── 8. The verdict, expanded ─────────────────────────────────────── */}
        <ProseSection id="verdict-expanded" eyebrow="In full" title="The verdict, expanded">
          <Paragraphs text={review.verdictExpanded} />
        </ProseSection>

        {/* ── 9. Update history ────────────────────────────────────────────── */}
        {review.updates.length > 0 ? (
          <ProseSection id="update-history" eyebrow="Changes" title="Update history">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <caption className="sr-only">
                  Changes made to this review since publication
                </caption>
                <thead>
                  <tr className="border-b border-slate-200">
                    <th scope="col" className="py-2 pr-4 font-semibold text-slate-900">
                      Date
                    </th>
                    <th scope="col" className="py-2 pr-4 font-semibold text-slate-900">
                      Type
                    </th>
                    <th scope="col" className="py-2 font-semibold text-slate-900">
                      What changed
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {review.updates.map((u) => (
                    <tr key={u.id} className="border-b border-slate-100 align-top">
                      <th scope="row" className="py-3 pr-4 font-normal text-slate-600">
                        <time dateTime={isoDate(u.date)}>{formatDate(u.date)}</time>
                      </th>
                      <td className="py-3 pr-4 capitalize text-slate-600">
                        {u.type.replace(/_/g, " ")}
                      </td>
                      <td className="py-3 text-slate-600">{u.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ProseSection>
        ) : null}

        {/* ── Read more ────────────────────────────────────────────────────── */}
        <section
          aria-labelledby="more-heading"
          className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
        >
          <h2 id="more-heading" className="font-heading text-lg font-bold text-slate-900">
            How we reach our verdicts
          </h2>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link
              href="/methodology"
              className="font-semibold text-sky-600 underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
            >
              Our methodology
            </Link>
            <Link
              href="/affiliate-registry"
              className="font-semibold text-sky-600 underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
            >
              Affiliate registry
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
