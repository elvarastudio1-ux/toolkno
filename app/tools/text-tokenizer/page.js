import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import TextTokenizerTool from "@/components/tools/widgets/TextTokenizerTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("text-tokenizer");

export default function TextTokenizerPage() {
  const tool = getToolContent("text-tokenizer");

  return (
    <>
      <ToolSchemaScripts slug="text-tokenizer" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <TextTokenizerTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="text-tokenizer" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
