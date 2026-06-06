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
import { QuestionTypesSection, TrustBar } from "@/shared";

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
      <TrustBar />
      <GoldStandardSection />
      <QuestionTypesSection />
      <InActionSection />
      <PlatformFeaturesSection />
      <SecuritySection />
      <InstitutionsCTASection />
    </div>
  );
};

export default InstitutionsView;
