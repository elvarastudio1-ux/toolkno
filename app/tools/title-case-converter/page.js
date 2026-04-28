import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import TitleCaseConverterTool from "@/components/tools/widgets/TitleCaseConverterTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("title-case-converter");

export default function TitleCaseConverterPage() {
  const tool = getToolContent("title-case-converter");

  return (
    <>
      <ToolSchemaScripts slug="title-case-converter" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <TitleCaseConverterTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="title-case-converter" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
