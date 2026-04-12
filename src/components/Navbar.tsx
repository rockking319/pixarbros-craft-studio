import { useState, useEffect } from "react";
import pixarbrosLogo from "@/assets/pixarbros-logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-3">
          <img src={pixarbrosLogo} alt="Pixarbros" className="h-8 md:h-9 w-auto" />
          <span className="text-foreground font-heading text-lg md:text-xl font-bold tracking-tight">Pixarbros</span>
        </a>
        <div className="hidden md:flex items-center gap-10 text-xs tracking-widest uppercase text-muted-foreground">
          <a href="#work" className="hover:text-foreground transition-colors duration-300">Work</a>
          <a href="#services" className="hover:text-foreground transition-colors duration-300">Services</a>
          <a href="#about" className="hover:text-foreground transition-colors duration-300">About</a>
          <a href="#contact" className="hover:text-foreground transition-colors duration-300 border border-border px-5 py-2 hover:bg-foreground hover:text-background">
            Start a Project
          </a>
        </div>
      </div>
    </nav>
  );
}
