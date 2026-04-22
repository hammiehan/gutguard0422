import { bioScanMarkers } from "../../lib/data";
import Container from "../ui/Container";
import MarkerCard from "../ui/MarkerCard";
import SectionHeading from "../ui/SectionHeading";

export default function BioScanReads() {
  return (
    <section className="bg-[#102066] py-16 sm:py-20">
      <Container>
        <div className="space-y-10">
          <SectionHeading
            eyebrow="The readout"
            theme="dark"
            title="What your BioScan reads"
            description="Eight blood markers. One Lifestyle Inflammation Score."
            titleClassName="max-w-[28rem]"
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {bioScanMarkers.map((marker) => (
              <MarkerCard
                key={marker.marker}
                action={marker.action}
                detail={marker.detail}
                marker={marker.marker}
                summary={marker.summary}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
