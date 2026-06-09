import type { ComponentType, ReactNode, SVGProps } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "outline";
type Size = "md" | "sm";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-accent-lavender text-white shadow-[0_14px_36px_-10px_rgba(49,88,61,0.50)] hover:shadow-[0_18px_44px_-10px_rgba(49,88,61,0.60)] hover:-translate-y-0.5",
  secondary:
    "bg-surface text-ink border border-line hover:border-accent-blue/40 hover:text-accent-blue hover:-translate-y-0.5",
  outline:
    "bg-transparent text-muted border border-line hover:border-accent-blue/40 hover:text-accent-blue hover:bg-accent-blue/5",
};

const sizeStyles: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  sm: "px-4 py-2 text-xs sm:text-[0.83rem]",
};

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  iconPosition?: "left" | "right";
  external?: boolean;
  download?: boolean | string;
  className?: string;
}

/**
 * Every CTA on this site is a link (to a section, a profile, or a file) —
 * so `Button` renders an `<a>` and just looks like a button. That keeps
 * navigation semantics correct for screen readers and keyboard users.
 */
export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  external,
  download,
  className,
}: ButtonProps) {
  const isExternal = external ?? href.startsWith("http");

  return (
    <a
      href={href}
      download={download}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue/50 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {Icon && iconPosition === "left" ? (
        <Icon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" aria-hidden />
      ) : null}
      <span>{children}</span>
      {Icon && iconPosition === "right" ? (
        <Icon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
      ) : null}
    </a>
  );
}
