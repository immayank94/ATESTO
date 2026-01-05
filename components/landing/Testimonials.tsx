"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star, Quote } from "lucide-react";
import { TiltCard } from "@/components/shared/TiltCard";

const testimonials = [
  {
    quote: "ATESTO reduced our compliance processing time from 3 days to under 2 hours. The accuracy is remarkable.",
    author: "Sarah Chen",
    role: "Head of Compliance",
    company: "EcoFashion Group",
    avatar: "SC",
    rating: 5,
  },
  {
    quote: "Finally, a tool that understands complex certification documents. Our team can now focus on strategy instead of data entry.",
    author: "Marcus Weber",
    role: "Supply Chain Director",
    company: "GreenTech Industries",
    avatar: "MW",
    rating: 5,
  },
  {
    quote: "The API integration was seamless. We process thousands of supplier documents automatically now.",
    author: "Priya Sharma",
    role: "CTO",
    company: "TraceOrigin",
    avatar: "PS",
    rating: 5,
  },
];

export function Testimonials() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="testimonials" ref={ref} className="section-padding bg-secondary/20">
      <div className="container-custom">
        <div
          className={`text-center max-w-3xl mx-auto mb-16 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <span className="badge-primary mb-4">
            <Star className="w-3.5 h-3.5 fill-current" />
            Testimonials
          </span>
          <h2 className="font-serif text-display-sm lg:text-display tracking-tight mt-4">
            Trusted by compliance{" "}
            <span className="text-gradient-primary">leaders</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            See why leading companies choose ATESTO for their document intelligence needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TiltCard
              key={testimonial.author}
              className={`${isInView ? "animate-fade-in-up" : "opacity-0"}`}
              tiltAmount={5}
            >
              <div
                className="h-full card-premium p-6 lg:p-8 flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative flex-1">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/10" />
                  <p className="text-foreground/90 relative z-10 italic">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-border/50">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
