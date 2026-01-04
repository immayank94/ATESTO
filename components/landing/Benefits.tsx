"use client";

import { Clock, Shield, TrendingUp, Target, Zap, Database } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Save 20+ hours per month",
    description: "Eliminate manual data entry from supplier documents. What took hours now takes seconds.",
  },
  {
    icon: Shield,
    title: "Reduce compliance risk",
    description: "Never miss critical compliance data. Automated extraction catches what humans miss.",
  },
  {
    icon: TrendingUp,
    title: "Accelerate audits 10x",
    description: "Instantly compile supplier compliance data. Export structured reports in one click.",
  },
  {
    icon: Target,
    title: "95%+ extraction accuracy",
    description: "AI-powered recognition delivers enterprise-grade accuracy with confidence scoring.",
  },
  {
    icon: Zap,
    title: "Process in seconds",
    description: "Upload a document, get structured data in 10-30 seconds. No waiting, no queues.",
  },
  {
    icon: Database,
    title: "Build your compliance database",
    description: "Searchable archive of all supplier data. Find any certificate, any time.",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Stop wasting time on
            <span className="text-gradient-primary"> manual data entry</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Focus on compliance decisions, not document processing. ATESTO handles the extraction.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative p-6 rounded-xl border border-border/50 bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Before/After comparison */}
        <div className="mt-20 rounded-2xl border border-border/50 bg-card/30 p-8 lg:p-12">
          <h3 className="text-center text-xl font-semibold mb-8">
            Time saved per 100 documents
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Before - Manual */}
            <div className="rounded-xl border-2 border-destructive/30 bg-destructive/5 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-destructive/20">
                  <Clock className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <p className="text-sm font-medium text-destructive/80 uppercase tracking-wide">
                    Manual Process
                  </p>
                  <p className="text-4xl font-bold text-destructive mt-1">40+ hours</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Opening PDFs, copy-pasting data, fixing typos, organizing spreadsheets
                  </p>
                </div>
              </div>
            </div>

            {/* After - ATESTO */}
            <div className="rounded-xl border-2 border-primary/30 bg-primary/5 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/20">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-primary/80 uppercase tracking-wide">
                    With ATESTO
                  </p>
                  <p className="text-4xl font-bold text-primary mt-1">45 minutes</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Batch upload, review extracted data, export. Done in one session.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
