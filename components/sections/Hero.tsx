import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import { heroBullets } from "../../lib/data";
import Button from "../ui/Button";
import Container from "../ui/Container";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const scoreRows = [
  {
    label: "C-Reactive Protein",
    value: "4.2",
    unit: "mg/L",
    status: "High",
    tone: "alert",
  },
  {
    label: "Triglycerides",
    value: "218",
    unit: "mg/dL",
    status: "High",
    tone: "alert",
  },
  {
    label: "HDL Cholesterol",
    value: "38",
    unit: "mg/dL",
    status: "Low",
    tone: "alert",
  },
  {
    label: "Fasting Glucose",
    value: "96",
    unit: "mg/dL",
    status: "Normal",
    tone: "neutral",
  },
] as const;

const heroBulletSizeClasses = [
  "sm:w-[198.6px]",
  "sm:w-[183.72px]",
  "sm:w-[166.24px]",
] as const;

export default function Hero() {
  return (
    <section className="overflow-hidden bg-[#fbfaf7] py-12 sm:py-16 lg:py-20" id="top">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16">
          <div className="w-full max-w-[501.14px] space-y-7">
            <div className="inline-flex h-[39.09px] items-center rounded-full border border-[rgba(220,38,38,0.2)] bg-[rgba(220,38,38,0.09)] px-4 text-[12px] font-medium text-[#DC2626]">
              {"\u2022"} 68% of Philippine deaths start with chronic inflammation
            </div>

            <div className="space-y-5">
              <h1
                className={[
                  plusJakartaSans.className,
                  "h-auto w-full max-w-[501.14px] text-[3.5rem] font-extrabold leading-[0.94] tracking-[-0.04em] text-[#020B41]",
                  "sm:text-[4.5rem]",
                  "lg:h-[420px] lg:text-[84px] lg:leading-[84px] lg:tracking-[-3.36px]",
                ].join(" ")}
              >
                <span className="text-[#020B41]">Most supplements are a guess.</span>{" "}
                <span className="text-[#0305C6]">Your blood is not.</span>
              </h1>
              <p className="min-h-[178.5px] max-w-[490.45px] text-[18px] font-normal leading-[31.5px] tracking-[0] text-[#44444A]">
                Upload the blood panel you already have from any Philippine laboratory. Your
                Lifestyle Inflammation Score calculates in 30 seconds from 8 clinical markers. A
                licensed doctor reads your results personally and prescribes the exact protocol
                your numbers call for, not a one-size-fits-all box.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                className="h-[54px] w-[221.17px] gap-2 !bg-[#0305C6] px-0 py-0 text-[14px] font-semibold leading-[54px] !text-[#FFFFFF] hover:!bg-[#0305C6]"
                href="#plans"
              >
                Check My Score {"\u2192"}
              </Button>
            </div>

            <ul className="grid justify-items-start gap-x-8 gap-y-3 md:grid-cols-2">
              {heroBullets.map((bullet, index) => (
                <li
                  key={bullet.label}
                  className="flex items-start gap-2"
                >
                  <span className="flex h-5 w-5 items-center justify-center text-[12px] leading-none text-[#2D2D3D]">
                    {"\u2713"}
                  </span>
                  <span
                    className={[
                      inter.className,
                      "block text-[14px] font-normal leading-[23.1px] tracking-[0] text-[#2D2D3D] md:whitespace-nowrap",
                      heroBulletSizeClasses[index],
                    ].join(" ")}
                  >
                    {bullet.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-[34rem]">
            <div className="absolute inset-x-0 top-10 h-48 rounded-full bg-[#eef2ff] blur-3xl" />
            <div className="relative mx-auto h-[611.61px] w-full max-w-[450.86px] rounded-[20px] border border-[rgba(255,255,255,0.13)] bg-white/95 px-5 py-6 shadow-[0_24px_70px_rgba(12,18,80,0.18)] sm:px-6 sm:py-7 lg:w-[450.86px]">
              <div className="space-y-6">
                <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8b92ae]">
                  <span>Lifestyle Inflammation Score</span>
                  <span className="text-[#3ac77a]">{"\u2022"} Sample</span>
                </div>

                <div className="flex justify-center">
                  <div className="relative flex h-[156px] w-[156px] items-center justify-center rounded-full border-[9px] border-[#7c7c7c]">
                    <div className="text-center">
                      <p className="text-[58px] font-semibold tracking-tight text-[#d97706]">74</p>
                      <p className="-mt-2 text-[10px] font-medium uppercase tracking-[0.16em] text-[#9aa1b9]">
                        / 100
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-center text-[14px] font-semibold text-[#e58a17]">
                  Moderate inflammation
                </p>

                <div className="space-y-3 px-1">
                  {scoreRows.map((row) => (
                    <div
                      key={row.label}
                      className="grid grid-cols-[minmax(0,1fr)_auto_auto_auto] items-center gap-2 text-sm"
                    >
                      <span className="text-[#5f657b]">{row.label}</span>
                      <span
                        className={
                          row.tone === "alert"
                            ? "font-semibold text-[#ff6b6b]"
                            : "font-medium text-[#6b7280]"
                        }
                      >
                        {row.value}
                      </span>
                      <span className="text-[#a0a5b7]">{row.unit}</span>
                      <span
                        className={[
                          "rounded-full px-2 py-0.5 text-[11px] font-semibold",
                          row.tone === "neutral"
                            ? "text-[#6b7280]"
                            : "bg-[#fff1f3] text-[#ff6b6b]",
                        ].join(" ")}
                      >
                        {row.tone === "alert"
                          ? `${row.status === "Low" ? "\u2193" : "\u2191"} ${row.status}`
                          : row.status}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  className="h-[42px] w-full !bg-[#0305C6] py-0 text-[13px] font-semibold !text-[#FFFFFF] hover:!bg-[#0305C6]"
                  href="#plans"
                >
                  Get My Real Score {"\u2192"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
