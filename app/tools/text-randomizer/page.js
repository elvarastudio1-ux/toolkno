import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import TextRandomizerTool from "@/components/tools/widgets/TextRandomizerTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("text-randomizer");

export default function TextRandomizerPage() {
  const tool = getToolContent("text-randomizer");

  return (
    <>
      <ToolSchemaScripts slug="text-randomizer" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <TextRandomizerTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="text-randomizer" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
