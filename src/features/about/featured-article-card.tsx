import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { Link } from "@/i18n/navigation";
import { cn } from "@/shared/lib/utils";

import type { FeaturedArticle } from "./featured-article-data";

interface FeaturedArticleCardProps {
  article: FeaturedArticle;
  readLabel: string;
}

export function FeaturedArticleCard({
  article,
  readLabel,
}: FeaturedArticleCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#e3e8f5] bg-white shadow-[0_16px_38px_rgba(46,73,139,0.08)] transition-transform duration-300 hover:-translate-y-1 dark:border-[#55578f] dark:bg-[#373764] dark:shadow-[0_0_22px_rgba(64,142,255,0.15)]">
      <div className="relative aspect-[1.3/1] overflow-hidden bg-[#f5f7ff] dark:bg-[#141b34]">
        <Image
          alt={article.title}
          className={cn(
            "object-cover transition-transform duration-500 group-hover:scale-105",
            article.imagePosition,
            article.treatment,
          )}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
          src={article.imageSrc}
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xl font-semibold text-[#1836b2] dark:text-[#8ed1f1]">
          {article.publication}
        </p>
        <p className="mt-4 text-sm text-[#5b6b8c] dark:text-white/55">
          {article.author} | {article.date}
        </p>
        <h3 className="mt-5 text-xl leading-8 font-medium text-[#141b34] dark:text-white">
          {article.title}
        </h3>

        <Link
          className="mt-auto inline-flex items-center justify-end gap-2 pt-8 text-base font-semibold text-[#141b34] transition-colors hover:text-[#1836b2] dark:text-white dark:hover:text-[#8ed1f1]"
          href={article.href}
        >
          {readLabel}
          <ArrowUpRight aria-hidden="true" className="size-5" />
        </Link>
      </div>
    </article>
  );
}
