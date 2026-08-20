import { RevealText } from "@/components/ui/RevealText";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  id,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
  id?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow ? (
        <RevealText
          as="span"
          className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-clay"
        >
          {eyebrow}
        </RevealText>
      ) : null}
      <RevealText
        as="h2"
        id={id}
        delay={0.05}
        className="font-display text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl"
      >
        {title}
      </RevealText>
      {description ? (
        <RevealText
          as="p"
          delay={0.1}
          className={cn(
            "max-w-xl font-sans text-base leading-relaxed text-ink/70 md:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </RevealText>
      ) : null}
    </div>
  );
}
