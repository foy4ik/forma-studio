"use client";

import { motion } from "framer-motion";
import { fadeUpDelayed, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { useRevealFallback } from "@/lib/useRevealFallback";

export function RevealText({
  children,
  className,
  as = "div",
  delay = 0,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  id?: string;
}) {
  const MotionTag = motion[as as "div"];
  const forceVisible = useRevealFallback();

  return (
    <MotionTag
      id={id}
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      animate={forceVisible ? "visible" : undefined}
      viewport={viewportOnce}
      variants={fadeUpDelayed(delay)}
    >
      {children}
    </MotionTag>
  );
}
