export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-36 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="reveal-on-scroll">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">About</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-8">
              A Small Team.
              <br />
              <span className="text-muted-foreground">Big Impact.</span>
            </h2>
          </div>
          <div className="reveal-on-scroll stagger-2">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Pixarbros is a creative studio focused on delivering high-quality design, animation, and web experiences. We combine strategy, creativity, and execution to help brands grow and stand out in competitive markets.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              We don't just make things look good — we make them work. Every pixel, every frame, every line of code is purposeful.
            </p>
            <div className="grid grid-cols-3 gap-8">
              {[
                { num: "50+", label: "Projects" },
                { num: "8+", label: "Years" },
                { num: "100%", label: "Dedication" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-heading text-2xl md:text-3xl font-bold">{s.num}</p>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
