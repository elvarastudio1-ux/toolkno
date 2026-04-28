import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import RemoveHtmlTagsTool from "@/components/tools/widgets/RemoveHtmlTagsTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("remove-html-tags");

export default function RemoveHtmlTagsPage() {
  const tool = getToolContent("remove-html-tags");

  return (
    <>
      <ToolSchemaScripts slug="remove-html-tags" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <RemoveHtmlTagsTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="remove-html-tags" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
