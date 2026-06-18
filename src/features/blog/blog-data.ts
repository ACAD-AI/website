import { fetchSanity, isSanityConfigured } from "@/shared/lib/sanity/client";

import { fallbackBlogPosts } from "./blog-mock-data";
import { blogPostBySlugQuery } from "./blog-queries";
import { fetchSubstackPosts } from "./blog-substack";
import type {
  BlogPost,
  BlogPostNavigation,
  BlogPostSummary,
} from "./blog-types";

function normalizeSummary(
  post: Partial<BlogPostSummary> &
    Pick<BlogPostSummary, "id" | "slug" | "title">,
): BlogPostSummary {
  return {
    coverImage: {
      alt: post.coverImage?.alt ?? post.title,
      height: post.coverImage?.height ?? 960,
      src: post.coverImage?.src ?? fallbackBlogPosts[0].coverImage.src,
      width: post.coverImage?.width ?? 1440,
    },
    description: post.description ?? post.excerpt ?? "",
    excerpt: post.excerpt ?? "",
    externalUrl: post.externalUrl,
    id: post.id,
    publishedAt: post.publishedAt ?? new Date().toISOString(),
    readingTime: post.readingTime ?? "5 min read",
    slug: post.slug,
    title: post.title,
  };
}

function normalizePost(
  post: Partial<BlogPost> & Pick<BlogPost, "id" | "slug" | "title">,
): BlogPost {
  return {
    ...normalizeSummary(post),
    author: post.author ?? "The Acad AI Team",
    body: Array.isArray(post.body) ? post.body : [],
    fallbackParagraphs: post.fallbackParagraphs ?? [
      "We are using fallback content for this article until the Sanity post body is connected.",
    ],
  };
}

export async function getBlogPosts(): Promise<BlogPostSummary[]> {
  // Substack RSS is the source of truth for the blog list. Cards link out to
  // each post (see BlogCard). Falls back to mock posts only if the feed fails.
  try {
    const posts = await fetchSubstackPosts();

    if (posts.length) {
      return posts.map((post) => normalizeSummary(post));
    }
  } catch (error) {
    console.error("Failed to load Substack blog feed:", error);
  }

  return fallbackBlogPosts;
}

export async function getBlogPostBySlug(
  slug: string,
): Promise<BlogPost | null> {
  if (!isSanityConfigured()) {
    return fallbackBlogPosts.find((post) => post.slug === slug) ?? null;
  }

  const post = await fetchSanity<BlogPost>(blogPostBySlugQuery, { slug });

  if (!post) {
    return fallbackBlogPosts.find((item) => item.slug === slug) ?? null;
  }

  return normalizePost({
    ...post,
    id: post.id,
  });
}

export async function getBlogPostNavigation(
  slug: string,
): Promise<BlogPostNavigation> {
  const posts = await getBlogPosts();
  const currentIndex = posts.findIndex((post) => post.slug === slug);

  if (currentIndex === -1) {
    return {
      next: null,
      previous: null,
    };
  }

  return {
    next: posts[currentIndex - 1] ?? null,
    previous: posts[currentIndex + 1] ?? null,
  };
}
