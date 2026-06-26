import HomeSection from "@/components/home/HomeSection";
import ReviewCard from "@/components/home/ReviewCard";
import ComparisonCard from "@/components/home/ComparisonCard";

const defaultReviews = [
  {
    logo: "NT",
    productName: "Placeholder Review Product",
    summary: "Placeholder summary for a future software review focused on practical fit and decision support.",
    href: "/about#reviews"
  },
  {
    logo: "PM",
    productName: "Placeholder Productivity App",
    summary: "Placeholder summary for a future review that explains who this product is best for.",
    href: "/about#reviews"
  },
  {
    logo: "AI",
    productName: "Placeholder AI Software",
    summary: "Placeholder summary for a future AI review with clear strengths, tradeoffs, and context.",
    href: "/about#reviews"
  }
];

const defaultComparisons = [
  {
    title: "Notion vs Obsidian",
    summary: "Placeholder comparison summary for note-taking and knowledge workflow decisions.",
    href: "/about#comparisons"
  },
  {
    title: "ChatGPT vs Claude",
    summary: "Placeholder comparison summary for comparing general-purpose AI assistants by use case.",
    href: "/about#comparisons"
  },
  {
    title: "Figma vs Canva",
    summary: "Placeholder comparison summary for visual design and team collaboration workflows.",
    href: "/about#comparisons"
  }
];

export default function FeaturedReviewsComparisonsSection({
  title = "Featured Reviews & Comparisons",
  description = "ToolKno helps users move beyond quick fixes by offering thoughtful reviews and side-by-side comparisons for software decisions.",
  reviews = defaultReviews,
  comparisons = defaultComparisons,
  methodologyNote = "Every review and comparison follows ToolKno's editorial methodology. Sponsored placements are clearly disclosed."
}) {
  return (
    <HomeSection
      id="featured-reviews-comparisons"
      eyebrow="Software decision support"
      title={title}
      description={description}
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <section aria-labelledby="featured-reviews-heading">
          <div className="mb-5">
            <h3 id="featured-reviews-heading" className="font-heading text-2xl font-bold text-text">
              Featured Reviews
            </h3>
          </div>
          <div className="grid gap-5">
            {reviews.map((review) => (
              <ReviewCard
                key={review.productName}
                logo={review.logo}
                productName={review.productName}
                summary={review.summary}
                href={review.href}
              />
            ))}
          </div>
        </section>

        <section aria-labelledby="featured-comparisons-heading">
          <div className="mb-5">
            <h3 id="featured-comparisons-heading" className="font-heading text-2xl font-bold text-text">
              Featured Comparisons
            </h3>
          </div>
          <div className="grid gap-5">
            {comparisons.map((comparison) => (
              <ComparisonCard
                key={comparison.title}
                title={comparison.title}
                summary={comparison.summary}
                href={comparison.href}
              />
            ))}
          </div>
        </section>
      </div>

      <p className="mt-8 text-sm leading-7 text-slate-500">{methodologyNote}</p>
    </HomeSection>
  );
}
