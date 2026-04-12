import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section id="contact" className="py-32 md:py-48 border-t border-border">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <div className="reveal-on-scroll">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Let's Work Together</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Ready to elevate
            <br />
            <span className="text-muted-foreground">your brand?</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-12 leading-relaxed">
            Let's discuss your next project and create something extraordinary together.
          </p>
          <Button variant="hero" size="xl">
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
}
