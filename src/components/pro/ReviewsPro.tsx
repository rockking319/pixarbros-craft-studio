import { Star, BadgeCheck, ArrowRight } from "lucide-react";
import { Reveal, SectionTag } from "./_shared";

const reviews = [
  { q: "Pixarbros delivered our SaaS dashboard on time and the UX is incredible. The team feels like an extension of ours.", n: "Sarah M.", r: "Product Lead", c: "Nebula", tall: true },
  { q: "Their AI agent saved my support team 30 hours a week. Worth every penny.", n: "James K.", r: "CEO", c: "Acme" },
  { q: "Stunning animations and incredibly fast turnaround.", n: "Priya S.", r: "Brand Director", c: "Lumina" },
  { q: "Our mobile app launched in 6 weeks. Reviews say it feels native.", n: "Marco R.", r: "Founder", c: "Vertex", tall: true },
  { q: "Best agency we've worked with — clear communication, zero drama.", n: "Aisha T.", r: "CTO", c: "Horizon" },
  { q: "The RAG chatbot answers like a human and cites sources.", n: "Liam W.", r: "Head of AI", c: "Prism" },
  { q: "Pixel-perfect design system delivered in Figma + code.", n: "Yuki H.", r: "Design Lead", c: "Quanta", tall: true },
  { q: "They scoped, designed, and shipped — all within budget.", n: "Daniel O.", r: "PM", c: "Orbit" },
];

export default function ReviewsPro() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <SectionTag>Testimonials</SectionTag>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mt-5 leading-tight">
            Loved by <span className="text-gradient">Creators Worldwide</span>
          </h2>
          <p className="text-muted-foreground mt-4">Real feedback from real clients — no filters, no fluff.</p>
        </Reveal>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {reviews.map((r, i) => (
            <Reveal key={i} delay={(i % 3) * 0.06}>
              <div className={`glass card-hover rounded-2xl p-6 mb-5 break-inside-avoid ${r.tall ? "min-h-[240px]" : ""}`}>
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="w-4 h-4 fill-[var(--brand)] text-[var(--brand)]" style={{ animationDelay: `${k * 0.1}s` }} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-foreground/90">"{r.q}"</p>
                <div className="flex items-center gap-3 mt-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--gradient-brand)] grid place-items-center text-white font-semibold text-sm">
                    {r.n.split(" ").map(s => s[0]).join("")}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold flex items-center gap-1.5">
                      {r.n} <BadgeCheck className="w-4 h-4 text-[var(--brand)]" />
                    </div>
                    <div className="text-xs text-muted-foreground">{r.r} · {r.c}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="flex -space-x-3">
            {["A","B","C","D","E"].map((l, i) => (
              <div key={l} className="w-10 h-10 rounded-full border-2 border-[#0a0e1a] grid place-items-center text-white text-xs font-semibold" style={{ background: i % 2 ? "var(--gradient-brand)" : "linear-gradient(135deg,#06b6d4,#1a6eff)" }}>{l}</div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">200+ clients served across 15 countries</p>
          <a href="#contact" className="btn-gradient inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-white">
            Start Your Project <ArrowRight className="w-4 h-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
