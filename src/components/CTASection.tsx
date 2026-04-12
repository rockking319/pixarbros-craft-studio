import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";

export default function CTASection() {
  return (
    <section id="contact" className="py-32 md:py-44 border-t border-border">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <div className="reveal-on-scroll">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Ready to Start?
          </p>
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
            Let's Build Something
            <br />
            <span className="text-muted-foreground">Great Together.</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-14">
            Have a project in mind? Let's turn your ideas into high-impact
            design and digital experiences.
          </p>
        </div>

        <div className="reveal-on-scroll stagger-1 mb-16">
          <ContactForm />
        </div>

        <div className="reveal-on-scroll stagger-2">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
            Or reach out directly
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:hello@pixarbros.com">
              <Button variant="hero" size="xl" className="min-w-[200px]">
                Start a Project
              </Button>
            </a>
            <a
              href="https://www.fiverr.com/users/rock_king319/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="heroOutline"
                size="xl"
                className="min-w-[200px] gap-2"
              >
                Message Me on Fiverr
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </a>
            <a
              href="https://www.upwork.com/freelancers/~0195e286a6f1fa1c8c"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="heroOutline"
                size="xl"
                className="min-w-[200px] gap-2"
              >
                Hire on Upwork
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
