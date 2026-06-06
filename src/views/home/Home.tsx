"use client";

import { useTranslations } from "next-intl";
import HeroSection from "@/features/hero/hero-section";
import {
  AudienceSection,
  LatestReleasesSection,
  NewsletterSection,
  NumbersStorySection,
} from "@/features/home";
import { TrustBar } from "@/shared";

const Home = () => {
  const t = useTranslations("HomeHero");

  return (
    <div className="flex flex-col">
      <HeroSection
        tagline={t("tagline")}
        heading={t("heading")}
        headingAccent={t("headingAccent")}
        subHeading={t("subHeading")}
        buttonOne={t("buttonOne")}
        buttonOneArrow
        buttonTwo={t("buttonTwo")}
        image="/images/svg/home-hero.svg"
      />
      <TrustBar />
      <AudienceSection />
      <NumbersStorySection />
      <LatestReleasesSection />
      <NewsletterSection />
    </div>
  );
};

export default Home;
