interface EventsEmptyStateProps {
  message: string;
}

export function EventsEmptyState({ message }: EventsEmptyStateProps) {
  return (
    <div className="flex min-h-[360px] items-center justify-center rounded-[18px] border border-[#e3e8f5] bg-white px-8 py-16 text-center shadow-[0_16px_38px_rgba(46,73,139,0.08)] dark:border-[#595f93] dark:bg-[#433f7d] dark:shadow-[0_24px_60px_rgba(9,13,35,0.18)] sm:min-h-[420px]">
      <p className="max-w-2xl text-base leading-8 text-[#5b6b8c] sm:text-lg dark:text-white/62">
        {message}
      </p>
    </div>
  );
}
