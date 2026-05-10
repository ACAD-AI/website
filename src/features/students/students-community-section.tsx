import { SecondaryButton, SectionHeader } from "@/shared";

export function StudentsCommunitySection() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(44,93,255,0.18),transparent_55%)]" />
      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center gap-8 text-center">
        <SectionHeader
          align="center"
          eyebrow="Community"
          title="You don't have to do it alone."
          description="We want to be with you through every step of your academic success journey by giving you new study hacks, answers to your questions, and more support in other ways."
        />
        <SecondaryButton className="bg-[white] text-[#155EEF]">
          Yes please
        </SecondaryButton>
      </div>
    </section>
  );
}
