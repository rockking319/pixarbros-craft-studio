export default function TrustSection() {
  const clients = ["Acme Corp", "Nebula", "Vertex", "Horizon", "Lumina", "Prism"];

  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="reveal-on-scroll">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-14">
            Trusted by brands worldwide
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center">
          {clients.map((client, i) => (
            <div
              key={client}
              className={`reveal-on-scroll stagger-${i + 1} flex items-center justify-center py-4`}
            >
              <span className="text-sm md:text-base font-heading font-semibold tracking-wider uppercase text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-500">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
