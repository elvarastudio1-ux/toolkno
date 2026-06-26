import HomeSection from "@/components/home/HomeSection";
import AiUseCaseCard from "@/components/home/AiUseCaseCard";

const defaultUseCases = [
  {
    icon: "WR",
    title: "Writing",
    description: "Placeholder category for AI writing tools that help with drafting, editing, and idea development.",
    href: "/about#ai-tools"
  },
  {
    icon: "DS",
    title: "Design",
    description: "Placeholder category for AI design tools used for visuals, layouts, and creative asset generation.",
    href: "/about#ai-tools"
  },
  {
    icon: "VD",
    title: "Video",
    description: "Placeholder category for AI video tools that support editing, generation, and production workflows.",
    href: "/about#ai-tools"
  },
  {
    icon: "CD",
    title: "Coding",
    description: "Placeholder category for AI coding tools that assist with building, debugging, and iteration.",
    href: "/about#ai-tools"
  },
  {
    icon: "MK",
    title: "Marketing",
    description: "Placeholder category for AI marketing tools focused on campaigns, copy, and content operations.",
    href: "/about#ai-tools"
  },
  {
    icon: "PR",
    title: "Productivity",
    description: "Placeholder category for AI productivity tools that support planning, organization, and daily work.",
    href: "/about#ai-tools"
  }
];

export default function AiToolsSection({
  title = "AI Tools",
  description = "ToolKno helps users explore AI software by practical use case so discovery feels useful, focused, and easier to navigate.",
  useCases = defaultUseCases,
  footerNote = "Curated by use case, updated regularly."
}) {
  return (
    <HomeSection
      id="ai-tools"
      eyebrow="Organized AI discovery"
      title={title}
      description={description}
      primaryAction={{ label: "Browse All AI Tools", href: "/about#ai-tools" }}
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {useCases.map((useCase) => (
          <AiUseCaseCard
            key={useCase.title}
            icon={useCase.icon}
            title={useCase.title}
            description={useCase.description}
            href={useCase.href}
          />
        ))}
      </div>

      <p className="mt-6 text-sm leading-7 text-slate-500">{footerNote}</p>
    </HomeSection>
  );
}
