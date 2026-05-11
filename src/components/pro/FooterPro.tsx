import { Github, Linkedin, Twitter, Send } from "lucide-react";
import logo from "@/assets/pixarbros-logo.png";

export default function FooterPro() {
  return (
    <footer className="relative pt-20 pb-8 border-t border-border bg-[#0d1117]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--brand)] to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <a href="#home" className="flex items-center gap-3">
              <img src={logo} alt="Pixarbros" className="logo-adaptive h-9 w-auto" />
              <span className="font-heading font-bold text-xl text-gradient">Pixarbros</span>
            </a>
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
              Premium creative studio building digital experiences that actually work.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {[Github, Linkedin, Twitter, Send].map((I, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full glass grid place-items-center hover:border-[var(--brand)] hover:text-[var(--brand)] transition">
                  <I className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          <FooterCol title="Quick Links" items={["Home","About","Services","Portfolio","Team","Contact"]} />
          <FooterCol title="Services" items={["Animation","Web Apps","Mobile Apps","AI Agents","RAG Systems","UI/UX"]} />
          <FooterCol title="Technologies" items={["React / Next.js","Flutter / RN","Python / Node","LangChain / OpenAI","Figma","AWS / Firebase"]} />
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Pixarbros. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground/90">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {items.map(i => (
          <li key={i}><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">{i}</a></li>
        ))}
      </ul>
    </div>
  );
}
