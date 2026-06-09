"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/sections/project-card";
import { projects } from "@/data/projects";
import { staggerContainer, viewportOnce } from "@/lib/motion";

export function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-28 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Projects I've worked on"
          description="A few projects across analytics, data engineering, machine learning, and AI — each one grew out of a real question I wanted to answer. Some repositories are being cleaned up before sharing, so I'm keeping those links honest for now."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.12)}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
