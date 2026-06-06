import { FadeIn, SectionHeader, Stagger, StaggerItem } from "@/shared";

import { BlogCard } from "./blog-card";
import { getBlogPosts } from "./blog-data";

export async function BlogListSection() {
  const posts = await getBlogPosts();

  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_24%_24%,rgba(49,91,255,0.2),transparent_20%),radial-gradient(circle_at_78%_84%,rgba(34,69,177,0.22),transparent_24%)]" />

      <div className="relative mx-auto flex w-full max-w-[1320px] flex-col gap-12 sm:gap-14">
        <FadeIn className="mx-auto w-full max-w-5xl pt-8 sm:pt-12">
          <SectionHeader
            align="center"
            className="gap-4"
            description="Tutorials, product updates, and thoughts on the future of learning in Africa."
            descriptionClassName="max-w-3xl text-[#5b6b8c] dark:text-white/60"
            eyebrow="Blog"
            title="Notes from the frontier of AI + Education."
            titleClassName="max-w-5xl text-[3rem] sm:text-6xl lg:text-[5rem]"
          />
        </FadeIn>

        <div className="rounded-[16px] border border-[#e3e8f5] bg-white p-4 shadow-[0_16px_38px_rgba(46,73,139,0.08)] sm:p-5 dark:border-[#595f93] dark:bg-[#433f7d] dark:shadow-[0_24px_60px_rgba(9,13,35,0.2)]">
          <Stagger className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post) => (
              <StaggerItem key={post.slug}>
                <BlogCard post={post} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
