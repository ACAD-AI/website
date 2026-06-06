import { getTranslations } from "next-intl/server";

import {
  AboutFeaturedSection,
  AboutHeroSection,
  AboutPurposeValuesSection,
  AboutStorySection,
  AboutTeamSection,
} from "@/features/about";
import { NewsletterSection } from "@/features/home";
import { TrustBar } from "@/shared";

const About = async () => {
  const t = await getTranslations("AboutBackedBy");

  return (
    <div className="flex flex-col">
      <AboutHeroSection />
      <TrustBar title={t("eyebrow")} />
      <AboutStorySection />
      <AboutPurposeValuesSection />
      <AboutTeamSection />
      <AboutFeaturedSection />
      <NewsletterSection />
    </div>
  );
};

export default About;
