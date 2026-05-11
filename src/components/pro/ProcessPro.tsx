import { Search, Palette, Code, Rocket } from "lucide-react";
import { Reveal, SectionTag } from "./_shared";

const steps = [
  { icon: Search, title: "Discovery", desc: "Understand goals, research, define scope." },
  { icon: Palette, title: "Design", desc: "Wireframes, UI mockups, prototype approval." },
  { icon: Code, title: "Development", desc: "Agile sprints, daily updates, clean code." },
  { icon: Rocket, title: "Launch & Support", desc: "Deploy, monitor, iterate post-launch." },
];

export default function ProcessPro() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <SectionTag>Our Process</SectionTag>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mt-5 leading-tight">
            From Idea to <br /><span className="text-gradient">Live Product</span>
          </h2>
        </Reveal>

        <div className="relative">
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[var(--brand)] to-transparent" />
          <div className="grid md:grid-cols-4 gap-8 md:gap-4 relative">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={i * 0.12}>
                  <div className="text-center">
                    <div className="relative mx-auto w-24 h-24 rounded-2xl bg-[var(--gradient-brand)] p-[1.5px]">
                      <div className="w-full h-full rounded-2xl bg-[#0a0e1a] grid place-items-center">
                        <Icon className="w-9 h-9 text-[var(--brand)]" />
                      </div>
                      <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full glass-strong grid place-items-center text-xs font-bold text-gradient">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-semibold mt-6">{s.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 max-w-[14rem] mx-auto leading-relaxed">{s.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
