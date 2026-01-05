"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle, Sparkles, FileText, Cpu, Shield, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Floating 3D Document Card Component
function FloatingDocument({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <div
      className={`absolute ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative bg-white rounded-xl shadow-elevated p-4 border border-border/50 animate-float-slow">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <FileText className="w-4 h-4 text-primary" />
          </div>
          <div className="flex-1">
            <div className="h-2 bg-muted rounded w-20" />
            <div className="h-1.5 bg-muted/50 rounded w-14 mt-1" />
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-1.5 bg-muted rounded w-full" />
          <div className="h-1.5 bg-muted rounded w-4/5" />
          <div className="h-1.5 bg-primary/20 rounded w-3/5" />
        </div>
      </div>
    </div>
  );
}

// Animated Processing Chip Component
function ProcessingChip({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute ${className}`}>
      <div className="relative animate-float">
        <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl border border-primary/20 flex items-center justify-center shadow-glow">
          <Cpu className="w-10 h-10 text-primary animate-pulse-soft" />
        </div>
        {/* Connection lines */}
        <div className="absolute -left-8 top-1/2 w-8 h-px bg-gradient-to-r from-transparent to-primary/30" />
        <div className="absolute -right-8 top-1/2 w-8 h-px bg-gradient-to-l from-transparent to-primary/30" />
        <div className="absolute left-1/2 -top-8 h-8 w-px bg-gradient-to-b from-transparent to-primary/30" />
        <div className="absolute left-1/2 -bottom-8 h-8 w-px bg-gradient-to-t from-transparent to-primary/30" />
      </div>
    </div>
  );
}

// Data Output Card Component
function DataOutputCard({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute ${className}`}>
      <div className="bg-white rounded-xl shadow-elevated p-4 border border-primary/20 animate-float-reverse">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-medium text-primary">Extracted Data</span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-2xs text-muted-foreground">Supplier</span>
            <span className="text-xs font-medium">EcoMaterials</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xs text-muted-foreground">Certificate</span>
            <span className="text-xs font-medium text-primary">GOTS-2024</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xs text-muted-foreground">Confidence</span>
            <span className="text-xs font-medium text-primary">98%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const { ref: heroRef, isInView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background layers */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 gradient-mesh" />

      {/* Decorative blobs */}
      <div className="absolute top-20 right-1/4 w-96 h-96 blob-shape blob-green opacity-40 animate-morph" />
      <div className="absolute bottom-20 left-1/4 w-80 h-80 blob-shape blob-copper opacity-30 animate-morph" style={{ animationDelay: '-4s' }} />

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-40" />

      {/* Floating decorative elements */}
      <div className="absolute top-32 left-10 w-3 h-3 rounded-full bg-primary/30 animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-48 right-20 w-2 h-2 rounded-full bg-copper/40 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-4 h-4 rounded-full bg-primary/20 animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 ${
                isInView ? 'animate-fade-in-down' : 'opacity-0'
              }`}
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                AI-Powered Document Processing
              </span>
            </div>

            {/* Main headline */}
            <h1
              className={`font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-[1.1] ${
                isInView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '100ms' }}
            >
              Your complete{" "}
              <span className="text-gradient-primary">document processing</span>{" "}
              toolkit
            </h1>

            {/* Subheadline */}
            <p
              className={`mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed ${
                isInView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '200ms' }}
            >
              The most accurate parsing, extraction, and splitting to ship your hardest use-cases in minutes, not months.
            </p>

            {/* CTA buttons */}
            <div
              className={`mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 ${
                isInView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '300ms' }}
            >
              <Link href="/signup">
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-base px-8 py-6 btn-primary-enhanced group shadow-glow hover:shadow-glow-lg transition-shadow"
                >
                  <span>Get Started</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="#demo">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-base px-8 py-6 group bg-white/50 hover:bg-white border-border/50 shadow-soft"
                >
                  <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  See a Demo
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div
              className={`mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground ${
                isInView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '400ms' }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>99.9% Uptime</span>
              </div>
            </div>
          </div>

          {/* Right column - Animated Illustration */}
          <div
            className={`relative h-[400px] lg:h-[500px] ${
              isInView ? 'animate-fade-in-right' : 'opacity-0'
            }`}
            style={{ animationDelay: '300ms' }}
          >
            {/* Main 3D-ish illustration */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Central processing visualization */}
              <div className="relative">
                {/* Main card - Document processor mockup */}
                <div className="relative bg-white rounded-2xl shadow-elevated p-6 border border-border/50 w-72 lg:w-80 animate-float-slow">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-glow-sm">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">ATESTO Engine</p>
                        <p className="text-xs text-muted-foreground">Processing...</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <div className="w-2 h-2 rounded-full bg-primary/50 animate-pulse" style={{ animationDelay: '200ms' }} />
                      <div className="w-2 h-2 rounded-full bg-primary/30 animate-pulse" style={{ animationDelay: '400ms' }} />
                    </div>
                  </div>

                  {/* Progress visualization */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <FileText className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-muted-foreground">Document Analysis</span>
                          <span className="text-primary font-medium">100%</span>
                        </div>
                        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full w-full" />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Cpu className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-muted-foreground">Data Extraction</span>
                          <span className="text-primary font-medium">87%</span>
                        </div>
                        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full animate-shimmer" style={{ width: '87%' }} />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                        <Shield className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-muted-foreground">Validation</span>
                          <span className="text-muted-foreground font-medium">Pending</span>
                        </div>
                        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-muted-foreground/30 rounded-full w-0" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Output preview */}
                  <div className="p-3 rounded-xl bg-muted/50 border border-border/50">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-foreground">Extracted Fields</span>
                      <span className="px-2 py-0.5 rounded-full bg-primary/10 text-2xs font-medium text-primary">12 found</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="px-2 py-1 rounded bg-white border border-border/30 text-2xs">Supplier Name</div>
                      <div className="px-2 py-1 rounded bg-white border border-border/30 text-2xs">Certificate #</div>
                      <div className="px-2 py-1 rounded bg-white border border-border/30 text-2xs">Expiry Date</div>
                      <div className="px-2 py-1 rounded bg-white border border-primary/30 text-2xs text-primary">+9 more</div>
                    </div>
                  </div>
                </div>

                {/* Floating accent elements */}
                <FloatingDocument className="hidden lg:block -left-32 top-8" delay={0} />
                <DataOutputCard className="hidden lg:block -right-28 bottom-12" />

                {/* Small floating badges */}
                <div className="absolute -right-4 top-4 px-3 py-1.5 rounded-full bg-white shadow-medium border border-border/50 text-xs font-medium text-primary animate-bounce-subtle">
                  98% Accuracy
                </div>
                <div className="absolute -left-4 bottom-20 px-3 py-1.5 rounded-full bg-white shadow-medium border border-primary/20 text-xs font-medium animate-bounce-subtle" style={{ animationDelay: '1s' }}>
                  <span className="flex items-center gap-1">
                    <Zap className="w-3 h-3 text-copper" />
                    <span className="text-copper-dark">10x Faster</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
