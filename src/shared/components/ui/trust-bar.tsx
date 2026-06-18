import Image from "next/image";

import { cn } from "@/shared/lib/utils";

export interface TrustBarLogo {
  name: string;
  src: string;
}

const sizeStyles = {
  default: { tile: "h-18 w-34 sm:h-22 sm:w-42", logo: "h-10 sm:h-12" },
  lg: { tile: "h-24 w-46 sm:h-28 sm:w-56", logo: "h-14 sm:h-18" },
} as const;

const defaultInstitutionLogos: TrustBarLogo[] = [
  {
    name: "Babcock University",
    src: "/images/svg/schools/babcock-university-logo.png",
  },
  { name: "BZMC", src: "/images/svg/schools/bzmc-logo.png" },
  {
    name: "Covenant University",
    src: "/images/svg/schools/covenant-university-logo-desktop.png",
  },
  { name: "Kayron", src: "/images/svg/schools/kayron-logo.png" },
  {
    name: "Pan-Atlantic University",
    src: "/images/svg/schools/pau-logo-1.png",
  },
  { name: "Seaba", src: "/images/svg/schools/seaba-logo.png" },
] as const;

interface TrustBarProps {
  logos?: readonly TrustBarLogo[];
  title?: string;
  size?: keyof typeof sizeStyles;
}

const TrustBar = ({
  logos = defaultInstitutionLogos,
  title = "Trusted by Educators in Leading Institutions",
  size = "default",
}: TrustBarProps) => {
  const styles = sizeStyles[size];

  return (
    <section className="bg-[radial-gradient(circle_at_50%_28%,rgba(40,82,255,0.12),transparent_62%)] md:my-20 py-6 sm:py-8 dark:bg-none">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center justify-center gap-5 px-4 sm:gap-6 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium tracking-[0.08em] text-[#1836b2] uppercase sm:text-base dark:text-[#86C7ED]">
          {title}
        </p>
      </div>

      <div className="mt-5 w-full border-y border-slate-200/70 bg-white/96 py-3 shadow-[0_16px_40px_rgba(0,0,0,0.14)] sm:mt-6 sm:py-4">
        <div className="trust-marquee-mask w-full overflow-hidden">
          <div className="trust-marquee-track flex w-max items-center">
            {[0, 1].map((group) => (
              <div
                aria-hidden={group === 1}
                className="trust-marquee-group flex shrink-0 items-center gap-3 px-3 sm:gap-4 sm:px-4"
                key={`group-${group}`}
              >
                {logos.map((institution) => (
                  <div
                    className={cn(
                      "flex shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 shadow-sm sm:px-6",
                      styles.tile,
                    )}
                    key={`${institution.name}-group-${group}`}
                  >
                    <Image
                      src={institution.src}
                      alt={institution.name}
                      width={160}
                      height={80}
                      className={cn("w-auto object-contain", styles.logo)}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
