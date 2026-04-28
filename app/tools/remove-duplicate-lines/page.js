import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import RemoveDuplicateLinesTool from "@/components/tools/widgets/RemoveDuplicateLinesTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("remove-duplicate-lines");

export default function RemoveDuplicateLinesPage() {
  const tool = getToolContent("remove-duplicate-lines");

  return (
    <>
      <ToolSchemaScripts slug="remove-duplicate-lines" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <RemoveDuplicateLinesTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="remove-duplicate-lines" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
