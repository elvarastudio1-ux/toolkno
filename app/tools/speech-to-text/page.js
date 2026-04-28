import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import SpeechToTextTool from "@/components/tools/widgets/SpeechToTextTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("speech-to-text");

export default function SpeechToTextPage() {
  const tool = getToolContent("speech-to-text");

  return (
    <>
      <ToolSchemaScripts slug="speech-to-text" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <SpeechToTextTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="speech-to-text" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
