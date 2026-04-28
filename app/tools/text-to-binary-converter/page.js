import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import TextToBinaryConverterTool from "@/components/tools/widgets/TextToBinaryConverterTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("text-to-binary-converter");

export default function TextToBinaryConverterPage() {
  const tool = getToolContent("text-to-binary-converter");

  return (
    <>
      <ToolSchemaScripts slug="text-to-binary-converter" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <TextToBinaryConverterTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="text-to-binary-converter" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
