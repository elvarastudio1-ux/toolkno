import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import FindAndReplaceTextTool from "@/components/tools/widgets/FindAndReplaceTextTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("find-and-replace-text");

export default function FindAndReplaceTextPage() {
  const tool = getToolContent("find-and-replace-text");

  return (
    <>
      <ToolSchemaScripts slug="find-and-replace-text" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <FindAndReplaceTextTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="find-and-replace-text" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
