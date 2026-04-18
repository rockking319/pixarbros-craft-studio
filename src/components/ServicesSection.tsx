import { Palette, Play, Globe } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand & Visual Identity",
    desc: "Logos, brand systems, social design",
    detail: "We build comprehensive brand systems that create instant recognition and lasting impressions across every touchpoint.",
    gradient: "from-[#FF6B6B] via-[#FF8E53] to-[#FFB347]",
    glow: "rgba(255,107,107,0.45)",
  },
  {
    icon: Play,
    title: "Motion & Animation",
    desc: "Explainers, product animation, content motion",
    detail: "Dynamic motion that captures attention and communicates complex ideas with clarity and elegance.",
    gradient: "from-[#7F5BFF] via-[#A56BFF] to-[#FF6BD6]",
    glow: "rgba(127,91,255,0.45)",
  },
  {
    icon: Globe,
    title: "Web Design & Development",
    desc: "High-converting, modern, fast websites",
    detail: "Performance-driven websites built to convert visitors into customers with seamless user experiences.",
    gradient: "from-[#00D4FF] via-[#3BA1FF] to-[#5BFFB0]",
    glow: "rgba(0,212,255,0.45)",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 md:py-36 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-[10%] w-[420px] h-[420px] rounded-full bg-[#FF6B6B]/10 blur-3xl" />
        <div className="absolute top-1/3 right-[12%] w-[420px] h-[420px] rounded-full bg-[#7F5BFF]/10 blur-3xl" />
        <div className="absolute bottom-10 left-1/2 w-[420px] h-[420px] rounded-full bg-[#00D4FF]/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="reveal-on-scroll mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">What We Do</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">
            Solutions, Not Just
            <br />
            <span className="text-muted-foreground">Services.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8" style={{ perspective: "1200px" }}>
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`reveal-on-scroll stagger-${i + 1} group relative h-[360px] cursor-pointer`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                className="relative w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:[transform:rotateY(180deg)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* FRONT — Glassmorphism */}
                <div
                  className="absolute inset-0 rounded-2xl border border-white/20 bg-white/40 backdrop-blur-xl p-8 md:p-10 flex flex-col justify-between shadow-[0_8px_32px_rgba(0,0,0,0.08)] overflow-hidden"
                  style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                >
                  {/* Gradient orb accent */}
                  <div
                    className={`absolute -top-20 -right-20 w-56 h-56 rounded-full bg-gradient-to-br ${s.gradient} opacity-40 blur-2xl`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/10 pointer-events-none" />

                  <div className="relative z-10">
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${s.gradient} shadow-lg mb-8`}
                      style={{ boxShadow: `0 10px 30px -8px ${s.glow}` }}
                    >
                      <s.icon className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="font-heading text-xl md:text-2xl font-semibold mb-3 tracking-tight text-foreground">
                      {s.title}
                    </h3>
                    <p className="text-sm text-foreground/60 leading-relaxed">{s.desc}</p>
                  </div>

                  <div className="relative z-10 flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-foreground/50">
                    <span>Hover to explore</span>
                    <span className="inline-block w-8 h-px bg-foreground/30" />
                  </div>
                </div>

                {/* BACK — Vibrant gradient */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${s.gradient} p-8 md:p-10 flex flex-col justify-between overflow-hidden`}
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    boxShadow: `0 20px 60px -15px ${s.glow}`,
                  }}
                >
                  {/* Glass overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
                  <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/20 blur-2xl" />

                  <div className="relative z-10">
                    <s.icon className="w-7 h-7 text-white mb-6" strokeWidth={2} />
                    <h3 className="font-heading text-xl md:text-2xl font-semibold mb-4 tracking-tight text-white">
                      {s.title}
                    </h3>
                    <p className="text-sm text-white/90 leading-relaxed">{s.detail}</p>
                  </div>

                  <div className="relative z-10 inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-white font-medium">
                    <span>Let's build it</span>
                    <span className="inline-block w-8 h-px bg-white/70" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
