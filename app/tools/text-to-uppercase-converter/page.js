import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import TextToUppercaseConverterTool from "@/components/tools/widgets/TextToUppercaseConverterTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("text-to-uppercase-converter");

export default function TextToUppercaseConverterPage() {
  const tool = getToolContent("text-to-uppercase-converter");

  return (
    <>
      <ToolSchemaScripts slug="text-to-uppercase-converter" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <TextToUppercaseConverterTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="text-to-uppercase-converter" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
