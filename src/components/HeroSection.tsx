import { Button } from "@/components/ui/button";
import pixarbrosLogo from "@/assets/pixarbros-logo.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Animated geometric background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Floating triangles */}
        <svg className="absolute top-[12%] left-[8%] w-32 h-32 md:w-44 md:h-44 animate-float opacity-20" viewBox="0 0 100 100" fill="none">
          <polygon points="50,8 92,86 8,86" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg className="absolute top-[20%] right-[10%] w-24 h-24 md:w-32 md:h-32 animate-float-delayed opacity-15" viewBox="0 0 100 100" fill="none" style={{ transform: "rotate(180deg)" }}>
          <polygon points="50,8 92,86 8,86" stroke="currentColor" strokeWidth="1" />
        </svg>

        {/* Hexagons / polygons */}
        <svg className="absolute bottom-[15%] left-[12%] w-28 h-28 md:w-40 md:h-40 animate-float-delayed opacity-15" viewBox="0 0 100 100" fill="none">
          <polygon points="50,5 90,27 90,73 50,95 10,73 10,27" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg className="absolute bottom-[20%] right-[15%] w-20 h-20 md:w-28 md:h-28 animate-float opacity-20" viewBox="0 0 100 100" fill="none">
          <polygon points="50,5 90,27 90,73 50,95 10,73 10,27" stroke="currentColor" strokeWidth="1" />
        </svg>

        {/* Circles */}
        <div className="absolute top-1/4 right-1/3 w-72 h-72 border border-border/50 rounded-full animate-float opacity-30" />
        <div className="absolute bottom-1/3 left-[20%] w-48 h-48 border border-border/40 rounded-full animate-float-delayed opacity-25" />

        {/* Diagonal lines */}
        <svg className="absolute top-[40%] left-[5%] w-40 h-40 animate-float opacity-10" viewBox="0 0 100 100" fill="none">
          <line x1="0" y1="100" x2="100" y2="0" stroke="currentColor" strokeWidth="1" />
          <line x1="20" y1="100" x2="100" y2="20" stroke="currentColor" strokeWidth="1" />
          <line x1="40" y1="100" x2="100" y2="40" stroke="currentColor" strokeWidth="1" />
        </svg>

        {/* Tiny dots */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-foreground/30 rounded-full animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-foreground/20 rounded-full animate-pulse-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-2/3 left-1/2 w-1 h-1 bg-foreground/30 rounded-full animate-pulse-slow" style={{ animationDelay: "2s" }} />

        {/* Soft radial fade (very subtle so blobs remain visible) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,color-mix(in_oklab,var(--background)_30%,transparent)_100%)]" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="flex justify-center mb-10 animate-reveal-fade" style={{ animationDelay: "0.1s" }}>
          <img src={pixarbrosLogo} alt="Pixarbros" className="logo-adaptive h-16 md:h-20 w-auto" />
        </div>
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8 animate-reveal-fade" style={{ animationDelay: "0.2s" }}>
          Creative Studio — Animator · Designer · Developer
        </p>
        <h1
          className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold uppercase mb-8 whitespace-nowrap text-[#222831] dark:text-[#FFFFFF]"
          style={{
            letterSpacing: "0.02em",
            lineHeight: "1.05",
          }}
        >
          <span className="block">Design. Motion.</span>
          <span className="block text-center">Code.</span>
        </h1>
        <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed animate-reveal-up" style={{ animationDelay: "0.5s" }}>
          Building sharp digital experiences through animation, design, and modern web solutions.
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
      <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground animate-reveal-fade pointer-events-none" style={{ animationDelay: "1.2s" }}>
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>
  );
}
