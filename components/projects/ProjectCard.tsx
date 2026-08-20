"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { CATEGORY_LABELS } from "@/data/projects";
import { EASE } from "@/lib/motion";

export function ProjectCard({
  project,
  priority = false,
  index = 0,
}: {
  project: Project;
  priority?: boolean;
  index?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE, delay: (index % 6) * 0.05 }}
      className="group"
    >
      <Link href={`/projects/${project.slug}`} className="focus-ring block">
        <div className="relative aspect-[4/5] overflow-hidden bg-stone">
          <Image
            src={project.cover}
            alt={`${project.title} — ${project.type} in ${project.location}`}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 32vw, (min-width: 640px) 45vw, 90vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/15" />

          <span className="absolute right-4 top-4 flex size-10 -translate-y-2 items-center justify-center rounded-full bg-paper text-ink opacity-0 transition-all duration-400 ease-out group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight className="size-5" aria-hidden />
          </span>

          <span className="absolute bottom-0 left-0 right-0 translate-y-full bg-paper/95 px-4 py-2.5 text-center font-sans text-xs font-medium uppercase tracking-[0.15em] text-ink opacity-0 transition-all duration-400 ease-out group-hover:translate-y-0 group-hover:opacity-100">
            View project
          </span>
        </div>

        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-xl tracking-tight text-ink">{project.title}</h3>
            <p className="mt-1 font-sans text-sm text-ink/60">
              {CATEGORY_LABELS[project.category]} · {project.location}
            </p>
          </div>
          <span className="shrink-0 pt-1 font-sans text-sm text-ink/50">{project.year}</span>
        </div>
      </Link>
    </motion.article>
  );
}
