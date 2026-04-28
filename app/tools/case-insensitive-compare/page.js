import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import CaseInsensitiveCompareTool from "@/components/tools/widgets/CaseInsensitiveCompareTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("case-insensitive-compare");

export default function CaseInsensitiveComparePage() {
  const tool = getToolContent("case-insensitive-compare");

  return (
    <>
      <ToolSchemaScripts slug="case-insensitive-compare" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <CaseInsensitiveCompareTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="case-insensitive-compare" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
