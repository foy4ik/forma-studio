"use client";

import { motion } from "framer-motion";
import { fadeUpDelayed, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

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

  return (
    <MotionTag
      id={id}
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUpDelayed(delay)}
    >
      {children}
    </MotionTag>
  );
}
