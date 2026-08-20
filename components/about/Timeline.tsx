import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealText } from "@/components/ui/RevealText";
import { TIMELINE } from "@/data/about";

export function Timeline() {
  return (
    <section className="border-t border-line py-20 md:py-28" aria-labelledby="timeline-heading">
      <Container>
        <SectionHeading id="timeline-heading" eyebrow="Our story so far" title="Timeline." className="max-w-xl" />

        <ol className="mt-14 flex flex-col">
          {TIMELINE.map((entry, index) => (
            <li key={entry.year}>
              <RevealText
                delay={index * 0.06}
                className="grid grid-cols-[4.5rem_1fr] gap-6 border-t border-line py-7 sm:grid-cols-[6rem_1fr] sm:gap-10 md:grid-cols-[8rem_1fr]"
              >
                <span className="font-display text-lg italic text-clay">{entry.year}</span>
                <div>
                  <h3 className="font-display text-xl tracking-tight text-ink sm:text-2xl">
                    {entry.title}
                  </h3>
                  <p className="mt-2 max-w-xl font-sans text-sm leading-relaxed text-ink/60">
                    {entry.description}
                  </p>
                </div>
              </RevealText>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
