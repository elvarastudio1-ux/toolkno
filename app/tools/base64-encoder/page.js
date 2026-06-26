import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import Base64EncoderTool from "@/components/tools/widgets/Base64EncoderTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("base64-encoder");

export default function Base64EncoderPage() {
  const tool = getToolContent("base64-encoder");

  return (
    <>
      <ToolSchemaScripts slug="base64-encoder" />
      <ToolLayout
        title={tool.name}
        description={tool.description}
        category={tool.categoryLabel}
        relatedTools={tool.relatedTools}
      >
        <FreeToolWrapper>
          <Base64EncoderTool />
        </FreeToolWrapper>

        <AdUnit slot="4100012001" />
        <AdUnit slot="4100012002" />

        <ToolInfoSections slug="base64-encoder" />

        <AdUnit slot="4100012003" />
      </ToolLayout>
    </>
  );
}
