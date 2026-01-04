import { Palette, Target, FileCheck, Settings } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Clothing Graphic Design",
    description: "Custom apparel graphics aligned with your brand identity and fashion vision.",
  },
  {
    icon: Target,
    title: "On-Brand Creative Direction",
    description: "Designs that match your brand's tone, audience, and style.",
  },
  {
    icon: FileCheck,
    title: "Production-Ready Files",
    description: "Manufacturer-approved formats (AI, PSD, PDF, SVG) ready for printing.",
  },
  {
    icon: Settings,
    title: "Manufacturer Coordination Ready",
    description: "Files prepared with correct dimensions, color modes, and print specs.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-card" />
      
      {/* Accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-glow opacity-40 blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Services
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            What I Do
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Comprehensive clothing graphic design services that take your brand from concept to production.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-secondary/50 p-6 transition-all duration-500 hover:border-primary/50 hover:bg-secondary hover:shadow-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-button transition-transform duration-300 group-hover:scale-110">
                <service.icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <h3 className="mb-2 text-xl font-semibold tracking-tight">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-primary transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
