const projects = [
  {
    title: "Vertex Brand Redesign",
    impact: "Increased brand recognition by 65%",
    category: "Branding",
  },
  {
    title: "Lumina Product Launch",
    impact: "Drove 40% more engagement in first week",
    category: "Motion & Web",
  },
  {
    title: "Horizon Digital Platform",
    impact: "3x conversion rate improvement",
    category: "Web Design",
  },
  {
    title: "Prism Visual Identity",
    impact: "Expanded to 12 new markets",
    category: "Brand Identity",
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="py-24 md:py-36 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="reveal-on-scroll mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Selected Work</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">
            Results That
            <br />
            <span className="text-muted-foreground">Speak.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`reveal-on-scroll stagger-${i + 1} group relative bg-card border border-border overflow-hidden cursor-pointer transition-all duration-500 hover:border-muted-foreground/30`}
            >
              <div className="aspect-[16/10] bg-secondary flex items-center justify-center transition-transform duration-700 group-hover:scale-[1.02]">
                <span className="text-muted-foreground/20 text-sm tracking-widest uppercase">{p.category}</span>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">{p.category}</p>
                <h3 className="font-heading text-xl md:text-2xl font-semibold tracking-tight mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.impact}</p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-px bg-foreground transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
