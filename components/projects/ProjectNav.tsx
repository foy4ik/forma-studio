import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectNav({ previous, next }: { previous: Project; next: Project }) {
  return (
    <nav aria-label="Adjacent projects" className="grid grid-cols-1 border-t border-line sm:grid-cols-2">
      <Link
        href={`/projects/${previous.slug}`}
        className="focus-ring group relative flex min-h-56 flex-col justify-end overflow-hidden border-b border-line p-8 sm:border-b-0 sm:border-r"
      >
        <Image
          src={previous.cover}
          alt=""
          fill
          sizes="50vw"
          className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-15"
        />
        <span className="relative flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-[0.15em] text-ink/50">
          <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" aria-hidden />
          Previous project
        </span>
        <span className="relative mt-2 font-display text-2xl tracking-tight text-ink sm:text-3xl">
          {previous.title}
        </span>
      </Link>

      <Link
        href={`/projects/${next.slug}`}
        className="focus-ring group relative flex min-h-56 flex-col items-end justify-end overflow-hidden p-8 text-right"
      >
        <Image
          src={next.cover}
          alt=""
          fill
          sizes="50vw"
          className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-15"
        />
        <span className="relative flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-[0.15em] text-ink/50">
          Next project
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
        </span>
        <span className="relative mt-2 font-display text-2xl tracking-tight text-ink sm:text-3xl">
          {next.title}
        </span>
      </Link>
    </nav>
  );
}
