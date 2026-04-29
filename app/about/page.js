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
      intro="Toolkno is a free toolbox of 60+ small, fast text tools that run entirely in your browser. We started Toolkno because we kept opening five tabs every time we wanted to count words, dedupe a list, fix casing, or compare two drafts. So we built one place that does the boring stuff in one click — no signup, no uploads, no tracking of what you paste."
      sections={[
        {
          heading: "What Toolkno does",
          subheading: "60+ free text tools",
          body: [
            "Counters, case converters, cleaners, sorters, splitters, generators, analyzers, and developer encoders — all on one site.",
            "Every tool runs client-side. Your text never leaves your device, which means it's safe to paste private notes, draft emails, or work-in-progress writing."
          ]
        },
        {
          heading: "Who Toolkno is for",
          subheading: "Writers, marketers, students, and developers",
          body: [
            "Writers who need a quick word count or a clean title-case headline.",
            "SEO and marketing folks tightening meta descriptions and tweet copy.",
            "Students hitting essay minimums or cleaning up notes.",
            "Developers checking string formats, encoding, and quick text transforms."
          ]
        },
        {
          heading: "How Toolkno is built",
          subheading: "Client-side, privacy-first",
          body: [
            "The site runs on Next.js and React, deployed on a global CDN. Tools execute in your browser using JavaScript — no input is sent to a server.",
            "We don't store the text you paste. We use Google Analytics and Google AdSense, both of which are described in our Privacy Policy."
          ]
        },
        {
          heading: "How we keep it free",
          subheading: "Honest, non-intrusive ads",
          body: [
            "Toolkno is free because of Google AdSense. Ads sit in clearly marked spots and never appear inside the tool input or output area.",
            "If you want an ad-free experience, we offer an optional paid plan — but every tool stays free for everyone."
          ]
        },
        {
          heading: "Contact",
          subheading: "Get in touch",
          body: [
            "Bugs, feature requests, partnerships, or just feedback — email us at support@toolkno.com.",
            "We aim to reply within 2 business days."
          ]
        }
      ]}
    />
  );
}
