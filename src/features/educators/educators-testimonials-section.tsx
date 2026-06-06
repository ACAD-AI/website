import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { ReviewCard, type ReviewItem } from "@/features/reviews";
import { Link } from "@/i18n/navigation";

const testimonials = ["sundays", "essays", "feedback", "review"] as const;

export async function EducatorsTestimonialsSection() {
  const t = await getTranslations("EducatorsTestimonials");

  const items: ReviewItem[] = testimonials.map((testimonial) => ({
    id: testimonial,
    audience: "educators",
    quote: t(`items.${testimonial}.quote`),
    author: t(`items.${testimonial}.author`),
    organization: t(`items.${testimonial}.organization`),
  }));

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_25%,rgba(25,79,204,0.18),transparent_30%)]" />

      <div className="relative mx-auto w-full max-w-[760px]">
        <h2 className="text-center text-4xl leading-tight font-medium tracking-tight text-white sm:text-5xl">
          {t("title")}
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {items.map((item) => (
            <ReviewCard item={item} key={item.id} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            className="inline-flex items-center gap-3 rounded-lg border border-[#3479ff] bg-[#1836b2] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2350d5]"
            href="/company/reviews"
          >
            {t("button")}
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
