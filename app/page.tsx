import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Science from "@/components/Science";
import Features from "@/components/Features";
import ApiSection from "@/components/ApiSection";
import Recursive from "@/components/Recursive";
import Evaluation from "@/components/Evaluation";
import UseCases from "@/components/UseCases";
import FAQ from "@/components/FAQ";
import Waitlist from "@/components/Waitlist";
import ResearchSpotlight from "@/components/ResearchSpotlight";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-ink-950 text-zinc-200">
      <Nav />
      <main id="main-content">
        <Hero />
        <Science />
        <ResearchSpotlight />
        <Features />
        <ApiSection />
        <Recursive />
        <Evaluation />
        <UseCases />
        <FAQ />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}
