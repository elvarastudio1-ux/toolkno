import HomeSection from "@/components/home/HomeSection";
import ExploreCard from "@/components/home/ExploreCard";
import HeaderSearch from "@/components/layout/HeaderSearch";

const defaultLinks = [
  {
    title: "Free Tools",
    description: "Use browser-based tools instantly.",
    ctaLabel: "Browse Tools",
    href: "/tools"
  },
  {
    title: "Software Reviews",
    description: "Read in-depth software reviews before buying.",
    ctaLabel: "Browse Reviews",
    href: "/about#reviews"
  },
  {
    title: "Comparisons",
    description: "Compare software side-by-side.",
    ctaLabel: "View Comparisons",
    href: "/about#comparisons"
  },
  {
    title: "Guides & Resources",
    description: "Learn workflows, tutorials and buying guides.",
    ctaLabel: "Explore Resources",
    href: "/about#resources"
  }
];

export default function ContinueExploringSection({
  title = "Continue Exploring",
  description = "Choose the next part of ToolKno to explore based on whether you need an immediate utility, deeper research, or practical guidance.",
  links = defaultLinks
}) {
  return (
    <HomeSection id="continue-exploring" eyebrow="Next steps" title={title} description={description}>
      <div className="grid gap-5 xl:grid-cols-4 md:grid-cols-2">
        {links.map((link) => (
          <ExploreCard
            key={link.title}
            title={link.title}
            description={link.description}
            ctaLabel={link.ctaLabel}
            href={link.href}
          />
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
        <p className="text-sm leading-7 text-slate-500">
          Can&apos;t find what you&apos;re looking for? Use search to explore ToolKno.
        </p>
        <div className="mt-4 max-w-xl">
          <HeaderSearch mobile />
        </div>
      </div>
    </HomeSection>
  );
}
