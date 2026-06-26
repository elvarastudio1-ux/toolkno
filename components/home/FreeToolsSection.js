import HomeSection from "@/components/home/HomeSection";
import ToolExplorer from "@/components/home/ToolExplorer";

const defaultTrustNotes = [
  "Browser-based",
  "No installation",
  "Free to use"
];

export default function FreeToolsSection({
  title = "Free Tools",
  description = "Use ToolKno’s browser-based utilities to handle practical daily tasks quickly, without installing software or leaving your workflow.",
  tools = [],
  trustNotes = defaultTrustNotes
}) {
  return (
    <HomeSection
      id="free-tools"
      eyebrow="Practical daily utilities"
      title={title}
      description={description}
      primaryAction={{ label: "Browse All Free Tools", href: "/tools" }}
      secondaryAction={{ label: "See Tool Categories", href: "/tools" }}
    >
      <div className="mb-6 flex flex-wrap gap-x-8 gap-y-3" aria-label="Free tools trust notes">
        {trustNotes.map((note) => (
          <p key={note} className="text-sm text-slate-500">
            <span className="font-semibold text-slate-900">{note}</span>
          </p>
        ))}
      </div>

      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8">
        <ToolExplorer tools={tools} />
      </div>
    </HomeSection>
  );
}
