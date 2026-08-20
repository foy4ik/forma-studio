import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { RevealText } from "@/components/ui/RevealText";
import { ServiceSection } from "@/components/services/ServiceSection";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Interior design, architecture, author supervision, and consultation — the services Forma Studio offers for homes and workplaces.",
};

export default function ServicesPage() {
  return (
    <div className="pb-8 pt-36 md:pt-44">
      <Container>
        <div className="max-w-2xl">
          <RevealText as="span" className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-clay">
            What we do
          </RevealText>
          <RevealText
            as="h1"
            delay={0.05}
            className="mt-4 font-display text-5xl leading-[1.02] tracking-tight text-ink sm:text-6xl md:text-7xl"
          >
            Services.
          </RevealText>
          <RevealText delay={0.1} className="mt-6 font-sans text-lg leading-relaxed text-ink/70">
            Four ways to work with us — from a single consultation to full design and
            construction oversight.
          </RevealText>
        </div>
      </Container>

      {SERVICES.map((service, index) => (
        <ServiceSection key={service.slug} service={service} index={index} />
      ))}
    </div>
  );
}
