import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import TextMaskingTool from "@/components/tools/widgets/TextMaskingTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("text-masking-tool");

export default function TextMaskingToolPage() {
  const tool = getToolContent("text-masking-tool");

  return (
    <>
      <ToolSchemaScripts slug="text-masking-tool" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <TextMaskingTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="text-masking-tool" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
