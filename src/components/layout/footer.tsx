import { Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { IconLink } from "@/components/ui/icon-link";
import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-center sm:text-left">
          <a href="#top" className="inline-flex items-center gap-2.5 font-heading text-base font-semibold text-ink">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent-blue to-accent-lavender text-xs font-semibold text-white">
              {siteConfig.initials}
            </span>
            {siteConfig.name}
          </a>
          <p className="mx-auto mt-2.5 max-w-sm text-sm text-muted sm:mx-0">
            Designed and built with data, systems, and a little curiosity.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 sm:items-end">
          <div className="flex items-center gap-3">
            <IconLink href={siteConfig.github} label="Open GitHub profile" icon={GithubIcon} />
            <IconLink href={siteConfig.linkedin} label="Open LinkedIn profile" icon={LinkedinIcon} />
            <IconLink href={`mailto:${siteConfig.email}`} label="Send an email" icon={Mail} external={false} />
          </div>
          <p className="font-mono text-xs text-muted">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
