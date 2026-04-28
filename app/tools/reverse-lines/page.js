import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import ReverseLinesTool from "@/components/tools/widgets/ReverseLinesTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("reverse-lines");

export default function ReverseLinesPage() {
  const tool = getToolContent("reverse-lines");

  return (
    <>
      <ToolSchemaScripts slug="reverse-lines" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <ReverseLinesTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="reverse-lines" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
