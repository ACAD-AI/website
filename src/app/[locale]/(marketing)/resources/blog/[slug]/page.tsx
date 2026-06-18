import { redirect } from "@/i18n/navigation";

/**
 * Blog posts now live on Substack and the blog list links out to them, so the
 * on-site article route just redirects to the blog index. Keeps any old or
 * indexed /resources/blog/<slug> URLs from 404-ing.
 */
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale } = await params;
  redirect({ href: "/resources/blog", locale });
}
