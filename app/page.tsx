import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Science from "@/components/Science";
import Features from "@/components/Features";
import ApiSection from "@/components/ApiSection";
import Recursive from "@/components/Recursive";
import UseCases from "@/components/UseCases";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-ink-950 text-zinc-200">
      <Nav />
      <Hero />
      <Science />
      <Features />
      <ApiSection />
      <Recursive />
      <UseCases />
      <Waitlist />
      <Footer />
    </main>
  );
}
