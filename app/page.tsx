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
import { getWaitlistCount } from "@/lib/waitlist-count";

export default function Home() {
  const waitlistCount = getWaitlistCount();

  return (
    <div className="relative min-h-screen overflow-x-clip bg-ink-950 text-zinc-200">
      <Nav />
      <main id="main-content">
        <Hero waitlistCount={waitlistCount} />
        <Science />
        <ResearchSpotlight />
        <Features />
        <ApiSection />
        <Recursive />
        <Evaluation />
        <UseCases />
        <FAQ />
        <Waitlist waitlistCount={waitlistCount} />
      </main>
      <Footer />
    </div>
  );
}
