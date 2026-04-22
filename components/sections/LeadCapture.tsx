import Button from "../ui/Button";
import Container from "../ui/Container";

export default function LeadCapture() {
  return (
    <section className="bg-[#102066] py-16 sm:py-20">
      <Container>
        <div className="rounded-[1.75rem] border border-white/10 bg-[#162571] px-6 py-8 shadow-[0_24px_80px_rgba(0,0,0,0.16)] sm:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl space-y-2">
              <h2 className="text-3xl font-semibold tracking-tight text-white">
                Not sure if your labs qualify? Find out first.
              </h2>
              <p className="text-sm leading-6 text-white/70 sm:text-base">
                Send us the panel name and we will tell you if your bloodwork is enough to score
                today, before you commit to anything.
              </p>
            </div>

            <form className="flex w-full max-w-[28rem] flex-col gap-3 sm:flex-row">
              <input
                className="h-12 flex-1 rounded-full border border-white/12 bg-white/8 px-4 text-sm text-white outline-none placeholder:text-white/42"
                placeholder="your@email.com"
                type="email"
              />
              <Button className="h-12 shrink-0 bg-white px-5 text-sm font-semibold text-[#132179] hover:bg-[#eef2ff]">
                Send Free Guide
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
