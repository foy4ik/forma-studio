"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { revealImage, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { useRevealFallback } from "@/lib/useRevealFallback";

export function RevealImage({
  src,
  alt,
  className,
  imgClassName,
  sizes,
  priority,
  fill = true,
  children,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  fill?: boolean;
  children?: React.ReactNode;
}) {
  const forceVisible = useRevealFallback();

  return (
    <motion.div
      className={cn("relative overflow-hidden bg-stone", className)}
      initial="hidden"
      whileInView="visible"
      animate={forceVisible ? "visible" : undefined}
      viewport={viewportOnce}
      variants={revealImage}
    >
      <Image
        src={src}
        alt={alt}
        fill={fill}
        sizes={sizes ?? "100vw"}
        priority={priority}
        className={cn("object-cover", imgClassName)}
      />
      {children}
    </motion.div>
  );
}
