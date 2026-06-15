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
}: Pick<FeaturedArticle, "publication">) {
  if (publication === "EDUSIGHT") {
    return (
      <p className="text-lg font-black tracking-[-0.12em] text-[#0087c9]">
        EDU<span className="text-[#3957b7]">GIST</span>
        <sup className="ml-1 text-[7px] tracking-normal">®</sup>
      </p>
    );
  }

  return (
    <p className="font-serif text-3xl leading-none font-black tracking-[-0.08em] text-[#ff1515]">
      EduTimes
      <span className="ml-1 align-top font-sans text-[7px] tracking-[0.35em]">
        AFRICA
      </span>
    </p>
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
      <PublicationLogo publication={article.publication} />
      <p className="mt-7 text-sm text-[#5b6b8c] dark:text-white/65">
        <span className="mr-2 text-xs">by</span>
        {article.author} | {article.date}
      </p>
      <h3 className="mt-7 text-xl leading-[1.5] font-normal text-[#141b34] dark:text-white">
        {article.title}
      </h3>
    </>
  );

  return (
    <article className="group flex h-full min-h-[650px] flex-col overflow-hidden rounded-xl border border-[#e3e8f5] bg-white shadow-[0_16px_38px_rgba(46,73,139,0.08)] transition-transform duration-300 hover:-translate-y-1 dark:border-[#55578f] dark:bg-[#373764] dark:shadow-[0_0_22px_rgba(64,142,255,0.15)]">
      {article.imagePlacement !== "middle" && image}

      <div
        className={cn(
          "flex flex-col px-5 pt-8 sm:px-6",
          article.imagePlacement === "middle" ? "pb-5" : "flex-1",
        )}
      >
        {details}
      </div>

      {article.imagePlacement === "middle" && image}

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
