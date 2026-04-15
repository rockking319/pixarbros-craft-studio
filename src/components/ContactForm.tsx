import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const mailtoLink = `mailto:hello@pixarbros.com?subject=Project Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;

    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto text-left space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
          Name
        </Label>
        <Input
          id="name"
          type="text"
          required
          maxLength={100}
          placeholder="Your name"
          value={formData.name}
          onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))}
          className="bg-transparent border-border rounded-none h-12 text-foreground placeholder:text-muted-foreground/40 focus-visible:ring-foreground"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          required
          maxLength={255}
          placeholder="your@email.com"
          value={formData.email}
          onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))}
          className="bg-transparent border-border rounded-none h-12 text-foreground placeholder:text-muted-foreground/40 focus-visible:ring-foreground"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
          Message
        </Label>
        <Textarea
          id="message"
          required
          maxLength={1000}
          rows={5}
          placeholder="Tell me about your project..."
          value={formData.message}
          onChange={(e) => setFormData((d) => ({ ...d, message: e.target.value }))}
          className="bg-transparent border-border rounded-none text-foreground placeholder:text-muted-foreground/40 focus-visible:ring-foreground resize-none"
        />
      </div>

      <Button
        type="submit"
        variant="hero"
        size="xl"
        className="w-full gap-2"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : status === "sent" ? "Message Sent ✓" : (
          <>
            Send Message
            <Send className="w-4 h-4" />
          </>
        )}
      </Button>
    </form>
  );
}
