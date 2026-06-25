import { buildMetadata } from "@/lib/metadata";
import { tools } from "@/lib/tools";
import HeroSection from "@/components/home/HeroSection";
import ChooseYourPathSection from "@/components/home/ChooseYourPathSection";
import FreeToolsSection from "@/components/home/FreeToolsSection";
import FeaturedReviewsComparisonsSection from "@/components/home/FeaturedReviewsComparisonsSection";
import AiToolsSection from "@/components/home/AiToolsSection";
import PopularWorkflowsSection from "@/components/home/PopularWorkflowsSection";
import LearnResourcesSection from "@/components/home/LearnResourcesSection";
import WhyTrustSection from "@/components/home/WhyTrustSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import ContinueExploringSection from "@/components/home/ContinueExploringSection";

export function generateMetadata() {
  return buildMetadata({
    title: "Free Text Tools, Software Reviews & AI Guides",
    description:
      "Toolkno gives you 60+ free browser-based text tools alongside honest software reviews, AI tool comparisons, and practical workflow guides. No signup, instant results.",
    path: "/"
  });
}

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ChooseYourPathSection />
      <FreeToolsSection tools={tools} />
      <FeaturedReviewsComparisonsSection />
      <AiToolsSection />
      <PopularWorkflowsSection />
      <LearnResourcesSection />
      <WhyTrustSection />
      <NewsletterSection />
      <ContinueExploringSection />
    </main>
  );
}
