import { scienceBlurbs, scienceStages } from "../../lib/data";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import StageCard from "../ui/StageCard";

export default function ScienceStages() {
  return (
    <section className="bg-white py-16 sm:py-20" id="science">
      <Container>
        <div className="space-y-10">
          <SectionHeading
            align="center"
            eyebrow="Gut support architecture"
            title="Three stages. One cascade."
            description="The MSS microbiome bio-regeneration system is GutGuard's protocol sequence - build, colonize, then repair."
            titleClassName="text-[#102066]"
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {scienceStages.map((stage) => (
              <StageCard
                key={stage.step}
                action={stage.action}
                description={stage.description}
                step={stage.step}
                title={stage.title}
                tone={stage.tone}
              />
            ))}
          </div>

          <div className="grid gap-5 border-t border-[#ebedf4] pt-6 sm:grid-cols-3">
            {scienceBlurbs.map((blurb) => (
              <div key={blurb.title} className="space-y-2 text-center sm:text-left">
                <p className="text-sm font-semibold text-[#11205f]">{blurb.title}</p>
                <p className="text-sm leading-6 text-[#65708f]">{blurb.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
