interface ReleaseCardProps {
  description: string;
  label: string;
  title: string;
}

export function ReleaseCard({ description, label, title }: ReleaseCardProps) {
  return (
    <article className="min-h-[260px] rounded-xl border border-[#1f44c9] bg-[#1836B2] p-6 shadow-[0_18px_40px_rgba(24,54,178,0.25)] sm:p-8 dark:border-[#55578f] dark:bg-[#373764] dark:bg-none dark:shadow-[0_0_24px_rgba(64,142,255,0.14)]">
      <p className="text-sm font-medium text-[#cde0ff] uppercase dark:text-[#86c7ed]">
        {label}
      </p>
      <h3 className="mt-4 text-2xl font-medium tracking-tight text-white sm:text-3xl">
        {title}
      </h3>
      <p className="mt-4 text-base leading-7 text-white/80 dark:text-white/65">
        {description}
      </p>
    </article>
  );
}
