import { Award, BarChart2, Bot, BrainCircuit, Cloud, Code2, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface SkillGroup {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "SQL", "Java", "R", "MATLAB"],
  },
  {
    title: "Data Science & Analytics",
    icon: BrainCircuit,
    skills: [
      "Exploratory Data Analysis",
      "Statistical Analysis",
      "A/B Testing",
      "KPI Development",
      "Forecasting",
      "Root Cause Analysis",
      "Pandas",
      "NumPy",
      "Scikit-learn",
    ],
  },
  {
    title: "Machine Learning & AI",
    icon: Bot,
    skills: [
      "XGBoost",
      "Random Forest",
      "NLP",
      "LLMs",
      "LangChain",
      "LangGraph",
      "Prompt Engineering",
      "RAG Pipelines",
      "TensorFlow",
      "PyTorch",
    ],
  },
  {
    title: "Data Engineering",
    icon: Workflow,
    skills: [
      "Apache Spark",
      "PySpark",
      "Airflow",
      "Databricks",
      "Delta Lake",
      "Snowflake",
      "dbt",
      "PostgreSQL",
      "Kafka",
    ],
  },
  {
    title: "Cloud & Platforms",
    icon: Cloud,
    skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Git", "CI/CD"],
  },
  {
    title: "Visualization & BI",
    icon: BarChart2,
    skills: ["Tableau", "Power BI", "Streamlit", "Microsoft Excel", "Matplotlib", "Seaborn", "Jupyter"],
  },
  {
    title: "Certifications",
    icon: Award,
    skills: ["Google Data Analytics Certificate", "AWS Certified"],
  },
];
