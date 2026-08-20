"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/data/nav";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  const isHeroPage =
    pathname === "/" || (pathname.startsWith("/projects/") && pathname !== "/projects");
  const transparent = isHeroPage && !scrolled && !menuOpen;

  // Close the mobile menu on navigation. Adjusted during render (per React's
  // "resetting state when a prop changes" pattern) rather than in an effect.
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        transparent
          ? "bg-transparent text-paper"
          : "bg-paper/90 text-ink shadow-[0_1px_0_0_var(--color-line)] backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex w-full max-w-[90rem] items-center justify-between px-6 py-5 md:px-10 lg:px-16">
        <Link
          href="/"
          className="focus-ring font-display text-xl font-medium tracking-tight"
          aria-label="Forma Studio — home"
        >
          Forma Studio
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "focus-ring font-sans text-sm font-medium tracking-wide transition-opacity hover:opacity-70",
                pathname === link.href && "underline underline-offset-4"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="focus-ring -mr-2 flex items-center gap-2 rounded-full p-2 font-sans text-sm font-medium md:hidden"
          aria-label="Open menu"
          aria-haspopup="dialog"
          aria-expanded={menuOpen}
        >
          <Menu className="size-6" aria-hidden />
        </button>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
