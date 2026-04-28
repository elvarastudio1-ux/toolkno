import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import SentenceCounterTool from "@/components/tools/widgets/SentenceCounterTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("sentence-counter");

export default function SentenceCounterPage() {
  const tool = getToolContent("sentence-counter");

  return (
    <>
      <ToolSchemaScripts slug="sentence-counter" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <SentenceCounterTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="sentence-counter" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
