import { getTranslations } from "next-intl/server";
import HeroSection from "@/features/hero/hero-section";
import {
  StudentsCommunitySection,
  StudentsCTASection,
  StudentsFeaturesSection,
  StudentsWallOfLoveSection,
} from "@/features/students";

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
      <StudentsFeaturesSection />
      <StudentsCommunitySection />
      <StudentsWallOfLoveSection />
      <StudentsCTASection />
    </div>
  );
};

export default StudentsView;
