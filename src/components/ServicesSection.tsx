import { Palette, Play, Globe } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand & Visual Identity",
    desc: "Logos, brand systems, social design",
    detail: "We build comprehensive brand systems that create instant recognition and lasting impressions across every touchpoint.",
  },
  {
    icon: Play,
    title: "Motion & Animation",
    desc: "Explainers, product animation, content motion",
    detail: "Dynamic motion that captures attention and communicates complex ideas with clarity and elegance.",
  },
  {
    icon: Globe,
    title: "Web Design & Development",
    desc: "High-converting, modern, fast websites",
    detail: "Performance-driven websites built to convert visitors into customers with seamless user experiences.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="reveal-on-scroll mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">What We Do</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">
            Solutions, Not Just
            <br />
            <span className="text-muted-foreground">Services.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`reveal-on-scroll stagger-${i + 1} group bg-background p-8 md:p-12 transition-colors duration-500 hover:bg-card cursor-default`}
            >
              <s.icon className="w-6 h-6 text-muted-foreground mb-8 group-hover:text-foreground transition-colors duration-500" strokeWidth={1.5} />
              <h3 className="font-heading text-lg md:text-xl font-semibold mb-2 tracking-tight">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-6">{s.desc}</p>
              <p className="text-sm text-muted-foreground/60 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {s.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
