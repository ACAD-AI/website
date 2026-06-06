import { getTranslations } from "next-intl/server";

import { SolutionCTASection } from "@/shared";

export async function InstitutionsCTASection() {
  const t = await getTranslations("InstitutionsCTA");

  return (
    <SolutionCTASection
      actions={[
        {
          href: "/signup",
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
