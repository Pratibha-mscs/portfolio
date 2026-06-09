import { Quote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { fadeUp } from "@/lib/motion";

export function ProjectPhilosophy() {
  return (
    <section id="philosophy" className="section-forest relative scroll-mt-28 py-16 sm:py-20">
      <Container>
        <Reveal variants={fadeUp} className="relative mx-auto max-w-3xl text-center">
          <span
            aria-hidden
            className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-blue/15 to-accent-lavender/15 text-accent-blue"
          >
            <Quote className="h-5 w-5" />
          </span>

          <h2 className="mt-6 font-heading text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            How I think about projects
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-balance text-lg leading-relaxed text-muted sm:text-xl">
            I like projects that start with messy, real-world data and end with something usable — a{" "}
            <span className="font-semibold text-ink">model</span>, a{" "}
            <span className="font-semibold text-ink">dashboard</span>, an{" "}
            <span className="font-semibold text-ink">assistant</span>, or a{" "}
            <span className="font-semibold text-ink">pipeline</span>. My goal is always to connect the technical work
            back to a clear user problem.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
