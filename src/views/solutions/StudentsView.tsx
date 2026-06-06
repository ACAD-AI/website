import { getTranslations } from "next-intl/server";
import HeroSection from "@/features/hero/hero-section";
import {
  StudentsCommunitySection,
  StudentsCTASection,
  StudentsFeaturesSection,
  StudentsWallOfLoveSection,
} from "@/features/students";
import { FadeIn } from "@/shared";

const StudentsView = async () => {
  const t = await getTranslations("StudentsHero");

  return (
    <div className="flex flex-col gap-20">
      <HeroSection
        tagline={t("tagline")}
        heading={t("heading")}
        subHeading={t("subHeading")}
        buttonOne={t("buttonOne")}
        buttonOneArrow
        buttonTwo={t("buttonTwo")}
      />
      <FadeIn>
        <StudentsFeaturesSection />
      </FadeIn>
      <FadeIn>
        <StudentsCommunitySection />
      </FadeIn>
      <FadeIn>
        <StudentsWallOfLoveSection />
      </FadeIn>
      <FadeIn>
        <StudentsCTASection />
      </FadeIn>
    </div>
  );
};

export default StudentsView;
