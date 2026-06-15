import Image from "next/image";

import { cn } from "@/shared/lib/utils";

import type { TeamMember } from "./team-data";

interface TeamPhotoTileProps {
  member: TeamMember;
}

export function TeamPhotoTile({ member }: TeamPhotoTileProps) {
  return (
    <article className="group relative aspect-square overflow-hidden rounded-lg bg-[#f5f7ff] dark:bg-[#141b34]">
      <Image
        alt={`Portrait of ${member.name}`}
        className={cn(
          "object-cover transition-transform duration-500 group-hover:scale-105 group-focus-within:scale-105",
          member.imagePosition,
          member.treatment,
        )}
        fill
        sizes="(min-width: 1024px) 20vw, (min-width: 640px) 40vw, 90vw"
        src={member.imageSrc}
      />

      <div className="pointer-events-none absolute inset-0 flex translate-y-3 flex-col justify-end bg-gradient-to-t from-black/90 via-black/45 to-transparent p-3 opacity-0 transition-[opacity,transform] duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100 sm:p-4">
        <h3 className="max-w-[90%] text-sm font-medium leading-tight text-white sm:text-base">
          {member.name}
        </h3>
        <p className="mt-1 text-[11px] leading-tight text-white/75 sm:text-xs">
          {member.position}
        </p>
        <a
          className="mt-2 flex size-6 items-center justify-center rounded bg-[#0a66c2] text-white transition-colors hover:bg-[#004182] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          href={member.linkedinUrl}
          rel="noreferrer"
          target="_blank"
          title={`View ${member.name} on LinkedIn`}
        >
          <span
            aria-hidden="true"
            className="text-[10px] font-bold leading-none"
          >
            in
          </span>
          <span className="sr-only">View {member.name} on LinkedIn</span>
        </a>
      </div>
    </article>
  );
}
