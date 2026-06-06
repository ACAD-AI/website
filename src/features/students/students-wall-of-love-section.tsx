import { getTranslations } from "next-intl/server";
import { PrimaryButton, SectionHeader } from "@/shared";

interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
}

const testimonials: TestimonialItem[] = [
  {
    quote:
      '"Acad AI gave me back my Sundays. The feedback quality is incredible."',
    author: "Dr. Adaeze O.",
    role: "Lecturer, UNILAG",
  },
  {
    quote:
      '"I used to dread marking 200 essays. Now it\'s a 15-minute review."',
    author: "Prof. Tunde A.",
    role: "OAU",
  },
  {
    quote:
      '"My students get feedback the same day. Their performance has soared."',
    author: "Mrs. Fatima B.",
    role: "Mrs. Fatima B.",
  },
  {
    quote:
      '"I used to dread marking 200 essays. Now it\'s a 15-minute review."',
    author: "Dr. Adaeze O.",
    role: "OAU",
  },
];

function TestimonialCard({ item }: { item: TestimonialItem }) {
  return (
    <article className="rounded-2xl border border-[#e3e8f5] bg-white p-5 text-[#141b34] shadow-[0_16px_38px_rgba(46,73,139,0.08)] sm:p-6 dark:border-[#4D4D7C] dark:bg-[#323261] dark:text-white dark:shadow-[0_0_14px_0_rgba(50,50,97,1)]">
      <p className="text-base leading-7 text-[#5b6b8c] dark:text-white/90">
        {item.quote}
      </p>
      <div className="mt-6">
        <h3 className="text-[1.05rem] font-medium text-[#141b34] dark:text-white">
          {item.author}
        </h3>
        <p className="mt-1 text-sm tracking-wide text-[#5b6b8c] uppercase dark:text-white/54">
          {item.role}
        </p>
      </div>
    </article>
  );
}

export async function StudentsWallOfLoveSection() {
  const t = await getTranslations("StudentsWallOfLove");

  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_80%,rgba(44,93,255,0.24),transparent_22%),radial-gradient(circle_at_78%_35%,rgba(20,48,138,0.24),transparent_20%)]" />
      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center gap-10">
        <SectionHeader
          align="center"
          eyebrow={t("eyebrow")}
          title={t("title")}
        />
        <div className="grid w-full gap-5 sm:grid-cols-2">
          {testimonials.map((item) => (
            <TestimonialCard item={item} key={item.author + item.role} />
          ))}
        </div>
        <PrimaryButton showArrow>{t("button")}</PrimaryButton>
      </div>
    </section>
  );
}
