const testimonials = [
  {
    quote: "Pixarbros transformed our entire brand presence. The results were immediate — 40% increase in qualified leads within the first month.",
    author: "Sarah Chen",
    role: "CEO, Vertex",
  },
  {
    quote: "Working with Pixarbros felt different. They understood our vision from day one and delivered beyond expectations.",
    author: "Marcus Wright",
    role: "Founder, Lumina",
  },
  {
    quote: "Our website conversion rate tripled after the redesign. The best investment we've made in our brand.",
    author: "Aisha Patel",
    role: "CMO, Horizon",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 md:py-36 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="reveal-on-scroll mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Testimonials</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">
            Kind <span className="text-muted-foreground">Words.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {testimonials.map((t, i) => (
            <div key={t.author} className={`reveal-on-scroll stagger-${i + 1} bg-background p-8 md:p-10`}>
              <p className="text-muted-foreground leading-relaxed mb-8 text-sm">"{t.quote}"</p>
              <div>
                <p className="font-heading font-semibold text-sm">{t.author}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
