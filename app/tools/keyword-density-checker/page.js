import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import KeywordDensityCheckerTool from "@/components/tools/widgets/KeywordDensityCheckerTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("keyword-density-checker");

export default function KeywordDensityCheckerPage() {
  const tool = getToolContent("keyword-density-checker");

  return (
    <>
      <ToolSchemaScripts slug="keyword-density-checker" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <KeywordDensityCheckerTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="keyword-density-checker" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
