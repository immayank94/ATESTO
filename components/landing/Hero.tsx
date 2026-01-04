"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Social proof badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Trusted by 500+ compliance teams
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-[1.1] animate-fade-in-up">
            Stop manually copying
            <br />
            <span className="text-gradient-primary">compliance data</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            ATESTO extracts supplier data from certificates and spec sheets in seconds.
            Transform 20+ hours of manual work into 20 minutes.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Link href="/signup">
              <Button size="lg" className="w-full sm:w-auto text-base px-8 py-6 glow-primary group">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="#demo">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-base px-8 py-6 group">
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>10 free documents/month</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>GDPR compliant</span>
            </div>
          </div>
        </div>

        {/* Product preview / Visual */}
        <div className="mt-20 relative animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="relative mx-auto max-w-5xl">
            {/* Glow effect behind card */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl blur-2xl" />

            {/* Product screenshot mockup */}
            <div className="relative rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden shadow-2xl">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-secondary/30">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-warning/60" />
                  <div className="w-3 h-3 rounded-full bg-success/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="max-w-sm mx-auto h-6 rounded-md bg-secondary/50 flex items-center px-3">
                    <span className="text-xs text-muted-foreground">app.atesto.io/dashboard</span>
                  </div>
                </div>
              </div>

              {/* App content mockup */}
              <div className="p-6 lg:p-8">
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Left side - Document */}
                  <div className="rounded-lg border border-border/50 bg-secondary/20 p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-primary">PDF</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Supplier_Certificate.pdf</p>
                        <p className="text-xs text-muted-foreground">2.4 MB</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-3 bg-muted rounded w-full" />
                      <div className="h-3 bg-muted rounded w-4/5" />
                      <div className="h-3 bg-muted rounded w-3/5" />
                      <div className="h-8 bg-primary/10 border border-primary/20 rounded mt-4 flex items-center px-3">
                        <span className="text-xs text-primary font-medium">GOTS Certified: GOTS-2024-78456</span>
                      </div>
                      <div className="h-3 bg-muted rounded w-full" />
                      <div className="h-3 bg-muted rounded w-2/3" />
                    </div>
                  </div>

                  {/* Right side - Extracted data */}
                  <div className="rounded-lg border border-border/50 bg-secondary/20 p-4">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-sm font-medium">Extracted Data</p>
                      <span className="px-2 py-1 rounded text-xs font-medium bg-primary/20 text-primary">95% Confident</span>
                    </div>
                    <div className="space-y-3">
                      <div className="p-3 rounded bg-card border border-border/50">
                        <p className="text-xs text-muted-foreground">Supplier</p>
                        <p className="text-sm font-medium">EcoMaterials GmbH</p>
                      </div>
                      <div className="p-3 rounded bg-card border border-border/50">
                        <p className="text-xs text-muted-foreground">Certification</p>
                        <p className="text-sm font-medium">GOTS-2024-78456</p>
                      </div>
                      <div className="p-3 rounded bg-card border border-border/50">
                        <p className="text-xs text-muted-foreground">Materials</p>
                        <p className="text-sm font-medium">65% Recycled Polyester, 30% Organic Cotton</p>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <div className="flex-1 h-9 rounded bg-primary flex items-center justify-center">
                          <span className="text-xs font-medium text-primary-foreground">Export JSON</span>
                        </div>
                        <div className="flex-1 h-9 rounded border border-border bg-card flex items-center justify-center">
                          <span className="text-xs font-medium">Export CSV</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
