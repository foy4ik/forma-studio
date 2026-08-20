import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { RevealText } from "@/components/ui/RevealText";
import { ArrowLink } from "@/components/ui/ArrowLink";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className="flex min-h-[85svh] items-center py-24">
      <Container className="flex flex-col items-start gap-8">
        <RevealText as="span" className="font-display text-2xl italic text-clay">
          404
        </RevealText>
        <RevealText
          as="h1"
          delay={0.05}
          className="max-w-2xl font-display text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl"
        >
          This room doesn&rsquo;t exist yet.
        </RevealText>
        <RevealText delay={0.1} className="max-w-md font-sans text-lg leading-relaxed text-ink/70">
          The page you&rsquo;re looking for may have moved or never existed. Let&rsquo;s get
          you back to solid ground.
        </RevealText>
        <RevealText delay={0.15}>
          <ArrowLink href="/" variant="button">
            Back to home
          </ArrowLink>
        </RevealText>
      </Container>
    </div>
  );
}
