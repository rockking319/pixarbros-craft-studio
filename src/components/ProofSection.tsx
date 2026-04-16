import { ArrowUpRight, Briefcase, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import fiverrLogo from "@/assets/fiverr-logo.png";
import upworkLogo from "@/assets/upwork-logo.png";

function BehanceIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
    </svg>
  );
}

function FiverrIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.86.354-.86.83v2.322H18.2V11.87h-1.424v3.164H15.15v-2.322c0-.476-.312-.83-.86-.83h-.862v-1.1h.862c.628 0 1.112.212 1.398.592.286-.38.77-.592 1.398-.592h.85v1.1zm-6.908 3.164h-2.1V11.87h-1.424v3.176h-1.624V11.87H8.528v3.176H6.904v-4.274h6.196v4.274zm-8.748 0H4.728V11.87H3.304v3.176H1.68V11.87H.256v3.176h-.004v1.1h6.1v-1.1zM24 16.796a1.39 1.39 0 0 1-.458.257 1.245 1.245 0 0 1-.536.064h-.002a1.272 1.272 0 0 1-.473-.128l-.065-.035-.062-.038a1.27 1.27 0 0 1-.587-1.085 1.285 1.285 0 0 1 1.281-1.283c.17 0 .336.033.492.098l.05.022a1.283 1.283 0 0 1 .36 2.128z" />
    </svg>
  );
}

function UpworkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
    </svg>
  );
}

const platforms = [
  {
    title: "Portfolio",
    platform: "Behance",
    description: "Explore detailed case studies and creative work.",
    button: "View on Behance",
    url: "https://www.behance.net/mr_sadam/projects",
    Icon: BehanceIcon,
  },
  {
    title: "Fiverr",
    platform: "Fiverr",
    description: "See client projects, reviews, and active services.",
    button: "View Fiverr Profile",
    url: "https://www.fiverr.com/users/rock_king319/",
    Icon: ({ className }: { className?: string }) => <img src={fiverrLogo} alt="Fiverr" className={`${className} rounded-full object-cover`} />,
  },
  {
    title: "Upwork",
    platform: "Upwork",
    description: "Verified freelance profile with client history.",
    button: "View Upwork Profile",
    url: "https://www.upwork.com/freelancers/~0195e286a6f1fa1c8c",
    Icon: ({ className }: { className?: string }) => <img src={upworkLogo} alt="Upwork" className={`${className} rounded-full object-cover`} />,
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

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {platforms.map((p, i) => (
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal-on-scroll stagger-${i + 1} group relative bg-card border border-border p-8 md:p-10 flex flex-col transition-all duration-500 hover:border-muted-foreground/30 hover:shadow-[0_8px_30px_-12px_hsl(var(--foreground)/0.1)] hover:-translate-y-1`}
            >
              <div className="w-12 h-12 border border-border flex items-center justify-center mb-8 group-hover:border-muted-foreground/40 transition-all duration-500">
                <p.Icon className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors duration-500" />
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
