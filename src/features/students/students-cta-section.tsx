import { getTranslations } from "next-intl/server";
import { SolutionCTASection } from "@/shared";

export async function StudentsCTASection() {
  const t = await getTranslations("StudentsCTA");

  return (
    <SolutionCTASection
      actions={[
        {
          href: "/signup",
          label: t("button"),
          showArrow: true,
        },
      ]}
      title={`${t("line1")}\n${t("line2")}`}
    />
  );
}
