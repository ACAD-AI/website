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
    <article className="rounded-2xl border border-[#4D4D7C] bg-[#323261] p-5 text-white shadow-[0_0_14px_0_rgba(50,50,97,1)] sm:p-6">
      <p className="text-base leading-7 text-white/90">{item.quote}</p>
      <div className="mt-6">
        <h3 className="text-[1.05rem] font-medium text-white">{item.author}</h3>
        <p className="mt-1 text-sm tracking-wide text-white/54 uppercase">
          {item.role}
        </p>
      </div>
    </article>
  );
}

export function StudentsWallOfLoveSection() {
  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_80%,rgba(44,93,255,0.24),transparent_22%),radial-gradient(circle_at_78%_35%,rgba(20,48,138,0.24),transparent_20%)]" />
      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center gap-10">
        <SectionHeader
          align="center"
          eyebrow="Wall of Love"
          title="What your peers are saying"
        />
        <div className="grid w-full gap-5 sm:grid-cols-2">
          {testimonials.map((item) => (
            <TestimonialCard item={item} key={item.author + item.role} />
          ))}
        </div>
        <PrimaryButton showArrow>See our Wall of Love</PrimaryButton>
      </div>
    </section>
  );
}
