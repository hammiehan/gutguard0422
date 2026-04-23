import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import type { ScoreRangeTone } from "../../lib/types";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const toneClasses: Record<ScoreRangeTone, string> = {
  mint: "border border-[#b8e4d8] bg-[#edf6f3]",
  amber: "border border-[#f2c995] bg-[#fbf2e6]",
  orange: "border border-[#f0c6b6] bg-[#f9efe9]",
  rose: "border border-[#f1b7b6] bg-[#fbefef]",
};

const rangeClasses: Record<ScoreRangeTone, string> = {
  mint: "text-[#065F46]",
  amber: "text-[#B45309]",
  orange: "text-[#C2410C]",
  rose: "text-[#B91C1C]",
};

const actionClasses: Record<ScoreRangeTone, string> = {
  mint: "border-[#9fd8c8] bg-[#dff0ea] text-[#0d6f63]",
  amber: "border-[#f2c995] bg-[#f9ecd9] text-[#a95312]",
  orange: "border-[#efb79c] bg-[#f8e5da] text-[#b4511c]",
  rose: "border-[#efb0ad] bg-[#f8dddd] text-[#b72a26]",
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
    <div className={["h-[294.7px] w-full max-w-[245px] rounded-[1.5rem] p-9 text-left", toneClasses[tone]].join(" ")}>
      <div className="space-y-5">
        <div className="space-y-1">
          <p
            className={[
              plusJakartaSans.className,
              "text-[40px] font-extrabold leading-[40px] tracking-[-1.2px]",
              rangeClasses[tone],
            ].join(" ")}
          >
            {range}
          </p>
          <p className={[plusJakartaSans.className, "text-[14px] font-semibold tracking-[-0.02em] text-[#3f3f46]"].join(" ")}>
            {label}
          </p>
        </div>
        <p
          className={[
            inter.className,
            "max-w-[180.59px] text-[14px] font-normal leading-[23.1px] tracking-[0] text-[#6B6B71]",
          ].join(" ")}
        >
          {description}
        </p>
        <p
          className={[
            inter.className,
            "inline-flex h-[28.14px] w-[115.95px] items-center justify-center rounded-full border px-0 py-0 text-[11px] font-bold leading-[18.1px] tracking-[0.66px]",
            actionClasses[tone],
          ].join(" ")}
        >
          {action}
        </p>
      </div>
    </div>
  );
}
