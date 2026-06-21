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

// `className` bumps logos whose source art carries heavy whitespace (mostly the
// square 1:1 files) so their mark reads with the same weight as the tight, wide
// logos (Paystack, Shecluded, Babcock EDC).
const backedByLogos = [
  {
    name: "Babcock Entrepreneurship Development Centre",
    src: "/images/backed-by/babcock-EDC.png",
  },
  {
    name: "INSEAD AI Venture Lab",
    src: "/images/backed-by/ai-vent.jpg",
  },
  { name: "Shecluded", src: "/images/backed-by/shecluded-2.png" },
  {
    name: "Google Developer Groups on Campus, Babcock University",
    src: "/images/backed-by/gdg.png",
    className: "h-24 sm:h-28",
  },
  { name: "Paystack", src: "/images/backed-by/paystack.png" },
  {
    name: "CodeSpark",
    src: "/images/backed-by/codespark.jpg",
    className: "h-24 sm:h-28",
  },
  {
    name: "Spendbase",
    src: "/images/backed-by/sendbase.png",
    className: "h-24 sm:h-28",
  },
  { name: "SendPulse", src: "/images/backed-by/sendpulse.png" },
  { name: "AWS Startups", src: "/images/backed-by/aws-startup.png" },
  { name: "CloudPlexo", src: "/images/backed-by/cloudplexo.png" },
  { name: "Ibom Air", src: "/images/backed-by/ibom-air.png" },
  { name: "Founderpass", src: "/images/backed-by/founder-pass.png" },
  { name: "Perplexity AI", src: "/images/backed-by/perplexity.png" },
  { name: "iDICE Startup Bridge", src: "/images/backed-by/idice.png" },
  {
    name: "Google for Startups",
    src: "/images/backed-by/google-f-s.png",
    className: "h-24 sm:h-28",
  },
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
