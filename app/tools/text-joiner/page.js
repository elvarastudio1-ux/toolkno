import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import TextJoinerTool from "@/components/tools/widgets/TextJoinerTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("text-joiner");

export default function TextJoinerPage() {
  const tool = getToolContent("text-joiner");

  return (
    <>
      <ToolSchemaScripts slug="text-joiner" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <TextJoinerTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="text-joiner" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
