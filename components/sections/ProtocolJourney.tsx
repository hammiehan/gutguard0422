import { Fira_Code, Inter, Plus_Jakarta_Sans } from "next/font/google";

import { journeyLabs, journeySteps } from "../../lib/data";
import Chip from "../ui/Chip";
import Container from "../ui/Container";
import StepCard from "../ui/StepCard";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export default function ProtocolJourney() {
  return (
    <section className="bg-white py-16 sm:py-0" id="journey">
      <Container>
        <div className="space-y-10 sm:relative sm:left-1/2 sm:w-[1160px] sm:-translate-x-1/2 sm:space-y-[39px] sm:pb-[76px] sm:pt-[138px]">
          <div className="max-w-[820px] space-y-4 sm:ml-[60px] sm:w-[905.37px] sm:max-w-none sm:space-y-0">
            <p
              className={[
                firaCode.className,
                "h-[11px] w-[94.59px] text-[11px] font-bold uppercase leading-[18.15px] tracking-[1.98px] text-[#1A56DB] sm:mb-[28px]",
              ].join(" ")}
            >
              THE BIOSCAN
            </p>

            <h2
              className={[
                plusJakartaSans.className,
                "text-left font-bold text-[#020B41]",
                "w-full whitespace-pre-line text-[36px] leading-[1.02] tracking-[-0.04em]",
                "sm:w-[905.37px] sm:max-w-none sm:text-[52px] sm:leading-[57.2px] sm:tracking-[-1.56px]",
              ].join(" ")}
            >
              {"From blood result to\ndoctor-assigned protocol in 24\nhours."}
            </h2>

            <p
              className={[
                inter.className,
                "mt-[14px] max-w-[543.75px] text-[18px] font-normal leading-[31.5px] text-[#6B6B71] sm:mt-[18px] sm:h-[63px] sm:max-w-none sm:w-[543.75px]",
              ].join(" ")}
            >
              Upload the blood panel you already have. No new tests needed.
            </p>
          </div>

          <div className="grid max-w-[820px] gap-[20px] md:grid-cols-3 sm:ml-[60px] sm:w-[1040px] sm:max-w-none sm:grid-cols-3 sm:gap-[28px]">
            {journeySteps.map((step) => (
              <StepCard
                key={step.step}
                description={step.description}
                step={step.step}
                title={step.title}
              />
            ))}
          </div>

          <div className="w-full max-w-[820px] rounded-[20px] border border-[rgba(0,0,0,0.83)] bg-white px-[18px] py-[18px] sm:ml-[60px] sm:h-[150.33px] sm:w-[1040px] sm:max-w-none sm:px-[20px] sm:py-[20px]">
            <p
              className={[
                inter.className,
                "mb-[12px] text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8088a7]",
              ].join(" ")}
            >
              ACCEPTED PHILIPPINE LABORATORIES
            </p>
            <div className={["flex flex-wrap gap-x-[8px] gap-y-[8px]", inter.className].join(" ")}>
              {journeyLabs.map((chip) => (
                <Chip
                  key={chip.label}
                  className="min-h-[27px] border-[rgba(0,0,0,0.6)] bg-white px-[14px] py-[6px] text-[14px] font-normal leading-none text-[#4A4A54]"
                >
                  {chip.label}
                </Chip>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
