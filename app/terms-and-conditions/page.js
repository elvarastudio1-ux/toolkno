import { buildMetadata } from "@/lib/metadata";
import LegalPageLayout from "@/components/legal/LegalPageLayout";

export const metadata = buildMetadata({
  title: "Terms and Conditions",
  description: "Review Toolkno terms and conditions, permitted use, prohibited use, tool availability, and contact details.",
  path: "/terms-and-conditions"
});

export default function TermsAndConditionsPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Terms and Conditions"
      intro="By accessing or using Toolkno, you agree to comply with and be bound by these Terms and Conditions. Please read them carefully before using our website and tools."
      sections={[
        {
          heading: "Use of Toolkno",
          subheading: "Permitted Use",
          body: ["Toolkno provides online tools for general informational and productivity purposes. You agree to use the tools responsibly and only for lawful purposes."]
        },
        {
          heading: "Prohibited Use",
          body: ["You agree not to misuse the tools for illegal activities, attempt to disrupt or damage the website, or reverse engineer or copy tool functionality."],
          list: ["Misuse the tools for illegal activities", "Attempt to disrupt or damage the website", "Reverse engineer or copy tool functionality"]
        },
        {
          heading: "Tool Accuracy and Availability",
          subheading: "No Guarantees",
          body: [
            "While we aim to provide accurate and reliable tools, Toolkno does not guarantee that tool results will always be error-free, complete, or suitable for every purpose.",
            "We may modify, suspend, or discontinue any tool or feature at any time without notice."
          ]
        },
        {
          heading: "Intellectual Property Rights",
          subheading: "Ownership",
          body: [
            "All content, tools, design, branding, and code on Toolkno are owned by Toolkno unless otherwise stated.",
            "You may not copy, reproduce, distribute, or resell any part of Toolkno without prior permission."
          ]
        },
        {
          heading: "Limitation of Liability",
          subheading: "Use at Your Own Risk",
          body: ["Toolkno shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our tools."]
        },
        {
          heading: "External Links",
          subheading: "Third-Party Websites",
          body: ["Toolkno may contain links to external websites. We are not responsible for the content or practices of third-party sites."]
        },
        {
          heading: "Changes to These Terms",
          subheading: "Updates",
          body: ["We reserve the right to update these Terms and Conditions at any time. Continued use of Toolkno constitutes acceptance of the updated terms."]
        },
        {
          heading: "Governing Law",
          subheading: "Legal Jurisdiction",
          body: ["These Terms and Conditions are governed by applicable laws."]
        },
        {
          heading: "Contact Information",
          subheading: "Questions or Concerns",
          body: ["If you have any questions about these Terms and Conditions, you may contact us at support@toolkno.com."]
        }
      ]}
    />
  );
}
