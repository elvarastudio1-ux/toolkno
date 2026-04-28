import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import TextDifferenceCheckerTool from "@/components/tools/widgets/TextDifferenceCheckerTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("text-difference-checker");

export default function TextDifferenceCheckerPage() {
  const tool = getToolContent("text-difference-checker");

  return (
    <>
      <ToolSchemaScripts slug="text-difference-checker" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <TextDifferenceCheckerTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="text-difference-checker" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
