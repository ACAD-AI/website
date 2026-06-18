import { getTranslations } from "next-intl/server";

import { SolutionCTASection } from "@/shared";
import { CALENDAR_URL, CONTACT_URL } from "@/shared/config/site";

export async function InstitutionsCTASection() {
  const t = await getTranslations("InstitutionsCTA");

  return (
    <SolutionCTASection
      actions={[
        {
          href: CONTACT_URL,
          label: t("primaryButton"),
        },
        {
          href: CALENDAR_URL,
          label: t("secondaryButton"),
          variant: "secondary",
        },
      ]}
      description={t("description")}
      title={t("title")}
    />
  );
}
