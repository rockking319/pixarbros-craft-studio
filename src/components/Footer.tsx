import pixarbrosLogo from "@/assets/pixarbros-logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-border py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <img src={pixarbrosLogo} alt="Pixarbros" className="h-6 w-auto" />
              <span className="font-heading text-lg font-bold tracking-tight">Pixarbros</span>
            </div>
            <p className="text-sm text-muted-foreground">Design that moves brands forward.</p>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
            <a href="mailto:hello@pixarbros.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              hello@pixarbros.com
            </a>
            <div className="flex items-center gap-6">
              {["Twitter", "Instagram", "Dribbble", "LinkedIn"].map((s) => (
                <a key={s} href="#" className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2026 Pixarbros. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">Crafted with precision.</p>
        </div>
      </div>
    </footer>
  );
}
