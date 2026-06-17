import { getTranslations } from "next-intl/server";
import HeroSection from "@/features/hero/hero-section";
import {
  StudentsCommunitySection,
  StudentsCTASection,
  StudentsFeaturesSection,
  StudentsWallOfLoveSection,
} from "@/features/students";
import { FadeIn } from "@/shared";
import { ONBOARDING_URL, STUDENT_COMMUNITY_URL } from "@/shared/config/site";

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
        buttonOneHref={ONBOARDING_URL}
        buttonTwo={t("buttonTwo")}
        buttonTwoHref={STUDENT_COMMUNITY_URL}
      />
      <FadeIn>
        <StudentsFeaturesSection />
      </FadeIn>
      <FadeIn>
        <StudentsWallOfLoveSection />
      </FadeIn>
      <FadeIn>
        <StudentsCommunitySection />
      </FadeIn>
      <FadeIn>
        <StudentsCTASection />
      </FadeIn>
    </div>
  );
};

export default StudentsView;
