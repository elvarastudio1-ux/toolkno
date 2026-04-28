import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import RandomWordGeneratorTool from "@/components/tools/widgets/RandomWordGeneratorTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("random-word-generator");

export default function RandomWordGeneratorPage() {
  const tool = getToolContent("random-word-generator");

  return (
    <>
      <ToolSchemaScripts slug="random-word-generator" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <RandomWordGeneratorTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="random-word-generator" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
