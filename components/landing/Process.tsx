"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Upload, Cpu, Download, ArrowRight, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Upload Documents",
    description:
      "Drag and drop your compliance documents, certificates, or safety data sheets. We support PDFs, images, and scanned documents.",
    features: ["PDF, PNG, JPG, TIFF", "Batch upload", "API integration"],
  },
  {
    icon: Cpu,
    number: "02",
    title: "AI Extraction",
    description:
      "Our vision AI analyzes document structure, identifies fields, and extracts data with human-level accuracy in seconds.",
    features: ["98%+ accuracy", "Context-aware", "Self-improving"],
  },
  {
    icon: Download,
    number: "03",
    title: "Export & Integrate",
    description:
      "Download structured data as JSON, CSV, or Excel. Integrate directly with your ERP, PLM, or compliance systems via API.",
    features: ["JSON/CSV/Excel", "REST API", "Webhooks"],
  },
];

export function Process() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="process" ref={ref} className="section-padding">
      <div className="container-custom">
        <div
          className={`text-center max-w-3xl mx-auto mb-16 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="font-serif text-display-sm lg:text-display tracking-tight mb-4">
            How{" "}
            <span className="text-gradient-primary">ATESTO</span>{" "}
            works
          </h2>
          <p className="text-lg text-muted-foreground">
            Three simple steps to transform unstructured documents into structured, 
            actionable data.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-1/2 -translate-x-1/2 w-[60%] h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className={`relative ${
                    isInView ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${200 + index * 150}ms` }}
                >
                  <div className="card-premium p-8 text-center group">
                    <span className="inline-block text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full mb-6">
                      Step {step.number}
                    </span>
                    
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mx-auto mb-6 group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    
                    <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {step.description}
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-2">
                      {step.features.map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex items-center gap-1 text-xs text-muted-foreground bg-secondary px-2.5 py-1 rounded-full"
                        >
                          <CheckCircle className="w-3 h-3 text-primary" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="flex justify-center my-4 lg:hidden">
                      <ArrowRight className="w-6 h-6 text-border rotate-90" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
