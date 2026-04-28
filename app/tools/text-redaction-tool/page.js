import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import TextRedactionTool from "@/components/tools/widgets/TextRedactionTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("text-redaction-tool");

export default function TextRedactionToolPage() {
  const tool = getToolContent("text-redaction-tool");

  return (
    <>
      <ToolSchemaScripts slug="text-redaction-tool" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <TextRedactionTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="text-redaction-tool" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
