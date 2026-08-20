"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Container } from "@/components/ui/Container";
import { EASE } from "@/lib/motion";
import { SITE_IMAGES } from "@/data/site-images";
import { useHasMounted } from "@/lib/useHasMounted";

const line = {
  hidden: { opacity: 0, y: "100%" },
  visible: (delay: number) => ({
    opacity: 1,
    y: "0%",
    transition: { duration: 0.8, ease: EASE, delay },
  }),
};

export function Hero() {
  // On the very first paint, skip the mount animation entirely so the
  // headline is never gated behind opacity:0 waiting on JS — see
  // useHasMounted.
  const hasMounted = useHasMounted();

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink">
      <Image
        src={SITE_IMAGES.homeHero}
        alt="A calm, light-filled living room with a low sofa, plaster walls, and large windows."
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/40" aria-hidden />

      <Container className="relative z-10 flex flex-col gap-10 pb-20 pt-40 md:pb-28">
        <h1 className="max-w-4xl overflow-hidden font-display text-[13vw] font-normal leading-[0.95] tracking-tight text-paper sm:text-7xl md:text-8xl lg:text-[7rem]">
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              custom={0.1}
              initial={hasMounted ? "hidden" : false}
              animate="visible"
              variants={line}
            >
              Spaces with
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block italic"
              custom={0.25}
              initial={hasMounted ? "hidden" : false}
              animate="visible"
              variants={line}
            >
              character.
            </motion.span>
          </span>
        </h1>

        <motion.div
          initial={hasMounted ? { opacity: 0, y: 16 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.55 }}
          className="flex flex-col items-start gap-8 sm:flex-row sm:items-end sm:justify-between"
        >
          <p className="max-w-md font-sans text-lg leading-relaxed text-paper/85 md:text-xl">
            Interior architecture and design for homes that feel truly yours.
          </p>
          <ArrowLink href="/projects" variant="button">
            View projects
          </ArrowLink>
        </motion.div>
      </Container>
    </section>
  );
}
