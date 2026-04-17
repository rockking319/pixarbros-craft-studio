import { useState, useEffect } from "react";
import { Menu, X, Send } from "lucide-react";
import pixarbrosLogo from "@/assets/pixarbros-logo.png";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-3">
            <img src={pixarbrosLogo} alt="Pixarbros" className="h-8 md:h-9 w-auto" />
            <span className="text-foreground font-heading text-lg md:text-xl font-bold tracking-tight">
              Pixarbros
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10 text-xs tracking-widest uppercase text-muted-foreground">
            {navLinks.slice(0, -1).map((l) => (
              <a key={l.label} href={l.href} className="hover:text-foreground transition-colors duration-300">
                {l.label}
              </a>
            ))}
            <a
              href="https://t.me/pixarbros"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join on Telegram"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <Send className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="border border-foreground px-5 py-2 text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Start a Project
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center gap-8 animate-reveal-fade">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="font-heading text-2xl font-semibold tracking-tight text-foreground hover:text-muted-foreground transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
