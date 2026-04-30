import { SectionHeader } from "@/shared";

import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(40,93,255,0.18),transparent_26%),radial-gradient(circle_at_82%_78%,rgba(33,70,187,0.18),transparent_24%)]" />

      <div className="relative mx-auto flex w-full max-w-270 flex-col items-center gap-12 sm:gap-14">
        <div className="w-full max-w-4xl pt-8 sm:pt-12">
          <SectionHeader
            align="center"
            className="gap-4"
            description="Tell us a little about you and we'll take it from there."
            descriptionClassName="max-w-2xl text-white/62"
            eyebrow="Contact"
            title="Let's talk."
            titleClassName="max-w-3xl text-[3rem] sm:text-6xl lg:text-[5rem]"
          />
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
