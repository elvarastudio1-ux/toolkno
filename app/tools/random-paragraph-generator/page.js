import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import RandomParagraphGeneratorTool from "@/components/tools/widgets/RandomParagraphGeneratorTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("random-paragraph-generator");

export default function RandomParagraphGeneratorPage() {
  const tool = getToolContent("random-paragraph-generator");

  return (
    <>
      <ToolSchemaScripts slug="random-paragraph-generator" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <RandomParagraphGeneratorTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="random-paragraph-generator" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
