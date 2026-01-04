import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The designs were exactly what our brand needed. Production was smooth and fast. Highly recommend for any clothing brand.",
    author: "Marcus Chen",
    company: "Urban Threads Co.",
    role: "Founder",
  },
  {
    quote: "Finally found a designer who understands streetwear and delivers files that manufacturers actually love. Game changer.",
    author: "Aaliyah Davis",
    company: "NVRLND Apparel",
    role: "Creative Director",
  },
  {
    quote: "Professional, responsive, and the graphics elevated our entire brand. Our best-selling collection yet.",
    author: "Jake Morrison",
    company: "Coastal Culture",
    role: "Brand Manager",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Testimonials
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Trusted by Clothing Brands & Creators
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            See what clothing brands and fashion creators say about working together.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon */}
              <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Quote className="h-5 w-5 text-primary" />
              </div>

              {/* Quote text */}
              <blockquote className="mb-6 text-lg leading-relaxed text-foreground/90">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold text-lg">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-primary/5 transition-all duration-500 group-hover:scale-150" />
            </div>
          ))}
        </div>

        {/* Brand logos placeholder */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-40">
          {["NVRLND", "COASTAL", "URBAN", "THREADS", "CULTURE"].map((brand) => (
            <span
              key={brand}
              className="text-xl font-bold tracking-widest text-muted-foreground"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
