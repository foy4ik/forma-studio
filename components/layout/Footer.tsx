import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { NAV_LINKS, SOCIAL_LINKS, STUDIO_ADDRESS } from "@/data/nav";

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <Container className="flex flex-col gap-12 py-16 md:py-20">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="focus-ring font-display text-2xl tracking-tight">
              Forma Studio
            </Link>
            <p className="mt-4 font-sans text-sm leading-relaxed text-ink/60">
              Interior architecture and design for homes and workplaces that feel truly yours.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <h3 className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-ink/40">
                Navigate
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="focus-ring font-sans text-sm text-ink/80 hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-ink/40">
                Studio
              </h3>
              <address className="mt-4 flex flex-col gap-2.5 font-sans text-sm not-italic text-ink/80">
                <span>{STUDIO_ADDRESS.line1}</span>
                <span>{STUDIO_ADDRESS.line2}</span>
                <a href={`mailto:${STUDIO_ADDRESS.email}`} className="focus-ring hover:text-ink">
                  {STUDIO_ADDRESS.email}
                </a>
                <a
                  href={`tel:${STUDIO_ADDRESS.phone.replace(/\s+/g, "")}`}
                  className="focus-ring hover:text-ink"
                >
                  {STUDIO_ADDRESS.phone}
                </a>
              </address>
            </div>

            <div>
              <h3 className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-ink/40">
                Follow
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {SOCIAL_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="focus-ring font-sans text-sm text-ink/80 hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-line pt-8 font-sans text-xs text-ink/40 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Forma Studio. All rights reserved.</p>
          <p>Portfolio project — a fictional studio for demonstration purposes.</p>
        </div>
      </Container>
    </footer>
  );
}
