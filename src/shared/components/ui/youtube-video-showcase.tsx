interface YouTubeVideoShowcaseProps {
  subtitle: string;
  title: string;
  videoId: string;
  videoTitle: string;
}

export function YouTubeVideoShowcase({
  subtitle,
  title,
  videoId,
  videoTitle,
}: YouTubeVideoShowcaseProps) {
  return (
    <div className="w-full overflow-hidden rounded-xl bg-[#2442c2] px-5 pt-8 pb-6 shadow-[0_24px_60px_rgba(8,17,59,0.3)] sm:px-8 sm:pt-10 sm:pb-8">
      <div className="text-center">
        <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mt-2 text-sm text-white/70">{subtitle}</p>
      </div>

      <div className="relative mt-8 overflow-hidden rounded-lg bg-[linear-gradient(135deg,#111c66_0%,#1935a8_42%,#099ec1_100%)] px-4 py-6 sm:px-8 sm:py-8 lg:px-16">
        <div className="relative mx-auto aspect-video w-full max-w-[780px] overflow-hidden rounded-2xl border-[5px] border-[#090d16] bg-[#141b34] shadow-[0_25px_55px_rgba(0,0,0,0.34)]">
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 size-full"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&controls=1&playsinline=1&rel=0`}
            title={videoTitle}
          />
        </div>
      </div>
    </div>
  );
}
