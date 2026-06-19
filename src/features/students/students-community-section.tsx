import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { ctaButtonVariants, FadeIn, SectionHeader } from "@/shared";
import { STUDENT_COMMUNITY_URL } from "@/shared/config/site";

const communityImages = [
  {
    src: "/images/community/community-1.jpg",
    className: "left-[18%] top-[16%] w-[24%] aspect-square",
  },
  {
    src: "/images/community/community-2.jpg",
    className: "left-[44%] top-0 h-[49%] w-[24%]",
  },
  {
    src: "/images/community/community-3.jpg",
    className: "left-0 top-[52%] w-[29%] aspect-square",
  },
  {
    src: "/images/community/community-4.jpg",
    className: "left-[31%] top-[52%] h-[49%] w-[24%]",
  },
  {
    src: "/images/community/community-5.jpg",
    className: "left-[58%] top-[52%] w-[29%] aspect-[6/5]",
  },
] as const;

export async function StudentsCommunitySection() {
  const t = await getTranslations("StudentsCommunity");

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(44,93,255,0.18),transparent_55%)]" />
      <div className="relative mx-auto grid w-full max-w-[1120px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="flex flex-col items-start">
          <FadeIn>
            <SectionHeader
              align="left"
              eyebrow={t("eyebrow")}
              title={t("title")}
              description={t("description")}
              descriptionClassName="max-w-lg"
            />
          </FadeIn>
          <a
            className={ctaButtonVariants({
              variant: "secondary",
              className: "mt-10 bg-white text-[#155EEF]",
            })}
            href={STUDENT_COMMUNITY_URL}
            rel="noreferrer"
            target="_blank"
          >
            {t("button")}
          </a>
        </div>

        <FadeIn className="w-full">
          <div
            aria-hidden="true"
            className="relative mx-auto aspect-[13/9] w-full max-w-[520px]"
          >
            {communityImages.map((image) => (
              <div
                className={`absolute overflow-hidden rounded-lg ${image.className}`}
                key={image.src}
              >
                <Image
                  alt=""
                  className="object-cover"
                  fill
                  sizes="(max-width: 639px) 29vw, 150px"
                  src={image.src}
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
