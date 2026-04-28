import { buildMetadata } from "@/lib/metadata";
import LegalPageLayout from "@/components/legal/LegalPageLayout";

export const metadata = buildMetadata({
  title: "DMCA",
  description: "Review Toolkno's DMCA and copyright policy, including notice requirements and the review process.",
  path: "/dmca"
});

export default function DmcaPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="DMCA and Copyright Policy"
      intro="Toolkno respects intellectual property rights and expects users to do the same. This policy outlines how copyright-related concerns are handled on our platform."
      sections={[
        {
          heading: "Copyright Infringement Policy",
          subheading: "Respect for Copyright",
          body: [
            "Toolkno does not host or store user-submitted content. All tools process content locally in the user's browser.",
            "However, if you believe that any content on Toolkno infringes your copyright, you may submit a notice as outlined below."
          ]
        },
        {
          heading: "Submitting a DMCA Notice",
          subheading: "Required Information",
          body: ["To file a copyright infringement notice, please provide the following information."],
          list: [
            "A description of the copyrighted work you believe has been infringed",
            "The URL of the page containing the alleged infringing material",
            "Proof of ownership or authorization",
            "Your name and contact information",
            "A statement that the information provided is accurate"
          ]
        },
        {
          heading: "Review Process",
          subheading: "Evaluation",
          body: ["Upon receiving a valid request, Toolkno will review the information and take appropriate action if necessary."]
        },
        {
          heading: "False Claims",
          subheading: "Responsibility",
          body: ["Submitting false or misleading copyright claims may result in legal consequences. Please ensure that all information provided is accurate."]
        },
        {
          heading: "Contact Information",
          subheading: "DMCA Requests",
          body: ["All copyright-related requests should be sent to support@toolkno.com."]
        }
      ]}
    />
  );
}
