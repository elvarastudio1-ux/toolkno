import { buildMetadata } from "@/lib/metadata";
import LegalPageLayout from "@/components/legal/LegalPageLayout";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Read the Toolkno privacy policy covering browser-based processing, cookies, third-party services, and contact details.",
  path: "/privacy-policy"
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Privacy Policy"
      intro="At Toolkno, we respect your privacy and are committed to protecting it. This Privacy Policy explains how information is handled when you use our website and tools."
      sections={[
        {
          heading: "Information We Collect",
          subheading: "Non-Personal Information",
          body: ["We may collect limited non-personal information such as browser type, device type, pages visited, and approximate location at country level. This data is used only to improve website performance and user experience."]
        },
        {
          heading: "User Input and Tool Usage",
          subheading: "Client-Side Processing",
          body: [
            "All tools on Toolkno process text and data directly in your browser using client-side technologies such as JavaScript.",
            "Toolkno does not store user input, save processed data, or transmit tool data to servers. All content remains on your device."
          ]
        },
        {
          heading: "Cookies",
          subheading: "How Cookies Are Used",
          body: ["Toolkno may use cookies for analytics and performance monitoring, improving user experience, and advertising services when enabled."],
          list: ["Analytics and performance monitoring", "Improving user experience", "Advertising services when enabled"]
        },
        {
          heading: "Managing Cookies",
          body: ["You can disable cookies through your browser settings at any time."]
        },
        {
          heading: "Third-Party Services",
          subheading: "External Providers",
          body: [
            "We may use third-party services such as analytics or advertising partners. These providers may collect data in accordance with their own privacy policies.",
            "Toolkno does not control how third-party services manage their data."
          ]
        },
        {
          heading: "Changes to This Policy",
          subheading: "Policy Updates",
          body: ["This Privacy Policy may be updated periodically. Any changes will be posted on this page with immediate effect."]
        },
        {
          heading: "Contact Information",
          subheading: "Get in Touch",
          body: ["If you have any questions regarding this Privacy Policy, you can contact us at support@toolkno.com."]
        }
      ]}
    />
  );
}
