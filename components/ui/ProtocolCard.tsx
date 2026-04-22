import Button from "./Button";
import Card from "./Card";

type ProtocolCardProps = {
  badge?: string;
  bullets: string[];
  cadence: string;
  cta: string;
  featured?: boolean;
  price: string;
  summary: string;
  title: string;
};

export default function ProtocolCard({
  badge,
  bullets,
  cadence,
  cta,
  featured = false,
  price,
  summary,
  title,
}: ProtocolCardProps) {
  return (
    <Card
      className={[
        "relative h-full rounded-[1.75rem] border-[#d9dff0] p-6 shadow-none",
        featured ? "border-[#3047f8] ring-2 ring-[#3047f8]" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex h-full flex-col gap-6">
        {badge ? (
          <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3047f8] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
            {badge}
          </span>
        ) : null}

        <div className="space-y-4">
          <div className="space-y-1">
            <h3 className="text-xl font-semibold tracking-tight text-[#11205f]">{title}</h3>
            <p className="text-sm leading-6 text-[#667192]">{summary}</p>
          </div>
          <div className="flex items-end gap-1">
            <span className="text-4xl font-semibold tracking-tight text-[#11205f]">{price}</span>
            <span className="pb-1 text-sm text-[#667192]">{cadence}</span>
          </div>
        </div>

        <ul className="space-y-3 text-sm text-[#506083]">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#3047f8]" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <Button
          className={[
            "mt-auto w-full",
            featured
              ? "bg-[#1d33ff] hover:bg-[#182bdc]"
              : "border-[#3047f8] text-[#3047f8] hover:bg-[#eef2ff]",
          ]
            .filter(Boolean)
            .join(" ")}
          variant={featured ? "primary" : "secondary"}
        >
          {cta}
        </Button>
      </div>
    </Card>
  );
}
