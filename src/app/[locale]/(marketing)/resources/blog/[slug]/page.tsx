import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { getBlogPostBySlug } from "@/features/blog";
import { BlogPostView } from "@/views";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    description: post.description,
    title: post.title,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  return <BlogPostView slug={slug} />;
}
