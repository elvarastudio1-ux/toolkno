import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import SentenceCaseConverterTool from "@/components/tools/widgets/SentenceCaseConverterTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("sentence-case-converter");

export default function SentenceCaseConverterPage() {
  const tool = getToolContent("sentence-case-converter");

  return (
    <>
      <ToolSchemaScripts slug="sentence-case-converter" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <SentenceCaseConverterTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="sentence-case-converter" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
