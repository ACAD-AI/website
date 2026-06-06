import Image from "next/image";

import { cn } from "@/shared/lib/utils";

import type { TeamMember } from "./team-data";

interface TeamPhotoTileProps {
  member: TeamMember;
}

export function TeamPhotoTile({ member }: TeamPhotoTileProps) {
  return (
    <div className="relative aspect-square overflow-hidden rounded-lg bg-[#f5f7ff] dark:bg-[#141b34]">
      <Image
        alt={member.name}
        className={cn(
          "object-cover transition-transform duration-500 hover:scale-105",
          member.imagePosition,
          member.treatment,
        )}
        fill
        sizes="(min-width: 1024px) 20vw, (min-width: 640px) 40vw, 90vw"
        src={member.imageSrc}
      />
    </div>
  );
}
