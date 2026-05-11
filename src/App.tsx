import { useEffect } from "react";
import TopBar from "@/components/pro/TopBar";
import NavbarPro from "@/components/pro/NavbarPro";
import HeroPro from "@/components/pro/HeroPro";
import MarqueeClients from "@/components/pro/MarqueeClients";
import ServicesPro from "@/components/pro/ServicesPro";
import AboutPro from "@/components/pro/AboutPro";
import StatsCounter from "@/components/pro/StatsCounter";
import ProcessPro from "@/components/pro/ProcessPro";
import PortfolioPro from "@/components/pro/PortfolioPro";
import TechStack from "@/components/pro/TechStack";
import ReviewsPro from "@/components/pro/ReviewsPro";
import TeamPro from "@/components/pro/TeamPro";
import FAQPro from "@/components/pro/FAQPro";
import ContactPro from "@/components/pro/ContactPro";
import NewsletterCTA from "@/components/pro/NewsletterCTA";
import FooterPro from "@/components/pro/FooterPro";
import { ScrollProgress, BackToTop, WhatsAppFAB } from "@/components/pro/Floaters";
import ChatbotWidget from "@/components/ChatbotWidget";

export default function App() {
  useEffect(() => {
    document.title = "Pixarbros — Web, Mobile & AI Agency";
    const desc = "Pixarbros builds premium web apps, mobile apps, AI agents, RAG systems, and motion design for ambitious brands worldwide.";
    let m = document.querySelector('meta[name="description"]');
    if (!m) { m = document.createElement("meta"); m.setAttribute("name", "description"); document.head.appendChild(m); }
    m.setAttribute("content", desc);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <TopBar />
      <NavbarPro />
      <main>
        <HeroPro />
        <MarqueeClients />
        <ServicesPro />
        <AboutPro />
        <StatsCounter />
        <ProcessPro />
        <PortfolioPro />
        <TechStack />
        <ReviewsPro />
        <TeamPro />
        <FAQPro />
        <ContactPro />
        <NewsletterCTA />
      </main>
      <FooterPro />
      <WhatsAppFAB />
      <BackToTop />
      <ChatbotWidget />
    </div>
  );
}
