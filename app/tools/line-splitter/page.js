import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import LineSplitterTool from "@/components/tools/widgets/LineSplitterTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("line-splitter");

export default function LineSplitterPage() {
  const tool = getToolContent("line-splitter");

  return (
    <>
      <ToolSchemaScripts slug="line-splitter" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <LineSplitterTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="line-splitter" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
