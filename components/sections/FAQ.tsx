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
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const questions = [
  "Do I need to buy anything to see my score?",
  "I already have a doctor. Why do I need Dr. Shane?",
  "How is this different from a probiotic I can buy at Mercury Drug?",
  "What if my score does not improve?",
  "Can I take SynBIOTIC+ alongside other supplements?",
  "Is GutGuard Halal?",
  "Do I need a new blood test or can I use old results?",
  "What happens after I finish my protocol?",
] as const;

export default function FAQ() {
  return (
    <section className="bg-[#E5E5E5] py-16 sm:h-[947.33px] sm:py-0" id="faq">
      <Container>
        <div className="mx-auto flex max-w-[1040px] flex-col items-center space-y-[26px] sm:pt-[147px]">
          <div className="flex flex-col items-center text-center">
            <p
              className={[
                firaCode.className,
                "h-[11px] w-[25.95px] text-[11px] font-bold uppercase leading-[18.1px] tracking-[1.98px] text-[#5B8EF0]",
              ].join(" ")}
            >
              FAQ
            </p>
            <h2
              className={[
                plusJakartaSans.className,
                "mt-[8px] h-[66px] w-full max-w-[638px] text-[52px] font-bold leading-[1.05] tracking-[-0.04em] text-[#0305C6]",
              ].join(" ")}
            >
              Common questions
            </h2>
          </div>

          <div className="mx-auto flex w-full max-w-[640px] flex-col gap-[8px] sm:w-[640px]">
            {questions.map((question) => (
              <div
                key={question}
                className="flex h-[58px] w-full items-center justify-between overflow-hidden rounded-[20px] bg-[#020B41] px-[18px] py-[12px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.09)]"
              >
                <span
                  className={[
                    inter.className,
                    "min-w-0 pr-4 text-[14px] font-normal leading-[1.4] text-white",
                  ].join(" ")}
                >
                  {question}
                </span>
                <span className="shrink-0 text-[16px] leading-none text-white/80">+</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
