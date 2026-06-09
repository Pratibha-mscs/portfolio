import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/data/site";

export function Resume() {
  return (
    <section id="resume" className="relative scroll-mt-28 py-6 sm:py-10">
      <Container>
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2rem] border border-line bg-surface px-6 py-12 text-center shadow-[var(--shadow-soft)] sm:px-12 sm:py-16">
            <div aria-hidden className="absolute inset-0 -z-10 bg-dot-grid mask-fade-edges opacity-50" />
            <div
              aria-hidden
              className="absolute -top-28 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-br from-accent-blue/20 via-accent-lavender/20 to-accent-mint/15 blur-3xl"
            />

            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-blue/15 to-accent-lavender/15 text-accent-blue">
              <FileText className="h-6 w-6" aria-hidden />
            </span>

            <h2 className="mt-6 font-heading text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              The full picture
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              My resume rounds up the roles, projects, coursework, and tools referenced throughout this site —
              all in one concise PDF.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href={siteConfig.resumeUrl} icon={FileText} external>
                Open Resume
              </Button>
              <Button
                href={siteConfig.resumeUrl}
                variant="secondary"
                icon={Download}
                download="Pratibha-Giri-Resume.pdf"
              >
                Download PDF
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
