import { PortableText } from "@portabletext/react";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";

import { Link } from "@/i18n/navigation";

import { BlogPostNavigationCard } from "./blog-post-navigation-card";
import type { BlogPost, BlogPostNavigation } from "./blog-types";
import { formatBlogDate } from "./blog-utils";

const portableTextComponents = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-[1.02rem] leading-8 text-[#5b6b8c] dark:text-white/72">
        {children}
      </p>
    ),
  },
};

interface BlogPostArticleProps {
  post: BlogPost;
  navigation: BlogPostNavigation;
}

export function BlogPostArticle({ post, navigation }: BlogPostArticleProps) {
  const hasPortableText = Array.isArray(post.body) && post.body.length > 0;

  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(49,91,255,0.18),transparent_22%),radial-gradient(circle_at_78%_86%,rgba(34,69,177,0.2),transparent_24%)]" />

      <div className="relative mx-auto flex w-full max-w-[1320px] flex-col gap-10">
        <div className="mx-auto w-full max-w-4xl space-y-7 pt-8 sm:pt-12">
          <Link
            className="inline-flex items-center gap-2 text-sm text-[#5b6b8c] transition-colors hover:text-[#141b34] dark:text-white/62 dark:hover:text-white"
            href="/resources/blog"
          >
            <ChevronLeft className="size-4" />
            All posts
          </Link>

          <div className="space-y-5">
            <p className="text-xs font-semibold tracking-[0.42em] text-[#1836b2] uppercase sm:text-sm dark:text-[#86c7ed]">
              {formatBlogDate(post.publishedAt)} • {post.readingTime}
            </p>
            <h1 className="max-w-4xl text-[3rem] leading-[1.04] font-medium tracking-tight text-[#141b34] sm:text-6xl lg:text-[5rem] dark:text-white">
              {post.title}
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-[#5b6b8c] dark:text-white/62">
              {post.description}
            </p>
          </div>

          <div className="relative aspect-[1.55/1] overflow-hidden rounded-[16px] border border-[#e6eaf3] dark:border-white/10">
            <Image
              alt={post.coverImage.alt}
              className="object-cover"
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 980px"
              src={post.coverImage.src}
            />
          </div>

          <div className="space-y-6">
            {hasPortableText ? (
              <PortableText
                components={portableTextComponents}
                value={post.body as Parameters<typeof PortableText>[0]["value"]}
              />
            ) : (
              post.fallbackParagraphs.map((paragraph) => (
                <p
                  className="text-[1.02rem] leading-8 text-[#5b6b8c] dark:text-white/72"
                  key={paragraph}
                >
                  {paragraph}
                </p>
              ))
            )}
          </div>

          <p className="text-base text-[#5b6b8c] dark:text-white/68">
            By {post.author}
          </p>

          {navigation.previous || navigation.next ? (
            <div className="grid gap-4 md:grid-cols-2">
              {navigation.previous ? (
                <BlogPostNavigationCard
                  direction="previous"
                  post={navigation.previous}
                />
              ) : (
                <div />
              )}

              {navigation.next ? (
                <BlogPostNavigationCard
                  direction="next"
                  post={navigation.next}
                />
              ) : (
                <div />
              )}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
