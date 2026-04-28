import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import WordCounterTool from "@/components/tools/widgets/WordCounterTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("word-counter");

export default function WordCounterPage() {
  const tool = getToolContent("word-counter");

  return (
    <>
      <ToolSchemaScripts slug="word-counter" />
      <ToolLayout
        title={tool.name}
        description={tool.description}
        category={tool.categoryLabel}
        relatedTools={tool.relatedTools}
      >
        <FreeToolWrapper>
          <WordCounterTool />
        </FreeToolWrapper>

        <AdUnit slot="4100011102" />

        <AdUnit slot="4100011103" />

        <ToolInfoSections slug="word-counter" />

        <AdUnit slot="4100011104" />
      </ToolLayout>
    </>
  );
}
