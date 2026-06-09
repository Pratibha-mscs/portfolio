"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { TechPill } from "@/components/ui/tech-pill";
import { heroTags, siteConfig } from "@/data/site";
import { fadeUp, scaleIn } from "@/lib/motion";
import { cn } from "@/lib/cn";

/** Floating tags spread around the portrait — one per data-role identity: SQL, Analytics, Pipelines, ML, Dashboards. */
const TAG_LAYOUT: Array<{ position: string; tone: "blue" | "lavender" | "mint" }> = [
  { position: "-top-5 -left-4 sm:-top-7 sm:-left-12", tone: "blue" },        // SQL — top-left
  { position: "-top-4 right-2 sm:-top-5 sm:-right-16", tone: "lavender" },   // Analytics — top-right
  { position: "top-[42%] -right-4 sm:-right-16", tone: "mint" },              // Pipelines — mid-right
  { position: "-bottom-4 -left-3 sm:-bottom-7 sm:-left-11", tone: "blue" },  // ML — bottom-left
  { position: "-bottom-3 right-2 sm:-bottom-6 sm:right-0", tone: "lavender" }, // Dashboards — bottom-right
];

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32">
      <div aria-hidden className="absolute inset-0 -z-20 bg-dot-grid mask-fade-edges opacity-60" />
      <AuroraBackground className="-z-10" />

      <Container className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:gap-16">
        {/* Text column */}
        <div>
          <Reveal variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-4 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-mint opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-mint-deep" />
              </span>
              {siteConfig.introPill}
            </span>
          </Reveal>

          <Reveal variants={fadeUp} className="mt-5">
            <h1 className="font-heading text-4xl font-semibold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-[3.35rem]">
              Hi, I&rsquo;m <span className="text-gradient">Pratibha</span>{" "}
              <motion.span
                className="inline-block origin-[70%_70%]"
                animate={{ rotate: [0, 16, -10, 16, -6, 12, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 3.2, ease: "easeInOut" }}
                aria-hidden
              >
                👋
              </motion.span>
            </h1>
          </Reveal>

          <Reveal variants={fadeUp} className="mt-6 max-w-xl">
            <p className="text-lg leading-relaxed text-muted sm:text-xl">
              <span className="font-semibold text-ink">Data Scientist & Data Engineer</span>{" "}
              — turning messy data into <span className="font-semibold text-ink">decisions</span>,{" "}
              <span className="font-semibold text-ink">dashboards</span>, and{" "}
              <span className="font-semibold text-ink">systems that hold up</span>.
            </p>
          </Reveal>

          <Reveal variants={fadeUp} className="mt-4 max-w-xl">
            <p className="text-[0.97rem] leading-relaxed text-muted sm:text-base">{siteConfig.bio}</p>
          </Reveal>

          <Reveal variants={fadeUp} className="mt-3 max-w-xl">
            <p className="flex items-start gap-2 font-mono text-[0.8rem] leading-relaxed text-muted sm:items-center">
              <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-lavender-deep sm:mt-0" aria-hidden />
              <span>{siteConfig.personalityLine}</span>
            </p>
          </Reveal>

          <Reveal variants={fadeUp} className="mt-9 flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <Button href="#projects" icon={ArrowRight}>
                View My Work
              </Button>
              <Button
                href={siteConfig.resumeUrl}
                variant="secondary"
                icon={Download}
                download="Pratibha-Giri-Resume.pdf"
              >
                Download Resume
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button href={siteConfig.github} variant="outline" size="sm" icon={GithubIcon} iconPosition="left">
                GitHub
              </Button>
              <Button href={siteConfig.linkedin} variant="outline" size="sm" icon={LinkedinIcon} iconPosition="left">
                LinkedIn
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Portrait column */}
        <Reveal variants={scaleIn} className="relative mx-auto w-full max-w-[19rem] sm:max-w-sm lg:mx-0 lg:max-w-none">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
            {/* soft blue/lavender glow */}
            <div
              aria-hidden
              className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-accent-blue/35 to-accent-lavender/35 opacity-90 blur-3xl animate-pulse-soft"
            />

            {/* gradient border ring */}
            <div className="h-full rounded-[1.85rem] bg-gradient-to-br from-accent-blue/75 to-accent-lavender/70 p-[3px] shadow-[var(--shadow-soft)]">
              <div className="relative h-full overflow-hidden rounded-[calc(1.85rem-3px)] bg-surface">
                <Image
                  src={siteConfig.profileImage}
                  alt={`Portrait of ${siteConfig.name}, smiling at her graduation`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 24rem, (min-width: 640px) 22rem, 78vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink/20 via-ink/0 to-transparent" />
              </div>
            </div>

            {/* A few floating tags — enough to feel alive, not so many the photo disappears */}
            {heroTags.map((tag, index) => {
              const layout = TAG_LAYOUT[index % TAG_LAYOUT.length];
              return (
                <motion.div
                  key={tag}
                  className={cn("absolute z-20 hidden sm:block", layout.position)}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.12 }}
                >
                  <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{
                      duration: 5 + (index % 3),
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                  >
                    <TechPill
                      tone={layout.tone}
                      className="bg-surface/95 shadow-[0_16px_32px_-16px_rgba(30,26,20,0.20)] backdrop-blur"
                    >
                      {tag}
                    </TechPill>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Compact tag row for small screens, where floating tags are hidden to avoid overflow */}
            <div className="mt-6 flex flex-wrap justify-center gap-2 sm:hidden">
              {heroTags.map((tag, index) => (
                <TechPill key={tag} tone={TAG_LAYOUT[index % TAG_LAYOUT.length].tone}>
                  {tag}
                </TechPill>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
