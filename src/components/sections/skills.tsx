"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechPill } from "@/components/ui/tech-pill";
import { skillGroups } from "@/data/skills";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/cn";

/**
 * All category icon badges use forest green — consistent visual hierarchy.
 * Colour variety comes from the pill tones, not the icons.
 */
const ICON_BADGE = "from-accent-lavender/20 to-accent-lavender/5 text-accent-lavender-deep";

/**
 * Pill tones per group — creates the balanced green + gold data-notebook palette.
 *
 * neutral  = cream card with warm line border (Languages, Cloud — understated baseline)
 * lavender = forest green tint  (DS&A, Data Engineering, Certifications — core craft)
 * blue     = graduation gold    (ML & AI, Viz & BI — output / highlighted categories)
 *
 * Result: 2 neutral · 3 green · 2 gold — no single colour overwhelms the section.
 */
const GROUP_TONES: Array<"blue" | "lavender" | "neutral"> = [
  "neutral",   // Languages
  "lavender",  // Data Science & Analytics
  "blue",      // Machine Learning & AI
  "lavender",  // Data Engineering
  "neutral",   // Cloud & Platforms
  "blue",      // Visualization & BI
  "lavender",  // Certifications
];

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-28 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Tools I use"
          description="Languages, frameworks, and platforms I reach for when turning raw data into working systems."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="mt-12 grid gap-5 sm:grid-cols-2"
        >
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            const tone = GROUP_TONES[index] ?? "neutral";

            return (
              <motion.div
                key={group.title}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-3xl border border-line bg-surface p-6 shadow-[var(--shadow-soft)] transition-transform duration-300 ease-out hover:-translate-y-1 sm:p-7"
              >
                {/* Subtle hover glow — mixes forest green + gold */}
                <div
                  aria-hidden
                  className="absolute -right-10 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-accent-lavender/10 to-accent-blue/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                />

                {/* Category header — forest green icon badge + title */}
                <div className="relative flex items-center gap-3.5">
                  <span
                    className={cn(
                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br",
                      ICON_BADGE
                    )}
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-ink sm:text-xl">{group.title}</h3>
                </div>

                {/* Skill pills — tone alternates by group for a balanced palette */}
                <div className="relative mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <TechPill key={skill} tone={tone}>
                      {skill}
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
