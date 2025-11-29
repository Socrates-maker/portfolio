import { Hero } from "@/components/hero";
import { StatusSection } from "@/components/status-section";
import { Skills } from "@/components/skills";
import { Contacts } from "@/components/contacts";

export default function Home() {
  return (
    <>
      <div className="md:h-25"></div>
      <Hero />
      <div className="h-25"></div>
      <StatusSection />
      <div className="h-25"></div>
      <Skills />
      <div className="h-25"></div>
      <Contacts />
      <div className="h-25"></div>
    </>
  );
}
