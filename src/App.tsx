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

export default function App() {
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
