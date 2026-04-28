import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import ReverseTextTool from "@/components/tools/widgets/ReverseTextTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("reverse-text");

export default function ReverseTextPage() {
  const tool = getToolContent("reverse-text");

  return (
    <>
      <ToolSchemaScripts slug="reverse-text" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <ReverseTextTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="reverse-text" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
