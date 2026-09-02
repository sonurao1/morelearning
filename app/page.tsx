// Server component — no "use client" here on purpose.
// Previously this whole page had "use client" at the top, which forced
// EVERY component below (including ones with zero interactivity) into the
// client bundle: no HTML was sent from the server, so the browser had to
// download, parse and run the full JS bundle (React + GSAP + Lenis + all
// section data) before anything appeared — the main reason the site felt
// slow to load on mobile. Each component below now only opts into
// "use client" itself if it actually needs hooks/state/animations, so the
// rest of the page can render as real HTML immediately.
import Hero from "@/app/_components/hero"
import StatsCounter from "@/app/_components/stat-counter"
import TrustedBrands from "./_components/trusted-brands";
import EnterpriseEnablement from "./_components/EnterpriseEnablement";
import Capabilities from "./_components/Capabilities";
import IntegratedTeamSection from "./_components/IntegratedTeamSection";
import EnterpriseStrategy from "./_components/EnterpriseStragegy";
import IndustriesServed from "./_components/IndustriesServed";
import CaseStudy from "./_components/CaseStudy";
import Testimonial from "./_components/Testimonial";
import CTA from "./_components/CTA"

export default function Home() {
  return (
   <main className="w-full h-full">
     <Hero />
     <TrustedBrands />
     <StatsCounter />
     <EnterpriseEnablement />
     <Capabilities />
     <IntegratedTeamSection />
     <EnterpriseStrategy />
     <IndustriesServed />
     <CaseStudy />
     <Testimonial />
     <CTA />
   </main>
  );
}
