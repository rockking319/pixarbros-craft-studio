import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/pixarbros-logo.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function NavbarPro() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-[rgba(10,14,26,0.85)] shadow-[0_1px_0_var(--border)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 md:h-20 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <img src={logo} alt="Pixarbros" className="logo-adaptive h-8 md:h-9 w-auto group-hover:rotate-6 transition-transform duration-500" />
            <span className="font-heading font-bold text-lg md:text-xl text-gradient">Pixarbros</span>
          </a>

          <div className="hidden lg:flex items-center gap-9 text-sm text-muted-foreground">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="relative hover:text-foreground transition group">
                {l.label}
                <span className="absolute left-0 -bottom-1 h-px w-full bg-gradient-to-r from-[var(--brand)] to-[var(--brand-2)] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <a href="#contact" className="btn-gradient inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium text-white">
              Let's Talk →
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-foreground" aria-label="Menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 lg:hidden bg-[rgba(10,14,26,0.97)] backdrop-blur-2xl flex flex-col items-center justify-center gap-7 pt-20"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.1 + i * 0.06 } }}
                className="font-heading text-3xl font-semibold text-foreground hover:text-gradient"
              >
                {l.label}
              </motion.a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-gradient mt-4 px-7 py-3 rounded-full text-white font-medium">
              Let's Talk →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
