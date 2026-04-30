import { FaqAccordion } from "@/features/faq/faq-accordion";
import { FaqContactCard } from "@/features/faq/faq-contact-card";
import { faqItems } from "@/features/faq/faq-data";
import { SectionHeader } from "@/shared";

export function FaqSection() {
  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(44,93,255,0.16),transparent_26%),radial-gradient(circle_at_80%_78%,rgba(26,61,173,0.18),transparent_24%)]" />

      <div className="relative mx-auto flex w-full max-w-270 flex-col items-center gap-14">
        <div className="w-full max-w-4xl pt-8 sm:pt-12">
          <SectionHeader
            align="center"
            className="gap-4"
            description="Everything you need to know about Acad AI."
            descriptionClassName="max-w-2xl text-white/62"
            eyebrow="FAQs"
            title="Frequently Asked Questions"
            titleClassName="max-w-3xl text-[2.95rem] leading-[1.04] sm:text-6xl lg:text-[5rem]"
          />
        </div>

        <div className="w-full max-w-185">
          <FaqAccordion items={faqItems} />
        </div>

        <div className="w-full pt-4">
          <FaqContactCard />
        </div>
      </div>
    </section>
  );
}
