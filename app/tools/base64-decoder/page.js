import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import Base64DecoderTool from "@/components/tools/widgets/Base64DecoderTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("base64-decoder");

export default function Base64DecoderPage() {
  const tool = getToolContent("base64-decoder");

  return (
    <>
      <ToolSchemaScripts slug="base64-decoder" />
      <ToolLayout
        title={tool.name}
        description={tool.description}
        category={tool.categoryLabel}
        relatedTools={tool.relatedTools}
      >
        <FreeToolWrapper>
          <Base64DecoderTool />
        </FreeToolWrapper>

        <AdUnit slot="4100012001" />
        <AdUnit slot="4100012002" />

        <ToolInfoSections slug="base64-decoder" />

        <AdUnit slot="4100012003" />
      </ToolLayout>
    </>
  );
}