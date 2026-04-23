import { Inter, Plus_Jakarta_Sans } from "next/font/google";

type StatItemProps = {
  label: string;
  value: string;
};

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function StatItem({ label, value }: StatItemProps) {
  return (
    <div className="space-y-1.5 text-center">
      <p
        className={[
          plusJakartaSans.className,
          "text-[58px] font-semibold leading-none tracking-[-0.05em] text-[#020B41]",
        ].join(" ")}
      >
        {value}
      </p>
      <p
        className={[
          inter.className,
          "mx-auto max-w-[12.25rem] text-[13px] leading-[16px] text-[#1f2859]",
        ].join(" ")}
      >
        {label}
      </p>
    </div>
  );
}
