import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { getPublishedReviews } from "@/lib/reviews/data";

// ISR safety window; M17 adds on-demand revalidation on publish.
export const revalidate = 3600;

export function generateMetadata() {
  return buildMetadata({
    title: "Software Reviews",
    description:
      "Honest, independent software reviews from ToolKno — tested on real work, with the verdict up front and every affiliate relationship disclosed.",
    path: "/reviews",
    keywords: [
      "software reviews",
      "honest software reviews",
      "independent software reviews",
      "ToolKno reviews",
    ],
  });
}

function formatDate(value) {
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function isoDate(value) {
  return new Date(value).toISOString().split("T")[0];
}

export default async function ReviewsIndexPage() {
  const reviews = await getPublishedReviews();

  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
          Editorial
        </p>
        <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Software reviews
        </h1>
        <p className="mt-6 text-base leading-8 text-slate-600">
          Independent reviews of the software our audience actually uses &mdash; each one tested on
          real work for at least three weeks, with the verdict up front and every affiliate
          relationship disclosed. Read{" "}
          <Link
            href="/methodology"
            className="font-semibold text-sky-600 underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
          >
            how we test
          </Link>
          .
        </p>
      </header>

      {reviews.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center">
          <p className="text-sm font-semibold text-slate-900">No reviews published yet.</p>
          <p className="mx-auto mt-2 max-w-md text-sm leading-7 text-slate-600">
            Our first reviews are in testing now &mdash; every product gets at least three weeks of
            real use before we publish a verdict.
          </p>
        </div>
      ) : (
        <ul className="mt-6 grid gap-5 sm:grid-cols-2">
          {reviews.map((review) => (
            <li key={review.slug} className="h-full">
              <Link
                href={`/reviews/${review.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-600">
                    {review.productCategory}
                  </span>
                  {review.publishedAt ? (
                    <time dateTime={isoDate(review.publishedAt)} className="text-xs text-slate-400">
                      {formatDate(review.publishedAt)}
                    </time>
                  ) : null}
                </div>
                <h2 className="mt-4 font-heading text-lg font-semibold text-slate-900">
                  {review.productName} Review
                </h2>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{review.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-600">
                  Read review
                  <span aria-hidden="true" className="transition group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
