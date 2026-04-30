interface EventsEmptyStateProps {
  message: string;
}

export function EventsEmptyState({ message }: EventsEmptyStateProps) {
  return (
    <div className="flex min-h-[360px] items-center justify-center rounded-[18px] border border-[#595f93] bg-[#433f7d] px-8 py-16 text-center shadow-[0_24px_60px_rgba(9,13,35,0.18)] sm:min-h-[420px]">
      <p className="max-w-2xl text-base leading-8 text-white/62 sm:text-lg">
        {message}
      </p>
    </div>
  );
}
