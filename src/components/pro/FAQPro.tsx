import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal, SectionTag } from "./_shared";

const faqs = [
  { q: "What services do you offer?", a: "Animation, web & mobile app development, AI agent development, RAG systems, automation, and UI/UX design." },
  { q: "How long does a project take?", a: "Typical scope ranges from 2 weeks (landing pages) to 12 weeks (full SaaS or AI platforms). We share a precise timeline after discovery." },
  { q: "Do you work with international clients?", a: "Yes — we've delivered for clients in 15+ countries and operate fully async." },
  { q: "What AI technologies do you use?", a: "OpenAI, Anthropic Claude, LangChain, CrewAI, n8n, Pinecone, Supabase Vector, and custom-trained models." },
  { q: "Do you provide post-launch support?", a: "Yes — we offer monthly retainers covering monitoring, fixes, and feature iteration." },
  { q: "Can I see more portfolio work?", a: "Absolutely — drop us a message and we'll share NDA-bound case studies relevant to your industry." },
  { q: "How do you handle project communication?", a: "Slack, Notion, and weekly demo calls. You always know status, blockers, and what ships next." },
  { q: "Do you sign NDAs?", a: "Yes, mutual NDAs are standard before any sensitive material is shared." },
];

export default function FAQPro() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <Reveal className="text-center mb-14">
          <SectionTag>FAQ</SectionTag>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-5 leading-tight">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.04}>
                <div className={`glass rounded-2xl overflow-hidden border ${isOpen ? "border-[var(--brand)]/60" : "border-border"} transition`}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-medium">{f.q}</span>
                    <Plus className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45 text-[var(--brand)]" : "text-muted-foreground"}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
