import Image from "next/image";

const institutions = [
  { name: "Babcock", src: "/images/svg/schools/babcock.svg" },
  { name: "School 2", src: "/images/svg/schools/school-2.svg" },
  { name: "Carissa", src: "/images/svg/schools/carissa.svg" },
  { name: "Covenant", src: "/images/svg/schools/covenant.svg" },
  { name: "CU", src: "/images/svg/schools/cu.svg" },
  { name: "School 6", src: "/images/svg/schools/school-6.svg" },
] as const;

const TrustBar = () => {
  return (
    <section className="bg-[#040b26] py-6 sm:py-8">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center justify-center gap-5 px-4 sm:gap-6 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium tracking-[0.08em] text-[#86C7ED] uppercase sm:text-base">
          Trusted by Educators and Students in Leading Institutions
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
                {institutions.map((institution) => (
                  <div
                    className="flex h-18 w-34 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 shadow-sm sm:h-22 sm:w-42 sm:px-6"
                    key={`${institution.name}-group-${group}`}
                  >
                    <Image
                      src={institution.src}
                      alt={institution.name}
                      width={112}
                      height={56}
                      className="h-10 w-auto object-contain sm:h-12"
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
