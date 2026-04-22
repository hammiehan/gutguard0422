import { patientReviews } from "../../lib/data";
import Container from "../ui/Container";
import ReviewCard from "../ui/ReviewCard";
import SectionHeading from "../ui/SectionHeading";

export default function PatientReviews() {
  return (
    <section className="bg-[#fbfaf7] py-16 sm:py-20" id="reviews">
      <Container>
        <div className="space-y-10">
          <SectionHeading
            align="center"
            eyebrow="Patient results"
            title="Real scores. Real patients."
            titleClassName="text-[#1d33ff]"
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {patientReviews.map((review) => (
              <ReviewCard
                key={review.patient}
                after={review.after}
                before={review.before}
                improvement={review.improvement}
                note={review.note}
                patient={review.patient}
                quote={review.quote}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
