import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { getFeaturedProjects } from "@/data/projects";

export function FeaturedProjects() {
  const projects = getFeaturedProjects(4);

  return (
    <section className="py-24 md:py-32" aria-labelledby="featured-projects-heading">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            id="featured-projects-heading"
            eyebrow="Selected work"
            title="Recent projects."
            className="max-w-xl"
          />
          <ArrowLink href="/projects" className="hidden md:inline-flex">
            View all projects
          </ArrowLink>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} priority={index === 0} index={index} />
          ))}
        </div>

        <ArrowLink href="/projects" className="mt-12 md:hidden">
          View all projects
        </ArrowLink>
      </Container>
    </section>
  );
}
