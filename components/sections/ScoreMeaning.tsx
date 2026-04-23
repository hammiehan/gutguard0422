import { Fira_Code, Inter, Plus_Jakarta_Sans } from "next/font/google";

import { scoreRanges } from "../../lib/data";
import Container from "../ui/Container";
import ScoreRangeCard from "../ui/ScoreRangeCard";
import SectionHeading from "../ui/SectionHeading";

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
  weight: ["400"],
  display: "swap",
});

export default function ScoreMeaning() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="space-y-10">
          <SectionHeading
            align="left"
            eyebrow="YOUR GLIS RESULT"
            title="What your score means"
            description="Scored 0–100 from your eight markers. Higher means more systemic inflammation."
            titleClassName={`${plusJakartaSans.className} !text-[52px] !font-bold !text-[#020B41]`}
            eyebrowClassName={`${firaCode.className} !text-[11px] !font-bold !leading-[18.1px] !tracking-[1.98px] !text-[#1A56DB]`}
            descriptionClassName={`${inter.className} max-w-[760px] !text-[18px] !font-normal`}
          />

          <div className="grid gap-4 lg:grid-cols-4">
            {scoreRanges.map((range) => (
              <ScoreRangeCard
                key={range.range}
                action={range.action}
                description={range.description}
                label={range.label}
                range={range.range}
                tone={range.tone}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
