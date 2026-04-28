import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import RandomSentenceGeneratorTool from "@/components/tools/widgets/RandomSentenceGeneratorTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("random-sentence-generator");

export default function RandomSentenceGeneratorPage() {
  const tool = getToolContent("random-sentence-generator");

  return (
    <>
      <ToolSchemaScripts slug="random-sentence-generator" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <RandomSentenceGeneratorTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="random-sentence-generator" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
