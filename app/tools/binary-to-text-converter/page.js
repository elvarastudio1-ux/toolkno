import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import BinaryToTextConverterTool from "@/components/tools/widgets/BinaryToTextConverterTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("binary-to-text-converter");

export default function BinaryToTextConverterPage() {
  const tool = getToolContent("binary-to-text-converter");

  return (
    <>
      <ToolSchemaScripts slug="binary-to-text-converter" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <BinaryToTextConverterTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="binary-to-text-converter" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
