import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import project3dIcons from "@/assets/project-3d-icons.jpg";
import projectOlaxbt from "@/assets/project-olaxbt.jpg";
import projectCwcLinea from "@/assets/project-cwc-linea.jpg";
import projectBwIcons from "@/assets/project-bw-icons.jpg";
import projectApe from "@/assets/project-ape.jpg";
import projectRabbit from "@/assets/project-rabbit.jpg";
import projectWiwi from "@/assets/project-wiwi.jpg";
import projectA1Cat from "@/assets/project-a1cat.jpg";
import projectEmoji from "@/assets/project-emoji.jpg";
import projectBlueCharry from "@/assets/project-bluecharry.jpg";

const projects = [
  {
    title: "Modern UI 3D Icons Pack",
    category: "3D Design",
    description: "High-quality 3D icon set for modern UI interfaces",
    behanceUrl: "https://www.behance.net/gallery/245836527/Modern-UI-3D-Icons-Pack",
    image: project3dIcons,
  },
  {
    title: "OLAXBT Crypto Stickers Project",
    category: "Animation",
    description: "Custom animated sticker pack for crypto brand identity",
    behanceUrl: "https://www.behance.net/gallery/227755963/OLAXBT-Crypto-Stickers-Project",
    image: projectOlaxbt,
  },
  {
    title: "CWC Linea Crypto Project",
    category: "Branding",
    description: "Full brand sticker system for blockchain platform",
    behanceUrl: "https://www.behance.net/gallery/227753557/CWC-Linea-Crypto-project",
    image: projectCwcLinea,
  },
  {
    title: "Black and White Icons & Logos",
    category: "Brand Identity",
    description: "Minimal monochrome icon and logo design collection",
    behanceUrl: "https://www.behance.net/gallery/216605199/Black-and-white-Icons-and-logos",
    image: projectBwIcons,
  },
  {
    title: "APE Crypto Project",
    category: "Animation",
    description: "Telegram sticker animations for APE crypto community",
    behanceUrl: "https://www.behance.net/gallery/181516373/APE-Crypto-Project",
    image: projectApe,
  },
  {
    title: "UNIQUE RABBIT Characters",
    category: "Character Design",
    description: "Unique and diverse character styles for digital brand",
    behanceUrl: "https://www.behance.net/gallery/177198579/UNIQUE-RABBIT",
    image: projectRabbit,
  },
  {
    title: "WiWi Character Animation",
    category: "Animation",
    description: "Expressive character animation for digital sticker pack",
    behanceUrl: "https://www.behance.net/gallery/176756989/WiWi-Character-Animation",
    image: projectWiwi,
  },
  {
    title: "A1 Business Cat Animation",
    category: "Animation",
    description: "Professional animated cat character stickers for Telegram",
    behanceUrl: "https://www.behance.net/gallery/175377857/A1-Business-Cat-Animation",
    image: projectA1Cat,
  },
  {
    title: "Animated Emoji Pack",
    category: "Animation",
    description: "Fun and expressive animated emoji collection",
    behanceUrl: "https://www.behance.net/gallery/171311211/Animated-Emoji-Pack",
    image: projectEmoji,
  },
  {
    title: "Blue Charry Animation",
    category: "Animation",
    description: "Charming character animation for messaging platforms",
    behanceUrl: "https://www.behance.net/gallery/176750905/Blue-Charry-Animation",
    image: projectBlueCharry,
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="relative py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="reveal-on-scroll mb-6">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Selected Work
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-[#222831] dark:text-[#FFFFFF]">
            Featured <span className="text-[#222831]/70 dark:text-[#FFFFFF]/70">Projects.</span>
          </h2>
        </div>
        <p className="reveal-on-scroll text-muted-foreground text-base md:text-lg mb-16 max-w-xl">
          Explore my latest projects in design, motion, and web.
        </p>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {projects.map((p, i) => {
            const gradients = [
              "from-[#FF6B6B] via-[#FF8E53] to-[#FFB347]",
              "from-[#7F5BFF] via-[#A56BFF] to-[#FF6BD6]",
              "from-[#00D4FF] via-[#3BA1FF] to-[#5BFFB0]",
            ];
            const grad = gradients[i % gradients.length];
            return (
              <a
                key={p.title}
                href={p.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`reveal-on-scroll stagger-${Math.min(i + 1, 6)} group relative glass-card rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(127,91,255,0.35)] block`}
              >
                <div className={`absolute -top-24 -right-24 w-56 h-56 rounded-full bg-gradient-to-br ${grad} opacity-30 blur-2xl pointer-events-none transition-opacity duration-500 group-hover:opacity-60`} />
                <div className="aspect-[16/10] bg-muted overflow-hidden relative rounded-t-2xl">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={960}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-tr ${grad} opacity-0 group-hover:opacity-20 mix-blend-overlay transition-opacity duration-500`} />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-0 translate-x-2">
                    <ArrowUpRight className="w-7 h-7 text-white p-1 rounded-full" style={{ background: "linear-gradient(135deg, #7F5BFF, #00D4FF)" }} />
                  </div>
                </div>
                <div className="relative p-6 md:p-8">
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                    {p.category}
                  </p>
                  <h3 className="font-heading text-xl md:text-2xl font-semibold tracking-tight mb-2 text-[#222831] dark:text-[#FFFFFF]">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {p.description}
                  </p>
                </div>
                <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r ${grad} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700`} />
              </a>
            );
          })}
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
