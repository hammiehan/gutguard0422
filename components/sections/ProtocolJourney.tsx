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
        <div className="space-y-10 sm:pt-[40px] sm:pb-[76px]">
          <div className="max-w-[820px] space-y-4">
            <p
              className={[
                firaCode.className,
                "h-[11px] w-[94.59px] text-[11px] font-bold uppercase leading-[18.1px] tracking-[1.98px] text-[#1A56DB]",
              ].join(" ")}
            >
              THE BIOSCAN
            </p>

            <h2
              className={[
                plusJakartaSans.className,
                "whitespace-pre-line text-left font-bold text-[#020B41]",
                "w-full max-w-[760px] text-[36px] leading-[1.02] tracking-[-0.04em]",
                "lg:text-[52px] lg:leading-[57.2px] lg:tracking-[-1.56px]",
              ].join(" ")}
            >
              {"From blood result to\ndoctor-assigned protocol in 24\nhours."}
            </h2>

            <p
              className={[
                inter.className,
                "max-w-[490px] text-[18px] font-normal leading-[31.5px] text-[#7A7A81]",
              ].join(" ")}
            >
              Upload the blood panel you already have. No new tests needed.
            </p>
          </div>

          <div className="grid max-w-[820px] gap-[20px] md:grid-cols-3">
            {journeySteps.map((step) => (
              <StepCard
                key={step.step}
                description={step.description}
                step={step.step}
                title={step.title}
              />
            ))}
          </div>

          <div className="w-full max-w-[820px] rounded-[20px] border border-[rgba(0,0,0,0.83)] bg-white px-[18px] py-[18px] sm:px-[20px] sm:py-[20px]">
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
