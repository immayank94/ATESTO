"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Shield, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function CTA() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`relative rounded-3xl overflow-hidden ${
            isInView ? "animate-scale-in" : "opacity-0"
          }`}
        >
          {/* Background layers */}
          <div className="absolute inset-0 bg-foreground" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-copper/10" />

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-copper/10 rounded-full blur-3xl" />

          {/* Grid pattern */}
          <div className="absolute inset-0 grid-pattern opacity-5" />

          {/* Content */}
          <div className="relative px-8 py-16 sm:px-16 sm:py-24 text-center">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8 ${
                isInView ? "animate-fade-in-down" : "opacity-0"
              }`}
              style={{ animationDelay: "200ms" }}
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-white/90">
                Start extracting in minutes
              </span>
            </div>

            {/* Headline */}
            <h2
              className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl mx-auto text-white ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: "300ms" }}
            >
              Turn your documents into{" "}
              <span className="text-primary">high quality data</span>
            </h2>

            {/* CTA button */}
            <div
              className={`mt-10 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "400ms" }}
            >
              <Link href="/signup">
                <Button
                  size="lg"
                  className="text-base px-10 py-7 bg-white text-foreground hover:bg-white/90 shadow-elevated group font-semibold"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div
              className={`mt-10 flex flex-wrap items-center justify-center gap-8 ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: "500ms" }}
            >
              <div className="flex items-center gap-2 text-white/70">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-sm">SOC 2 Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Zap className="h-4 w-4 text-primary" />
                <span className="text-sm">No credit card required</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm">10 free documents/month</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
