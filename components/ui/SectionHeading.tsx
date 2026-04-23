import type { ReactNode } from "react";

type SectionHeadingProps = {
  align?: "left" | "center";
  className?: string;
  eyebrow?: ReactNode;
  eyebrowClassName?: string;
  descriptionClassName?: string;
  theme?: "light" | "dark";
  title: ReactNode;
  titleClassName?: string;
  description?: ReactNode;
};

export default function SectionHeading({
  align = "left",
  className,
  eyebrow,
  eyebrowClassName,
  descriptionClassName,
  title,
  titleClassName,
  description,
  theme = "light",
}: SectionHeadingProps) {
  const alignmentClasses = align === "center" ? "text-center items-center" : "text-left";
  const eyebrowClasses =
    theme === "dark"
      ? "text-sm font-semibold uppercase tracking-[0.16em] text-white/55"
      : "text-sm font-semibold uppercase tracking-[0.16em] text-neutral-500";
  const titleClasses =
    theme === "dark"
      ? "text-3xl font-semibold tracking-tight text-white sm:text-4xl"
      : "text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl";
  const descriptionClasses =
    theme === "dark"
      ? "max-w-2xl text-base leading-7 text-white/70 sm:text-lg"
      : "max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg";

  return (
    <div className={["flex flex-col space-y-3", alignmentClasses, className].filter(Boolean).join(" ")}>
      {eyebrow ? (
        <p className={[eyebrowClasses, eyebrowClassName].filter(Boolean).join(" ")}>{eyebrow}</p>
      ) : null}
      <h2 className={[titleClasses, titleClassName].filter(Boolean).join(" ")}>{title}</h2>
      {description ? (
        <p className={[descriptionClasses, descriptionClassName].filter(Boolean).join(" ")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
