"use client";

import { Upload, Cpu, Download, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Upload,
    title: "Upload",
    description: "Drop your PDF, certificate image, or spec sheet. Supports all common document formats.",
    time: "5 seconds",
  },
  {
    number: "2",
    icon: Cpu,
    title: "Extract",
    description: "AI identifies and extracts materials, certifications, and compliance data automatically.",
    time: "10-30 seconds",
  },
  {
    number: "3",
    icon: Download,
    title: "Export",
    description: "Review extracted data, make any corrections, and export to JSON or CSV.",
    time: "30 seconds",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-gradient-to-b from-secondary/20 to-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Three steps to
            <span className="text-gradient-primary"> structured data</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From document to database in under a minute. No training required.
          </p>
        </div>

        {/* Process steps */}
        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-24 left-[16.5%] right-[16.5%] h-0.5 bg-gradient-to-r from-border via-primary/30 to-border" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Step card */}
                <div className="group relative p-8 rounded-2xl border border-border/50 bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300">
                  {/* Step number */}
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-xl mb-6 group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary mb-4">
                    <step.icon className="h-6 w-6 text-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Time indicator */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                    <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs font-medium text-primary">{step.time}</span>
                  </div>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>

                {/* Arrow between steps - mobile */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-4 lg:hidden">
                    <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Total time summary */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-border/50">
            <span className="text-sm text-muted-foreground">Total processing time:</span>
            <span className="text-lg font-bold text-primary">Under 1 minute</span>
          </div>
        </div>
      </div>
    </section>
  );
}
