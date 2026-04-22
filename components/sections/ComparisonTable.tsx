import { comparisonRows } from "../../lib/data";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

export default function ComparisonTable() {
  return (
    <section className="bg-[var(--gutguard-navy)] py-16 sm:py-20">
      <Container>
        <div className="space-y-10">
          <SectionHeading
            eyebrow="Why GutGuard"
            theme="dark"
            title="Not all gut supplements are equal"
            description="Generic supplements are cheaper and easier to find. Here is what doctor-assigned protocols actually add."
            titleClassName="max-w-[30rem] text-[2.9rem] tracking-[-0.04em] sm:text-[3.35rem]"
            descriptionClassName="max-w-[26rem] text-[15px] leading-7 text-[#7c84ad]"
          />

          <div className="overflow-hidden rounded-[1.75rem] border border-white/8">
            <div className="grid min-w-[720px] grid-cols-[1.4fr_repeat(3,1fr)] text-sm">
              <div className="border-b border-white/8 bg-[var(--gutguard-navy)] px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/82">
                FEATURES
              </div>
              <div className="border-b border-l border-white/8 bg-[var(--gutguard-navy)] px-5 py-4 text-center text-[13px] font-semibold leading-5 text-white/92">
                Generic Supplements
              </div>
              <div className="border-b border-l border-white/8 bg-[var(--gutguard-navy)] px-5 py-4 text-center text-[13px] font-semibold leading-5 text-white/92">
                Other PH Health Apps
              </div>
              <div className="border-b border-l border-[var(--gutguard-blue)] bg-[var(--gutguard-blue-soft)] px-5 py-4 text-center text-[13px] font-semibold leading-5 text-white">
                GutGuard
              </div>

              {comparisonRows.map((row) => (
                <>
                  <div
                    key={`${row.feature}-feature`}
                    className="border-b border-white/8 bg-[var(--gutguard-navy)] px-5 py-4 text-[13px] font-medium text-white/92"
                  >
                    {row.feature}
                  </div>
                  <div
                    key={`${row.feature}-generic`}
                    className="border-b border-l border-white/8 bg-[var(--gutguard-navy)] px-5 py-4 text-center text-[13px] font-semibold text-[var(--gutguard-mint)]"
                  >
                    {row.generic}
                  </div>
                  <div
                    key={`${row.feature}-other`}
                    className="border-b border-l border-white/8 bg-[var(--gutguard-navy)] px-5 py-4 text-center text-[13px] font-semibold text-[var(--gutguard-amber)]"
                  >
                    {row.otherApps}
                  </div>
                  <div
                    key={`${row.feature}-gutguard`}
                    className="border-b border-l border-[var(--gutguard-blue)] bg-[var(--gutguard-blue-soft)] px-5 py-4 text-center text-[13px] font-semibold text-[var(--gutguard-mint)]"
                  >
                    {row.gutGuard}
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
