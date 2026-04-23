"use client";

import { Plus_Jakarta_Sans } from "next/font/google";
import { useEffect, useState } from "react";

import { gutGuardNavLinks } from "../../lib/data";
import Button from "../ui/Button";
import Container from "../ui/Container";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["800"],
  display: "swap",
});

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleViewportChange = (event: MediaQueryList | MediaQueryListEvent) => {
      if (event.matches) {
        setIsMobileMenuOpen(false);
      }
    };

    handleViewportChange(mediaQuery);

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleViewportChange);

      return () => {
        mediaQuery.removeEventListener("change", handleViewportChange);
      };
    }

    mediaQuery.addListener(handleViewportChange);

    return () => {
      mediaQuery.removeListener(handleViewportChange);
    };
  }, []);

  return (
    <header className="relative z-40 bg-[#fbfaf7]">
      <Container>
        <div className="flex min-h-[4.75rem] items-center justify-between gap-4">
          <a
            className={[
              plusJakartaSans.className,
              "inline-flex h-[29.69px] shrink-0 items-center text-[29px] font-extrabold leading-[29.69px] tracking-[-0.045em] text-[#111111]",
            ].join(" ")}
            href="#top"
          >
            <span className="text-[#111111]">Gut</span>
            <span className="text-[#0305C6]">Guard</span>
          </a>

          <nav aria-label="Primary" className="hidden h-[39.09px] items-center gap-[30px] lg:flex">
            {gutGuardNavLinks.map((link) => (
              <a
                key={link.href}
                className="inline-flex items-center text-[13px] font-medium leading-[39.09px] text-[#020B41] transition-colors duration-200 hover:text-[#0305C6]"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button
              className="h-[38px] w-[131.08px] !bg-[#0305C6] px-0 py-0 text-[12px] font-semibold leading-[38px] tracking-[0] !text-[#FFFFFF] hover:!bg-[#0305C6]"
              href="#plans"
            >
              Get My Score
            </Button>
          </div>

          <button
            aria-controls="mobile-nav"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d7dced] bg-white text-[#132179] lg:hidden"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            type="button"
          >
            <span className="sr-only">Toggle navigation</span>
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.75"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path d="M6 6 18 18M6 18 18 6" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen ? (
          <div
            className="rounded-[1.5rem] border border-[#dce1ef] bg-white p-4 shadow-[0_20px_60px_rgba(17,32,95,0.08)] lg:hidden"
            id="mobile-nav"
          >
            <nav aria-label="Mobile" className="flex flex-col gap-2">
              {gutGuardNavLinks.map((link) => (
                <a
                  key={link.href}
                  className="rounded-2xl px-3 py-2.5 text-sm font-medium text-[#485173] transition-colors duration-200 hover:bg-[#f1f4ff] hover:text-[#132179]"
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                className="mt-2 w-full bg-[#1d33ff] text-xs font-semibold uppercase tracking-[0.08em] hover:bg-[#182bdc]"
                href="#plans"
              >
                Verify Score
              </Button>
            </nav>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
