import { knowledgeCards, knowledgeTabs } from "../../lib/data";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import TabPill from "../ui/TabPill";

export default function KnowledgeHub() {
  return (
    <section className="bg-white py-16 sm:py-20" id="knowledge">
      <Container>
        <div className="space-y-10">
          <SectionHeading
            eyebrow="Rules, durations"
            title="Everything you need to know"
            description="Dosing, safety, shipping, compliance, and what you should expect by stage."
            titleClassName="text-[#102066]"
          />

          <div className="flex flex-wrap gap-2.5">
            {knowledgeTabs.map((tab) => (
              <TabPill key={tab.label} active={tab.active} label={tab.label} />
            ))}
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {knowledgeCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[1.5rem] bg-[#102066] p-6 text-white shadow-[0_20px_60px_rgba(16,32,102,0.08)]"
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold tracking-tight">{card.title}</h3>
                  <p className="text-sm leading-6 text-white/72">{card.body}</p>
                  <ul className="space-y-2 text-sm text-white/68">
                    {card.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#4ce1b6]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
