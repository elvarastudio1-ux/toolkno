import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import TextComplexityAnalyzerTool from "@/components/tools/widgets/TextComplexityAnalyzerTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("text-complexity-analyzer");

export default function TextComplexityAnalyzerPage() {
  const tool = getToolContent("text-complexity-analyzer");

  return (
    <>
      <ToolSchemaScripts slug="text-complexity-analyzer" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <TextComplexityAnalyzerTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="text-complexity-analyzer" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
