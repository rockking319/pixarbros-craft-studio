import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";
import { Reveal } from "./_shared";

export default function NewsletterCTA() {
  const [done, setDone] = useState(false);
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-brand)] opacity-[0.12]" />
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-[var(--brand)] opacity-30 blur-[120px] rounded-full animate-blob" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[var(--brand-2)] opacity-30 blur-[120px] rounded-full animate-blob" style={{ animationDelay: "3s" }} />
      <div className="relative max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <Reveal>
          <h2 className="font-heading text-3xl md:text-5xl font-bold leading-tight">
            Stay Updated on <span className="text-gradient">AI & Dev Trends</span>
          </h2>
          <p className="text-muted-foreground mt-3">Monthly insights from our team — no spam, ever.</p>
          <form
            onSubmit={(e) => { e.preventDefault(); setDone(true); setTimeout(() => setDone(false), 4000); }}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto glass-strong rounded-full p-1.5"
          >
            <div className="flex items-center gap-2 flex-1 px-4">
              <Mail className="w-4 h-4 text-muted-foreground" />
              <input type="email" required placeholder="you@company.com" className="bg-transparent flex-1 py-2.5 outline-none text-sm placeholder:text-muted-foreground/60" />
            </div>
            <button type="submit" className="btn-gradient inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-white">
              {done ? "Subscribed ✓" : <>Subscribe <ArrowRight className="w-4 h-4" /></>}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
