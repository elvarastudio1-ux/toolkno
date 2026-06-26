import HomeSection from "@/components/home/HomeSection";
import PathwayCard from "@/components/home/PathwayCard";

const defaultPaths = [
  {
    icon: "[]",
    title: "Free Tools",
    description: "Solve a task immediately with ToolKno’s live browser-based utility library.",
    ctaLabel: "Browse Tools",
    href: "/tools"
  },
  {
    icon: "RV",
    title: "Software Reviews",
    description: "Learn what a product does, who it fits, and what to know before choosing it.",
    ctaLabel: "Explore Reviews",
    href: "/about#reviews"
  },
  {
    icon: "VS",
    title: "Comparisons",
    description: "Compare software side by side and understand the tradeoffs more clearly.",
    ctaLabel: "Compare Tools",
    href: "/about#comparisons"
  },
  {
    icon: "AI",
    title: "AI Tools",
    description: "Discover AI software by use case and explore where each tool fits best.",
    ctaLabel: "Browse AI Tools",
    href: "/about#ai-tools"
  },
  {
    icon: "GD",
    title: "Guides & Resources",
    description: "Learn workflows, best practices, and practical ways to get more from your software.",
    ctaLabel: "Browse Guides",
    href: "/about#resources"
  }
];

export default function ChooseYourPathSection({
  title = "Choose Your Path",
  description = "Start with the part of ToolKno that best matches what you need right now.",
  paths = defaultPaths
}) {
  return (
    <HomeSection
      id="choose-your-path"
      eyebrow="Find the right entry point"
      title={title}
      description={description}
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {paths.map((path) => (
          <PathwayCard
            key={path.title}
            icon={path.icon}
            title={path.title}
            description={path.description}
            ctaLabel={path.ctaLabel}
            href={path.href}
          />
        ))}
      </div>
    </HomeSection>
  );
}
