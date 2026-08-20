import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { RevealText } from "@/components/ui/RevealText";
import { ContactForm } from "@/components/contact/ContactForm";
import { STUDIO_ADDRESS } from "@/data/nav";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Forma Studio about your interior design, architecture, or consultation project.",
};

export default function ContactPage() {
  return (
    <div className="pb-24 pt-36 md:pb-32 md:pt-44">
      <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <div>
          <RevealText as="span" className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-clay">
            Get in touch
          </RevealText>
          <RevealText
            as="h1"
            delay={0.05}
            className="mt-4 font-display text-5xl leading-[1.02] tracking-tight text-ink sm:text-6xl"
          >
            Let&rsquo;s talk.
          </RevealText>
          <RevealText delay={0.1} className="mt-6 max-w-sm font-sans text-base leading-relaxed text-ink/70">
            Tell us a little about your project and we&rsquo;ll get back to you within two
            working days to arrange a first conversation.
          </RevealText>

          <RevealText delay={0.15} className="mt-12 flex flex-col gap-6 border-t border-line pt-8">
            <div>
              <h2 className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-ink/40">
                Studio
              </h2>
              <address className="mt-2 font-sans text-sm not-italic leading-relaxed text-ink/75">
                {STUDIO_ADDRESS.line1}
                <br />
                {STUDIO_ADDRESS.line2}
              </address>
            </div>
            <div>
              <h2 className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-ink/40">
                Contact
              </h2>
              <p className="mt-2 font-sans text-sm leading-relaxed text-ink/75">
                <a href={`mailto:${STUDIO_ADDRESS.email}`} className="focus-ring hover:text-ink">
                  {STUDIO_ADDRESS.email}
                </a>
                <br />
                <a
                  href={`tel:${STUDIO_ADDRESS.phone.replace(/\s+/g, "")}`}
                  className="focus-ring hover:text-ink"
                >
                  {STUDIO_ADDRESS.phone}
                </a>
              </p>
            </div>
          </RevealText>
        </div>

        <RevealText delay={0.1}>
          <ContactForm />
        </RevealText>
      </Container>
    </div>
  );
}
