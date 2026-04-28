import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import RemoveUrlsFromTextTool from "@/components/tools/widgets/RemoveUrlsFromTextTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("remove-urls-from-text");

export default function RemoveUrlsFromTextPage() {
  const tool = getToolContent("remove-urls-from-text");

  return (
    <>
      <ToolSchemaScripts slug="remove-urls-from-text" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <RemoveUrlsFromTextTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="remove-urls-from-text" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
