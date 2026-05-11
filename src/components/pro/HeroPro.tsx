import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ArrowDown, Code2, Bot, Smartphone, Brain } from "lucide-react";
import { FloatingOrbs } from "./_shared";

const stats = [
  { v: "200+", l: "Projects" },
  { v: "50+", l: "Clients" },
  { v: "15+", l: "Countries" },
  { v: "5★", l: "Rating" },
];

const badges = [
  { icon: Code2, label: "React", color: "from-blue-500 to-cyan-400", x: "-left-6 top-10", delay: 0 },
  { icon: Bot, label: "AI Agent", color: "from-violet-500 to-fuchsia-500", x: "-right-4 top-24", delay: 1 },
  { icon: Smartphone, label: "Flutter", color: "from-sky-400 to-indigo-500", x: "-left-8 bottom-20", delay: 2 },
  { icon: Brain, label: "RAG", color: "from-emerald-400 to-teal-500", x: "-right-6 bottom-8", delay: 1.5 },
];

export default function HeroPro() {
  return (
    <section id="home" className="relative min-h-screen pt-10 pb-24 overflow-hidden">
      <FloatingOrbs />
      <div className="absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="noise absolute inset-0" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-14 items-center pt-10 lg:pt-20">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-muted-foreground mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-[var(--brand)]" />
            Available for Freelance & Collaboration
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight"
          >
            I Build Digital <br />
            Experiences That <br />
            <span className="text-gradient">Actually Work</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed"
          >
            From pixel-perfect animations to AI-powered systems — web apps, mobile apps, and intelligent agents.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-col sm:flex-row gap-3"
          >
            <a href="#contact" className="btn-gradient inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-medium text-white">
              Start a Project <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#portfolio" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-medium border border-border hover:border-[var(--brand)] hover:bg-white/5 transition">
              View My Work <ArrowDown className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-xl"
          >
            {stats.map((s) => (
              <div key={s.l} className="">
                <div className="font-heading text-2xl md:text-3xl font-bold text-gradient">{s.v}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative h-[460px] lg:h-[560px] hidden md:block"
        >
          {/* Device mockup */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-6 rounded-[28px] glass-strong overflow-hidden shadow-[0_30px_80px_-20px_rgba(26,110,255,0.45)]"
          >
            <div className="h-9 flex items-center gap-1.5 px-4 border-b border-border">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
            </div>
            <div className="relative h-full">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(26,110,255,0.35),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(124,58,237,0.35),transparent_60%)]" />
              <div className="relative p-6 space-y-3">
                <div className="h-3 w-32 rounded bg-white/10" />
                <div className="h-3 w-48 rounded bg-white/10" />
                <div className="grid grid-cols-3 gap-3 mt-6">
                  {[0,1,2].map(i => (
                    <div key={i} className="aspect-square rounded-xl glass" style={{ animation: `pulse-slow 4s ease-in-out ${i * 0.6}s infinite` }} />
                  ))}
                </div>
                <div className="h-2 w-full rounded bg-white/5 mt-4" />
                <div className="h-2 w-3/4 rounded bg-white/5" />
                <div className="h-2 w-1/2 rounded bg-white/5" />
                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full btn-gradient text-xs text-white">
                  Generate <Sparkles className="w-3 h-3" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating tech badges */}
          {badges.map((b) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.label}
                animate={{ y: [0, -16, 0] }}
                transition={{ duration: 3 + b.delay, repeat: Infinity, ease: "easeInOut", delay: b.delay }}
                className={`absolute ${b.x} glass-strong px-3 py-2 rounded-2xl flex items-center gap-2 shadow-xl`}
              >
                <span className={`w-7 h-7 rounded-lg bg-gradient-to-br ${b.color} grid place-items-center`}>
                  <Icon className="w-4 h-4 text-white" />
                </span>
                <span className="text-xs font-medium">{b.label}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
