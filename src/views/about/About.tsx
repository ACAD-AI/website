import { getTranslations } from "next-intl/server";

import {
  AboutFeaturedSection,
  AboutHeroSection,
  AboutPurposeValuesSection,
  AboutStorySection,
  AboutTeamSection,
} from "@/features/about";
import { NewsletterSection } from "@/features/home";
import { FadeIn, TrustBar } from "@/shared";

const backedByLogos = [
  { name: "BEDC", src: "/images/backed-by/BEDC.jpg" },
  { name: "Founderpass", src: "/images/backed-by/Founderpass.jpg" },
  {
    name: "Perplexity AI",
    src: "/images/backed-by/Perplexity_AI-Logo.wine.png",
  },
  {
    name: "CodeSpark Africa",
    src: "/images/backed-by/codespark_africa_logo.jpg",
  },
  {
    name: "Ibom Innovation",
    src: "/images/backed-by/ibom%20innovation.jpg",
  },
  {
    name: "Google Developer Groups on Campus, Babcock University",
    src: "/images/backed-by/jepO6J8R_400x400.jpg",
  },
  { name: "Opolo Global", src: "/images/backed-by/opolo.png" },
  {
    name: "SendPulse",
    src: "/images/backed-by/sendpulse-logo-png_seeklogo-347023.png",
  },
  { name: "Shecluded", src: "/images/backed-by/shecluded.png" },
  { name: "Spendbase", src: "/images/backed-by/spendbase.png" },
] as const;

const About = async () => {
  const t = await getTranslations("AboutBackedBy");

  return (
    <div className="flex flex-col">
      <AboutHeroSection />
      <TrustBar logos={backedByLogos} size="lg" title={t("eyebrow")} />
      <FadeIn>
        <AboutStorySection />
      </FadeIn>
      <FadeIn>
        <AboutPurposeValuesSection />
      </FadeIn>
      <FadeIn>
        <AboutTeamSection />
      </FadeIn>
      <FadeIn>
        <AboutFeaturedSection />
      </FadeIn>
      <NewsletterSection />
    </div>
  );
};

export default About;
