import { buildToolSchemas } from "@/lib/tools";

export default function ToolSchemaScripts({ slug }) {
  const schemas = buildToolSchemas(slug);
  if (!schemas) return null;

  const { webApplication, faqPage, breadcrumbList } = schemas;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplication) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
    </>
  );
}
