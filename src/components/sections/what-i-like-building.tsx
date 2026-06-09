"use client";

import { motion } from "framer-motion";
import { Database, LayoutDashboard, Radar, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechPill } from "@/components/ui/tech-pill";
import type { AccentColor } from "@/data/projects";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/cn";

const ICON_TONES: Record<AccentColor, string> = {
  blue: "from-accent-blue/15 to-accent-blue/5 text-accent-blue",
  lavender: "from-accent-lavender/20 to-accent-lavender/5 text-accent-lavender-deep",
  mint: "from-accent-mint/25 to-accent-mint/8 text-accent-mint-deep",
};

interface BuildingInterest {
  label: string;
  text: string;
  tools: string[];
  icon: LucideIcon;
  accent: AccentColor;
}

const INTERESTS: BuildingInterest[] = [
  {
    label: "Messy data into clean datasets",
    text: "I like the part where raw data starts making sense — cleaning inconsistent sources, checking quality, and shaping datasets that can support analysis, reporting, or modeling.",
    tools: ["SQL", "Python", "Pandas", "Data Quality"],
    icon: Database,
    accent: "blue",
  },
  {
    label: "Patterns, risk, and anomalies",
    text: "I enjoy looking for the behavior that does not quite fit — suspicious transactions, operational bottlenecks, unusual system patterns, or early signals of risk.",
    tools: ["EDA", "Scikit-learn", "SHAP", "Anomaly Detection"],
    icon: Radar,
    accent: "lavender",
  },
  {
    label: "Dashboards that answer real questions",
    text: "The dashboards I like most are the ones people actually open because they explain what changed, why it matters, and where to look next.",
    tools: ["Tableau", "Power BI", "Streamlit", "KPI Tracking"],
    icon: LayoutDashboard,
    accent: "mint",
  },
  {
    label: "Pipelines that make analysis repeatable",
    text: "I like turning one-time analysis into repeatable workflows, so the next question does not mean starting from zero again.",
    tools: ["Airflow", "PySpark", "FastAPI", "Docker"],
    icon: Workflow,
    accent: "blue",
  },
];

export function WhatILikeBuilding() {
  return (
    <section id="what-i-like-building" className="relative scroll-mt-28 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="What I enjoy"
          title="The data problems I like working on"
          description="The recurring threads in my work — the kinds of data problems that keep me curious, no matter which project they show up in."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="mt-12 grid gap-4 sm:grid-cols-2"
        >
          {INTERESTS.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                variants={fadeUp}
                className="group flex flex-col rounded-3xl border border-line bg-surface p-6 shadow-[var(--shadow-soft)] transition-transform duration-300 ease-out hover:-translate-y-1 sm:p-7"
              >
                {/* Notebook header: icon + category label */}
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br",
                      ICON_TONES[item.accent]
                    )}
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="font-mono text-[0.63rem] uppercase tracking-[0.18em] text-muted">
                    {item.label}
                  </span>
                </div>

                {/* Main text */}
                <p className="mt-4 text-[0.97rem] leading-relaxed text-ink">{item.text}</p>

                {/* Tool chips — what this actually involves */}
                <div className="mt-4 flex flex-wrap gap-1.5 pt-1">
                  {item.tools.map((t) => (
                    <TechPill key={t} tone={item.accent}>
                      {t}
                    </TechPill>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
