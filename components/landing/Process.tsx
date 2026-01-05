"use client";

import { Upload, Cpu, Download, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Agents",
    subtitle: "Ingest",
    description:
      "Ingest and transform documents into high-quality structured builds from complex multimodal models, from bank statements to invoices.",
    features: ["Multi-format support", "Batch processing", "Auto-classification"],
  },
  {
    number: "02",
    icon: Cpu,
    title: "In-product experiences",
    subtitle: "Extract",
    description:
      "Define your fields and let our AI extract data and parse with unbelievable accuracy, enhancing and confidence-scoring every extraction.",
    features: ["99%+ accuracy", "Confidence scores", "Auto-correction"],
  },
  {
    number: "03",
    icon: Download,
    title: "Back-office automation",
    subtitle: "Export",
    description:
      "Deploy across integrated AI Agents for your team with human oversight built in, confidence and seamless updates.",
    features: ["JSON/CSV export", "API integration", "Automated pipelines"],
  },
];

export function Process() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="process" ref={ref} className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className={`max-w-3xl mb-16 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <span className="badge-primary text-sm font-medium mb-4 inline-flex">
            <Sparkles className="w-4 h-4 mr-2" />
            How it works
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-4">
            Turn documents into{" "}
            <span className="text-gradient-primary">incredible product experiences</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            ATESTO helps you find prototypes in production in minutes, not weeks.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`group relative ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                {/* Left: Step info */}
                <div className="lg:col-span-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <span className="text-5xl font-bold text-primary/20 font-display">
                        {step.number}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground font-display">
                        {step.title}
                      </h3>
                      <p className="text-sm text-primary font-medium">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right: Card */}
                <div className="lg:col-span-8">
                  <div className="relative rounded-2xl border border-border/50 bg-white p-6 lg:p-8 overflow-hidden hover:border-primary/30 hover:shadow-medium transition-all duration-500 group card-shine">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                          <step.icon className="w-7 h-7 text-primary" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {step.description}
                        </p>

                        {/* Features */}
                        <div className="flex flex-wrap gap-2">
                          {step.features.map((feature) => (
                            <span
                              key={feature}
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground"
                            >
                              <CheckCircle className="w-3 h-3 text-primary" />
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Hover gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute left-[4.5rem] top-full w-px h-8 bg-gradient-to-b from-primary/30 to-transparent" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom info */}
        <div
          className={`mt-16 p-6 rounded-2xl bg-secondary/50 border border-border/50 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "600ms" }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">
                  Ready to ship with Virtual Labs
                </p>
                <p className="text-sm text-muted-foreground">
                  Deploy in minutes, not weeks
                </p>
              </div>
            </div>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              Watch demo
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
