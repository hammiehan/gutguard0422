import { Fira_Code, Inter, Plus_Jakarta_Sans } from "next/font/google";

import Container from "../ui/Container";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const tabs = ["BioScan", "Shipping", "Compliance", "Safety"] as const;

export default function KnowledgeHub() {
  return (
    <section className="bg-white py-16 sm:h-[1144.73px] sm:py-0" id="knowledge">
      <Container>
        <div className="space-y-8 sm:pt-[103px]">
          <div className="space-y-3">
            <p
              className={[
                firaCode.className,
                "h-[11px] w-[146.06px] text-[11px] font-bold uppercase leading-[18.1px] tracking-[1.98px] text-[#5B8EF0]",
              ].join(" ")}
            >
              Vital information
            </p>
            <h2
              className={[
                plusJakartaSans.className,
                "h-[66px] w-full max-w-[695px] text-[40px] font-bold leading-[1.05] tracking-[-0.04em] text-[#0305C6] sm:text-[52px]",
              ].join(" ")}
            >
              Everything you need to know
            </h2>
            <p
              className={[
                inter.className,
                "h-[31.5px] w-full max-w-[559.73px] text-[18px] font-normal leading-[1.55] text-[#1C1C1E]",
              ].join(" ")}
            >
              Dosing, safety, shipping, compliance, and your rights as a patient.
            </p>
          </div>

          <div className="flex h-[48px] w-full max-w-[1040px] flex-wrap gap-[26px]">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={[
                  inter.className,
                  "text-[14px] font-semibold leading-none text-[#1C1C1E]",
                ].join(" ")}
                type="button"
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid w-full max-w-[1040px] gap-5 lg:h-[613.91px] lg:grid-cols-2">
            <div className="rounded-[20px] bg-[#020B41] px-[20px] py-[20px] text-white lg:h-[295.73px] lg:w-[510px]">
              <div className="space-y-5">
                <div className="flex items-center gap-[10px]">
                  <div className="flex h-[28px] w-[28px] items-center justify-center rounded-[8px] bg-[rgba(255,255,255,0.08)] text-[13px]">
                    💊
                  </div>
                  <h3
                    className={[
                      plusJakartaSans.className,
                      "text-[16px] font-bold leading-[1.4] text-white",
                    ].join(" ")}
                  >
                    Protocol dosing schedule
                  </h3>
                </div>

                <div className="overflow-hidden rounded-[14px]">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-white/10">
                        {["PROTOCOL", "MORNING", "EVENING", "DURATION"].map((label) => (
                          <th
                            key={label}
                            className={[
                              inter.className,
                              "px-[10px] py-[8px] text-left text-[11px] font-bold tracking-[0] text-[#A3A3A8]",
                            ].join(" ")}
                          >
                            {label}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Trial", "1 cap", "1 cap", "5 days"],
                        ["Start", "1–2 caps", "1 cap", "15 days"],
                        ["Grow", "2 caps", "2 caps", "30 days"],
                        ["Power", "2–3 caps", "2–3 caps", "90 days"],
                      ].map((row) => (
                        <tr key={row[0]}>
                          <td
                            className={[
                              inter.className,
                              "px-[10px] py-[10px] text-[14px] font-semibold text-[#FFFFFF]",
                            ].join(" ")}
                          >
                            {row[0]}
                          </td>
                          <td className="px-[10px] py-[10px] text-[14px] font-normal text-[#A3A3A8]">{row[1]}</td>
                          <td className="px-[10px] py-[10px] text-[14px] font-normal text-[#A3A3A8]">{row[2]}</td>
                          <td className="px-[10px] py-[10px] text-[14px] font-normal text-[#A3A3A8]">{row[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="rounded-[20px] bg-[#020B41] px-[20px] py-[20px] text-white lg:h-[295.73px] lg:w-[510px]">
              <div className="space-y-5">
                <div className="flex items-center gap-[10px]">
                  <div className="flex h-[28px] w-[28px] items-center justify-center rounded-[8px] bg-[rgba(255,255,255,0.08)] text-[13px]">
                    ⏰
                  </div>
                  <h3
                    className={[
                      plusJakartaSans.className,
                      "text-[16px] font-bold leading-[1.4] text-white",
                    ].join(" ")}
                  >
                    How to take it correctly
                  </h3>
                </div>

                <ul className="space-y-[10px]">
                  {[
                    "Take with a full glass of water, 30 minutes before or after a meal",
                    "Morning dose: before breakfast for maximum Urolithin-A absorption",
                    "Evening dose: 1 hour before sleep for L-Tryptophan's sleep effect",
                    "Do not crush or split capsules — nano-encapsulation requires intact delivery",
                    "If you miss a dose, resume normally — do not double-dose",
                  ].map((item) => (
                    <li
                      key={item}
                      className={[
                        inter.className,
                        "flex gap-[8px] text-[14px] font-normal leading-[1.55] text-[#A3A3A8]",
                      ].join(" ")}
                    >
                      <span className="pt-[7px] text-[8px] leading-none text-[#5B8EF0]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-[20px] bg-[#020B41] px-[20px] py-[20px] text-white lg:h-[298.17px] lg:w-[510px]">
              <div className="space-y-5">
                <div className="flex items-center gap-[10px]">
                  <div className="flex h-[28px] w-[28px] items-center justify-center rounded-[8px] bg-[rgba(255,255,255,0.08)] text-[13px]">
                    📈
                  </div>
                  <h3
                    className={[
                      plusJakartaSans.className,
                      "text-[16px] font-bold leading-[1.4] text-white",
                    ].join(" ")}
                  >
                    What to expect in the first week
                  </h3>
                </div>

                <div className="space-y-[8px]">
                  <p
                    className={[
                      inter.className,
                      "text-[14px] font-normal leading-[1.55] text-[#A3A3A8]",
                    ].join(" ")}
                  >
                    Some patients experience mild digestive changes during days 1–4 as the
                    microbiome shifts.{" "}
                    <span className="text-[14px] font-semibold text-[#EBEBEF]">
                      This is normal.
                    </span>
                  </p>
                  <ul className="space-y-[10px]">
                    {[
                      "Slightly looser stools (Day 1–4) — resolves by Day 5",
                      "Noticeably better sleep often begins Day 3–5",
                      "Energy improvement typically felt Day 7 onwards",
                    ].map((item) => (
                      <li
                        key={item}
                        className={[
                          inter.className,
                          "flex gap-[8px] text-[14px] font-normal leading-[1.55] text-[#A3A3A8]",
                        ].join(" ")}
                      >
                        <span className="pt-[7px] text-[8px] leading-none text-[#5B8EF0]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p
                    className={[
                      inter.className,
                      "text-[14px] font-normal leading-[1.55] text-[#A3A3A8]",
                    ].join(" ")}
                  >
                    If symptoms persist beyond 7 days, message Dr. Shane through your portal.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[20px] bg-[#020B41] px-[20px] py-[20px] text-white lg:h-[298.17px] lg:w-[510px]">
              <div className="space-y-5">
                <div className="flex items-center gap-[10px]">
                  <div className="flex h-[28px] w-[28px] items-center justify-center rounded-[8px] bg-[rgba(255,255,255,0.08)] text-[13px]">
                    📦
                  </div>
                  <h3
                    className={[
                      plusJakartaSans.className,
                      "text-[16px] font-bold leading-[1.4] text-white",
                    ].join(" ")}
                  >
                    Storage &amp; handling
                  </h3>
                </div>

                <ul className="space-y-[10px]">
                  {[
                    "Store below 30°C, away from direct sunlight and moisture",
                    "Do not refrigerate unless instructed by Dr. Shane",
                    "Shelf life: 24 months from manufacture date (printed on pack)",
                    "Keep out of reach of children",
                  ].map((item) => (
                    <li
                      key={item}
                      className={[
                        inter.className,
                        "flex gap-[8px] text-[14px] font-normal leading-[1.55] text-[#A3A3A8]",
                      ].join(" ")}
                    >
                      <span className="pt-[7px] text-[8px] leading-none text-[#5B8EF0]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
