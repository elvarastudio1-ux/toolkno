import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import RemovePunctuationTool from "@/components/tools/widgets/RemovePunctuationTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("remove-punctuation");

export default function RemovePunctuationPage() {
  const tool = getToolContent("remove-punctuation");

  return (
    <>
      <ToolSchemaScripts slug="remove-punctuation" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <RemovePunctuationTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="remove-punctuation" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
