type DoctorMetricProps = {
  label: string;
  value: string;
};

export default function DoctorMetric({ label, value }: DoctorMetricProps) {
  return (
    <div className="space-y-1">
      <p className="text-2xl font-semibold tracking-tight text-white">{value}</p>
      <p className="text-xs uppercase tracking-[0.16em] text-white/55">{label}</p>
    </div>
  );
}
