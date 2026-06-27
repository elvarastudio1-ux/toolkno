import { getPublishedReviews } from "@/lib/reviews/data";

// Returns the most recent published editorial items for the homepage (FR-025).
//
// State B (PRD-003 M16): queries published reviews from the database. The
// underlying query is DB-resilient — when DATABASE_URL is unavailable (e.g. a
// local build) it returns [], so the homepage editorial section simply does not
// render (State A behaviour preserved). page.js awaits this function.
//
// Each item shape expected by EditorialCard:
//   { id, type, title, summary, publishedAt, href }
//   type: "Review" | "Comparison" | "Buying Guide"
//
// Only real database fields are used — no fabricated ratings, scores, authors,
// or testing periods. Comparisons and buying guides are added by their own PRDs.
export async function getRecentEditorialItems(limit = 3) {
  const reviews = await getPublishedReviews();

  return reviews.slice(0, limit).map((review) => ({
    id: review.slug,
    type: "Review",
    title: `${review.productName} Review`,
    summary: review.excerpt,
    publishedAt: review.publishedAt,
    href: `/reviews/${review.slug}`,
  }));
}
