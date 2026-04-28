import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import ParagraphSplitterTool from "@/components/tools/widgets/ParagraphSplitterTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("paragraph-splitter");

export default function ParagraphSplitterPage() {
  const tool = getToolContent("paragraph-splitter");

  return (
    <>
      <ToolSchemaScripts slug="paragraph-splitter" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <ParagraphSplitterTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="paragraph-splitter" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
