import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import RemoveNumbersFromTextTool from "@/components/tools/widgets/RemoveNumbersFromTextTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("remove-numbers-from-text");

export default function RemoveNumbersFromTextPage() {
  const tool = getToolContent("remove-numbers-from-text");

  return (
    <>
      <ToolSchemaScripts slug="remove-numbers-from-text" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <RemoveNumbersFromTextTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="remove-numbers-from-text" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
