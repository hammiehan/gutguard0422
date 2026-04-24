import { Plus_Jakarta_Sans } from "next/font/google";
import Button from "../ui/Button";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export default function LeadCapture() {
  return (
    <section className="bg-[#020B41] py-16 sm:h-[459.66px] sm:py-0">
      <div className="mx-auto flex h-full w-full max-w-[1040px] items-center px-4 sm:px-6 lg:px-0">
        <div className="relative w-full rounded-[1.75rem] border border-white/10 bg-[rgba(255,255,255,0.04)] px-6 py-8 shadow-[0_24px_80px_rgba(0,0,0,0.16)] sm:h-[259.66px] sm:px-0 sm:py-0">
          <div className="flex flex-col gap-6 sm:block">
            <div className="space-y-[8px] sm:absolute sm:left-[35px] sm:top-[42px] sm:w-[424.87px]">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:h-[81.19px] sm:w-[424.87px] sm:leading-[1.15]">
                Not sure if your labs qualify? Find out first.
              </h2>
              <p className="text-[14px] leading-[1.7] text-[#A3A3A8] sm:h-[63.19px] sm:w-[387.49px]">
                Send us your lab report format and we will tell you within 2 hours whether your
                existing results cover all 8 markers — before you commit to anything.
              </p>
            </div>

            <div className="sm:absolute sm:left-[581px] sm:top-[70px] sm:w-[441.59px]">
              <form className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:gap-[10px]">
                <input
                  className="h-12 flex-1 rounded-full border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.07)] px-4 text-[16px] font-normal text-white outline-none placeholder:text-[16px] placeholder:font-normal placeholder:text-[#7E7E84] sm:h-[48px]"
                  placeholder="your@email.com"
                  type="email"
                />
                <button className={`${plusJakartaSans.className} h-12 shrink-0 rounded-full bg-[#FFFFFF] px-5 text-[14px] font-bold text-[#0A0A0A] hover:bg-[#F5F5F5] sm:h-[48px] sm:w-[159.59px] sm:px-0`}>
                  Send Free Guide
                </button>
              </form>

              <p className="mt-3 text-[11px] font-normal leading-[14px] text-[#7E7E84] sm:mt-[8px] sm:h-[14px] sm:w-[275.97px]">
                No spam. Unsubscribe any time. RA 10173 compliant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
