type AccordionItemProps = {
  answer: string;
  defaultOpen?: boolean;
  question: string;
};

export default function AccordionItem({
  answer,
  defaultOpen = false,
  question,
}: AccordionItemProps) {
  return (
    <details
      className="group rounded-2xl border border-[#12206a] bg-[#11206a] px-5 py-4 text-white"
      open={defaultOpen}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium sm:text-base">
        <span>{question}</span>
        <span className="text-lg transition-transform duration-200 group-open:rotate-45">+</span>
      </summary>
      <p className="pt-3 text-sm leading-6 text-white/70">{answer}</p>
    </details>
  );
}
