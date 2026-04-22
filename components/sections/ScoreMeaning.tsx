import { scoreRanges } from "../../lib/data";
import Container from "../ui/Container";
import ScoreRangeCard from "../ui/ScoreRangeCard";
import SectionHeading from "../ui/SectionHeading";

export default function ScoreMeaning() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="space-y-10">
          <SectionHeading
            align="center"
            eyebrow="Your score guide"
            title="What your score means"
            description="Scored 0 to 100 from your gut markers. Higher means more systemic inflammation."
            titleClassName="text-[#102066]"
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
