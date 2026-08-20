import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { RevealText } from "@/components/ui/RevealText";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { PROJECTS } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse Forma Studio's portfolio of apartments, houses, and offices — interior architecture and design across Europe.",
};

export default function ProjectsPage() {
  return (
    <div className="pb-24 pt-36 md:pb-32 md:pt-44">
      <Container>
        <div className="max-w-2xl">
          <RevealText as="span" className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-clay">
            Portfolio
          </RevealText>
          <RevealText
            as="h1"
            delay={0.05}
            className="mt-4 font-display text-5xl leading-[1.02] tracking-tight text-ink sm:text-6xl md:text-7xl"
          >
            Projects.
          </RevealText>
          <RevealText delay={0.1} className="mt-6 font-sans text-lg leading-relaxed text-ink/70">
            A selection of apartments, houses, and offices we&rsquo;ve designed — each shaped
            by its site, its light, and the people who live or work there.
          </RevealText>
        </div>

        <div className="mt-16 md:mt-20">
          <ProjectGrid projects={PROJECTS} />
        </div>
      </Container>
    </div>
  );
}
