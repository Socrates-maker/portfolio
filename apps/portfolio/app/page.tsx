import { Hero } from "@/components/hero";
import { StatusSection } from "@/components/status-section";

export default function Home() {
  return (
    <>
      <div className="h-12"></div>
      <Hero />
      <div className="h-10"></div>
      <StatusSection />
      <div className="h-10"></div>
    </>
  );
}
