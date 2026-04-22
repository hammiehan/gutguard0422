import { trustStats } from "../../lib/data";
import Container from "../ui/Container";
import StatItem from "../ui/StatItem";

export default function TrustStats() {
  return (
    <section className="bg-[#eeeeef] py-8 sm:py-10">
      <Container>
        <div className="mx-auto max-w-[811.65px] space-y-5">
          <div className="grid gap-6 md:grid-cols-3 md:gap-0">
            {trustStats.map((stat, index) => (
              <div
                key={stat.label}
                className={[
                  "px-4",
                  index < trustStats.length - 1 ? "md:border-r md:border-[#020B41]/35" : "",
                ].join(" ")}
              >
                <StatItem label={stat.label} value={stat.value} />
              </div>
            ))}
          </div>
          <p className="text-center text-[10px] leading-4 text-[#5f6482]">
            Philippine Statistics Authority, 2022 Causes of Death. Non-communicable diseases with
            inflammatory risk factors. GutGuard patient data, n=127, Q1 2026.
          </p>
        </div>
      </Container>
    </section>
  );
}
