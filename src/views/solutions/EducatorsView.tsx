import { getTranslations } from "next-intl/server";

import {
  EducatorsFaqSection,
  EducatorsFeaturesSection,
  EducatorsHeroSection,
  EducatorsInActionSection,
  EducatorsPlaygroundSection,
  EducatorsTestimonialsSection,
  EducatorsWorkflowSection,
} from "@/features/educators";
import { FadeIn, QuestionTypesSection, TrustBar } from "@/shared";

const EducatorsView = async () => {
  const t = await getTranslations("EducatorsHero");

  return (
    <div className="flex flex-col">
      <EducatorsHeroSection
        button={t("button")}
        description={t("description")}
        eyebrow={t("eyebrow")}
        title={t("title")}
      />
      <EducatorsPlaygroundSection />
      <FadeIn>
        <TrustBar />
      </FadeIn>
      <EducatorsInActionSection />
      <EducatorsFeaturesSection />
      <FadeIn>
        <QuestionTypesSection />
      </FadeIn>
      <EducatorsWorkflowSection />
      <EducatorsTestimonialsSection />
      <EducatorsFaqSection />
    </div>
  );
};

export default EducatorsView;
