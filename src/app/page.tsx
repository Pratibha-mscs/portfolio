import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { CurrentlyBuilding } from "@/components/sections/currently-building";
import { Resume } from "@/components/sections/resume";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <CurrentlyBuilding />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
