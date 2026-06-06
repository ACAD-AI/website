import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { getBlogPostBySlug } from "@/features/blog";
import { localizedPath } from "@/shared/config/seo";
import { BlogPostView } from "@/views";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {};
  }

  const url = localizedPath(`/resources/blog/${slug}`, locale);

  return {
    description: post.description,
    title: post.title,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url,
    },
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
