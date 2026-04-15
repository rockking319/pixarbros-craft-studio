import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Modern UI 3D Icons Pack",
    category: "3D Design",
    description: "High-quality 3D icon set for modern UI interfaces",
    behanceUrl: "https://www.behance.net/mr_sadam",
  },
  {
    title: "OLAXBT Crypto Stickers Project",
    category: "Animation",
    description: "Custom animated sticker pack for crypto brand identity",
    behanceUrl: "https://www.behance.net/mr_sadam",
  },
  {
    title: "CWC Linea Crypto Project",
    category: "Branding",
    description: "Full brand sticker system for blockchain platform",
    behanceUrl: "https://www.behance.net/mr_sadam",
  },
  {
    title: "Black and White Icons & Logos",
    category: "Brand Identity",
    description: "Minimal monochrome icon and logo design collection",
    behanceUrl: "https://www.behance.net/mr_sadam",
  },
  {
    title: "APE Crypto Project",
    category: "Animation",
    description: "Telegram sticker animations for APE crypto community",
    behanceUrl: "https://www.behance.net/mr_sadam",
  },
  {
    title: "UNIQUE RABBIT Characters",
    category: "Character Design",
    description: "Unique and diverse character styles for digital brand",
    behanceUrl: "https://www.behance.net/mr_sadam",
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="py-24 md:py-36 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="reveal-on-scroll mb-6">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Selected Work
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">
            Featured <span className="text-muted-foreground">Projects.</span>
          </h2>
        </div>
        <p className="reveal-on-scroll text-muted-foreground text-base md:text-lg mb-16 max-w-xl">
          Explore my latest projects in design, motion, and web.
        </p>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {projects.map((p, i) => (
            <a
              key={p.title}
              href={p.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal-on-scroll stagger-${i + 1} group relative bg-secondary border border-border overflow-hidden cursor-pointer transition-all duration-500 hover:border-muted-foreground/40 hover:shadow-lg block`}
            >
              <div className="aspect-[16/10] bg-muted flex items-center justify-center overflow-hidden">
                <div className="transition-transform duration-700 group-hover:scale-110 flex flex-col items-center justify-center gap-2">
                  <span className="text-muted-foreground/50 text-sm tracking-widest uppercase">
                    {p.category}
                  </span>
                  <span className="text-muted-foreground/30 font-heading text-2xl md:text-3xl font-bold tracking-tight">
                    {p.title}
                  </span>
                </div>
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground" />
                </div>
              </div>
              <div className="p-6 md:p-8 bg-background">
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                  {p.category}
                </p>
                <h3 className="font-heading text-xl md:text-2xl font-semibold tracking-tight mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {p.description}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-px bg-foreground transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </a>
          ))}
        </div>

        <div className="reveal-on-scroll mt-16 flex justify-center">
          <a
            href="https://www.behance.net/mr_sadam/projects"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="heroOutline" size="xl" className="gap-2">
              View Full Portfolio on Behance
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
