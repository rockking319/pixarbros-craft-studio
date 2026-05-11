import { motion } from "framer-motion";
import { ReactNode } from "react";

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function SectionTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] tracking-[0.25em] uppercase font-medium glass text-muted-foreground">
      <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand)] animate-pulse-slow" />
      {children}
    </span>
  );
}

export function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden>
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[var(--brand)] opacity-20 blur-[120px] animate-blob" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-[var(--brand-2)] opacity-20 blur-[140px] animate-blob" style={{ animationDelay: "4s" }} />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-[#06b6d4] opacity-10 blur-[120px] animate-blob" style={{ animationDelay: "8s" }} />
    </div>
  );
}
