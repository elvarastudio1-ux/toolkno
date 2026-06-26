import HomeSection from "@/components/home/HomeSection";
import WorkflowCard from "@/components/home/WorkflowCard";

const defaultWorkflows = [
  {
    icon: "NL",
    title: "Start a Newsletter",
    description: "Placeholder workflow for launching a newsletter with the right tools, setup steps, and publishing habits.",
    href: "/about#resources"
  },
  {
    icon: "WB",
    title: "Build a Website",
    description: "Placeholder workflow for choosing a website stack, planning content, and getting a site live.",
    href: "/about#resources"
  },
  {
    icon: "CT",
    title: "Create Better Content",
    description: "Placeholder workflow for improving research, drafting, editing, and publishing across formats.",
    href: "/about#resources"
  },
  {
    icon: "GB",
    title: "Grow an Online Business",
    description: "Placeholder workflow for combining tools, systems, and education to support sustainable digital growth.",
    href: "/about#resources"
  },
  {
    icon: "TP",
    title: "Improve Team Productivity",
    description: "Placeholder workflow for better collaboration, documentation, and day-to-day operational clarity.",
    href: "/about#resources"
  },
  {
    icon: "AI",
    title: "Learn AI for Work",
    description: "Placeholder workflow for understanding practical AI use cases and integrating them into real tasks.",
    href: "/about#ai-tools"
  }
];

export default function PopularWorkflowsSection({
  title = "Popular Workflows",
  description = "ToolKno helps users solve real-world problems by organizing tools, guidance, and software recommendations around practical workflows.",
  workflows = defaultWorkflows
}) {
  return (
    <HomeSection
      id="popular-workflows"
      eyebrow="Workflow discovery"
      title={title}
      description={description}
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {workflows.map((workflow) => (
          <WorkflowCard
            key={workflow.title}
            icon={workflow.icon}
            title={workflow.title}
            description={workflow.description}
            href={workflow.href}
          />
        ))}
      </div>
    </HomeSection>
  );
}
