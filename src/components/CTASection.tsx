import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Linkedin } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-card" />
      
      {/* Large glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-glow opacity-50 blur-3xl animate-glow-pulse" />

      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <span className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Ready to Start?
          </span>

          {/* Headline */}
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Looking for a{" "}
            <span className="text-gradient">Clothing Graphic Designer?</span>
          </h2>

          {/* Supporting text */}
          <p className="mb-10 text-lg text-muted-foreground lg:text-xl">
            Let's create strong, on-brand designs that manufacturers love. Get production-ready graphics that elevate your clothing line.
          </p>

          {/* CTA Buttons */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
            <Button variant="hero" size="xl">
              Get in Touch
              <ArrowRight className="ml-1 h-5 w-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Start Your Project
            </Button>
          </div>

          {/* Contact options */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="mailto:hello@example.com"
              className="group flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary transition-all group-hover:border-primary/50 group-hover:bg-primary/10">
                <Mail className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium">Email</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary transition-all group-hover:border-primary/50 group-hover:bg-primary/10">
                <Linkedin className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
