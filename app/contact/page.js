import { buildMetadata } from "@/lib/metadata";
import LegalPageLayout from "@/components/legal/LegalPageLayout";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Contact Toolkno for support, feedback, bug reports, business inquiries, and partnership requests.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <LegalPageLayout
      eyebrow="Contact"
      title="Contact Toolkno"
      intro="If you have questions, feedback, or suggestions about Toolkno, feel free to get in touch. We are always open to improving our tools and platform."
      sections={[
        {
          heading: "How to Contact Toolkno",
          subheading: "Email Support",
          body: ["You can reach us directly at support@toolkno.com."]
        },
        {
          heading: "What You Can Contact Us For",
          subheading: "General Inquiries",
          body: [
            "Questions about Toolkno, our tools, or platform features.",
            "Suggestions, bug reports, or requests for new tools.",
            "Business inquiries, collaborations, or partnership discussions."
          ]
        },
        {
          heading: "Response Time",
          subheading: "Support Availability",
          body: ["We aim to respond to all legitimate inquiries as quickly as possible."]
        }
      ]}
    />
  );
}
