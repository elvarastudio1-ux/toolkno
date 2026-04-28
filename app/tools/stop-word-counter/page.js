import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import StopWordCounterTool from "@/components/tools/widgets/StopWordCounterTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("stop-word-counter");

export default function StopWordCounterPage() {
  const tool = getToolContent("stop-word-counter");

  return (
    <>
      <ToolSchemaScripts slug="stop-word-counter" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <StopWordCounterTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="stop-word-counter" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
