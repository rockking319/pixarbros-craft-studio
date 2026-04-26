import { useState, useEffect } from "react";
import { Menu, X, Send } from "lucide-react";
import pixarbrosLogo from "@/assets/pixarbros-logo.png";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Portfolio", href: "#work" },
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
            ? "bg-background/60 backdrop-blur-xl border-b border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.05)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-3 group">
            <img
              src={pixarbrosLogo}
              alt="Pixarbros"
              className="logo-adaptive h-8 md:h-9 w-auto transition-transform duration-500 group-hover:rotate-[8deg] group-hover:scale-110"
            />
            <span
              className="font-heading text-lg md:text-xl font-bold tracking-tight bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, var(--color-foreground), #7F5BFF, #00D4FF, var(--color-foreground))",
                backgroundSize: "300% 100%",
                animation: "gradient-shift 8s ease infinite",
              }}
            >
              Pixarbros
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10 text-xs tracking-widest uppercase text-muted-foreground">
            {navLinks.slice(0, -1).map((l) => (
              <a key={l.label} href={l.href} className="nav-link hover:text-foreground">
                {l.label}
              </a>
            ))}
            <a
              href="https://t.me/pixarbros"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join on Telegram"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="relative overflow-hidden px-5 py-2 text-white rounded-full transition-all duration-500 hover:scale-105 hover:shadow-[0_10px_30px_-8px_rgba(127,91,255,0.6)]"
              style={{
                background:
                  "linear-gradient(90deg, #FF6B6B, #7F5BFF, #00D4FF, #FF6B6B)",
                backgroundSize: "300% 100%",
                animation: "gradient-shift 6s ease infinite",
              }}
            >
              Start a Project
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-foreground transition-transform duration-300 hover:scale-110"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 animate-reveal-fade">
          {navLinks.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="font-heading text-2xl font-semibold tracking-tight text-foreground hover:text-transparent hover:bg-clip-text transition-all duration-300"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #FF6B6B, #7F5BFF, #00D4FF)",
                animationDelay: `${0.05 * i}s`,
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
