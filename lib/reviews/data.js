import { cache } from "react";
import { prisma } from "@/lib/prisma";

// Read-only data access for public review pages (PRD-003 M14).
// All functions are resilient to an unavailable database: locally DATABASE_URL
// is empty, and the production build runs generateStaticParams at build time.
// On any DB error we degrade gracefully (return [] / null) so the build never
// crashes; production (with DATABASE_URL set) returns real data.

// React.cache dedupes the fetch across generateMetadata() and the page render
// within a single request.
export const getPublishedReviewBySlug = cache(async (slug) => {
  try {
    const review = await prisma.review.findUnique({
      where: { slug },
      include: {
        alternatives: { orderBy: { position: "asc" } },
        updates: { orderBy: { date: "desc" } },
      },
    });
    if (!review || review.status !== "published") return null;
    return review;
  } catch (err) {
    console.error("[reviews/data] getPublishedReviewBySlug failed", err?.message);
    return null;
  }
});

export async function getPublishedReviewSlugs() {
  try {
    const rows = await prisma.review.findMany({
      where: { status: "published" },
      select: { slug: true },
    });
    return rows.map((r) => r.slug);
  } catch (err) {
    // Expected locally (no DATABASE_URL): no params pre-rendered, ISR handles
    // them on-demand in production.
    console.warn(
      "[reviews/data] getPublishedReviewSlugs: DB unavailable, returning []",
      err?.message
    );
    return [];
  }
}

// Published reviews for the /reviews index and the sitemap. Most recent first.
// Selects only the fields those surfaces need (never draft content).
export async function getPublishedReviews() {
  try {
    return await prisma.review.findMany({
      where: { status: "published" },
      orderBy: { publishedAt: "desc" },
      select: {
        slug: true,
        productName: true,
        productCategory: true,
        excerpt: true,
        publishedAt: true,
        updatedAt: true,
      },
    });
  } catch (err) {
    console.warn(
      "[reviews/data] getPublishedReviews: DB unavailable, returning []",
      err?.message
    );
    return [];
  }
}
