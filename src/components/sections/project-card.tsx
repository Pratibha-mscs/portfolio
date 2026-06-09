"use client";

import { motion } from "framer-motion";
import { FileText, Play, Quote } from "lucide-react";
import { GithubIcon } from "@/components/ui/brand-icons";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { TechPill } from "@/components/ui/tech-pill";
import type { AccentColor, Project } from "@/data/projects";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/cn";

const ACCENT_STYLES: Record<AccentColor, { icon: string; glow: string; quote: string; bar: string }> = {
  blue: {
    icon: "from-accent-blue/20 to-accent-blue/5 text-accent-blue",
    glow: "from-accent-blue/25",
    quote: "text-accent-blue/55",
    bar: "bg-accent-blue/50",
  },
  lavender: {
    icon: "from-accent-lavender/25 to-accent-lavender/5 text-accent-lavender-deep",
    glow: "from-accent-lavender/25",
    quote: "text-accent-lavender/70",
    bar: "bg-accent-lavender/55",
  },
  mint: {
    icon: "from-accent-mint/30 to-accent-mint/10 text-accent-mint-deep",
    glow: "from-accent-mint/25",
    quote: "text-accent-mint-deep/55",
    bar: "bg-accent-mint/55",
  },
};

export function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;
  const accent = ACCENT_STYLES[project.accent];

  return (
    <motion.article
      variants={fadeUp}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface p-6 shadow-[var(--shadow-soft)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_40px_90px_-30px_rgba(30,26,20,0.22)] sm:p-7"
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -right-14 -top-16 h-52 w-52 rounded-full bg-gradient-to-br to-transparent opacity-0 blur-3xl transition-opacity duration-500 ease-out group-hover:opacity-100",
          accent.glow
        )}
      />

      {/* Icon + where this stands */}
      <div className="relative flex items-start justify-between gap-4">
        <span
          className={cn(
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br",
            accent.icon
          )}
        >
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <StatusBadge status={project.status} />
      </div>

      {/* Title + category */}
      <div className="relative mt-5">
        <h3 className="font-heading text-xl font-semibold tracking-tight text-ink sm:text-[1.35rem]">
          {project.title}
        </h3>
        <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">{project.category}</p>
      </div>

      {/* Why I built it — the personal spark, in my own words. Left accent stripe gives a notebook-margin feel. */}
      <div className="relative mt-4 overflow-hidden rounded-2xl bg-canvas/70 p-4 pl-5 ring-1 ring-inset ring-line/70">
        <div aria-hidden className={cn("absolute inset-y-0 left-0 w-[3px]", accent.bar)} />
        <Quote className={cn("h-4 w-4", accent.quote)} aria-hidden />
        <p className="mt-1.5 text-[0.92rem] italic leading-relaxed text-ink">{project.whyIBuilt}</p>
      </div>

      {/* What it does */}
      <p className="relative mt-4 text-[0.92rem] leading-relaxed text-muted">{project.whatItDoes}</p>

      {/* My role */}
      <p className="relative mt-3 text-[0.85rem] leading-relaxed text-muted">
        <span className="font-medium text-ink">My role — </span>
        {project.role}
      </p>

      {/* Impact, shown as a few honest chips rather than a metrics dashboard */}
      {project.impact.length > 0 ? (
        <ul className="relative mt-4 flex flex-wrap gap-2">
          {project.impact.map((item) => (
            <li
              key={item}
              className="inline-flex items-center gap-1.5 rounded-full bg-canvas px-3 py-1 text-xs font-medium text-ink ring-1 ring-inset ring-line"
            >
              <span
                aria-hidden
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-accent-blue to-accent-lavender"
              />
              {item}
            </li>
          ))}
        </ul>
      ) : null}

      <div className="relative mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <TechPill key={tech}>{tech}</TechPill>
        ))}
      </div>

      <div className="relative mt-auto flex flex-wrap items-center gap-2.5 border-t border-line pt-5">
        {project.links.github ? (
          <Button href={project.links.github} variant="outline" size="sm" icon={GithubIcon} iconPosition="left">
            Code
          </Button>
        ) : project.links.githubComingSoon ? (
          <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-line px-4 py-2 font-mono text-[0.7rem] text-muted">
            <GithubIcon className="h-3.5 w-3.5 opacity-40" aria-hidden />
            GitHub — coming soon
          </span>
        ) : null}
        {project.links.demo ? (
          <Button href={project.links.demo} variant="outline" size="sm" icon={Play} iconPosition="left">
            Live Demo
          </Button>
        ) : null}
        {project.links.caseStudy ? (
          <Button href={project.links.caseStudy} variant="outline" size="sm" icon={FileText} iconPosition="left">
            Case Study
          </Button>
        ) : null}
      </div>
    </motion.article>
  );
}
