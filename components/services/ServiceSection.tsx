import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { RevealText } from "@/components/ui/RevealText";
import { RevealImage } from "@/components/ui/RevealImage";
import { ArrowLink } from "@/components/ui/ArrowLink";
import type { Service } from "@/data/services";
import { cn } from "@/lib/utils";

export function ServiceSection({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const reversed = index % 2 === 1;

  return (
    <section
      id={service.slug}
      aria-labelledby={`${service.slug}-heading`}
      className="scroll-mt-28 border-t border-line py-20 md:py-28"
    >
      <Container className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
        <RevealImage
          src={service.image}
          alt={`${service.title} — Forma Studio`}
          className={cn("aspect-[4/5] w-full", reversed && "lg:order-2")}
          sizes="(min-width: 1024px) 45vw, 100vw"
        />

        <div className={cn("flex flex-col gap-8", reversed && "lg:order-1")}>
          <div>
            <RevealText as="span" className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-clay">
              {String(index + 1).padStart(2, "0")}
            </RevealText>
            <RevealText
              as="h2"
              id={`${service.slug}-heading`}
              delay={0.05}
              className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl"
            >
              {service.title}
            </RevealText>
          </div>

          <div className="flex flex-col gap-4">
            {service.description.map((paragraph, i) => (
              <RevealText
                key={i}
                delay={0.1 + i * 0.05}
                as="p"
                className="font-sans text-base leading-relaxed text-ink/70 md:text-lg"
              >
                {paragraph}
              </RevealText>
            ))}
          </div>

          <RevealText delay={0.2}>
            <h3 className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-ink/40">
              What&rsquo;s included
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 font-sans text-sm text-ink/75">
                  <Check className="mt-0.5 size-4 shrink-0 text-clay" aria-hidden />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </RevealText>

          <RevealText delay={0.25}>
            <h3 className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-ink/40">
              Our process
            </h3>
            <ol className="mt-4 flex flex-col gap-4 border-t border-line pt-4">
              {service.process.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="font-display text-sm italic text-ink/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-sans text-sm font-medium text-ink">{step.title}</p>
                    <p className="mt-1 font-sans text-sm leading-relaxed text-ink/60">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </RevealText>

          <RevealText delay={0.3}>
            <ArrowLink href="/contact" variant="button">
              Enquire about {service.title.toLowerCase()}
            </ArrowLink>
          </RevealText>
        </div>
      </Container>
    </section>
  );
}
