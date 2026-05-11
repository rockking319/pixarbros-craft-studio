import { Github, Linkedin, Twitter } from "lucide-react";
import { Reveal, SectionTag } from "./_shared";

const team = [
  { name: "Hassan Ali", role: "Founder & AI Engineer", bio: "Building intelligent agents and full-stack platforms.", initials: "HA" },
  { name: "Ayesha Khan", role: "Lead Designer", bio: "Crafts brand-aligned interfaces and motion systems.", initials: "AK" },
  { name: "Omar Sheikh", role: "Mobile Engineer", bio: "Flutter & React Native specialist shipping native UX.", initials: "OS" },
  { name: "Zara Iqbal", role: "Web Engineer", bio: "Performance-obsessed React & Next.js developer.", initials: "ZI" },
];

export default function TeamPro() {
  return (
    <section id="team" className="relative py-24 md:py-32 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <SectionTag>The Team</SectionTag>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mt-5 leading-tight">
            People Behind <br /><span className="text-gradient">the Magic</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <div className="group glass card-hover rounded-2xl p-6 text-center">
                <div className="relative mx-auto w-28 h-28 rounded-full p-[2px] bg-[var(--gradient-brand)]">
                  <div className="w-full h-full rounded-full bg-[#0a0e1a] grid place-items-center font-heading font-bold text-2xl text-gradient">
                    {m.initials}
                  </div>
                </div>
                <h3 className="font-heading text-lg font-semibold mt-5">{m.name}</h3>
                <p className="text-sm text-gradient font-medium">{m.role}</p>
                <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{m.bio}</p>
                <div className="mt-5 flex items-center justify-center gap-3 opacity-70 group-hover:opacity-100 transition">
                  <a href="#" className="w-8 h-8 rounded-full glass grid place-items-center hover:text-[var(--brand)]"><Github className="w-3.5 h-3.5" /></a>
                  <a href="#" className="w-8 h-8 rounded-full glass grid place-items-center hover:text-[var(--brand)]"><Linkedin className="w-3.5 h-3.5" /></a>
                  <a href="#" className="w-8 h-8 rounded-full glass grid place-items-center hover:text-[var(--brand)]"><Twitter className="w-3.5 h-3.5" /></a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
