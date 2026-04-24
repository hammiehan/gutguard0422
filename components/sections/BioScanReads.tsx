import { Plus_Jakarta_Sans } from "next/font/google";
import { Fira_Code } from "next/font/google";

import { bioScanMarkers } from "../../lib/data";
import Container from "../ui/Container";
import MarkerCard from "../ui/MarkerCard";
import SectionHeading from "../ui/SectionHeading";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function BioScanReads() {
  return (
    <section className="bg-[#142344] py-16 sm:h-[1035.8px] sm:py-0">
      <Container>
        <div className="space-y-10 sm:pt-[108px]">
          <SectionHeading
            eyebrow="The 8 Markers"
            eyebrowClassName={`!text-[#5B8EF0] ${firaCode.className}`}
            theme="dark"
            title={
              <>
                What your BioScan
                <br />
                reads
              </>
            }
            description="Eight blood markers. One Lifestyle Inflammation Score."
            titleClassName={`${plusJakartaSans.className} max-w-[593px] !text-[40px] !font-bold !leading-[44px] !tracking-[-1.2px] sm:!text-[52px] sm:!leading-[57.2px] sm:!tracking-[-1.56px]`}
          />

          <div className="grid gap-[18px] md:grid-cols-2 xl:grid-cols-4">
            {bioScanMarkers.map((marker) => (
              <MarkerCard
                key={marker.marker}
                code={marker.code}
                description={marker.description}
                marker={marker.marker}
                normalRange={marker.normalRange}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
