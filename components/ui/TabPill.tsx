type TabPillProps = {
  active?: boolean;
  label: string;
};

export default function TabPill({ active = false, label }: TabPillProps) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full px-4 py-2 text-sm font-medium",
        active
          ? "bg-[#11206a] text-white"
          : "border border-[#d7dced] bg-white text-[#5f6b92]",
      ].join(" ")}
    >
      {label}
    </span>
  );
}
