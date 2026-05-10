"use client";

import { useTranslations } from "next-intl";
import HeroSection from "@/features/hero/hero-section";
import { SectionHeader, TrustBar } from "@/shared";

const Home = () => {
  const t = useTranslations("HomeHero");
  const tHome = useTranslations("Home");

  return (
    <div className="flex flex-col space-y-24">
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
      <SectionHeader
        eyebrow={tHome("eyebrow")}
        title={tHome("title")}
        description={tHome("description")}
      />
    </div>
  );
};

export default Home;
