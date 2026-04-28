import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import TextToLowercaseConverterTool from "@/components/tools/widgets/TextToLowercaseConverterTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("text-to-lowercase-converter");

export default function TextToLowercaseConverterPage() {
  const tool = getToolContent("text-to-lowercase-converter");

  return (
    <>
      <ToolSchemaScripts slug="text-to-lowercase-converter" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <TextToLowercaseConverterTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="text-to-lowercase-converter" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
