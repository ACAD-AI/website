import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";

import { Link } from "@/i18n/navigation";

import type { BlogPostSummary } from "./blog-types";
import { formatBlogDate } from "./blog-utils";

interface BlogCardProps {
  post: BlogPostSummary;
}

/** Links out to Substack when `externalUrl` is set, otherwise to the local page. */
function CardLink({
  className,
  href,
  external,
  children,
}: {
  className?: string;
  href: string;
  external: boolean;
  children: ReactNode;
}) {
  if (external) {
    return (
      <a className={className} href={href} rel="noreferrer" target="_blank">
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}

export function BlogCard({ post }: BlogCardProps) {
  const external = Boolean(post.externalUrl);
  const href = post.externalUrl ?? `/resources/blog/${post.slug}`;

  return (
    <article className="group overflow-hidden rounded-[14px] border border-[#e3e8f5] bg-white shadow-[0_16px_38px_rgba(46,73,139,0.08)] transition-transform duration-200 hover:-translate-y-1 dark:border-[#585d93] dark:bg-[#181f40] dark:shadow-[0_18px_36px_rgba(9,13,35,0.2)]">
      <CardLink className="block" external={external} href={href}>
        <div className="relative aspect-[1.3/1] overflow-hidden">
          <Image
            alt={post.coverImage.alt}
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={post.coverImage.src}
          />
        </div>
      </CardLink>

      <div className="space-y-5 px-5 py-5 sm:px-6 sm:py-6">
        <p className="text-[11px] font-medium tracking-[0.18em] text-[#5b6b8c] uppercase dark:text-white/52">
          {formatBlogDate(post.publishedAt)} • {post.readingTime}
        </p>

        <div className="space-y-3">
          <CardLink external={external} href={href}>
            <h3 className="text-[1.85rem] leading-[1.2] font-medium text-[#141b34] transition-colors group-hover:text-[#1836b2] dark:text-white dark:group-hover:text-[#b8ccff]">
              {post.title}
            </h3>
          </CardLink>
          <p className="text-[1.02rem] leading-8 text-[#5b6b8c] dark:text-white/62">
            {post.excerpt}
          </p>
        </div>

        <CardLink
          className="inline-flex items-center gap-2 text-sm font-medium text-[#141b34] transition-colors hover:text-[#1836b2] dark:text-white dark:hover:text-[#a8bbff]"
          external={external}
          href={href}
        >
          Read article
          <ArrowUpRight className="size-4" />
        </CardLink>
      </div>
    </article>
  );
}
