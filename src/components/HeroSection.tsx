import { Button } from "@/components/ui/button";
import TrustIndicator from "./TrustIndicator";
import MockupShowcase from "./MockupShowcase";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-dark" />
      
      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(0, 0%, 50%) 1px, transparent 1px),
                           linear-gradient(to bottom, hsl(0, 0%, 50%) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-custom relative z-10">
        <div className="flex min-h-screen flex-col justify-center py-20 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Content Column */}
            <div className="order-2 lg:order-1">
              {/* Small label */}
              <div 
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 animate-fade-up"
                style={{ animationDelay: "0.1s" }}
              >
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">Clothing Graphic Design Studio</span>
              </div>

              {/* Headline */}
              <h1 
                className="mb-6 text-4xl font-bold leading-tight tracking-tight animate-fade-up sm:text-5xl lg:text-6xl xl:text-7xl"
                style={{ animationDelay: "0.2s" }}
              >
                Professional Clothing Graphics{" "}
                <span className="text-gradient">That Bring Your Brand to Life</span>
              </h1>

              {/* Subheadline */}
              <p 
                className="mb-8 max-w-lg text-lg text-muted-foreground animate-fade-up lg:text-xl"
                style={{ animationDelay: "0.3s" }}
              >
                On-brand apparel graphics designed for impact — delivered with manufacturer-ready production files.
              </p>

              {/* CTAs */}
              <div 
                className="mb-10 flex flex-wrap gap-4 animate-fade-up"
                style={{ animationDelay: "0.4s" }}
              >
                <Button variant="hero" size="xl">
                  Hire a Clothing Graphic Designer
                  <ArrowRight className="ml-1 h-5 w-5" />
                </Button>
                <Button variant="heroOutline" size="xl">
                  View Portfolio
                </Button>
              </div>

              {/* Trust Indicators */}
              <div 
                className="flex flex-wrap gap-6 animate-fade-up"
                style={{ animationDelay: "0.5s" }}
              >
                <TrustIndicator text="Production-Ready Files" />
                <TrustIndicator text="Fashion Industry Experience" />
                <TrustIndicator text="Brand-Focused Designs" />
              </div>
            </div>

            {/* Visual Column */}
            <div 
              className="order-1 flex justify-center animate-scale-in lg:order-2"
              style={{ animationDelay: "0.3s" }}
            >
              <MockupShowcase />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
