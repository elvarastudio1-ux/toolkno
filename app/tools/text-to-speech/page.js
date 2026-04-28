import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import TextToSpeechTool from "@/components/tools/widgets/TextToSpeechTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("text-to-speech");

export default function TextToSpeechPage() {
  const tool = getToolContent("text-to-speech");

  return (
    <>
      <ToolSchemaScripts slug="text-to-speech" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <TextToSpeechTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="text-to-speech" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
