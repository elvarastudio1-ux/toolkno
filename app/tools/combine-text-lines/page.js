import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import CombineTextLinesTool from "@/components/tools/widgets/CombineTextLinesTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("combine-text-lines");

export default function CombineTextLinesPage() {
  const tool = getToolContent("combine-text-lines");

  return (
    <>
      <ToolSchemaScripts slug="combine-text-lines" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <CombineTextLinesTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="combine-text-lines" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
