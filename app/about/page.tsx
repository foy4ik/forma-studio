import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { RevealText } from "@/components/ui/RevealText";
import { ValuesGrid } from "@/components/about/ValuesGrid";
import { StatsRow } from "@/components/about/StatsRow";
import { TeamGrid } from "@/components/about/TeamGrid";
import { Timeline } from "@/components/about/Timeline";
import { STUDIO_HISTORY } from "@/data/about";
import { SITE_IMAGES } from "@/data/site-images";

export const metadata: Metadata = {
  title: "About",
  description:
    "Forma Studio is a twelve-year-old interior architecture practice founded in Milan — our story, values, team, and timeline.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="relative flex min-h-[70svh] items-end overflow-hidden bg-ink">
        <Image
          src={SITE_IMAGES.aboutHero}
          alt="A minimalist, sunlit interior with natural materials and clean architectural lines."
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-ink/30" aria-hidden />

        <Container className="relative z-10 pb-16 pt-40">
          <RevealText as="span" className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-sand">
            Since 2013
          </RevealText>
          <RevealText
            as="h1"
            delay={0.05}
            className="mt-4 max-w-3xl font-display text-5xl leading-[1.02] tracking-tight text-paper sm:text-6xl md:text-7xl"
          >
            About Forma Studio.
          </RevealText>
        </Container>
      </section>

      <section className="py-20 md:py-28" aria-label="Studio history">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div className="flex flex-col gap-6">
            {STUDIO_HISTORY.map((paragraph, index) => (
              <RevealText
                key={index}
                delay={index * 0.06}
                as="p"
                className="font-sans text-lg leading-relaxed text-ink/75 first:font-display first:text-2xl first:leading-snug first:text-ink md:first:text-3xl"
              >
                {paragraph}
              </RevealText>
            ))}
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone lg:aspect-auto">
            <Image
              src={SITE_IMAGES.aboutSecondary}
              alt="A studio workspace with material samples, sketches, and a large drafting table."
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <StatsRow />
      <ValuesGrid />
      <Timeline />
      <TeamGrid />
    </div>
  );
}
