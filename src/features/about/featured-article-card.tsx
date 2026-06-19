import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { Link } from "@/i18n/navigation";
import { cn } from "@/shared/lib/utils";

import type { FeaturedArticle } from "./featured-article-data";

interface FeaturedArticleCardProps {
  article: FeaturedArticle;
  readLabel: string;
}

function PublicationLogo({
  publication,
  publicationLogoSrc,
}: Pick<FeaturedArticle, "publication" | "publicationLogoSrc">) {
  return (
    <div className="relative h-12 w-44 rounded-sm bg-white px-2">
      <Image
        alt={`${publication} logo`}
        className="object-contain object-left p-1"
        fill
        sizes="176px"
        src={publicationLogoSrc}
      />
    </div>
  );
}

export function FeaturedArticleCard({
  article,
  readLabel,
}: FeaturedArticleCardProps) {
  const image = (
    <div className="relative aspect-[1.62/1] shrink-0 overflow-hidden bg-[#f5f7ff] dark:bg-[#141b34]">
      <Image
        alt={article.title}
        className={cn(
          "object-cover transition-transform duration-500 group-hover:scale-105",
          article.imagePosition,
          article.treatment,
        )}
        fill
        sizes="(min-width: 1024px) 28vw, (min-width: 640px) 50vw, 100vw"
        src={article.imageSrc}
      />
    </div>
  );

  const details = (
    <>
      <PublicationLogo
        publication={article.publication}
        publicationLogoSrc={article.publicationLogoSrc}
      />
      <p className="mt-7 text-sm text-[#5b6b8c] dark:text-white/65">
        <span className="mr-2 text-xs">by</span>
        {article.author} | {article.date}
      </p>
      <h3 className="mt-7 text-xl leading-[1.5] font-normal text-[#141b34] dark:text-white">
        {article.title}
      </h3>
      {article.description ? (
        <p className="mt-4 line-clamp-5 text-sm leading-7 text-[#5b6b8c] dark:text-white/60">
          {article.description}
        </p>
      ) : null}
    </>
  );

  return (
    <article className="group flex h-full min-h-[650px] flex-col overflow-hidden rounded-xl border border-[#e3e8f5] bg-white shadow-[0_16px_38px_rgba(46,73,139,0.08)] transition-transform duration-300 hover:-translate-y-1 dark:border-[#55578f] dark:bg-[#373764] dark:shadow-[0_0_22px_rgba(64,142,255,0.15)]">
      {article.imagePlacement === "top" && image}

      <div className="flex flex-1 flex-col px-5 pt-8 pb-5 sm:px-6">
        {details}
      </div>

      {article.imagePlacement === "bottom" && image}

      <div className="mt-auto px-5 pb-6 sm:px-6">
        <Link
          className="inline-flex w-full items-center justify-end gap-2 pt-6 text-base font-semibold text-[#141b34] transition-colors hover:text-[#1836b2] dark:text-white dark:hover:text-[#8ed1f1]"
          href={article.href}
        >
          {readLabel}
          <ArrowUpRight aria-hidden="true" className="size-5" />
        </Link>
      </div>
    </article>
  );
}
