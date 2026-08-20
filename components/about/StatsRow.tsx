import { Container } from "@/components/ui/Container";
import { RevealText } from "@/components/ui/RevealText";
import { STATS } from "@/data/about";

export function StatsRow() {
  return (
    <section className="border-t border-line bg-ink py-16 text-paper md:py-20" aria-label="Studio statistics">
      <Container>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {STATS.map((stat, index) => (
            <RevealText key={stat.label} delay={index * 0.06} className="flex flex-col gap-2">
              <span className="font-display text-4xl tracking-tight text-paper sm:text-5xl">
                {stat.value}
              </span>
              <span className="font-sans text-sm text-paper/60">{stat.label}</span>
            </RevealText>
          ))}
        </div>
      </Container>
    </section>
  );
}
