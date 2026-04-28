import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import RemoveExtraSpacesTool from "@/components/tools/widgets/RemoveExtraSpacesTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("remove-extra-spaces");

export default function RemoveExtraSpacesPage() {
  const tool = getToolContent("remove-extra-spaces");

  return (
    <>
      <ToolSchemaScripts slug="remove-extra-spaces" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <RemoveExtraSpacesTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="remove-extra-spaces" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
