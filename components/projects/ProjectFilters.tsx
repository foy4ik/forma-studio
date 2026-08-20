"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CATEGORY_LABELS, type ProjectCategory } from "@/data/projects";
import { EASE } from "@/lib/motion";

export type FilterValue = ProjectCategory | "all";

const FILTERS: { value: FilterValue; label: string }[] = [
  { value: "all", label: "All" },
  { value: "apartments", label: CATEGORY_LABELS.apartments },
  { value: "houses", label: CATEGORY_LABELS.houses },
  { value: "offices", label: CATEGORY_LABELS.offices },
];

export function ProjectFilters({
  active,
  onChange,
}: {
  active: FilterValue;
  onChange: (value: FilterValue) => void;
}) {
  return (
    <div
      role="tablist"
      aria-label="Filter projects by category"
      className="flex flex-wrap gap-2"
    >
      {FILTERS.map((filter) => {
        const isActive = filter.value === active;
        return (
          <button
            key={filter.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(filter.value)}
            className={cn(
              "focus-ring relative rounded-full px-5 py-2.5 font-sans text-sm font-medium transition-colors duration-300",
              isActive ? "text-paper" : "text-ink/60 hover:text-ink"
            )}
          >
            {isActive ? (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-full bg-ink"
                transition={{ duration: 0.4, ease: EASE }}
              />
            ) : null}
            <span className="relative">{filter.label}</span>
          </button>
        );
      })}
    </div>
  );
}
