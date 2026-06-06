import { getTranslations } from "next-intl/server";

import {
  GoldStandardSection,
  InActionSection,
  InstitutionsCTASection,
  InstitutionsHeroSection,
  InstitutionTypesSection,
  PlatformFeaturesSection,
  SecuritySection,
} from "@/features/institutions";
import { FadeIn, QuestionTypesSection, TrustBar } from "@/shared";

const InstitutionsView = async () => {
  const t = await getTranslations("InstitutionsHero");

  return (
    <div className="flex flex-col">
      <InstitutionsHeroSection
        button={t("button")}
        description={t("description")}
        eyebrow={t("eyebrow")}
        title={t("title")}
      />
      <InstitutionTypesSection />
      <FadeIn>
        <TrustBar />
      </FadeIn>
      <GoldStandardSection />
      <QuestionTypesSection />
      <InActionSection />
      <PlatformFeaturesSection />
      <SecuritySection />
      <FadeIn>
        <InstitutionsCTASection />
      </FadeIn>
    </div>
  );
};

export default InstitutionsView;
