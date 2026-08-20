import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealText } from "@/components/ui/RevealText";
import { PROCESS_STEPS } from "@/data/process";

export function ProcessSteps() {
  return (
    <section className="border-t border-line bg-paper-dim py-24 md:py-32" aria-labelledby="process-heading">
      <Container>
        <SectionHeading
          id="process-heading"
          eyebrow="How we work"
          title="A clear process, start to finish."
          className="max-w-xl"
        />

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, index) => (
            <RevealText key={step.index} delay={index * 0.08} className="flex flex-col gap-4">
              <span className="font-display text-lg italic text-clay">{step.index}</span>
              <h3 className="font-display text-2xl tracking-tight text-ink">{step.title}</h3>
              <p className="font-sans text-sm leading-relaxed text-ink/60">{step.description}</p>
            </RevealText>
          ))}
        </div>
      </Container>
    </section>
  );
}
