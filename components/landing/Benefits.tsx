"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Zap, Shield, CheckCircle, Clock, TrendingDown, TrendingUp, X } from "lucide-react";

export function Benefits() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="benefits" ref={ref} className="section-padding bg-secondary/30 pattern-noise">
      <div className="container-custom">
        <div
          className={`text-center max-w-3xl mx-auto mb-16 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="font-serif text-display-sm lg:text-display tracking-tight">
            Accelerate your{" "}
            <span className="text-gradient-primary">roadmap</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            ATESTO goes behind the scenes with a suite of APIs and tooling to ship
            production-ready pipelines in record time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div
            className={`relative card-premium p-8 ${
              isInView ? "animate-fade-in-left" : "opacity-0"
            }`}
            style={{ animationDelay: "200ms" }}
          >
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <X className="w-5 h-5 text-destructive" />
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  Without ATESTO
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <TrendingDown className="w-3 h-3 text-destructive" />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Manual data entry with lowest quality output
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-3 h-3 text-destructive" />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Significant implementation time and ongoing expense
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-destructive" />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Frequent errors and compliance gaps
                  </span>
                </div>
              </div>

              <div className="flex items-baseline gap-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Accuracy</p>
                  <p className="text-3xl font-bold text-foreground font-display">~80%</p>
                </div>
                <div className="text-muted-foreground/30 text-2xl font-light">|</div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Timeline</p>
                  <p className="text-3xl font-bold text-foreground font-display">Months</p>
                </div>
              </div>

              <div className="mt-6">
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-muted-foreground/30 to-muted-foreground/20 rounded-full" />
                </div>
              </div>
            </div>

            <div className="absolute top-0 right-0 w-40 h-40 bg-muted/50 rounded-full blur-3xl" />
          </div>

          <div
            className={`relative card-highlight p-8 border-2 border-primary/30 ${
              isInView ? "animate-fade-in-right" : "opacity-0"
            }`}
            style={{ animationDelay: "300ms" }}
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-5 h-5 text-primary" />
                <p className="text-sm font-medium text-primary uppercase tracking-wide">
                  With ATESTO
                </p>
                <span className="px-2 py-0.5 rounded-full bg-primary/10 text-xs font-medium text-primary">
                  Recommended
                </span>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <TrendingUp className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-foreground font-medium">
                    Rapidly improve accuracy and ship incredible products
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Zap className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-foreground font-medium">
                    No manual metadata work required
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-foreground font-medium">
                    Enterprise-grade security and compliance
                  </span>
                </div>
              </div>

              <div className="flex items-baseline gap-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Accuracy</p>
                  <p className="text-3xl font-bold text-primary font-display">&gt;99%</p>
                </div>
                <div className="text-muted-foreground/30 text-2xl font-light">|</div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Timeline</p>
                  <p className="text-3xl font-bold text-primary font-display">Days</p>
                </div>
              </div>

              <div className="mt-6">
                <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-r from-primary to-primary-light rounded-full animate-shimmer" />
                </div>
              </div>
            </div>

            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-copper/10 rounded-full blur-2xl" />
          </div>
        </div>

        <div
          className={`text-center mt-12 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "500ms" }}
        >
          <p className="text-muted-foreground">
            Join <span className="text-foreground font-semibold">500+</span> companies already shipping faster with ATESTO
          </p>
        </div>
      </div>
    </section>
  );
}
