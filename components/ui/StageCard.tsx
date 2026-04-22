import type { StageTone } from "../../lib/types";

const toneClasses: Record<StageTone, string> = {
  blue: "bg-[#eef2ff] text-[#3550f0]",
  mint: "bg-[#eef9f5] text-[#148c6b]",
  peach: "bg-[#fff2ea] text-[#df8a45]",
};

type StageCardProps = {
  action: string;
  description: string;
  step: string;
  title: string;
  tone: StageTone;
};

export default function StageCard({
  action,
  description,
  step,
  title,
  tone,
}: StageCardProps) {
  return (
    <div className={["rounded-[1.5rem] p-6", toneClasses[tone]].join(" ")}>
      <div className="space-y-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em]">{step}</p>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold tracking-tight text-[#13215c]">{title}</h3>
          <p className="text-sm leading-6 text-[#5f6c93]">{description}</p>
        </div>
        <p className="text-sm font-semibold">{action}</p>
      </div>
    </div>
  );
}
