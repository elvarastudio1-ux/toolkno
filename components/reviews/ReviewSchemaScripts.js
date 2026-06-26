import { siteConfig, absoluteUrl } from "@/lib/site";

// Review structured data (PRD-003 SEO-004). Built entirely from real DB fields.
// Deliberately emits NO reviewRating / aggregateRating — the ToolKno Score is
// undisplayed and the scoring methodology is unpublished until PRD-007
// (NG-001, risk R-002). Reuses the inline JSON-LD pattern from app/page.js.
export default function ReviewSchemaScripts({ review }) {
  const organization = {
    "@type": "Organization",
    name: "ToolKno",
    url: siteConfig.url,
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    name: `${review.productName} Review`,
    url: absoluteUrl(`/reviews/${review.slug}`),
    reviewBody: review.excerpt,
    inLanguage: "en",
    datePublished: review.publishedAt
      ? new Date(review.publishedAt).toISOString().split("T")[0]
      : undefined,
    dateModified: new Date(review.updatedAt).toISOString().split("T")[0],
    itemReviewed: {
      "@type": "SoftwareApplication",
      name: review.productName,
      applicationCategory: review.productCategory,
      ...(review.productVendor
        ? { publisher: { "@type": "Organization", name: review.productVendor } }
        : {}),
    },
    author: organization,
    publisher: {
      ...organization,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(siteConfig.socialImage),
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
