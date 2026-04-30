import { ExternalLink, PlayCircle } from "lucide-react";
import Image from "next/image";

import { Button } from "@/shared/components/ui/button";

import type { EventItem } from "./events-types";

interface EventCardProps {
  event: EventItem;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <article className="overflow-hidden rounded-[14px] border border-[#585d93] bg-[#181f40] shadow-[0_18px_36px_rgba(9,13,35,0.18)]">
      <div className="relative aspect-[1.5/1] overflow-hidden">
        <Image
          alt={event.image.alt}
          className="object-cover"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          src={event.image.src}
        />
      </div>

      <div className="space-y-5 px-5 py-5 sm:px-6 sm:py-6">
        <div className="space-y-3">
          <h3 className="text-[1.55rem] leading-[1.3] font-medium text-white">
            {event.title}
          </h3>
          <p className="text-[0.98rem] leading-8 text-white/62">
            {event.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {event.watchUrl ? (
            <Button
              asChild
              className="h-10 rounded-xl bg-white px-4 text-sm font-medium text-[#2d3566] hover:bg-white/90"
            >
              <a href={event.watchUrl} rel="noreferrer" target="_blank">
                Watch
                <PlayCircle className="size-4" />
              </a>
            </Button>
          ) : null}

          {event.lumaUrl ? (
            <Button
              asChild
              className="h-10 rounded-xl bg-[#2a57ff] px-4 text-sm font-medium text-white hover:bg-[#3a65ff]"
            >
              <a href={event.lumaUrl} rel="noreferrer" target="_blank">
                View on Luma
                <ExternalLink className="size-4" />
              </a>
            </Button>
          ) : null}
        </div>
      </div>
    </article>
  );
}
