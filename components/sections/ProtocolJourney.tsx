import { Fira_Code, Plus_Jakarta_Sans } from "next/font/google";

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

export default function ProtocolJourney() {
  return (
    <section className="bg-white py-16 sm:py-20" id="journey">
      <Container>
        <div className="space-y-10">
          <div className="relative lg:pl-[60px]">
            <p
              className={[
                firaCode.className,
                "h-[11px] w-[94.59px] text-[11px] font-bold uppercase leading-[18.1px] tracking-[1.98px] text-[#1A56DB]",
                "max-lg:mb-3",
                "lg:translate-y-[-28.94px]",
              ].join(" ")}
            >
              THE BIOSCAN
            </p>

            <h2
              className={[
                plusJakartaSans.className,
                "whitespace-pre-line text-left font-bold text-[#020B41]",
                "w-full max-w-[905.37px] text-[36px] leading-[1.05] tracking-[-0.04em]",
                "lg:h-[123.19px] lg:w-[905.37px] lg:text-[52px] lg:leading-[57.2px] lg:tracking-[-1.56px]",
              ].join(" ")}
            >
              {"From blood result to\ndoctor-assigned protocol in 24\nhours."}
            </h2>

            <p className="mt-5 max-w-[490.45px] text-[18px] leading-[31.5px] text-[#7A7A81]">
              Upload the blood panel you already have. No new tests needed.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {journeySteps.map((step) => (
              <StepCard
                key={step.step}
                description={step.description}
                step={step.step}
                title={step.title}
              />
            ))}
          </div>

          <div className="rounded-[1.5rem] border border-[#d7dceb] bg-[#fbfbfd] p-4 sm:p-5">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8088a7]">
              Panels and biomarkers
            </p>
            <div className="flex flex-wrap gap-2">
              {journeyLabs.map((chip) => (
                <Chip key={chip.label} className="border-[#d3d8e7] bg-white text-[#5e6888]">
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
