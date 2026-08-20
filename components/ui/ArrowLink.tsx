import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ArrowLink({
  href,
  children,
  className,
  variant = "default",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "button";
}) {
  if (variant === "button") {
    return (
      <Link
        href={href}
        className={cn(
          "group focus-ring inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-3.5 font-sans text-sm font-medium text-paper transition-colors duration-300 hover:bg-clay",
          className
        )}
      >
        {children}
        <ArrowRight
          className="size-4 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1"
          aria-hidden
        />
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "group focus-ring inline-flex items-center gap-2 font-sans text-sm font-medium tracking-wide text-ink",
        className
      )}
    >
      <span className="border-b border-ink/30 pb-0.5 transition-colors duration-300 group-hover:border-ink">
        {children}
      </span>
      <ArrowRight
        className="size-4 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1"
        aria-hidden
      />
    </Link>
  );
}
