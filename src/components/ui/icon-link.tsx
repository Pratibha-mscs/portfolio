import type { ComponentType, SVGProps } from "react";
import { cn } from "@/lib/cn";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export function IconLink({
  href,
  label,
  icon: Icon,
  external = true,
  className,
}: {
  href: string;
  label: string;
  icon: IconComponent;
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-muted",
        "transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-accent-blue/40 hover:text-accent-blue hover:shadow-[0_12px_30px_-12px_rgba(59,130,246,0.45)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue/50 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
        className
      )}
    >
      <Icon className="h-[18px] w-[18px]" aria-hidden />
      <span className="sr-only">{label}</span>
    </a>
  );
}
