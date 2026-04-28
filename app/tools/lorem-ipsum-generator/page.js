import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import LoremIpsumGeneratorTool from "@/components/tools/widgets/LoremIpsumGeneratorTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("lorem-ipsum-generator");

export default function LoremIpsumGeneratorPage() {
  const tool = getToolContent("lorem-ipsum-generator");

  return (
    <>
      <ToolSchemaScripts slug="lorem-ipsum-generator" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <LoremIpsumGeneratorTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="lorem-ipsum-generator" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
