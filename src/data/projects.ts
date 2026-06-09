import {
  Activity,
  FileSearch,
  Headset,
  Network,
  ShieldAlert,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type AccentColor = "blue" | "lavender" | "mint";
export type ProjectStatus = "In Progress" | "Completed" | "Hackathon Winner";

export interface ProjectLinks {
  github?: string;
  demo?: string;
  caseStudy?: string;
  /** Shown as a soft "coming soon" note instead of a dead link when the repo isn't public yet. */
  githubComingSoon?: boolean;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  status: ProjectStatus;
  /** The spark — what made me want to build this in the first place. */
  whyIBuilt: string;
  /** The plain-language version of what it actually does. */
  whatItDoes: string;
  /** What I owned, in my own words. */
  role: string;
  /** Concrete results, written as short chips rather than a resume bullet wall. */
  impact: string[];
  stack: string[];
  icon: LucideIcon;
  accent: AccentColor;
  links: ProjectLinks;
}

/**
 * 👉 None of these link out to GitHub yet — the repos are still being cleaned up
 * before sharing, so the cards show an honest "GitHub coming soon" note instead
 * of a dead link. Once a repo goes public, add its URL to `links.github` and
 * drop the `githubComingSoon` flag.
 */
export const projects: Project[] = [
  {
    slug: "codegraph-ai",
    title: "CodeGraph-AI",
    category: "Code Intelligence · Retrieval · Developer Tooling",
    status: "In Progress",
    whyIBuilt:
      "I wanted to make it easier to understand large codebases without manually searching through files.",
    whatItDoes:
      "Ingests repositories, chunks code, creates embeddings, retrieves relevant context, and answers codebase questions using retrieval-augmented generation.",
    role: "Solo build — designing the ingestion flow, retrieval pipeline, chunking strategy, and codebase reasoning layer from the ground up.",
    impact: ["Repository-aware Q&A", "Semantic code search", "Faster codebase understanding"],
    stack: ["Python", "LangChain", "ChromaDB", "OpenAI API", "FastAPI", "Git", "RAG"],
    icon: Network,
    accent: "blue",
    links: { githubComingSoon: true },
  },
  {
    slug: "real-time-financial-fraud-detection",
    title: "Real-Time Financial Fraud Detection",
    category: "Data Science · Risk Analytics · PySpark",
    status: "Completed",
    whyIBuilt:
      "Fraud is a needle-in-a-haystack problem — the risky transactions often look almost exactly like normal ones. I wanted to see how far I could get by using the patterns hidden in transaction behavior.",
    whatItDoes:
      "Processes 1M+ transactions with PySpark, engineers behavioral and geospatial features, and trains classification models to flag suspicious activity.",
    role: "Owned it end to end — exploratory analysis, feature engineering, model training, evaluation, and analysis of what improved detection efficiency.",
    impact: ["1M+ transactions processed", "92% model accuracy", "25% improved detection efficiency"],
    stack: ["Python", "PySpark", "Scikit-learn", "Logistic Regression", "Random Forest", "EDA", "Geospatial Analysis"],
    icon: ShieldAlert,
    accent: "lavender",
    links: { githubComingSoon: true },
  },
  {
    slug: "llm-financial-document-analysis",
    title: "LLM-Powered Financial Document Analysis",
    category: "RAG · NLP · Financial Analysis",
    status: "Completed",
    whyIBuilt:
      "10-K filings and earnings call transcripts are dense and slow to read. I wanted to test whether retrieval could make financial Q&A faster while keeping answers grounded in source documents.",
    whatItDoes:
      "Builds a retrieval-augmented generation workflow over Apple 10-K filings and earnings call transcripts using scraping, chunking, embedding, vector search, and context-constrained answer generation.",
    role: "Built the full pipeline solo — from data collection and chunking strategy to retrieval tuning and answer evaluation.",
    impact: ["Context-grounded Q&A", "Faster document review", "Reduced unsupported answers"],
    stack: ["Python", "RAG", "Web Scraping", "OpenAI API", "Vector Search", "NLP"],
    icon: FileSearch,
    accent: "mint",
    links: { github: "https://github.com/Pratibha-mscs/fin-rag-assistant" },
  },
  {
    slug: "scare-o-meter",
    title: "Scare-O-Meter",
    category: "Signal Processing · ML · Biosignals",
    status: "Hackathon Winner",
    whyIBuilt:
      "This started as a hackathon challenge — could eyebrow movements drive a horror experience in real time? I liked that it combined signal processing, live data, and a fun demo.",
    whatItDoes:
      "Reads EOG signals from eyebrow gestures through BioRadio, processes the live signal stream, and classifies gestures to trigger interactions in a horror-themed experience.",
    role: "Built the signal-processing pipeline and trained the gesture-classification model that powered the live demo.",
    impact: ["87% gesture classification accuracy", "AWARE-AI Hackathon Winner — RIT 2026", "Real-time biosignal pipeline"],
    stack: ["Python", "LSL", "Random Forest", "Signal Processing", "BioRadio"],
    icon: Activity,
    accent: "blue",
    links: { github: "https://github.com/Pratibha-mscs/scare-o-meter" },
  },
  {
    slug: "supportops-ticket-intelligence",
    title: "SupportOps Ticket Intelligence",
    category: "Analytics · ML · Dashboarding",
    status: "Completed",
    whyIBuilt:
      "Support teams often have warning signs buried inside ticket data. I wanted to see whether analytics and prediction could surface SLA risk early enough to help teams act.",
    whatItDoes:
      "Analyzes support ticket patterns, computes operational KPIs, predicts SLA breaches, and presents results in an interactive dashboard.",
    role: "Built it end to end — SQL analysis, feature engineering, model training and evaluation, and the Streamlit dashboard.",
    impact: ["8K+ support tickets analyzed", "0.78 ROC-AUC", "Earlier visibility into SLA risk"],
    stack: ["SQL", "Python", "Scikit-learn", "Streamlit", "Pandas"],
    icon: Headset,
    accent: "lavender",
    links: { github: "https://github.com/Pratibha-mscs/FinOps-Pulse" },
  },
];
