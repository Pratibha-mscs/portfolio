/**
 * Central place for "who you are" — your name, voice, and links.
 *
 * 👉 BEFORE YOU DEPLOY: replace the placeholder values below (marked TODO)
 * with your real GitHub, LinkedIn, and email so every button on the site
 * points somewhere real.
 */

export const siteConfig = {
  name: "Pratibha Giri",
  initials: "PG",
  location: "Open to relocation · USA",

  introPill: "Data Scientist · Data Engineer · Analytics",
  tagline: "Data Scientist & Data Engineer — turning messy data into decisions, dashboards, and reliable systems.",
  bio: "I work across the full data lifecycle — cleaning messy datasets, building pipelines, analyzing patterns, training models, and creating dashboards that help teams make better decisions.",
  personalityLine: "Currently exploring fraud analytics, Graph RAG, LLMs, and probably the next best ice cream spot.",

  // TODO: swap GitHub and LinkedIn for your real profile URLs before going live.
  email: "pratibha.g1702@gmail.com",
  github: "https://github.com/your-github-username",
  linkedin: "https://www.linkedin.com/in/your-linkedin-username",

  resumeUrl: "/resume.pdf",
  profileImage: "/profile.jpeg",
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Tools", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

/** Floating tags shown around the hero portrait — represent the full DS/DE/Analytics identity. */
export const heroTags = ["SQL", "Analytics", "Pipelines", "ML", "Dashboards"] as const;
