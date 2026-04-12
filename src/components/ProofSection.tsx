import { ArrowUpRight, Briefcase, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const platforms = [
  {
    title: "Portfolio",
    platform: "Behance",
    description: "Explore detailed case studies and creative work.",
    button: "View on Behance",
    url: "https://www.behance.net/mr_sadam/projects",
    icon: "Bē",
  },
  {
    title: "Fiverr",
    platform: "Fiverr",
    description: "See client projects, reviews, and active services.",
    button: "View Fiverr Profile",
    url: "https://www.fiverr.com/users/rock_king319/",
    icon: "Fi",
  },
  {
    title: "Upwork",
    platform: "Upwork",
    description: "Verified freelance profile with client history.",
    button: "View Upwork Profile",
    url: "https://www.upwork.com/freelancers/~0195e286a6f1fa1c8c",
    icon: "Up",
  },
];

const stats = [
  { icon: Briefcase, value: "50+", label: "Projects Completed" },
  { icon: Star, value: "100%", label: "Client Satisfaction" },
  { icon: Users, value: "30+", label: "Repeat Clients" },
];

export default function ProofSection() {
  return (
    <section id="proof" className="py-24 md:py-36 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="reveal-on-scroll mb-6">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Proof & Presence
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">
            Trusted & Verified
            <br />
            <span className="text-muted-foreground">Presence.</span>
          </h2>
        </div>
        <p className="reveal-on-scroll text-muted-foreground text-base md:text-lg mb-8 max-w-xl">
          Explore my work, client feedback, and professional profiles.
        </p>
        <p className="reveal-on-scroll text-xs tracking-[0.2em] uppercase text-muted-foreground mb-16">
          Working with clients worldwide across multiple platforms.
        </p>

        {/* Stats */}
        <div className="reveal-on-scroll grid grid-cols-3 gap-4 md:gap-8 mb-20 max-w-2xl">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <s.icon className="w-5 h-5 text-muted-foreground mx-auto md:mx-0 mb-3" />
              <p className="font-heading text-2xl md:text-4xl font-bold tracking-tight">
                {s.value}
              </p>
              <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Platform Cards */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {platforms.map((p, i) => (
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal-on-scroll stagger-${i + 1} group relative bg-card border border-border p-8 md:p-10 flex flex-col transition-all duration-500 hover:border-muted-foreground/30 hover:shadow-[0_8px_30px_-12px_hsl(var(--foreground)/0.1)] hover:-translate-y-1`}
            >
              {/* Platform icon */}
              <div className="w-12 h-12 border border-border flex items-center justify-center mb-8 text-sm font-heading font-bold tracking-tight text-muted-foreground group-hover:text-foreground group-hover:border-muted-foreground/40 transition-all duration-500">
                {p.icon}
              </div>

              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                {p.platform}
              </p>
              <h3 className="font-heading text-xl md:text-2xl font-semibold tracking-tight mb-3">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-8 flex-1">
                {p.description}
              </p>

              <Button
                variant="heroOutline"
                size="default"
                className="w-full gap-2 justify-center"
                asChild
              >
                <span>
                  {p.button}
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Button>

              <div className="absolute bottom-0 left-0 w-full h-px bg-foreground transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
