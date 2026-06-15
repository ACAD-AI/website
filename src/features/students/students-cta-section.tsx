import { getTranslations } from "next-intl/server";
import { SolutionCTASection } from "@/shared";
import { ONBOARDING_URL } from "@/shared/config/site";

export async function StudentsCTASection() {
  const t = await getTranslations("StudentsCTA");

  return (
    <SolutionCTASection
      actions={[
        {
          href: ONBOARDING_URL,
          label: t("button"),
          showArrow: true,
        },
      ]}
      title={`${t("line1")}\n${t("line2")}`}
    />
  );
}
