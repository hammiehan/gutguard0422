import { footerBadges, footerColumns } from "../../lib/data";
import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="bg-[#171717] text-white">
      <Container>
        <div className="flex flex-col gap-10 py-14">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_repeat(4,minmax(0,1fr))]">
            <div className="max-w-sm space-y-4">
              <a className="text-lg font-semibold tracking-tight text-white" href="#top">
                GutGuard Protocol
              </a>
              <p className="text-sm leading-6 text-white/65">
                Doctor-assigned gut health protocols based on bloodwork you already have.
              </p>
              <p className="text-xs leading-5 text-white/45">
                GutGuard Holdings Philippines Inc. is an educational and wellness platform. It does
                not replace emergency care or your primary physician.
              </p>
            </div>

            {footerColumns.map((column) => (
              <div key={column.title} className="space-y-4">
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                  {column.title}
                </h2>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        className="text-sm text-white/72 transition-colors duration-200 hover:text-white"
                        href={link.href}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-5 border-t border-white/10 pt-6">
            <div className="flex flex-col gap-3 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
              <p>© 2026 GutGuard Protocol. All rights reserved.</p>
              <p>Made for the Philippines</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {footerBadges.map((badge) => (
                <span
                  key={badge.label}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/55"
                >
                  {badge.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
