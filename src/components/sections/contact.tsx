"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/data/site";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const CONTACT_LINKS = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "GitHub",
    value: "Browse my repositories",
    href: siteConfig.github,
    icon: GithubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "Let's connect professionally",
    href: siteConfig.linkedin,
    icon: LinkedinIcon,
    external: true,
  },
] as const;

export function Contact() {
  return (
    <section id="contact" className="section-forest relative scroll-mt-28 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          align="center"
          title="Let's build something useful"
          description="Open to Data Scientist, Data Engineer, Data Analyst, and Applied ML roles — always glad to talk data, share ideas, or explore what we might build together."
          className="mx-auto"
        />

        <p className="mt-5 flex items-center justify-center gap-2 text-center text-sm text-muted">
          <MapPin className="h-4 w-4 text-accent-blue" aria-hidden />
          {siteConfig.location}
        </p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3"
        >
          {CONTACT_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                variants={fadeUp}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="group flex h-full flex-col items-center gap-3 rounded-3xl border border-line bg-surface px-5 py-7 text-center shadow-[var(--shadow-soft)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent-blue/30 hover:shadow-[0_30px_70px_-25px_rgba(217,164,65,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue/50 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-blue/15 to-accent-lavender/15 text-accent-blue transition-transform duration-300 ease-out group-hover:scale-110">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="font-heading text-base font-semibold text-ink">{link.label}</span>
                <span className="text-sm break-all text-muted">{link.value}</span>
              </motion.a>
            );
          })}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <Button href={`mailto:${siteConfig.email}`} icon={ArrowUpRight} external={false}>
            Say hello
          </Button>
        </div>
      </Container>
    </section>
  );
}
