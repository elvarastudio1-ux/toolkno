import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import PrefixSuffixTextGeneratorTool from "@/components/tools/widgets/PrefixSuffixTextGeneratorTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("prefix-suffix-text-generator");

export default function PrefixSuffixTextGeneratorPage() {
  const tool = getToolContent("prefix-suffix-text-generator");

  return (
    <>
      <ToolSchemaScripts slug="prefix-suffix-text-generator" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <PrefixSuffixTextGeneratorTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="prefix-suffix-text-generator" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
