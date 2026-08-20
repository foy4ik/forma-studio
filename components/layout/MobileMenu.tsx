"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS } from "@/data/nav";
import { EASE } from "@/lib/motion";
import { useHasMounted } from "@/lib/useHasMounted";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  // Unlike the lightbox, this component is always rendered by <Header>
  // (not just after a user interaction), so it runs during SSR too — guard
  // the portal, since `document` doesn't exist on the server.
  const hasMounted = useHasMounted();

  useEffect(() => {
    if (!open) return;
    closeButtonRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!hasMounted) return null;

  // Rendered via a portal straight onto <body>, not as a child of <header>.
  // The header switches to a `backdrop-blur` background as soon as the menu
  // opens, and `backdrop-filter` establishes a new containing block for
  // `position: fixed` descendants — left inline, this dialog's "fixed
  // inset-0" would resolve against the header's own (short) box instead of
  // the viewport, squeezing the whole overlay into the header's height.
  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-50 flex flex-col bg-ink text-paper md:hidden"
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.35, ease: EASE }}
        >
          <div className="flex items-center justify-between px-6 py-5">
            <span className="font-display text-xl font-medium tracking-tight">Forma Studio</span>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="focus-ring -mr-2 rounded-full p-2"
              aria-label="Close menu"
            >
              <X className="size-6" aria-hidden />
            </button>
          </div>

          <nav aria-label="Primary" className="flex flex-1 flex-col justify-center gap-2 px-6">
            {NAV_LINKS.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: EASE, delay: 0.1 + index * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="focus-ring inline-block font-display text-5xl leading-tight tracking-tight sm:text-6xl"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 px-6 pb-10 font-sans text-sm text-paper/60">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="focus-ring hover:text-paper"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body
  );
}
