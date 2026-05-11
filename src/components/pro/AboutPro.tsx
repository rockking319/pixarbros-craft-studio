import { Check, Download, MessageCircle } from "lucide-react";
import { Reveal, SectionTag } from "./_shared";
import logo from "@/assets/pixarbros-logo.png";

const points = [
  "End-to-end product development",
  "AI-first architecture thinking",
  "Pixel-perfect UI implementation",
  "Agile, async-friendly workflow",
];

export default function AboutPro() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-[var(--gradient-brand)] opacity-30 blur-2xl" />
            <div className="relative rounded-3xl p-[1.5px] bg-[var(--gradient-brand)]">
              <div className="rounded-3xl bg-[#0a0e1a] aspect-[4/5] overflow-hidden grid place-items-center">
                <img src={logo} alt="Pixarbros" className="logo-adaptive w-40 opacity-90" />
              </div>
            </div>
            <div className="absolute -top-5 -right-5 glass-strong rounded-2xl px-4 py-3 shadow-xl">
              <div className="text-xs text-muted-foreground">Experience</div>
              <div className="font-heading font-bold text-xl text-gradient">5+ Years</div>
            </div>
            <div className="absolute -bottom-5 -left-5 glass-strong rounded-2xl px-4 py-3 shadow-xl">
              <div className="text-xs text-muted-foreground">Delivered</div>
              <div className="font-heading font-bold text-xl text-gradient">200+ Projects</div>
            </div>
            <div className="absolute top-1/2 -right-8 glass-strong rounded-2xl px-4 py-3 shadow-xl hidden md:block">
              <div className="text-xs text-muted-foreground">Specialty</div>
              <div className="font-heading font-bold text-xl text-gradient">AI Expert</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <SectionTag>About Us</SectionTag>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-5 leading-tight">
            Turning Complex Ideas <br/>Into <span className="text-gradient">Elegant Products</span>
          </h2>
          <p className="text-muted-foreground mt-5 leading-relaxed">
            Pixarbros is a creative team of full-stack developers and AI specialists with years of experience building production-grade web apps, mobile applications, and intelligent AI systems. We combine clean code with thoughtful design to create products people love.
          </p>
          <ul className="mt-7 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-[var(--gradient-brand)] grid place-items-center shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </span>
                <span className="text-foreground/90">{p}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3 mt-9">
            <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border hover:border-[var(--brand)] hover:bg-white/5 transition text-sm font-medium">
              <Download className="w-4 h-4" /> Download Profile
            </a>
            <a href="#contact" className="btn-gradient inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-white">
              <MessageCircle className="w-4 h-4" /> Let's Connect
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
