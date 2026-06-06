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
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#55578f] bg-[#373764] shadow-[0_0_22px_rgba(64,142,255,0.15)] transition-transform duration-300 hover:-translate-y-1">
      <div className="relative aspect-[1.3/1] overflow-hidden bg-[#141b34]">
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
        <p className="text-xl font-semibold text-[#8ed1f1]">
          {article.publication}
        </p>
        <p className="mt-4 text-sm text-white/55">
          {article.author} | {article.date}
        </p>
        <h3 className="mt-5 text-xl leading-8 font-medium text-white">
          {article.title}
        </h3>

        <Link
          className="mt-auto inline-flex items-center justify-end gap-2 pt-8 text-base font-semibold text-white transition-colors hover:text-[#8ed1f1]"
          href={article.href}
        >
          {readLabel}
          <ArrowUpRight aria-hidden="true" className="size-5" />
        </Link>
      </div>
    </article>
  );
}
