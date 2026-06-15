import { getTranslations } from "next-intl/server";

import { FadeIn, SectionHeader, Stagger, StaggerItem } from "@/shared";

import { FeaturedArticleCard } from "./featured-article-card";
import { featuredArticles } from "./featured-article-data";

export async function AboutFeaturedSection() {
  const t = await getTranslations("AboutFeatured");

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(25,79,204,0.18),transparent_36%)]" />

      <div className="relative mx-auto w-full max-w-[1320px]">
        <FadeIn>
          <SectionHeader
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
            titleClassName="max-w-3xl text-4xl leading-tight sm:text-5xl"
            descriptionClassName="max-w-3xl text-base leading-7"
          />
        </FadeIn>

        <Stagger className="mt-14 grid gap-6 lg:grid-cols-3">
          {featuredArticles.map((article) => (
            <StaggerItem key={`${article.publication}-${article.date}`}>
              <FeaturedArticleCard
                article={article}
                readLabel={t("readBlog")}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
