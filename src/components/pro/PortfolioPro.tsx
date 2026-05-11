import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionTag } from "./_shared";
import p1 from "@/assets/project-3d-icons.jpg";
import p2 from "@/assets/project-bluecharry.jpg";
import p3 from "@/assets/project-cwc-linea.jpg";
import p4 from "@/assets/project-emoji.jpg";
import p5 from "@/assets/project-rabbit.jpg";
import p6 from "@/assets/project-wiwi.jpg";

const projects = [
  { title: "AI RAG Chatbot System", cat: "AI", img: p1, tech: ["LangChain", "Pinecone"], desc: "Domain-trained assistant powering customer support." },
  { title: "E-Commerce Mobile App", cat: "Mobile", img: p2, tech: ["Flutter", "Firebase"], desc: "Native shopping experience with offline cart." },
  { title: "SaaS Analytics Dashboard", cat: "Web", img: p3, tech: ["Next.js", "tRPC"], desc: "Real-time metrics for product teams." },
  { title: "Motion Design Showcase", cat: "Animation", img: p4, tech: ["GSAP", "WebGL"], desc: "Interactive scroll-driven brand story." },
  { title: "LangChain Automation Agent", cat: "AI", img: p5, tech: ["CrewAI", "n8n"], desc: "Multi-agent ops automation pipeline." },
  { title: "Real-time Collab Web App", cat: "Web", img: p6, tech: ["React", "Supabase"], desc: "Live multi-user document editor." },
];

const filters = ["All", "Web", "Mobile", "AI", "Animation"] as const;

export default function PortfolioPro() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = projects.filter(p => active === "All" || p.cat === active);

  return (
    <section id="portfolio" className="relative py-24 md:py-32 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal className="text-center max-w-2xl mx-auto mb-10">
          <SectionTag>Our Work</SectionTag>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mt-5 leading-tight">
            Projects That <br /><span className="text-gradient">Made an Impact</span>
          </h2>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                active === f
                  ? "btn-gradient text-white"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative rounded-2xl overflow-hidden glass card-hover"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/40 to-transparent" />
                  <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full glass-strong text-foreground">
                    {p.cat}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-heading font-semibold text-lg">{p.title}</h3>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-[var(--brand)] group-hover:rotate-45 transition" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1.5">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.tech.map(t => (
                      <span key={t} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-white/5 border border-border text-muted-foreground">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
