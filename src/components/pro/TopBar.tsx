import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function TopBar() {
  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="hidden md:block w-full border-b border-border bg-[#0d1117] text-[12px] text-muted-foreground"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-9 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Lahore, Pakistan</span>
          <a href="mailto:hello@pixarbros.com" className="inline-flex items-center gap-1.5 hover:text-foreground transition"><Mail className="w-3.5 h-3.5" /> hello@pixarbros.com</a>
          <a href="tel:+923001234567" className="inline-flex items-center gap-1.5 hover:text-foreground transition"><Phone className="w-3.5 h-3.5" /> +92 300 1234567</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="GitHub" className="hover:text-foreground transition"><Github className="w-3.5 h-3.5" /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-foreground transition"><Linkedin className="w-3.5 h-3.5" /></a>
          <a href="#" aria-label="Twitter" className="hover:text-foreground transition"><Twitter className="w-3.5 h-3.5" /></a>
        </div>
      </div>
    </motion.div>
  );
}
