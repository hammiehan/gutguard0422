import { Fira_Code, Inter, Plus_Jakarta_Sans } from "next/font/google";

import Container from "../ui/Container";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const stages = [
  {
    step: "STAGE 01 \u00B7 PREBIOTICS",
    title: "Feed the right bacteria",
    description:
      "Patented prebiotic complex selectively nourishes the bacteria that produce anti-inflammatory short-chain fatty acids. Starves pathogenic strains.",
    pill: "Patented Prebiotic Complex",
    cardClassName: "border-[#BED1FF] bg-[#EFF3FF]",
    stepColor: "text-[#5B8EF0]",
    pillClassName: "border-[#9DB8FF] bg-[#DDE7FF] text-[#85A7FF]",
    stepSizeClassName: "w-[166.53px] h-[11px]",
    titleSizeClassName: "w-[198.21px] min-h-[23px]",
    descriptionSizeClassName: "w-[255.85px] min-h-[88.39px]",
    pillSizeClassName: "h-[30.14px] w-[173.34px]",
  },
  {
    step: "STAGE 02 \u00B7 PROBIOTICS",
    title: "Colonise with precision strains",
    description:
      "Nano-encapsulated target-specific strains survive stomach acid and colonise the exact gut zones where inflammation originates.",
    pill: "Nano-encapsulated Strains",
    cardClassName: "border-[#B9E7D9] bg-[#EEF9F6]",
    stepColor: "text-[#22C58B]",
    pillClassName: "border-[#9EE3CF] bg-[#DDF6EE] text-[#73D1AF]",
    stepSizeClassName: "w-[166.53px] h-[11px]",
    titleSizeClassName: "w-[265.53px] min-h-[23px]",
    descriptionSizeClassName: "w-[234.53px] min-h-[88.39px]",
    pillSizeClassName: "h-[30.14px] w-[171.31px]",
  },
  {
    step: "STAGE 03 \u00B7 POSTBIOTICS",
    title: "Activate cellular regeneration",
    description:
      "Urolithin-A activates mitophagy \u2014 clearing damaged mitochondria and rebuilding new ones. L-Tryptophan restores gut-brain signalling and sleep.",
    pill: "Urolithin-A + L-Tryptophan",
    cardClassName: "border-[#F4D3AF] bg-[#FFF7EE]",
    stepColor: "text-[#FFB21D]",
    pillClassName: "border-[#FFD095] bg-[#FFF1DA] text-[#FFC53A]",
    stepSizeClassName: "w-[174.45px] h-[11px]",
    titleSizeClassName: "w-[257.5px] min-h-[23px]",
    descriptionSizeClassName: "w-[257.8px] min-h-[88.39px]",
    pillSizeClassName: "h-[30.14px] w-[167.97px]",
  },
];

const timeline = [
  {
    text: "Activation phase. Mitophagy begins. Better sleep within 5 days.",
    sizeClassName: "w-[188.34px] min-h-[61.78px]",
  },
  {
    text: "Regeneration phase. Energy stabilises. Brain fog clears.",
    sizeClassName: "w-[186.64px] min-h-[39.39px]",
  },
  {
    text: "Optimisation phase. Full anti-inflammatory effect. BioScan re-measures.",
    sizeClassName: "w-[192.65px] min-h-[61.78px]",
  },
];

export default function ScienceStages() {
  return (
    <section className="bg-white py-16 sm:py-20" id="science">
      <Container>
        <div className="space-y-14">
          <div className="mx-auto flex max-w-[887px] flex-col items-center space-y-5 text-center">
            <p
              className={[
                firaCode.className,
                "h-[11px] w-[257.61px] text-[11px] font-bold uppercase leading-[18.1px] tracking-[1.98px] text-[#5B8EF0]",
              ].join(" ")}
            >
              GUTGUARD PROPRIETARY FRAMEWORK
            </p>

            <h2
              className={[
                plusJakartaSans.className,
                "h-[66px] w-full max-w-[887px] text-[52px] font-bold leading-[54px] tracking-[-0.04em] text-[#020B41]",
              ].join(" ")}
            >
              Three stages. One cascade.
            </h2>

            <p
              className={[
                inter.className,
                "mx-auto min-h-[147px] max-w-[582.11px] text-[18px] font-normal leading-[31.5px] tracking-[0] text-[#A3A3A8]",
              ].join(" ")}
            >
              The MBS (Mitochondria Bio-regeneration System) is GutGuard&apos;s proprietary protocol
              {" \u2014 "}built on independently peer-reviewed mechanisms in pre-, pro-, and
              postbiotic science. The Urolithin-A and L-Tryptophan outcomes in Stage 3 are
              documented in published clinical research.
            </p>
          </div>

          <div className="grid justify-items-center gap-5 lg:grid-cols-[333.33px_333.33px_333.33px] lg:justify-between">
            {stages.map((stage) => (
              <div
                key={stage.step}
                className={[
                  "h-[277.16px] w-full max-w-[333.33px] rounded-[20px] border p-8 text-left",
                  stage.cardClassName,
                ].join(" ")}
              >
                <div className="space-y-5">
                  <p
                    className={[
                      firaCode.className,
                      "text-[11px] font-bold uppercase leading-[18.1px] tracking-[1.32px]",
                      stage.stepSizeClassName,
                      stage.stepColor,
                    ].join(" ")}
                  >
                    {stage.step}
                  </p>

                  <div className="space-y-3">
                    <h3
                      className={[
                        plusJakartaSans.className,
                        "text-[18px] font-bold leading-[29.7px] tracking-[0] text-[#020B41]",
                        stage.titleSizeClassName,
                      ].join(" ")}
                    >
                      {stage.title}
                    </h3>
                    <p
                      className={[
                        inter.className,
                        "text-[14px] font-normal leading-[23.8px] tracking-[0] text-[#A3A3A8]",
                        stage.descriptionSizeClassName,
                      ].join(" ")}
                    >
                      {stage.description}
                    </p>
                  </div>

                  <span
                    className={[
                      inter.className,
                      "inline-flex items-center justify-center rounded-full border px-0 py-0 text-[11px] font-semibold leading-none",
                      stage.pillSizeClassName,
                      stage.pillClassName,
                    ].join(" ")}
                  >
                    {stage.pill}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto min-h-[199px] w-full max-w-[1040px] space-y-8">
            <p
              className={[
                firaCode.className,
                "mx-auto h-[14px] w-[188.04px] text-center text-[11px] font-normal uppercase leading-[18.1px] tracking-[1.98px] text-[#8D8D95]",
              ].join(" ")}
            >
              TIMELINE: WHAT TO EXPECT
            </p>

            <div className="grid justify-items-center gap-y-6 md:grid-cols-[188.34px_186.64px_192.65px] md:justify-center md:gap-x-[120px]">
              {timeline.map((item) => (
                <p
                  key={item.text}
                  className={[
                    inter.className,
                    "mx-auto text-center text-[14px] font-normal leading-[1.55] text-[#A3A3A8]",
                    item.sizeClassName,
                  ].join(" ")}
                >
                  {item.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
