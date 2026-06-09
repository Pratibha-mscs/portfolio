import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { siteConfig } from "@/data/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://portfolio-5cee.vercel.app";

const title = `${siteConfig.name} — Data Scientist & Data Engineer`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.tagline,
  keywords: [
    "Pratibha Giri",
    "Data Scientist",
    "Data Engineer",
    "Machine Learning Engineer",
    "AI Engineer",
    "Analytics Engineer",
    "Portfolio",
    "Python",
    "SQL",
    "PySpark",
    "Machine Learning",
    "LLMs",
    "RAG",
    "AWS",
  ],
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: `${siteConfig.name} — Portfolio`,
    title,
    description: siteConfig.tagline,
    images: [
      {
        url: siteConfig.profileImage,
        width: 900,
        height: 1100,
        alt: `Portrait of ${siteConfig.name}`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title,
    description: siteConfig.tagline,
    images: [siteConfig.profileImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-canvas font-sans text-ink">{children}</body>
    </html>
  );
}
