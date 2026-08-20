import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealText } from "@/components/ui/RevealText";
import { TESTIMONIALS } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="border-t border-line bg-ink py-24 text-paper md:py-32" aria-labelledby="testimonials-heading">
      <Container>
        <SectionHeading
          id="testimonials-heading"
          eyebrow="Client voices"
          title="What clients say."
          align="center"
          className="[&_h2]:text-paper [&_span]:text-sand"
        />

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <RevealText
              key={testimonial.name}
              delay={index * 0.08}
              className="flex flex-col gap-6 border-t border-paper/15 pt-8"
            >
              <p className="font-display text-xl italic leading-snug text-paper/95 md:text-2xl">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="font-sans text-sm text-paper/60">
                <span className="font-medium text-paper/90">{testimonial.name}</span>
                <span className="block">{testimonial.role}</span>
              </footer>
            </RevealText>
          ))}
        </div>
      </Container>
    </section>
  );
}
