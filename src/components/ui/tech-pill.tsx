import { cn } from "@/lib/cn";

const toneStyles = {
  neutral: "border-line bg-canvas text-muted",
  blue: "border-accent-blue/25 bg-accent-blue/8 text-accent-blue",
  lavender: "border-accent-lavender/30 bg-accent-lavender/10 text-accent-lavender-deep",
  mint: "border-accent-mint/40 bg-accent-mint/12 text-accent-mint-deep",
} as const;

export function TechPill({
  children,
  tone = "neutral",
  className,
}: {
  children: string;
  tone?: keyof typeof toneStyles;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono text-[0.72rem] leading-none whitespace-nowrap",
        toneStyles[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
