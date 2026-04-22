import Card from "./Card";

type ReviewCardProps = {
  after: string;
  before: string;
  improvement: string;
  note: string;
  patient: string;
  quote: string;
};

export default function ReviewCard({
  after,
  before,
  improvement,
  note,
  patient,
  quote,
}: ReviewCardProps) {
  return (
    <Card className="rounded-[1.5rem] border-[#e3e6f1] p-5 shadow-none">
      <div className="space-y-5">
        <div className="flex items-start justify-between">
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-semibold tracking-tight text-[#f0625d]">{before}</span>
            <span className="text-3xl font-semibold tracking-tight text-[#24b08b]">{after}</span>
          </div>
          <span className="rounded-full bg-[#eefaf6] px-2.5 py-1 text-xs font-semibold text-[#19a077]">
            {improvement}
          </span>
        </div>
        <p className="text-sm leading-6 text-[#5c6788]">{quote}</p>
        <div className="border-t border-[#edf0f6] pt-4">
          <p className="text-sm font-semibold text-[#11205f]">{patient}</p>
          <p className="text-xs text-[#7a84a8]">{note}</p>
        </div>
      </div>
    </Card>
  );
}
