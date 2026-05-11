import { Reveal } from "./_shared";

const row1 = ["React", "Next.js", "Flutter", "React Native", "Python", "Node.js", "Laravel", "TypeScript"];
const row2 = ["OpenAI", "LangChain", "Docker", "AWS", "Firebase", "PostgreSQL", "Figma", "Framer"];

function Track({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const arr = [...items, ...items];
  return (
    <div className="overflow-hidden pause-on-hover [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className={`marquee-track gap-6 py-2 ${reverse ? "animate-marquee-rev" : "animate-marquee"}`}>
        {arr.map((t, i) => (
          <div key={i} className="glass px-5 py-3 rounded-2xl flex items-center gap-2 whitespace-nowrap hover:border-[var(--brand)] hover:shadow-[0_0_30px_rgba(26,110,255,0.25)] transition">
            <span className="w-2 h-2 rounded-full bg-[var(--brand)]" />
            <span className="text-sm font-medium">{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-5xl font-bold">Technologies <span className="text-gradient">We Work With</span></h2>
        </Reveal>
        <div className="space-y-4">
          <Track items={row1} />
          <Track items={row2} reverse />
        </div>
      </div>
    </section>
  );
}
