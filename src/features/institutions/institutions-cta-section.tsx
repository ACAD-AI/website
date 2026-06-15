import { getTranslations } from "next-intl/server";

import { SolutionCTASection } from "@/shared";
import { ONBOARDING_URL } from "@/shared/config/site";

export async function InstitutionsCTASection() {
  const t = await getTranslations("InstitutionsCTA");

  return (
    <SolutionCTASection
      actions={[
        {
          href: ONBOARDING_URL,
          label: t("primaryButton"),
        },
        {
          href: "/company/contact",
          label: t("secondaryButton"),
          variant: "secondary",
        },
      ]}
      description={t("description")}
      title={t("title")}
    />
  );
}
