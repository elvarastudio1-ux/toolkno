import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import TextSorterZATool from "@/components/tools/widgets/TextSorterZATool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("text-sorter-z-a");

export default function TextSorterZAPage() {
  const tool = getToolContent("text-sorter-z-a");

  return (
    <>
      <ToolSchemaScripts slug="text-sorter-z-a" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <TextSorterZATool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="text-sorter-z-a" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
