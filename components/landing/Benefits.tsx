"use client";

import { Clock, Shield, TrendingUp, ArrowRight, Zap } from "lucide-react";
import { useScrollAnimation, useCountAnimation } from "@/hooks/useScrollAnimation";

export function Benefits() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="benefits" ref={ref} className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Accelerate your{" "}
            <span className="text-gradient-primary">roadmap</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            ATESTO goes behind the scenes in a suite of API's and tooling to ship
            production-ready pipelines in record time.
          </p>
        </div>

        {/* Comparison cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Without ATESTO */}
          <div
            className={`relative rounded-2xl border border-border/50 bg-white p-8 overflow-hidden ${
              isInView ? "animate-fade-in-left" : "opacity-0"
            }`}
            style={{ animationDelay: "200ms" }}
          >
            <div className="relative z-10">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-6">
                Without ATESTO
              </p>

              {/* Timeline visual */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-destructive/50" />
                  <span className="text-sm text-muted-foreground">
                    Lowest quality data, significant implementation
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-destructive/40" />
                  <span className="text-sm text-muted-foreground">
                    Errors, and ongoing expense
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-baseline gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Accuracy</p>
                  <p className="text-3xl font-bold text-foreground font-display">
                    ~80%
                  </p>
                </div>
                <div className="text-muted-foreground/50">|</div>
                <div>
                  <p className="text-sm text-muted-foreground">Timeline</p>
                  <p className="text-3xl font-bold text-foreground font-display">
                    Months?
                  </p>
                </div>
              </div>

              {/* Progress bar - incomplete */}
              <div className="mt-6">
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-muted-foreground/30 to-muted-foreground/20 rounded-full" />
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-muted/50 rounded-full blur-3xl" />
          </div>

          {/* With ATESTO */}
          <div
            className={`relative rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-white to-white p-8 overflow-hidden shadow-glow ${
              isInView ? "animate-fade-in-right" : "opacity-0"
            }`}
            style={{ animationDelay: "300ms" }}
          >
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <p className="text-sm font-medium text-primary uppercase tracking-wide">
                  With ATESTO
                </p>
                <span className="px-2 py-0.5 rounded-full bg-primary/10 text-xs font-medium text-primary">
                  Recommended
                </span>
              </div>

              {/* Benefits list */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Zap className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-foreground font-medium">
                    Rapidly improve accuracy and ship incredible
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Shield className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-foreground font-medium">
                    Products, no metadata work
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-baseline gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Accuracy</p>
                  <p className="text-3xl font-bold text-primary font-display">
                    &gt;99%
                  </p>
                </div>
                <div className="text-muted-foreground/50">|</div>
                <div>
                  <p className="text-sm text-muted-foreground">Timeline</p>
                  <p className="text-3xl font-bold text-primary font-display">Days</p>
                </div>
              </div>

              {/* Progress bar - complete with animation */}
              <div className="mt-6">
                <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-r from-primary to-primary/80 rounded-full animate-shimmer" />
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-copper/10 rounded-full blur-2xl" />
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-12 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "500ms" }}
        >
          <p className="text-muted-foreground">
            Join 500+ companies already shipping faster with ATESTO
          </p>
        </div>
      </div>
    </section>
  );
}
