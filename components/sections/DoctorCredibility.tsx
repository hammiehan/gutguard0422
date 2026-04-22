import { doctorMetrics, doctorProcessChips } from "../../lib/data";
import Chip from "../ui/Chip";
import Container from "../ui/Container";
import DoctorMetric from "../ui/DoctorMetric";
import SectionHeading from "../ui/SectionHeading";

export default function DoctorCredibility() {
  return (
    <section className="bg-[#102066] py-16 sm:py-20">
      <Container>
        <div className="space-y-10">
          <SectionHeading
            eyebrow="Your assigned doctor"
            theme="dark"
            title="Every patient gets a doctor. Not a chatbot."
            description="Every BioScan score is reviewed by a licensed physician. Dr Shane reviews your markers, flags what is elevated, and writes your protocol himself."
            titleClassName="max-w-[38rem]"
          />

          <div className="rounded-[1.75rem] border border-white/10 bg-[#162571] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.18)] sm:p-8">
            <div className="space-y-8">
              <div className="flex flex-col gap-5 md:flex-row md:items-start">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#21369c] text-xl font-semibold text-white">
                  SA
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-white">
                      Dr. Shane Animas, MD
                    </h3>
                    <p className="text-sm text-[#96a5f0]">
                      Internal Medicine · Lifestyle Medicine Lead · GutGuard Manila Clinic
                    </p>
                  </div>
                  <blockquote className="max-w-[38rem] rounded-2xl border border-white/8 bg-white/5 p-4 text-sm leading-6 text-white/78">
                    "A score of 74 does not tell you what supplement to buy. It tells us what
                    pattern to treat, and in what order."
                  </blockquote>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-3">
                {doctorMetrics.map((metric) => (
                  <DoctorMetric key={metric.label} label={metric.label} value={metric.value} />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {doctorProcessChips.map((chip) => (
              <Chip
                key={chip.label}
                className="border-white/12 bg-white/5 text-white/72 backdrop-blur-sm"
              >
                {chip.label}
              </Chip>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
