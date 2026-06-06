import { getTranslations } from "next-intl/server";

import { SectionHeader } from "@/shared";

import { teamMembers } from "./team-data";
import { TeamPhotoTile } from "./team-photo-tile";

export async function AboutTeamSection() {
  const t = await getTranslations("AboutTeam");

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(25,79,204,0.18),transparent_34%)]" />

      <div className="relative mx-auto w-full max-w-[1180px]">
        <SectionHeader
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
          titleClassName="max-w-4xl text-4xl leading-tight sm:text-5xl"
          descriptionClassName="max-w-3xl text-base leading-7"
        />

        <div className="mt-14 rounded-xl bg-white p-3 sm:p-4 dark:bg-[#373764]">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <TeamPhotoTile key={member.name} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
