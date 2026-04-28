import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import ShuffleTextLinesTool from "@/components/tools/widgets/ShuffleTextLinesTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("shuffle-text-lines");

export default function ShuffleTextLinesPage() {
  const tool = getToolContent("shuffle-text-lines");

  return (
    <>
      <ToolSchemaScripts slug="shuffle-text-lines" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <ShuffleTextLinesTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="shuffle-text-lines" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
