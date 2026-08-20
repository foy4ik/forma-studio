import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { RevealText } from "@/components/ui/RevealText";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { RelatedProjects } from "@/components/projects/RelatedProjects";
import { ProjectNav } from "@/components/projects/ProjectNav";
import {
  CATEGORY_LABELS,
  PROJECTS,
  getAdjacentProjects,
  getProjectBySlug,
  getRelatedProjects,
} from "@/data/projects";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Forma Studio`,
      description: project.summary,
      images: [{ url: project.cover }],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = getRelatedProjects(project);
  const { previous, next } = getAdjacentProjects(project);

  const metaItems = [
    { label: "Location", value: project.location },
    { label: "Year", value: String(project.year) },
    { label: "Area", value: project.area },
    { label: "Type", value: project.type },
  ];

  return (
    <div>
      <section className="relative flex min-h-[85svh] items-end overflow-hidden bg-ink">
        <Image
          src={project.cover}
          alt={`${project.title} — ${project.type} in ${project.location}`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-ink/30" aria-hidden />

        <Container className="relative z-10 pb-16 pt-40">
          <RevealText as="span" className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-sand">
            {CATEGORY_LABELS[project.category]}
          </RevealText>
          <RevealText
            as="h1"
            delay={0.05}
            className="mt-4 max-w-3xl font-display text-5xl leading-[1.02] tracking-tight text-paper sm:text-6xl md:text-7xl"
          >
            {project.title}
          </RevealText>
        </Container>
      </section>

      <section className="border-b border-line py-10 md:py-12" aria-label="Project details">
        <Container className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {metaItems.map((item) => (
            <div key={item.label}>
              <dt className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-ink/40">
                {item.label}
              </dt>
              <dd className="mt-1.5 font-display text-lg tracking-tight text-ink sm:text-xl">
                {item.value}
              </dd>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr] lg:gap-20">
          <div className="flex flex-col gap-6">
            {project.description.map((paragraph, index) => (
              <RevealText
                key={index}
                delay={index * 0.05}
                as="p"
                className="font-sans text-lg leading-relaxed text-ink/75 first:font-display first:text-2xl first:leading-snug first:text-ink md:first:text-3xl"
              >
                {paragraph}
              </RevealText>
            ))}
          </div>

          <div>
            <h2 className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-ink/40">
              Materials
            </h2>
            <ul className="mt-4 flex flex-col gap-3 border-t border-line pt-4">
              {project.materials.map((material) => (
                <li
                  key={material}
                  className="border-b border-line pb-3 font-sans text-sm text-ink/75"
                >
                  {material}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="pb-20 md:pb-28" aria-label="Project gallery">
        <Container>
          <ProjectGallery images={project.gallery} title={project.title} />
        </Container>
      </section>

      <RelatedProjects projects={related} />
      <ProjectNav previous={previous} next={next} />
    </div>
  );
}
