import type { ComponentType, SVGProps } from "react";
import { Trophy } from "lucide-react";
import { cn } from "@/lib/cn";

/** Where a project (or an idea-in-progress) currently stands — shown as a small pill, not a KPI. */
export type StatusLabel = "In Progress" | "Exploring / Building" | "Completed" | "Hackathon Winner";

const STATUS_STYLES: Record<StatusLabel, { className: string; icon?: ComponentType<SVGProps<SVGSVGElement>> }> = {
  "In Progress": { className: "border-accent-blue/25 bg-accent-blue/8 text-accent-blue" },
  "Exploring / Building": { className: "border-accent-lavender/25 bg-accent-lavender/10 text-accent-lavender-deep" },
  Completed: { className: "border-accent-mint/30 bg-accent-mint/12 text-accent-mint-deep" },
  "Hackathon Winner": {
    className: "border-accent-lavender/30 bg-accent-lavender/12 text-accent-lavender-deep",
    icon: Trophy,
  },
};

export function StatusBadge({ status, className }: { status: StatusLabel; className?: string }) {
  const { className: toneClassName, icon: Icon } = STATUS_STYLES[status];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-3 py-1 font-mono text-[0.66rem] uppercase tracking-wide",
        toneClassName,
        className
      )}
    >
      {Icon ? (
        <Icon className="h-3 w-3 shrink-0" aria-hidden />
      ) : (
        <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
      )}
      {status}
    </span>
  );
}
