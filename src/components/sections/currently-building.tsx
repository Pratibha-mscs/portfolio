"use client";

import { motion } from "framer-motion";
import { Network, PenTool, ShieldAlert } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusBadge, type StatusLabel } from "@/components/ui/status-badge";
import type { AccentColor } from "@/data/projects";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/cn";

const ICON_STYLES: Record<AccentColor, string> = {
  blue: "bg-accent-blue/15 text-accent-blue",
  lavender: "bg-accent-lavender/15 text-accent-lavender-deep",
  mint: "bg-accent-mint/15 text-accent-mint-deep",
};

interface BuildingItem {
  title: string;
  description: string;
  status: StatusLabel;
  icon: LucideIcon;
  accent: AccentColor;
}

const CURRENTLY_BUILDING: BuildingItem[] = [
  {
    title: "CodeGraph-AI",
    description:
      "A codebase indexing and retrieval assistant that helps developers understand unfamiliar repositories faster using embeddings, structured retrieval, and Graph RAG-style reasoning.",
    status: "In Progress",
    icon: Network,
    accent: "blue",
  },
  {
    title: "Fraud & Risk Analytics",
    description:
      "Analytics and modeling workflows for detecting suspicious transaction behavior, understanding risk signals, and reducing false positives.",
    status: "Exploring / Building",
    icon: ShieldAlert,
    accent: "lavender",
  },
  {
    title: "Portfolio Storytelling",
    description:
      "Designing this portfolio to show my work, personality, and technical direction more clearly than a resume can.",
    status: "In Progress",
    icon: PenTool,
    accent: "mint",
  },
];

export function CurrentlyBuilding() {
  return (
    <section id="currently-building" className="section-forest relative scroll-mt-28 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Right now"
          title="What I'm working on right now"
          description="A small peek into the ideas and systems I'm currently building."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.12)}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {CURRENTLY_BUILDING.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-line bg-surface p-6 shadow-[var(--shadow-soft)] transition-transform duration-300 ease-out hover:-translate-y-1 sm:p-7"
              >
                <div className="relative flex items-center justify-between gap-3">
                  <span
                    className={cn(
                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl",
                      ICON_STYLES[item.accent]
                    )}
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <StatusBadge status={item.status} />
                </div>

                <div className="relative">
                  <h3 className="font-heading text-lg font-semibold tracking-tight text-ink sm:text-xl">{item.title}</h3>
                  <p className="mt-2.5 text-[0.93rem] leading-relaxed text-muted">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
