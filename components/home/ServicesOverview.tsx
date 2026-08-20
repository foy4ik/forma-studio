import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealText } from "@/components/ui/RevealText";
import { SERVICES } from "@/data/services";

export function ServicesOverview() {
  return (
    <section className="border-t border-line py-24 md:py-32" aria-labelledby="services-heading">
      <Container>
        <SectionHeading
          id="services-heading"
          eyebrow="What we do"
          title="Services."
          className="max-w-xl"
        />

        <ul className="mt-14 flex flex-col divide-y divide-line border-t border-line">
          {SERVICES.map((service, index) => (
            <li key={service.slug}>
              <RevealText delay={index * 0.05}>
                <Link
                  href={`/services#${service.slug}`}
                  className="group focus-ring grid grid-cols-[auto_1fr] items-center gap-6 py-8 sm:grid-cols-[3rem_1fr_auto] sm:gap-10"
                >
                  <span className="font-sans text-sm text-ink/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl tracking-tight text-ink transition-colors sm:text-3xl md:text-4xl">
                      {service.title}
                    </h3>
                    <p className="mt-2 max-w-lg font-sans text-sm text-ink/60 sm:text-base">
                      {service.shortDescription}
                    </p>
                  </div>
                  <ArrowUpRight
                    className="col-span-2 mt-4 size-6 shrink-0 text-ink/40 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ink sm:col-span-1 sm:mt-0"
                    aria-hidden
                  />
                </Link>
              </RevealText>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
