import { Pause } from "lucide-react";
import Image from "next/image";

interface MediaShowcaseProps {
  imageAlt: string;
  imageSrc: string;
  subtitle: string;
  title: string;
}

export function MediaShowcase({
  imageAlt,
  imageSrc,
  subtitle,
  title,
}: MediaShowcaseProps) {
  return (
    <div className="w-full overflow-hidden rounded-xl bg-[#2442c2] px-5 pb-6 pt-8 shadow-[0_24px_60px_rgba(8,17,59,0.3)] sm:px-8 sm:pb-8 sm:pt-10">
      <div className="text-center">
        <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mt-2 text-sm text-white/70">{subtitle}</p>
      </div>

      <div className="relative mt-8 overflow-hidden rounded-lg bg-[linear-gradient(135deg,#111c66_0%,#1935a8_42%,#099ec1_100%)] px-4 pb-8 pt-6 sm:px-8 sm:pb-10 sm:pt-8 lg:px-16">
        <div className="relative mx-auto w-full max-w-[680px] overflow-hidden rounded-2xl border-[5px] border-[#090d16] bg-[#141b34] shadow-[0_25px_55px_rgba(0,0,0,0.34)]">
          <Image
            alt={imageAlt}
            className="w-full object-cover"
            height={728}
            src={imageSrc}
            width={1200}
          />
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 flex h-8 items-center gap-3 bg-[#070c18]/95 px-4"
        >
          <Pause className="size-3 fill-white text-white" />
          <span className="h-1 flex-1 overflow-hidden rounded-full bg-white/28">
            <span className="block h-full w-[42%] rounded-full bg-white" />
          </span>
          <span className="text-[9px] text-white/72">01:29 / 04:25</span>
        </div>
      </div>
    </div>
  );
}
