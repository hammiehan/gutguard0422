import Card from "./Card";

type StepCardProps = {
  description: string;
  step: string;
  title?: string;
};

export default function StepCard({ description, step, title }: StepCardProps) {
  return (
    <Card className="rounded-[1.5rem] border-[#c9cee1] bg-white p-6 shadow-none">
      <div className="space-y-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#eef2ff] text-sm font-semibold text-[#3047f8]">
          {step.replace("STEP ", "")}
        </div>
        <div className="space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7f88ae]">
            {step}
          </p>
          {title ? <h3 className="text-xl font-semibold tracking-tight text-[#11205f]">{title}</h3> : null}
          <p className="text-sm leading-6 text-[#67708e]">{description}</p>
        </div>
      </div>
    </Card>
  );
}
