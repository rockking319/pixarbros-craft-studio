import { Button } from "@/components/ui/button";
import pixarbrosLogo from "@/assets/pixarbros-logo.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 border border-border/40 rounded-full animate-float opacity-30" />
        <div className="absolute bottom-1/3 left-[15%] w-48 h-48 border border-border/30 rounded-full animate-float-delayed opacity-20" />
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-muted-foreground/40 rounded-full animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-muted-foreground/30 rounded-full animate-pulse-slow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="flex justify-center mb-10 animate-reveal-fade" style={{ animationDelay: "0.1s" }}>
          <img src={pixarbrosLogo} alt="Pixarbros" className="h-16 md:h-20 w-auto" />
        </div>
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8 animate-reveal-fade" style={{ animationDelay: "0.2s" }}>
          Creative Studio — Animator · Designer · Developer
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8 animate-reveal-up" style={{ animationDelay: "0.3s" }}>
          Design That Moves
          <br />
          <span className="text-muted-foreground">Brands Forward.</span>
        </h1>
        <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed animate-reveal-up" style={{ animationDelay: "0.5s" }}>
          High-impact visuals, motion, and digital experiences for brands that want to stand out and convert.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-reveal-up" style={{ animationDelay: "0.7s" }}>
          <Button variant="hero" size="xl" asChild>
            <a href="#work">View Work</a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="#contact">Start a Project</a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-reveal-fade" style={{ animationDelay: "1.2s" }}>
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>
  );
}
