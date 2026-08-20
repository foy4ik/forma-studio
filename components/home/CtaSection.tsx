import { Container } from "@/components/ui/Container";
import { RevealText } from "@/components/ui/RevealText";
import { ArrowLink } from "@/components/ui/ArrowLink";

export function CtaSection() {
  return (
    <section className="py-28 md:py-36" aria-labelledby="cta-heading">
      <Container className="flex flex-col items-center gap-10 text-center">
        <RevealText
          as="h2"
          id="cta-heading"
          className="max-w-3xl font-display text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl"
        >
          Let&rsquo;s create something <span className="italic">timeless</span>.
        </RevealText>
        <RevealText delay={0.1}>
          <ArrowLink href="/contact" variant="button">
            Start a project
          </ArrowLink>
        </RevealText>
      </Container>
    </section>
  );
}
