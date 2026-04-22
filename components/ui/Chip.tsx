import type { HTMLAttributes, ReactNode } from "react";

type ChipProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
};

export default function Chip({ children, className, ...props }: ChipProps) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full border border-neutral-300 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </span>
  );
}
