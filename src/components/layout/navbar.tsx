"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { IconLink } from "@/components/ui/icon-link";
import { navLinks, siteConfig } from "@/data/site";
import { EASE_SOFT } from "@/lib/motion";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  // Toggle the frosted-glass background once the page scrolls past the hero edge.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight whichever section's top edge has crossed the "active line" near
  // the vertical center of the viewport — and clear it while still in the
  // hero, where no nav link applies. Recomputed from live element positions
  // so it's always correct, using the observer only as an efficient trigger
  // for "something just crossed the line, recheck".
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const updateActive = () => {
      const activeLine = window.innerHeight * 0.45;
      let current = "";
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= activeLine) current = `#${section.id}`;
      }
      setActive(current);
    };

    updateActive();
    const observer = new IntersectionObserver(updateActive, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Auto-close the mobile menu if the viewport grows back to desktop size.
  useEffect(() => {
    if (!open) return;
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "glass-nav border-b border-line shadow-[0_10px_30px_-22px_rgba(15,23,42,0.4)]" : "bg-transparent"
      )}
    >
      <Container className="flex h-[72px] items-center justify-between">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-lavender font-heading text-sm font-semibold text-white shadow-[0_8px_20px_-6px_rgba(49,88,61,0.55)] transition-transform duration-300 ease-out group-hover:-rotate-6">
            {siteConfig.initials}
          </span>
          <span className="hidden font-heading text-lg font-semibold tracking-tight text-ink sm:inline">
            {siteConfig.name}
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
                  isActive ? "text-ink" : "text-muted hover:text-ink"
                )}
              >
                {isActive ? (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 -z-10 rounded-full border border-line bg-surface shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                ) : null}
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <IconLink href={siteConfig.github} label="Open GitHub profile" icon={GithubIcon} />
          <IconLink href={siteConfig.linkedin} label="Open LinkedIn profile" icon={LinkedinIcon} />
          <Button href={siteConfig.resumeUrl} size="sm" icon={Download} download="Pratibha-Giri-Resume.pdf">
            Resume
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors hover:border-accent-blue/40 hover:text-accent-blue md:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </Container>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.nav
            id="mobile-menu"
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: EASE_SOFT }}
            className="overflow-hidden border-t border-line glass-nav md:hidden"
            aria-label="Mobile"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 flex items-center gap-3 border-t border-line px-4 pt-4">
                <IconLink href={siteConfig.github} label="Open GitHub profile" icon={GithubIcon} />
                <IconLink href={siteConfig.linkedin} label="Open LinkedIn profile" icon={LinkedinIcon} />
                <Button
                  href={siteConfig.resumeUrl}
                  size="sm"
                  icon={Download}
                  download="Pratibha-Giri-Resume.pdf"
                  className="ml-auto"
                >
                  Resume
                </Button>
              </div>
            </Container>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
