import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const isCenter = align === "center";

  return (
    <Reveal className={cn("max-w-2xl", isCenter && "mx-auto text-center", className)}>
      {eyebrow ? (
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-accent-blue",
            isCenter && "mx-auto"
          )}
        >
          <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">{description}</p> : null}
    </Reveal>
  );
}
