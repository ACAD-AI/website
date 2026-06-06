interface WorldMapVisualProps {
  location: string;
}

export function WorldMapVisual({ location }: WorldMapVisualProps) {
  return (
    <div className="relative mx-auto w-full max-w-[920px]">
      <svg
        aria-hidden="true"
        className="h-auto w-full text-white/80"
        viewBox="0 0 1000 500"
      >
        <defs>
          <pattern
            height="9"
            id="map-dots"
            patternUnits="userSpaceOnUse"
            width="9"
          >
            <circle cx="2" cy="2" fill="currentColor" r="1.7" />
          </pattern>
        </defs>

        <g fill="url(#map-dots)">
          <path d="M86 119 142 73l79-27 102 10 63 32 41 52-40 32-28 48-53 18-44 55-45-8-26-52-63-25-33-47Z" />
          <path d="m257 304 49 18 33 54-16 79-30 37-25-74-27-50Z" />
          <path d="m446 115 43-35 68 2 39 30-13 36-56 12-34 35-44-22Z" />
          <path d="m503 205 60-27 57 20 29 55-21 94-52 82-42-31-20-75-43-48Z" />
          <path d="m598 109 89-47 118 12 108 47-32 61-76 5-42 44-78-11-42-42-61-17Z" />
          <path d="m793 252 43-23 51 13 24 45-32 42-60-13-28-35Z" />
          <path d="m811 360 52 8 56 46-35 38-68-22-33-45Z" />
          <path d="m394 50 47-24 49 13-9 41-50 11Z" />
        </g>

        <circle cx="520" cy="277" fill="#1769ed" r="7" />
        <circle
          cx="520"
          cy="277"
          fill="none"
          opacity="0.4"
          r="15"
          stroke="#1769ed"
        />
      </svg>

      <div className="absolute left-[51%] top-[43%] -translate-x-1/2 rounded-lg bg-white px-4 py-3 text-center text-[#141b34] shadow-[0_12px_28px_rgba(0,0,0,0.25)]">
        <span className="mx-auto block size-4 rounded-full bg-[linear-gradient(90deg,#159447_0_33%,white_33%_66%,#159447_66%)]" />
        <span className="mt-1 block whitespace-nowrap text-xs font-semibold">
          {location}
        </span>
      </div>
    </div>
  );
}
