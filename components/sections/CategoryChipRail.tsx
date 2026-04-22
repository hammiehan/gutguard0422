import Container from "../ui/Container";

export default function CategoryChipRail() {
  const featuredIn = [
    "Philippine Daily Inquirer",
    "ANC Health",
    "BusinessWorld PH",
    "Manila Bulletin",
    "Rappler Wellness",
  ];

  return (
    <section className="border-b border-t border-[#7E7E84] bg-[#F5F4F2] py-4">
      <Container>
        <div className="flex min-h-[71.14px] flex-col justify-center gap-3 lg:flex-row lg:items-center lg:gap-6">
          <p className="shrink-0 text-[13px] font-semibold uppercase tracking-[0.22em] text-[#6E6E6E]">
            Featured In
          </p>
          <div className="flex flex-wrap gap-4">
            {featuredIn.map((item) => (
              <span
                key={item}
                className="inline-flex h-10 items-center rounded-[12px] border border-[#020B41] bg-[#F5F4F2] px-5 text-[13px] font-medium text-[#6E6E6E]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
