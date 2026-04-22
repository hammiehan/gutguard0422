import { protocolPlans } from "../../lib/data";
import Container from "../ui/Container";
import ProtocolCard from "../ui/ProtocolCard";
import SectionHeading from "../ui/SectionHeading";

export default function ProtocolPlans() {
  return (
    <section className="bg-white py-16 sm:py-20" id="plans">
      <Container>
        <div className="space-y-10">
          <SectionHeading
            align="center"
            eyebrow="Your next protocol"
            title="Doctor-assigned based on your score"
            description="Not sure which one? Dr Shane assigns the right protocol tier based on your actual BioScan results."
            titleClassName="text-[#1d33ff]"
          />

          <div className="grid gap-5 xl:grid-cols-4">
            {protocolPlans.map((plan) => (
              <ProtocolCard
                key={plan.title}
                badge={plan.badge}
                bullets={plan.bullets}
                cadence={plan.cadence}
                cta={plan.cta}
                featured={plan.featured}
                price={plan.price}
                summary={plan.summary}
                title={plan.title}
              />
            ))}
          </div>

          <div className="rounded-full bg-[#eef2ff] px-5 py-3 text-center text-sm text-[#6673a0]">
            Your plan is not guessed. It is tied to your blood panel and Lifestyle Inflammation
            Score, then reviewed by a physician before you begin.
          </div>

          <div className="rounded-[1.5rem] bg-[#eff8f4] p-5">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#138766]">
                GutGuard reassurance guarantee
              </p>
              <p className="text-sm leading-6 text-[#58736a]">
                If your doctor determines your bloodwork is incomplete after upload, the team will
                tell you before a full protocol tier is assigned.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
