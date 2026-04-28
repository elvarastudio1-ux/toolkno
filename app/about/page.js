import { buildMetadata } from "@/lib/metadata";
import LegalPageLayout from "@/components/legal/LegalPageLayout";

export const metadata = buildMetadata({
  title: "About",
  description: "Learn about Toolkno, its browser-based tool philosophy, privacy focus, and mission to simplify everyday digital tasks.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <LegalPageLayout
      eyebrow="About Toolkno"
      title="About Toolkno"
      intro="Toolkno is an online platform designed to provide fast, simple, and browser-based tools that help users complete everyday digital tasks with ease. Our goal is to make useful tools accessible to everyone without requiring downloads, sign-ups, or complicated workflows."
      sections={[
        {
          heading: "What Toolkno Does",
          subheading: "Browser-Based Tools",
          body: [
            "Toolkno offers a growing collection of tools that run directly in your browser using modern web technologies. This ensures speed, privacy, and ease of use.",
            "Most tools on Toolkno work instantly without requiring user accounts or file uploads."
          ]
        },
        {
          heading: "Our Focus",
          subheading: "Productivity and Utility",
          body: [
            "We focus on building tools that solve real problems such as text processing, formatting, calculations, and data handling.",
            "Toolkno is designed with privacy in mind. Tool processing happens locally in your browser whenever possible."
          ]
        },
        {
          heading: "How Toolkno Is Built",
          subheading: "Client-Side Technology",
          body: [
            "Our tools primarily use client-side technologies such as HTML, CSS, and JavaScript to ensure fast performance and scalability.",
            "We continuously add new tools and improve existing ones based on usability and performance."
          ]
        },
        {
          heading: "Our Vision",
          subheading: "A Unified Tool Platform",
          body: ["Toolkno aims to become a comprehensive utility platform offering a wide range of tools across multiple categories, all accessible from a single place."]
        },
        {
          heading: "Contact Information",
          subheading: "Get in Touch",
          body: ["If you have feedback, suggestions, or questions about Toolkno, feel free to contact us at support@toolkno.com."]
        }
      ]}
    />
  );
}
