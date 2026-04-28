import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import RemoveLineBreaksTool from "@/components/tools/widgets/RemoveLineBreaksTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("remove-line-breaks");

export default function RemoveLineBreaksPage() {
  const tool = getToolContent("remove-line-breaks");

  return (
    <>
      <ToolSchemaScripts slug="remove-line-breaks" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <RemoveLineBreaksTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="remove-line-breaks" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
