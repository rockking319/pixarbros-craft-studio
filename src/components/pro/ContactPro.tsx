import { useState } from "react";
import { MapPin, Mail, MessageCircle, Clock, Send, ArrowRight } from "lucide-react";
import { Reveal, SectionTag } from "./_shared";

export default function ContactPro() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <SectionTag>Get In Touch</SectionTag>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mt-5 leading-tight">
            Have a Project in Mind? <br /><span className="text-gradient">Let's Talk.</span>
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-8">
          <Reveal className="lg:col-span-2 space-y-4">
            {[
              { icon: MapPin, t: "Location", v: "Lahore, Pakistan" },
              { icon: Mail, t: "Email", v: "hello@pixarbros.com" },
              { icon: MessageCircle, t: "WhatsApp / Telegram", v: "+92 300 1234567" },
              { icon: Clock, t: "Available", v: "Mon–Sat, 10AM–7PM PKT" },
            ].map(({ icon: Icon, t, v }) => (
              <div key={t} className="glass rounded-2xl p-5 flex items-start gap-4 card-hover">
                <span className="w-10 h-10 rounded-xl bg-[var(--gradient-brand)] grid place-items-center shrink-0">
                  <Icon className="w-5 h-5 text-white" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{t}</div>
                  <div className="font-medium mt-1">{v}</div>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-3">
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 4000); }}
              className="glass-strong rounded-3xl p-7 md:p-9 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Your Name" name="name" placeholder="Jane Cooper" required />
                <Field label="Email" name="email" type="email" placeholder="jane@company.com" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Select label="Service" options={["Web Development","Mobile App","AI Agent","Animation","UI/UX","Other"]} />
                <Select label="Budget" options={["< $2k","$2k – $5k","$5k – $15k","$15k+"]} />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
                <textarea required rows={5} placeholder="Tell us about your project…" className="mt-1.5 w-full bg-white/5 border border-border focus:border-[var(--brand)] focus:outline-none rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground/60 transition" />
              </div>
              <button type="submit" className="btn-gradient w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full font-medium text-white">
                {submitted ? "Sent! We'll be in touch ✓" : <>Send Message <Send className="w-4 h-4" /></>}
              </button>
            </form>
          </Reveal>
        </div>

        <Reveal className="mt-14">
          <div className="relative rounded-3xl p-[1.5px] bg-[var(--gradient-brand)] shadow-[0_0_60px_rgba(26,110,255,0.35)]">
            <div className="rounded-3xl bg-[#0a0e1a] px-6 py-8 md:px-12 md:py-10 flex flex-col md:flex-row items-center justify-between gap-5">
              <div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold">Ready to build something amazing?</h3>
                <p className="text-muted-foreground text-sm mt-1.5">Free 30-minute consultation — no strings attached.</p>
              </div>
              <a href="mailto:hello@pixarbros.com" className="btn-gradient inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium text-white whitespace-nowrap">
                Book a Free Call <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, ...rest }: any) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input {...rest} className="mt-1.5 w-full bg-white/5 border border-border focus:border-[var(--brand)] focus:outline-none rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground/60 transition" />
    </div>
  );
}
function Select({ label, options }: { label: string; options: string[] }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <select className="mt-1.5 w-full bg-white/5 border border-border focus:border-[var(--brand)] focus:outline-none rounded-xl px-4 py-3 text-sm transition">
        {options.map(o => <option key={o} className="bg-[#111827]">{o}</option>)}
      </select>
    </div>
  );
}
