"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectFilters, type FilterValue } from "@/components/projects/ProjectFilters";
import { ProjectCard } from "@/components/projects/ProjectCard";
import type { Project } from "@/data/projects";
import { EASE } from "@/lib/motion";
import { useHasMounted } from "@/lib/useHasMounted";

const PAGE_SIZE = 6;

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<FilterValue>("all");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const hasMounted = useHasMounted();

  const filtered = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [projects, filter]
  );

  const shown = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  function handleFilterChange(value: FilterValue) {
    setFilter(value);
    setVisible(PAGE_SIZE);
  }

  const gridClassName = "mt-12 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <ProjectFilters active={filter} onChange={handleFilterChange} />
        <p className="font-sans text-sm text-ink/50" aria-live="polite">
          {filtered.length} project{filtered.length === 1 ? "" : "s"}
        </p>
      </div>

      {hasMounted ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className={gridClassName}
          >
            {shown.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      ) : (
        // First paint (server-rendered HTML and the client's pre-hydration
        // render) must show the grid immediately, with no JS-gated opacity.
        <div className={gridClassName}>
          {shown.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      )}

      {shown.length === 0 ? (
        <p className="mt-16 text-center font-sans text-ink/50">
          No projects in this category yet.
        </p>
      ) : null}

      {hasMore ? (
        <div className="mt-16 flex justify-center">
          <motion.button
            type="button"
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: EASE }}
            className="focus-ring rounded-full border border-ink/20 px-8 py-3.5 font-sans text-sm font-medium text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper"
          >
            Load more
          </motion.button>
        </div>
      ) : null}
    </div>
  );
}
