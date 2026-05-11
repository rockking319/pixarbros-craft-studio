import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const dur = 1800;
    const step = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(eased * to));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

const items = [
  { v: 200, s: "+", l: "Projects Delivered" },
  { v: 50, s: "+", l: "Happy Clients" },
  { v: 15, s: "+", l: "Countries Served" },
  { v: 99, s: "%", l: "Client Satisfaction" },
];

export default function StatsCounter() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-brand)] opacity-[0.08]" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="glass-strong rounded-3xl py-12 px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
            {items.map((it) => (
              <div key={it.l} className="text-center px-4 py-6 md:py-2">
                <div className="font-heading text-4xl md:text-5xl font-bold text-gradient">
                  <Counter to={it.v} suffix={it.s} />
                </div>
                <div className="mt-2 text-xs md:text-sm uppercase tracking-wider text-muted-foreground">{it.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
