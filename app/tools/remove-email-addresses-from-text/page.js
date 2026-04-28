import ToolLayout from "@/components/tools/ToolLayout";
import FreeToolWrapper from "@/components/tools/FreeToolWrapper";
import ToolInfoSections from "@/components/tools/ToolInfoSections";
import AdUnit from "@/components/layout/AdUnit";
import ToolSchemaScripts from "@/components/tools/ToolSchemaScripts";
import RemoveEmailAddressesFromTextTool from "@/components/tools/widgets/RemoveEmailAddressesFromTextTool";
import { buildToolMetadata, getToolContent } from "@/lib/tools";

export const metadata = buildToolMetadata("remove-email-addresses-from-text");

export default function RemoveEmailAddressesFromTextPage() {
  const tool = getToolContent("remove-email-addresses-from-text");

  return (
    <>
      <ToolSchemaScripts slug="remove-email-addresses-from-text" />
      <ToolLayout
      title={tool.name}
      description={tool.description}
      category={tool.categoryLabel}
      relatedTools={tool.relatedTools}
    >
      <FreeToolWrapper>
        <RemoveEmailAddressesFromTextTool />
      </FreeToolWrapper>

      <AdUnit slot="4100011102" />

      <AdUnit slot="4100011103" />

      <ToolInfoSections slug="remove-email-addresses-from-text" />

      <AdUnit slot="4100011104" />
    </ToolLayout>
    </>
  );
}
