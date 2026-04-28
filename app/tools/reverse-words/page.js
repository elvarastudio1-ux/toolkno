import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import ReverseWordsTool from "@/components/tools/widgets/ReverseWordsTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("reverse-words");

export default function ReverseWordsPage() {
  const tool = getToolContent("reverse-words");

  return (
    <>
      <ToolSchemaScripts slug="reverse-words" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <ReverseWordsTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="reverse-words" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
