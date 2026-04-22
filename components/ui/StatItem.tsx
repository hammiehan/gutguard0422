type StatItemProps = {
  label: string;
  value: string;
};

export default function StatItem({ label, value }: StatItemProps) {
  return (
    <div className="space-y-2 text-center">
      <p className="text-[44px] font-semibold leading-none tracking-[-0.04em] text-[#020B41]">
        {value}
      </p>
      <p className="mx-auto max-w-[12.5rem] text-[13px] leading-[18px] text-[#313758]">{label}</p>
    </div>
  );
}
