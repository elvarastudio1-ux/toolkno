import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import CensorTextTool from "@/components/tools/widgets/CensorTextTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("censor-text-tool");

export default function CensorTextToolPage() {
  const tool = getToolContent("censor-text-tool");

  return (
    <>
      <ToolSchemaScripts slug="censor-text-tool" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <CensorTextTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="censor-text-tool" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
