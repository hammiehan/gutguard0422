import { faqItems } from "../../lib/data";
import AccordionItem from "../ui/AccordionItem";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

export default function FAQ() {
  return (
    <section className="bg-white py-16 sm:py-20" id="faq">
      <Container>
        <div className="mx-auto max-w-3xl space-y-8">
          <SectionHeading
            align="center"
            eyebrow="FAQ"
            title="Common questions"
            titleClassName="text-[#1d33ff]"
          />

          <div className="space-y-3">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={item.question}
                answer={item.answer}
                defaultOpen={index === 0}
                question={item.question}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
