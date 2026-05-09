import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="section-y" />
      <Projects />
      <div className="section-y" />
      <Experience />
      <div className="section-y" />
      <Skills />
      <div className="section-y" />
      <Contact />
    </>
  );
}
