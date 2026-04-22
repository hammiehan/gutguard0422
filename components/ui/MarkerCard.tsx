type MarkerCardProps = {
  action: string;
  detail: string;
  marker: string;
  summary: string;
};

export default function MarkerCard({ action, detail, marker, summary }: MarkerCardProps) {
  return (
    <div className="rounded-[1.2rem] border border-white/8 bg-[#162571] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6f80da]">
            Marker
          </p>
          <h3 className="text-lg font-semibold tracking-tight text-white">{marker}</h3>
          <p className="text-sm font-medium text-[#8ab1ff]">{summary}</p>
        </div>
        <p className="text-sm leading-6 text-white/70">{detail}</p>
        <p className="text-sm font-medium text-[#4ce1b6]">{action}</p>
      </div>
    </div>
  );
}
