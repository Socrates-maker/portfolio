import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="h-[var(--section-y)]" />
      <Projects />
      <div className="h-[var(--section-y)]" />
      <Experience />
      <div className="h-[var(--section-y)]" />
      <Skills />
      <div className="h-[var(--section-y)]" />
      <Contact />
    </>
  );
}
