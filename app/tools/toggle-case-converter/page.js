import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import ToggleCaseConverterTool from "@/components/tools/widgets/ToggleCaseConverterTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("toggle-case-converter");

export default function ToggleCaseConverterPage() {
  const tool = getToolContent("toggle-case-converter");

  return (
    <>
      <ToolSchemaScripts slug="toggle-case-converter" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <ToggleCaseConverterTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="toggle-case-converter" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
