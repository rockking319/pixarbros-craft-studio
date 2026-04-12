import { Search, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  { icon: Search, title: "Discover", desc: "Research, strategy, and direction" },
  { icon: PenTool, title: "Design", desc: "Concepts, visuals, and prototypes" },
  { icon: Code, title: "Develop", desc: "Build, animate, and integrate" },
  { icon: Rocket, title: "Deliver", desc: "Launch, measure, and refine" },
];

export default function ProcessSection() {
  return (
    <section className="py-24 md:py-36 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="reveal-on-scroll mb-20 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Process</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">
            How We <span className="text-muted-foreground">Work.</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {steps.map((step, i) => (
            <div key={step.title} className={`reveal-on-scroll stagger-${i + 1} bg-background p-8 md:p-10 text-center group`}>
              <div className="inline-flex items-center justify-center w-12 h-12 border border-border rounded-full mb-6 group-hover:border-muted-foreground/50 transition-colors duration-500">
                <step.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-500" strokeWidth={1.5} />
              </div>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">0{i + 1}</p>
              <h3 className="font-heading text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
