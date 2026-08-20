import { Container } from "@/components/ui/Container";
import { RevealText } from "@/components/ui/RevealText";
import { RevealImage } from "@/components/ui/RevealImage";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { SITE_IMAGES } from "@/data/site-images";
import { STUDIO_HISTORY } from "@/data/about";

export function AboutTeaser() {
  return (
    <section className="border-t border-line py-24 md:py-32" aria-labelledby="about-teaser-heading">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <RevealImage
          src={SITE_IMAGES.aboutTeaser}
          alt="A designer reviewing material samples and drawings on a studio table."
          className="aspect-[4/5] w-full lg:order-2"
          sizes="(min-width: 1024px) 45vw, 100vw"
        />

        <div className="flex flex-col items-start gap-6 lg:order-1">
          <RevealText as="span" className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-clay">
            Since 2013
          </RevealText>
          <RevealText
            as="h2"
            id="about-teaser-heading"
            delay={0.05}
            className="font-display text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl"
          >
            A studio built on restraint and craft.
          </RevealText>
          <RevealText delay={0.1} className="max-w-lg font-sans text-base leading-relaxed text-ink/70 md:text-lg">
            {STUDIO_HISTORY[0]}
          </RevealText>
          <RevealText delay={0.15}>
            <ArrowLink href="/about">Our story</ArrowLink>
          </RevealText>
        </div>
      </Container>
    </section>
  );
}
