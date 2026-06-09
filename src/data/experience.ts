export interface ExperienceItem {
  company: string;
  role: string;
  dates: string;
  summary: string;
  /** Optional key focus areas shown as small chips between the summary and the tech stack. */
  highlights?: string[];
  stack: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "Rochester Institute of Technology",
    role: "Graduate Research Assistant",
    dates: "Jan 2026 – May 2026",
    summary:
      "Built an NLP analysis pipeline on GCP to study narrative dynamics across 400,000+ YouTube news videos from 20+ global channels, using named entity recognition, keyword extraction, similarity analysis, and temporal trend measurement.",
    highlights: [
      "Large-scale NLP analysis",
      "400K+ videos processed",
      "Narrative trend measurement",
      "Research publication support",
    ],
    stack: ["Python", "GCP", "NLP", "NER", "Jaccard Similarity", "Data Analysis"],
  },
  {
    company: "IpserLab",
    role: "Software Engineer Intern",
    dates: "Aug 2025 – Dec 2025 · Jun 2026 – Present",
    summary:
      "Worked on real-time communication systems, Java Netty WebSocket server migration, WebRTC signaling workflows, AWS EC2 deployment, cleanup framework design, and Apache Lucene search improvements.",
    highlights: [
      "Real-time systems",
      "WebSocket infrastructure",
      "Search quality improvements",
      "Backend reliability",
    ],
    stack: ["Java", "Netty", "WebSockets", "WebRTC", "AWS EC2", "Apache Lucene"],
  },
  {
    company: "IonSoft",
    role: "Data Scientist",
    dates: "Aug 2022 – Aug 2024",
    summary:
      "Worked on behavioral feature engineering, anomaly detection, client analytics, ELT workflows, dashboards, and business-facing recommendations across fintech and healthcare client environments.",
    highlights: [
      "XGBoost anomaly detection",
      "SHAP explainability",
      "Databricks ELT workflows",
      "Tableau and Power BI dashboards",
    ],
    stack: ["SQL", "Python", "XGBoost", "SHAP", "Databricks", "PySpark", "Tableau", "Power BI"],
  },
];
