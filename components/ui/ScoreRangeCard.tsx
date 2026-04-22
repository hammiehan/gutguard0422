import type { ScoreRangeTone } from "../../lib/types";

const toneClasses: Record<ScoreRangeTone, string> = {
  mint: "bg-[#eff9f4] text-[#0d7f64]",
  amber: "bg-[#fff6e9] text-[#d18219]",
  orange: "bg-[#fff1ea] text-[#d96b2e]",
  rose: "bg-[#fff0f1] text-[#df4c69]",
};

type ScoreRangeCardProps = {
  action: string;
  description: string;
  label: string;
  range: string;
  tone: ScoreRangeTone;
};

export default function ScoreRangeCard({
  action,
  description,
  label,
  range,
  tone,
}: ScoreRangeCardProps) {
  return (
    <div className={["rounded-[1.5rem] p-6", toneClasses[tone]].join(" ")}>
      <div className="space-y-4">
        <div className="space-y-1">
          <p className="text-3xl font-semibold tracking-tight">{range}</p>
          <p className="text-sm font-semibold uppercase tracking-[0.14em]">{label}</p>
        </div>
        <p className="text-sm leading-6 text-current/80">{description}</p>
        <p className="text-sm font-semibold">{action}</p>
      </div>
    </div>
  );
}
