import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import TextToAsciiConverterTool from "@/components/tools/widgets/TextToAsciiConverterTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("text-to-ascii-converter");

export default function TextToAsciiConverterPage() {
  const tool = getToolContent("text-to-ascii-converter");

  return (
    <>
      <ToolSchemaScripts slug="text-to-ascii-converter" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <TextToAsciiConverterTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="text-to-ascii-converter" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
