import { Compass, FileText, GraduationCap, Hammer, IceCream2, MapPin, Telescope } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { scaleIn } from "@/lib/motion";

interface SnapshotItem {
  label: string;
  value: string;
  icon: LucideIcon;
}

const SNAPSHOT: SnapshotItem[] = [
  { label: "Based in", value: "USA", icon: MapPin },
  { label: "Studying", value: "MS Data Science @ RIT", icon: GraduationCap },
  { label: "Building", value: "data products, dashboards, and ML systems", icon: Hammer },
  { label: "Curious about", value: "fraud analytics, LLMs, RAG, and knowledge graphs", icon: Telescope },
  { label: "Also known for", value: "finding good ice cream spots", icon: IceCream2 },
];

export function About() {
  return (
    <section id="about" className="section-forest relative scroll-mt-28 py-24 sm:py-28">
      <Container>
        <SectionHeading eyebrow="About" title="A bit about me, beyond the resume" />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.95fr] lg:gap-14">
          <Reveal className="space-y-5">
            <p className="text-base leading-relaxed text-muted sm:text-[1.05rem]">
              I&rsquo;m Pratibha, a Data Science graduate student at Rochester Institute of Technology who likes
              working across the full journey of data — cleaning it, modeling it, questioning it, and turning it
              into something useful.
            </p>

            <p className="text-base leading-relaxed text-muted sm:text-[1.05rem]">
              My work sits at the intersection of data science, data engineering, and analytics. I&rsquo;ve built
              fraud detection models, dashboards, RAG applications, biosignal ML systems, and backend/data workflows.
              What excites me most is not just finding an answer, but building the workflow around it so the result
              can actually be used.
            </p>

            <p className="text-base leading-relaxed text-muted sm:text-[1.05rem]">
              When I&rsquo;m not working on projects, I&rsquo;m usually exploring new AI tools, thinking about
              project ideas, or looking for the best ice cream spot nearby.
            </p>

            <p className="text-balance pt-1 font-heading text-xl font-medium leading-snug text-ink sm:text-2xl">
              <span className="text-accent-blue">Data Scientist</span> by training. Engineer by execution. Curious by
              default.
            </p>
          </Reveal>

          <Reveal variants={scaleIn}>
            <div className="relative h-full overflow-hidden rounded-3xl border border-line bg-surface p-7 shadow-[var(--shadow-soft)] sm:p-8">
              <div className="relative flex items-center gap-3.5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent-blue/15 text-accent-blue">
                  <Compass className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="font-heading text-base font-semibold text-ink">Personal snapshot</p>
                  <p className="text-xs text-muted">A quick read on who I am</p>
                </div>
              </div>

              <dl className="relative mt-6">
                {SNAPSHOT.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-start gap-3 border-t border-line/70 pt-4 first:border-t-0 first:pt-0 [&:not(:first-child)]:mt-4"
                    >
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-canvas text-accent-blue ring-1 ring-inset ring-line">
                        <Icon className="h-[15px] w-[15px]" aria-hidden />
                      </span>
                      <div>
                        <dt className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">{item.label}</dt>
                        <dd className="mt-0.5 text-sm font-medium leading-snug text-ink">{item.value}</dd>
                      </div>
                    </div>
                  );
                })}
              </dl>

              <div className="relative mt-6 border-t border-line/70 pt-5">
                <Button
                  href="/resume.pdf"
                  variant="outline"
                  size="sm"
                  icon={FileText}
                  iconPosition="left"
                  download="Pratibha-Giri-Resume.pdf"
                  className="w-full justify-center"
                >
                  View my resume
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
