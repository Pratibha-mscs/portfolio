import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechPill } from "@/components/ui/tech-pill";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="section-forest relative scroll-mt-28 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Where I've built"
          description="Research and engineering roles where I've worked on real data problems — from large-scale analytics and search systems to graduate research at RIT."
        />

        <div className="relative mt-14">
          <div
            aria-hidden
            className="absolute top-2 bottom-2 left-[1.125rem] w-px bg-accent-blue/30 sm:left-[1.375rem]"
          />

          <div className="space-y-8 sm:space-y-10">
            {experience.map((item) => (
              <Reveal key={item.company} className="relative pl-12 sm:pl-16">
                <span className="absolute left-0 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface shadow-[var(--shadow-soft)] sm:h-11 sm:w-11">
                  <span
                    aria-hidden
                    className="h-2.5 w-2.5 rounded-full bg-accent-lavender"
                  />
                </span>

                <div className="rounded-3xl border border-line bg-surface p-6 shadow-[var(--shadow-soft)] transition-transform duration-300 ease-out hover:-translate-y-1 sm:p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1.5">
                    <h3 className="font-heading text-lg font-semibold text-ink sm:text-xl">
                      {item.role} <span className="text-muted">·</span> <span className="text-accent-blue">{item.company}</span>
                    </h3>
                    <span className="rounded-full border border-line bg-canvas px-3 py-1 font-mono text-xs text-muted">
                      {item.dates}
                    </span>
                  </div>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{item.summary}</p>

                  {item.highlights && item.highlights.length > 0 ? (
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {item.highlights.map((h) => (
                        <li
                          key={h}
                          className="inline-flex items-center gap-1.5 rounded-full bg-canvas px-3 py-1 text-xs font-medium text-ink ring-1 ring-inset ring-line"
                        >
                          <span
                            aria-hidden
                            className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-lavender"
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.stack.map((tech) => (
                      <TechPill key={tech}>{tech}</TechPill>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
