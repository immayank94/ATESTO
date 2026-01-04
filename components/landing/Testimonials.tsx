"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Compliance Manager",
    company: "AutoParts GmbH",
    avatar: "SM",
    rating: 5,
    quote:
      "ATESTO cut our document processing time by 90%. What used to take our team days now takes hours. The accuracy is impressive.",
  },
  {
    name: "Thomas K.",
    role: "Quality Director",
    company: "TextilWerk AG",
    avatar: "TK",
    rating: 5,
    quote:
      "We process hundreds of supplier certificates monthly. ATESTO's batch processing and confidence scoring have transformed our workflow.",
  },
  {
    name: "Maria L.",
    role: "Supply Chain Lead",
    company: "EcoProducts EU",
    avatar: "ML",
    rating: 5,
    quote:
      "Finally, a tool that understands compliance documents. The REACH and RoHS extraction is spot-on. Saved us from hiring additional staff.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Trusted by
            <span className="text-gradient-primary"> compliance teams</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See what compliance professionals say about ATESTO.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group relative p-8 rounded-2xl border border-border/50 bg-card/50 hover:bg-card hover:border-primary/20 transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground leading-relaxed mb-8">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Decorative quote mark */}
              <div className="absolute top-6 right-8 text-6xl font-serif text-primary/10">
                &ldquo;
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "500+", label: "Companies" },
            { value: "50K+", label: "Documents processed" },
            { value: "95%", label: "Accuracy rate" },
            { value: "4.9/5", label: "Customer rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-bold text-gradient-primary">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
