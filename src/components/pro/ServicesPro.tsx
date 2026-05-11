import { Palette, Globe, Smartphone, Bot, Brain, PenTool, ArrowRight } from "lucide-react";
import { Reveal, SectionTag } from "./_shared";

const services = [
  { icon: Palette, title: "Animation & Motion Design", desc: "Micro-interactions, Lottie, GSAP, Framer Motion, 3D WebGL.", tags: ["GSAP", "Lottie", "Framer"], color: "from-pink-500 to-rose-500" },
  { icon: Globe, title: "Web App Development", desc: "React, Next.js, Laravel, Node.js, SaaS platforms.", tags: ["React", "Next.js", "Node"], color: "from-blue-500 to-cyan-500" },
  { icon: Smartphone, title: "Mobile App Development", desc: "Flutter, React Native, native iOS & Android.", tags: ["Flutter", "RN", "iOS"], color: "from-emerald-500 to-teal-500" },
  { icon: Bot, title: "AI Agents & Automation", desc: "LangChain, CrewAI, n8n, OpenAI, Claude pipelines.", tags: ["LangChain", "n8n", "OpenAI"], color: "from-violet-500 to-purple-500" },
  { icon: Brain, title: "RAG Systems & LLM Apps", desc: "Vector DBs, embeddings, custom domain chatbots.", tags: ["Pinecone", "RAG", "LLM"], color: "from-amber-500 to-orange-500" },
  { icon: PenTool, title: "UI/UX Design", desc: "Figma, design systems, prototyping, brand identity.", tags: ["Figma", "DS", "Brand"], color: "from-sky-500 to-indigo-500" },
];

export default function ServicesPro() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <SectionTag>Our Services</SectionTag>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mt-5 leading-tight">
            Everything You Need <br />to <span className="text-gradient">Build & Scale</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="group glass card-hover rounded-2xl p-7 h-full flex flex-col">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} grid place-items-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mt-5">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {s.tags.map(t => (
                      <span key={t} className="text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-border text-muted-foreground">{t}</span>
                    ))}
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--brand)] group-hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
