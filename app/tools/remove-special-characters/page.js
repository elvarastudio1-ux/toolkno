import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import RemoveSpecialCharactersTool from "@/components/tools/widgets/RemoveSpecialCharactersTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("remove-special-characters");

export default function RemoveSpecialCharactersPage() {
  const tool = getToolContent("remove-special-characters");

  return (
    <>
      <ToolSchemaScripts slug="remove-special-characters" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <RemoveSpecialCharactersTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="remove-special-characters" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
