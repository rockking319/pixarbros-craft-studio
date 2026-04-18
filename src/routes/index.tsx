import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import Navbar from "@/components/Navbar";
import AnimatedBackground from "@/components/AnimatedBackground";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ServicesSection from "@/components/ServicesSection";
import WorkSection from "@/components/WorkSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProofSection from "@/components/ProofSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Pixarbros — Creative Studio | Design, Motion & Web" },
      { name: "description", content: "Pixarbros is a premium creative studio crafting high-impact brand identity, motion design, and web experiences for ambitious brands." },
      { property: "og:title", content: "Pixarbros — Creative Studio" },
      { property: "og:description", content: "Design that moves brands forward. High-impact visuals, motion, and digital experiences." },
    ],
  }),
});

function Index() {
  const ref = useReveal();

  return (
    <div ref={ref} className="relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <TrustSection />
        <ServicesSection />
        <WorkSection />
        <AboutSection />
        <ProcessSection />
        <TestimonialsSection />
        <ProofSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
}
