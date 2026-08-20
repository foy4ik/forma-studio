import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealText } from "@/components/ui/RevealText";
import { TEAM } from "@/data/team";

export function TeamGrid() {
  return (
    <section className="border-t border-line py-20 md:py-28" aria-labelledby="team-heading">
      <Container>
        <SectionHeading id="team-heading" eyebrow="Who we are" title="Team." className="max-w-xl" />

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member, index) => (
            <RevealText key={member.name} delay={index * 0.06}>
              <div className="relative aspect-[4/5] overflow-hidden bg-stone">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover grayscale transition-[filter] duration-500 hover:grayscale-0"
                />
              </div>
              <h3 className="mt-4 font-display text-xl tracking-tight text-ink">{member.name}</h3>
              <p className="mt-1 font-sans text-sm text-ink/60">{member.role}</p>
              <p className="mt-2 font-sans text-sm leading-relaxed text-ink/50">{member.bio}</p>
            </RevealText>
          ))}
        </div>
      </Container>
    </section>
  );
}
