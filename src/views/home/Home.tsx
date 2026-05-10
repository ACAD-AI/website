"use client";

import { useTranslations } from "next-intl";
import HeroSection from "@/features/hero/hero-section";
import { SectionHeader, TrustBar } from "@/shared";

const Home = () => {
  const t = useTranslations("HomeHero");

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
        eyebrow={"One Platform"}
        title={"Every Assessment Need, Met."}
        description={
          "Built for institutions, educators, and students — each with their own intuitive workflow."
        }
      />
    </div>
  );
};

export default Home;
