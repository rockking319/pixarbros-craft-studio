import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp, MessageCircle } from "lucide-react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const w = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.2 });
  return (
    <motion.div
      style={{ scaleX: w, transformOrigin: "0%" }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-[var(--gradient-brand)] z-[100]"
    />
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-24 right-6 z-40 w-11 h-11 rounded-full glass-strong grid place-items-center transition-all duration-500 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
}

export function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/923001234567"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-24 z-40 w-12 h-12 rounded-full bg-[#25D366] grid place-items-center shadow-[0_10px_30px_-5px_rgba(37,211,102,0.55)] hover:scale-110 transition"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <MessageCircle className="w-5 h-5 text-white relative" />
    </a>
  );
}
