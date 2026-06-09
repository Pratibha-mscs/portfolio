import { cn } from "@/lib/cn";

/**
 * Soft, slow-drifting gradient blobs — pure CSS animation (see globals.css),
 * so they stay smooth without adding to the JS animation budget.
 * Decorative only: aria-hidden + pointer-events-none.
 */
export function AuroraBackground({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="absolute -top-36 -left-24 h-[22rem] w-[22rem] rounded-full bg-accent-blue/20 blur-[110px] animate-drift-a" />
      <div className="absolute top-1/4 -right-28 h-[26rem] w-[26rem] rounded-full bg-accent-lavender/20 blur-[130px] animate-drift-b" />
      <div className="absolute -bottom-28 left-1/4 h-[20rem] w-[20rem] rounded-full bg-accent-mint/14 blur-[120px] animate-drift-a [animation-delay:-9s]" />
    </div>
  );
}
