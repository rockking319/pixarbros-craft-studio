const clients = ["Acme", "Nebula", "Vertex", "Horizon", "Lumina", "Prism", "Northwind", "Orbit", "Quanta", "Helios"];

function Row({ reverse = false }: { reverse?: boolean }) {
  const items = [...clients, ...clients];
  return (
    <div className="overflow-hidden pause-on-hover [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className={`marquee-track gap-14 py-3 ${reverse ? "animate-marquee-rev" : "animate-marquee"}`}>
        {items.map((c, i) => (
          <span key={i} className="font-heading font-semibold tracking-wider uppercase text-muted-foreground/50 hover:text-foreground transition text-lg md:text-xl whitespace-nowrap">
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function MarqueeClients() {
  return (
    <section className="relative py-16 border-y border-border bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <p className="text-center text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-8">Trusted by teams worldwide</p>
        <div className="space-y-1">
          <Row />
          <Row reverse />
        </div>
      </div>
    </section>
  );
}
