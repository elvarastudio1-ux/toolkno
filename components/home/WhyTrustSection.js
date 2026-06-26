import Link from "next/link";
import HomeSection from "@/components/home/HomeSection";
import TrustCard from "@/components/home/TrustCard";

const defaultTrustItems = [
  {
    icon: "IR",
    title: "Independent Reviews",
    description: "We evaluate software using a consistent methodology designed to keep reviews useful, comparable, and fair."
  },
  {
    icon: "TD",
    title: "Transparent Recommendations",
    description: "Affiliate relationships and commercial considerations are clearly disclosed so users understand our incentives."
  },
  {
    icon: "PT",
    title: "Practical Testing",
    description: "We focus on real-world workflows and use cases instead of relying only on feature lists or vendor claims."
  },
  {
    icon: "CU",
    title: "Continuously Updated",
    description: "Reviews, comparisons, and guides are revisited regularly to keep recommendations relevant over time."
  }
];

export default function WhyTrustSection({
  title = "Why Trust ToolKno",
  description = "ToolKno is built to help users make better decisions with clearer methodology, transparent disclosures, and practical software guidance.",
  items = defaultTrustItems
}) {
  return (
    <HomeSection
      id="why-trust"
      eyebrow="Editorial trust"
      title={title}
      description={description}
    >
      <div className="grid gap-5 md:grid-cols-2">
        {items.map((item) => (
          <TrustCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <div className="mt-6">
        <Link
          href="/methodology"
          className="inline-flex items-center text-sm font-semibold text-sky-600 transition hover:text-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
        >
          Learn about our editorial methodology
        </Link>
      </div>
    </HomeSection>
  );
}
