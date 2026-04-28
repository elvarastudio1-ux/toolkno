import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import ParagraphCounterTool from "@/components/tools/widgets/ParagraphCounterTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("paragraph-counter");

export default function ParagraphCounterPage() {
  const tool = getToolContent("paragraph-counter");

  return (
    <>
      <ToolSchemaScripts slug="paragraph-counter" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <ParagraphCounterTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="paragraph-counter" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
