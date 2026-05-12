import { Briefcase, Heart, Users, Award } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: "400+",
    label: "Projects Delivered",
    grad: "from-[#FF6B6B] to-[#FF8E53]",
    glow: "rgba(255,107,107,0.4)",
  },
  {
    icon: Heart,
    value: "100%",
    label: "Client Satisfaction",
    grad: "from-[#7F5BFF] to-[#A56BFF]",
    glow: "rgba(127,91,255,0.4)",
  },
  {
    icon: Users,
    value: "390+",
    label: "Happy Clients",
    grad: "from-[#00D4FF] to-[#3BA1FF]",
    glow: "rgba(0,212,255,0.4)",
  },
  {
    icon: Award,
    value: "5+",
    label: "Years of Experience",
    grad: "from-[#FF6BD6] to-[#7F5BFF]",
    glow: "rgba(255,107,214,0.4)",
  },
];

export default function StatsSection() {
  return (
    <section id="stats" className="relative py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="reveal-on-scroll text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            By the Numbers
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">
            The Numbers Speak —
            <br />
            <span className="text-muted-foreground">
              Our Track Record of Delivering Excellence.
            </span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`reveal-on-scroll stagger-${i + 1} group relative rounded-2xl p-[1px] transition-all duration-500 hover:-translate-y-2`}
              style={{ animation: `float 6s ease-in-out ${i * 0.4}s infinite` }}
            >
              {/* Gradient border */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${s.grad} opacity-40 group-hover:opacity-100 transition-opacity duration-500`}
              />
              {/* Glow */}
              <div
                className={`absolute -inset-2 rounded-3xl bg-gradient-to-br ${s.grad} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-700 pointer-events-none`}
              />

              <div
                className="relative h-full glass-card rounded-2xl p-8 md:p-10 flex flex-col items-start overflow-hidden"
                style={{ boxShadow: `0 8px 32px -12px ${s.glow}` }}
              >
                <div
                  className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${s.grad} opacity-20 blur-2xl group-hover:opacity-50 transition-opacity duration-700 pointer-events-none`}
                />

                <div
                  className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${s.grad} flex items-center justify-center mb-6 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}
                  style={{ boxShadow: `0 10px 30px -8px ${s.glow}` }}
                >
                  <s.icon className="w-5 h-5 text-white" />
                </div>

                <p className="relative font-heading text-4xl md:text-5xl font-bold tracking-tight">
                  {s.value}
                </p>
                <p className="relative text-xs md:text-sm tracking-[0.2em] uppercase text-muted-foreground mt-3">
                  {s.label}
                </p>

                <div
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r ${s.grad} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
