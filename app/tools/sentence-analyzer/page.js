import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import SentenceAnalyzerTool from "@/components/tools/widgets/SentenceAnalyzerTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("sentence-analyzer");

export default function SentenceAnalyzerPage() {
  const tool = getToolContent("sentence-analyzer");

  return (
    <>
      <ToolSchemaScripts slug="sentence-analyzer" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <SentenceAnalyzerTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="sentence-analyzer" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
