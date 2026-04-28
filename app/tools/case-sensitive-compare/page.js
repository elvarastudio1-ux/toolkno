import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import CaseSensitiveCompareTool from "@/components/tools/widgets/CaseSensitiveCompareTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("case-sensitive-compare");

export default function CaseSensitiveComparePage() {
  const tool = getToolContent("case-sensitive-compare");

  return (
    <>
      <ToolSchemaScripts slug="case-sensitive-compare" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <CaseSensitiveCompareTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="case-sensitive-compare" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
