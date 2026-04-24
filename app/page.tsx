import Navbar from "./comps/Navbar";
import Hero from "./comps/Hero";
import SocialProof from "./comps/SocialProof";
import Problem from "./comps/Problem";
import Solution from "./comps/Solution";
import Results from "./comps/Results";
import Process from "./comps/Process";
import Testimonials from "./comps/Testimonials";
import OfferStack from "./comps/OfferStack";
import FAQ from "./comps/FAQ";
import FinalCTA from "./comps/FinalCTA";
import Footer from "./comps/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        <Hero />
        <Problem />
        <Solution />
        <Process />
        <Results />
        <OfferStack />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}