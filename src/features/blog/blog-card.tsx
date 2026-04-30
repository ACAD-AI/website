import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { Link } from "@/i18n/navigation";

import type { BlogPostSummary } from "./blog-types";
import { formatBlogDate } from "./blog-utils";

interface BlogCardProps {
  post: BlogPostSummary;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group overflow-hidden rounded-[14px] border border-[#585d93] bg-[#181f40] shadow-[0_18px_36px_rgba(9,13,35,0.2)] transition-transform duration-200 hover:-translate-y-1">
      <Link className="block" href={`/resources/blog/${post.slug}`}>
        <div className="relative aspect-[1.3/1] overflow-hidden">
          <Image
            alt={post.coverImage.alt}
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={post.coverImage.src}
          />
        </div>
      </Link>

      <div className="space-y-5 px-5 py-5 sm:px-6 sm:py-6">
        <p className="text-[11px] font-medium tracking-[0.18em] text-white/52 uppercase">
          {formatBlogDate(post.publishedAt)} • {post.readingTime}
        </p>

        <div className="space-y-3">
          <Link href={`/resources/blog/${post.slug}`}>
            <h3 className="text-[1.85rem] leading-[1.2] font-medium text-white transition-colors group-hover:text-[#b8ccff]">
              {post.title}
            </h3>
          </Link>
          <p className="text-[1.02rem] leading-8 text-white/62">
            {post.excerpt}
          </p>
        </div>

        <Link
          className="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-[#a8bbff]"
          href={`/resources/blog/${post.slug}`}
        >
          Read blog
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </article>
  );
}
