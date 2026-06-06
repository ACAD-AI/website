interface StatCardProps {
  label: string;
  value: string;
}

export function StatCard({ label, value }: StatCardProps) {
  return (
    <article className="rounded-xl border border-[#e3e8f5] bg-white p-5 shadow-[0_16px_38px_rgba(46,73,139,0.08)] sm:p-6 dark:border-[#55578f] dark:bg-[#373764] dark:shadow-[0_0_24px_rgba(64,142,255,0.14)]">
      <p className="text-4xl leading-none font-medium tracking-tight text-[#141b34] sm:text-5xl dark:text-white">
        {value}
      </p>
      <p className="mt-4 text-base leading-6 text-[#5b6b8c] dark:text-white/65">
        {label}
      </p>
    </article>
  );
}
