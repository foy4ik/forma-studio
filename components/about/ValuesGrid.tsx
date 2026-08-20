import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealText } from "@/components/ui/RevealText";
import { VALUES } from "@/data/about";

export function ValuesGrid() {
  return (
    <section className="border-t border-line py-20 md:py-28" aria-labelledby="values-heading">
      <Container>
        <SectionHeading id="values-heading" eyebrow="What we believe" title="Values." className="max-w-xl" />

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
          {VALUES.map((value, index) => (
            <RevealText
              key={value.title}
              delay={index * 0.06}
              className="border-t border-line pt-6"
            >
              <h3 className="font-display text-2xl tracking-tight text-ink">{value.title}</h3>
              <p className="mt-3 max-w-sm font-sans text-sm leading-relaxed text-ink/60">
                {value.description}
              </p>
            </RevealText>
          ))}
        </div>
      </Container>
    </section>
  );
}
