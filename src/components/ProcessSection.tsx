import { Search, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  { icon: Search, title: "Discover", desc: "Research, strategy, and direction" },
  { icon: PenTool, title: "Design", desc: "Concepts, visuals, and prototypes" },
  { icon: Code, title: "Develop", desc: "Build, animate, and integrate" },
  { icon: Rocket, title: "Deliver", desc: "Launch, measure, and refine" },
];

export default function ProcessSection() {
  return (
    <section className="relative py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="reveal-on-scroll mb-20 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Process</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">
            How We <span className="text-muted-foreground">Work.</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const gradients = [
              { grad: "from-[#FF6B6B] to-[#FF8E53]", glow: "rgba(255,107,107,0.4)" },
              { grad: "from-[#7F5BFF] to-[#A56BFF]", glow: "rgba(127,91,255,0.4)" },
              { grad: "from-[#00D4FF] to-[#3BA1FF]", glow: "rgba(0,212,255,0.4)" },
              { grad: "from-[#FF6BD6] to-[#7F5BFF]", glow: "rgba(255,107,214,0.4)" },
            ];
            const g = gradients[i];
            return (
              <div
                key={step.title}
                className={`reveal-on-scroll stagger-${i + 1} glass-card rounded-2xl p-8 md:p-10 text-center group transition-all duration-500 hover:-translate-y-2`}
                style={{ boxShadow: `0 8px 32px -10px ${g.glow}` }}
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${g.grad} mb-6 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}
                  style={{ boxShadow: `0 10px 30px -8px ${g.glow}` }}
                >
                  <step.icon className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">0{i + 1}</p>
                <h3 className="font-heading text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
