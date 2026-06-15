import Image from "next/image";

import { cn } from "@/shared/lib/utils";

interface ReviewImage {
  height: number;
  src: string;
  width: number;
}

const reviewImages = {
  students: [
    {
      src: "/images/reviews/students/089feb45723611a585d1138668fc5a576493dec0.png",
      width: 564,
      height: 152,
    },
    {
      src: "/images/reviews/students/3efb2d30b89978424396a742cea8601a9d04b940.png",
      width: 480,
      height: 483,
    },
    {
      src: "/images/reviews/students/4b40cbb7b1259e0e4452661bac86b1e909694244.png",
      width: 273,
      height: 91,
    },
    {
      src: "/images/reviews/students/4ebf310b9df81628d96736103d960ba1438184d5.png",
      width: 975,
      height: 369,
    },
    {
      src: "/images/reviews/students/65512abf13e0122694f185fd5f805febe950a20b.png",
      width: 975,
      height: 250,
    },
    {
      src: "/images/reviews/students/6a406f0ad46e6bef6e72c532581bf46e5b695795.png",
      width: 827,
      height: 391,
    },
    {
      src: "/images/reviews/students/7930086349b83c9e7430ad8dada01ede990ba42b.png",
      width: 694,
      height: 306,
    },
    {
      src: "/images/reviews/students/8e2fd0ce999e1541ae41d0d4bec040067ce1ec3d.png",
      width: 975,
      height: 285,
    },
    {
      src: "/images/reviews/students/9198830c0d75a82259f6dfc50136d652855e5033.png",
      width: 975,
      height: 260,
    },
    {
      src: "/images/reviews/students/a593f2a5b56e4bb251a40c8b5885f4ee919dc91d.png",
      width: 405,
      height: 91,
    },
  ],
  educators: [
    {
      src: "/images/reviews/educators/0712055769a7c78fcc68d6e6676e66e0c275cf57.png",
      width: 975,
      height: 329,
    },
    {
      src: "/images/reviews/educators/0ecb896be49de77e93ef22ae5dba9f237b43271b.png",
      width: 975,
      height: 290,
    },
    {
      src: "/images/reviews/educators/49879e81c535c1a35cc5a29c2a7caf412258cd2a.png",
      width: 975,
      height: 254,
    },
    {
      src: "/images/reviews/educators/527a3e82f6d3d2a3afcdb56b2f87f6a3cc883415.png",
      width: 975,
      height: 300,
    },
    {
      src: "/images/reviews/educators/600a45443021732fc3429349c0ca757438604ba6.png",
      width: 703,
      height: 353,
    },
    {
      src: "/images/reviews/educators/70322e315ff1233678830d8874228992330340dd.png",
      width: 975,
      height: 338,
    },
    {
      src: "/images/reviews/educators/7d1b7f1112a852531ebdcb75723ee920ad20ff9a.png",
      width: 975,
      height: 248,
    },
    {
      src: "/images/reviews/educators/e0c59b8803da9347337ed973ba1c50b07615cbbd.png",
      width: 975,
      height: 273,
    },
    {
      src: "/images/reviews/educators/faf0114e2ab53f4efb471356b01c982b7fc860b8.png",
      width: 975,
      height: 467,
    },
  ],
} satisfies Record<"educators" | "students", ReviewImage[]>;

const columns = [
  {
    id: "one",
    animationClass: "reviews-marquee-column-1",
    imageOffset: 0,
    rotationOffset: 0,
    visibilityClass: "block",
  },
  {
    id: "two",
    animationClass: "reviews-marquee-column-2",
    imageOffset: 5,
    rotationOffset: 2,
    visibilityClass: "hidden sm:block",
  },
  {
    id: "three",
    animationClass: "reviews-marquee-column-3",
    imageOffset: 7,
    rotationOffset: 4,
    visibilityClass: "hidden lg:block",
  },
] as const;

const marqueeGroups = ["primary", "duplicate"] as const;

const rotations = [
  "-rotate-2",
  "rotate-1",
  "-rotate-1",
  "rotate-2",
  "rotate-0",
  "-rotate-2",
  "rotate-1",
  "-rotate-1",
  "rotate-2",
] as const;

interface ReviewImageMarqueeProps {
  audience: "educators" | "students";
}

export function ReviewImageMarquee({ audience }: ReviewImageMarqueeProps) {
  const images = reviewImages[audience];

  return (
    <div className="reviews-marquee-mask mx-auto grid h-[620px] w-full max-w-[1320px] grid-cols-1 gap-3 overflow-hidden px-4 py-6 sm:h-[700px] sm:grid-cols-2 sm:gap-6 sm:px-6 lg:h-[780px] lg:grid-cols-3">
      {columns.map((column) => {
        const orderedImages = [
          ...images.slice(column.imageOffset),
          ...images.slice(0, column.imageOffset),
        ];

        return (
          <div
            className={cn("overflow-hidden", column.visibilityClass)}
            key={column.id}
          >
            <div
              className={cn(
                "reviews-marquee-column flex flex-col",
                column.animationClass,
              )}
            >
              {marqueeGroups.map((group) => (
                <div
                  aria-hidden={group === "duplicate"}
                  className="flex shrink-0 flex-col gap-5 pb-5 sm:gap-7 sm:pb-7"
                  key={`${column.id}-${group}`}
                >
                  {orderedImages.map((image, position) => (
                    <div
                      className={cn(
                        "shrink-0 overflow-hidden rounded-xl border border-[#e3e8f5] bg-white p-1.5 shadow-[0_16px_38px_rgba(46,73,139,0.12)] dark:border-[#535090] dark:bg-[#43407c] dark:shadow-[0_16px_36px_rgba(8,12,32,0.24)] sm:rounded-2xl sm:p-2",
                        rotations[
                          (position + column.rotationOffset) % rotations.length
                        ],
                      )}
                      key={`${image.src}-${group}`}
                    >
                      <Image
                        alt={
                          group === "primary"
                            ? `${audience} review screenshot ${position + 1}`
                            : ""
                        }
                        className="h-auto w-full rounded-lg sm:rounded-xl"
                        height={image.height}
                        sizes="(max-width: 639px) 92vw, (max-width: 1023px) 46vw, 420px"
                        src={image.src}
                        width={image.width}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
