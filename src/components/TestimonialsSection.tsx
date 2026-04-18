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
    <section className="relative py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="reveal-on-scroll mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Testimonials</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">
            Kind <span className="text-muted-foreground">Words.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => {
            const gradients = [
              "from-[#FF6B6B] to-[#FF8E53]",
              "from-[#7F5BFF] to-[#FF6BD6]",
              "from-[#00D4FF] to-[#5BFFB0]",
            ];
            const grad = gradients[i];
            return (
              <div
                key={t.author}
                className={`reveal-on-scroll stagger-${i + 1} glass-card rounded-2xl p-8 md:p-10 relative overflow-hidden group transition-all duration-500 hover:-translate-y-1`}
              >
                <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${grad} opacity-30 blur-2xl group-hover:opacity-60 transition-opacity duration-500`} />
                <div className={`text-5xl font-heading font-bold leading-none mb-4 bg-gradient-to-br ${grad} bg-clip-text text-transparent`}>"</div>
                <p className="text-foreground/80 leading-relaxed mb-8 text-sm relative">{t.quote}</p>
                <div className="relative">
                  <p className="font-heading font-semibold text-sm">{t.author}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{t.role}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
