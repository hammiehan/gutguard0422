import { Fira_Code, Inter, Plus_Jakarta_Sans } from "next/font/google";

import Container from "../ui/Container";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const doctorMetrics = [
  { value: "94%", label: "Patient improvement rate" },
  { value: "127", label: "Patients monitored" },
  { value: "4.9", label: "Patient rating" },
];

const doctorSteps = [
  { number: "01", label: "Upload labs & get GLIS" },
  { number: "02", label: "Request Dr. Shane" },
  { number: "03", label: "Review within 24h" },
  { number: "04", label: "Protocol assigned" },
  { number: "05", label: "Re-scanned at milestones" },
];

export default function DoctorCredibility() {
  return (
    <section className="bg-[#020B41] py-16 sm:py-20">
      <Container>
        <div className="space-y-10">
          <div className="space-y-6 text-left">
            <p
              className={[
                firaCode.className,
                "text-[11px] font-bold uppercase leading-[18.1px] tracking-[1.98px] text-[#4C80FF]",
              ].join(" ")}
            >
              YOUR ATTENDING DOCTOR
            </p>

            <h2
              className={[
                plusJakartaSans.className,
                "max-w-[1020px] text-[40px] font-bold leading-[1.04] tracking-[-0.04em] text-white sm:text-[52px] sm:leading-[54px]",
              ].join(" ")}
            >
              Every patient gets a doctor. Not a chatbot.
            </h2>

            <p
              className={[
                inter.className,
                "max-w-[588.06px] text-[18px] font-normal leading-[31.5px] tracking-[0] text-[#A3A3A8]",
              ].join(" ")}
            >
              Every BioScan goes to a licensed physician {"\u2014"} not a recommendation engine,
              not a chatbot, not an algorithm. Dr. Shane reads your markers, flags what is
              elevated, and writes your protocol himself.
            </p>
          </div>

          <div className="w-full rounded-[24px] border border-[#2A3680] bg-[#06095B] px-6 py-8 shadow-[0_30px_80px_rgba(0,0,0,0.18)] sm:px-12 sm:py-12 lg:h-[404.77px]">
            <div className="space-y-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-start">
                <div className="flex h-[104px] w-[104px] shrink-0 items-center justify-center rounded-[20px] border border-[rgba(26,86,219,0.3)] bg-[rgba(26,86,219,0.15)]">
                  <span
                    className={[
                      plusJakartaSans.className,
                      "text-[26px] font-bold tracking-[-0.04em] text-[#6C92FF]",
                    ].join(" ")}
                  >
                    SA
                  </span>
                </div>

                <div className="min-w-0 flex-1 space-y-5">
                  <div className="space-y-2">
                    <h3
                      className={[
                        plusJakartaSans.className,
                        "text-[30px] font-bold tracking-[-0.04em] text-white",
                      ].join(" ")}
                    >
                      Dr. Shane Animas, MD
                    </h3>
                    <p
                      className={[
                        inter.className,
                        "text-[14px] font-normal text-[#A3ABD3]",
                      ].join(" ")}
                    >
                      Internal Medicine {"\u00B7"} GutGuard Medical Lead {"\u00B7"} General Santos
                      City
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <span
                      className={[
                        inter.className,
                        "inline-flex h-[30.14px] w-[142.08px] items-center justify-center rounded-[10px] border border-[#1D5C58] bg-[#141C74] px-0 text-[11px] font-semibold text-[#22C55E]",
                      ].join(" ")}
                    >
                      {"\u2713 Licensed Physician"}
                    </span>
                    <span
                      className={[
                        inter.className,
                        "inline-flex h-[30.14px] w-[130.22px] items-center justify-center rounded-[10px] border border-[#2441A7] bg-[#141C74] px-0 text-[11px] font-semibold text-[#5B8EF0]",
                      ].join(" ")}
                    >
                      {"\u26A1 24-hour response"}
                    </span>
                  </div>

                  <blockquote className="relative w-full max-w-[790px] rounded-[16px] bg-[linear-gradient(90deg,rgba(20,28,116,0)_0px,rgba(20,28,116,0)_12px,rgba(255,255,255,0.04)_12px,rgba(255,255,255,0.04)_100%)] px-6 py-4 lg:h-[77px]">
                    <div className="absolute bottom-0 left-3 top-0 w-[2px] bg-[#3550F0]" />
                    <p
                      className={[
                        inter.className,
                        "max-w-[760px] pl-3 text-[14px] font-normal italic leading-[1.65] text-[#FFFFFF]",
                      ].join(" ")}
                    >
                      {
                        "\u201CA score of 74 is elevated but very workable. I review every scan personally and match the protocol to what I actually see in the markers \u2014 not just the number.\u201D"
                      }
                    </p>
                  </blockquote>

                  <div className="grid gap-6 sm:grid-cols-3 sm:gap-10">
                    {doctorMetrics.map((metric) => (
                      <div key={metric.label} className="space-y-1">
                        <p
                          className={[
                            plusJakartaSans.className,
                            "text-[26px] font-bold leading-[42.9px] tracking-[-0.65px] text-white",
                          ].join(" ")}
                        >
                          {metric.value}
                        </p>
                        <p
                          className={[
                            inter.className,
                            "text-[11px] font-normal leading-[18.1px] tracking-[0] text-[#7E7E84]",
                          ].join(" ")}
                        >
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto grid w-full max-w-[992.39px] gap-3 lg:grid-cols-[187.19px_14.36px_187.19px_14.36px_187.19px_14.36px_187.19px_14.36px_187.19px] lg:items-center lg:justify-center">
            {doctorSteps.map((step, index) => (
              <div key={step.number} className="contents">
                <div className="flex h-[88.33px] w-full max-w-[187.19px] flex-col items-center justify-center rounded-[16px] border border-white/10 bg-[rgba(255,255,255,0.04)] px-4 text-center">
                  <p
                    className={[
                      firaCode.className,
                      "mb-2 text-[11px] font-normal leading-[18.1px] tracking-[0] text-[#5B8EF0]",
                    ].join(" ")}
                  >
                    {step.number}
                  </p>
                  <p
                    className={[
                      inter.className,
                      "text-[14px] font-semibold leading-[1.35] text-[#EBEBEF]",
                    ].join(" ")}
                  >
                    {step.label}
                  </p>
                </div>
                {index < doctorSteps.length - 1 ? (
                  <div
                    className={[
                      inter.className,
                      "hidden h-[17px] w-[14.36px] justify-self-center text-center text-[14px] font-normal leading-[14px] tracking-[0] text-[rgba(255,255,255,0.2)] lg:block",
                    ].join(" ")}
                  >
                    {"\u2192"}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
