import HomeSection from "@/components/home/HomeSection";
import ResourceCard from "@/components/home/ResourceCard";

const defaultResources = [
  {
    icon: "BG",
    title: "Buying Guides",
    description: "Placeholder guides for evaluating software options with clearer criteria, tradeoffs, and fit.",
    href: "/about#resources"
  },
  {
    icon: "ST",
    title: "Software Tutorials",
    description: "Placeholder tutorials for learning setup steps, workflows, and practical software usage.",
    href: "/about#resources"
  },
  {
    icon: "AI",
    title: "AI Guides",
    description: "Placeholder guides for understanding AI tools, use cases, and responsible adoption at work.",
    href: "/about#resources"
  },
  {
    icon: "PT",
    title: "Productivity Tips",
    description: "Placeholder resources for improving focus, organization, and repeatable day-to-day workflows.",
    href: "/about#resources"
  },
  {
    icon: "BR",
    title: "Business Resources",
    description: "Placeholder resources for operations, growth, and smarter software decisions across a business.",
    href: "/about#resources"
  },
  {
    icon: "TC",
    title: "Tool Collections",
    description: "Placeholder curated collections that group useful tools and resources around common needs.",
    href: "/about#resources"
  }
];

export default function LearnResourcesSection({
  title = "Learn & Resources",
  description = "ToolKno helps users make better software and business decisions through practical guides, tutorials, and curated learning resources.",
  resources = defaultResources,
  footerNote = "Practical guides updated regularly."
}) {
  return (
    <HomeSection
      id="learn-resources"
      eyebrow="Educational content"
      title={title}
      description={description}
      primaryAction={{ label: "Browse All Resources", href: "/about#resources" }}
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {resources.map((resource) => (
          <ResourceCard
            key={resource.title}
            icon={resource.icon}
            title={resource.title}
            description={resource.description}
            href={resource.href}
          />
        ))}
      </div>

      <p className="mt-6 text-sm leading-7 text-slate-500">{footerNote}</p>
    </HomeSection>
  );
}
