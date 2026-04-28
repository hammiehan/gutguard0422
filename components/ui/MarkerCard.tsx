import { Fira_Code, Inter, Plus_Jakarta_Sans } from "next/font/google";

type MarkerCardProps = {
  code: string;
  desktopSizeClassName?: string;
  description: string;
  marker: string;
  normalRange: string;
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export default function MarkerCard({
  code,
  desktopSizeClassName,
  description,
  marker,
  normalRange,
}: MarkerCardProps) {
  return (
    <div
      className={[
        inter.className,
        "flex h-full min-h-[270px] flex-col rounded-[20px] border border-[rgba(255,255,255,0.09)] bg-[#020B41] p-6",
        desktopSizeClassName,
      ].join(" ")}
    >
      <div className="flex h-full flex-col">
        <div className="space-y-3">
          <p
            className={[
              firaCode.className,
              "text-[11px] font-bold uppercase tracking-[0.18em] text-[#5B8EF0]",
            ].join(" ")}
          >
            {code}
          </p>
          <h3
            className={[
              plusJakartaSans.className,
              "text-[14px] font-semibold leading-[1.25] text-white",
            ].join(" ")}
          >
            {marker}
          </h3>
          <p className={[inter.className, "text-[14px] leading-[1.65] text-[#A3A3A8]"].join(" ")}>
            {description}
          </p>
        </div>

        <div className="mt-auto pt-4">
          <span
            className={[
              inter.className,
              "inline-flex rounded-full border border-[rgba(5,150,105,0.1)] bg-[rgba(5,150,105,0.18)] px-3 py-1.5 text-[11px] font-semibold leading-none text-[#34D399]",
            ].join(" ")}
          >
            {normalRange}
          </span>
        </div>
      </div>
    </div>
  );
}
