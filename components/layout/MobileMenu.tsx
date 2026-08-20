"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS } from "@/data/nav";
import { EASE } from "@/lib/motion";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeButtonRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-50 flex flex-col bg-ink text-paper md:hidden"
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.5, ease: EASE }}
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
    </AnimatePresence>
  );
}
