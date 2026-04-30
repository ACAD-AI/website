import { PrimaryButton } from "@/shared";

export function FaqContactCard() {
  return (
    <div className="rounded-[28px] border border-[#4D4D7C] bg-[#323261] px-6 py-12 text-center shadow-[0_24px_80px_rgba(8,12,32,0.3)] sm:px-10 sm:py-14">
      <div className="mb-6 flex items-center justify-center">
        <div className="relative flex h-20 w-20 items-end justify-center sm:h-20 sm:w-40">
          <div className="absolute left-0 top-8 flex size-21 items-center justify-center rounded-full border-[5px] border-white bg-[linear-gradient(135deg,#b9c67b_0%,#a9b673_100%)] text-sm font-semibold text-[#1b1f35] shadow-[0_16px_30px_rgba(0,0,0,0.18)] sm:size-16">
            TA
          </div>
          <div className="relative z-10 flex size-27 items-center justify-center rounded-full border-[5px] border-white bg-[linear-gradient(135deg,#d7cae8_0%,#bcaee0_100%)] text-base font-semibold text-[#1b1f35] shadow-[0_18px_34px_rgba(0,0,0,0.2)] sm:size-20">
            CS
          </div>
          <div className="absolute right-0 top-8 flex size-21 items-center justify-center rounded-full border-[5px] border-white bg-[linear-gradient(135deg,#f1d8d3_0%,#e0c1bc_100%)] text-sm font-semibold text-[#1b1f35] shadow-[0_16px_30px_rgba(0,0,0,0.18)] sm:size-16">
            AM
          </div>
        </div>
      </div>

      <h3 className="text-3xl font-medium tracking-tight text-white">
        Still have questions?
      </h3>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#BEC3D5]">
        Can&apos;t find the answer you&apos;re looking for? Please chat to our
        friendly team.
      </p>

      <div className="mt-8 flex justify-center">
        <PrimaryButton>Get in touch</PrimaryButton>
      </div>
    </div>
  );
}
