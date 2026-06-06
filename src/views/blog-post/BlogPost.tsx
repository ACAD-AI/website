import { notFound } from "next/navigation";

import {
  BlogPostArticle,
  getBlogPostBySlug,
  getBlogPostNavigation,
} from "@/features/blog";

interface BlogPostViewProps {
  slug: string;
}

const BlogPostView = async ({ slug }: BlogPostViewProps) => {
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const navigation = await getBlogPostNavigation(slug);

  return (
    <div className="min-h-screen bg-[#f5f7ff] dark:bg-[#171f40]">
      <BlogPostArticle navigation={navigation} post={post} />
    </div>
  );
};

export default BlogPostView;
