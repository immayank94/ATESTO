"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Play, FileText, Sparkles, Shield, Zap } from "lucide-react";
import Link from "next/link";
import { ParticleBackground } from "@/components/shared/ParticleBackground";
import { TiltCard } from "@/components/shared/TiltCard";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";

function FloatingDocument({ delay = 0, className = "" }: { delay?: number; className?: string }) {
  return (
    <div
      className={`absolute bg-white rounded-xl shadow-xl border border-border/30 p-4 animate-float ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
          <FileText className="w-4 h-4 text-primary" />
        </div>
        <div className="flex-1">
          <div className="h-2 w-20 bg-muted rounded" />
          <div className="h-1.5 w-14 bg-muted/50 rounded mt-1" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-2 w-full bg-muted/60 rounded" />
        <div className="h-2 w-3/4 bg-muted/40 rounded" />
        <div className="h-2 w-5/6 bg-muted/60 rounded" />
      </div>
    </div>
  );
}

function ProcessingVisual() {
  return (
    <TiltCard className="relative">
      <div className="relative bg-gradient-to-br from-charcoal to-charcoal/90 rounded-2xl p-6 shadow-2xl border border-border/10 overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-copper/20 rounded-full blur-3xl" />
        
        {/* Header */}
        <div className="flex items-center justify-between mb-4 relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <span className="text-xs text-white/40 font-mono">ATESTO Processing</span>
        </div>
        
        {/* Content */}
        <div className="space-y-4 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center animate-pulse">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <div className="text-white/90 text-sm font-medium">Extracting Data...</div>
              <div className="h-1.5 bg-white/10 rounded-full mt-2 overflow-hidden">
                <div className="h-full w-3/4 bg-gradient-to-r from-primary to-copper rounded-full animate-shimmer" />
              </div>
            </div>
          </div>
          
          {/* Extracted fields */}
          <div className="space-y-2">
            {[
              { label: "Supplier", value: "EcoMaterials GmbH", conf: 98 },
              { label: "Certificate", value: "GOTS-2024-78456", conf: 99 },
              { label: "Valid Until", value: "2025-01-14", conf: 95 },
            ].map((field, i) => (
              <div
                key={field.label}
                className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2 animate-fade-in-up"
                style={{ animationDelay: `${i * 200 + 500}ms` }}
              >
                <div>
                  <span className="text-white/40 text-xs">{field.label}</span>
                  <div className="text-white/90 text-sm">{field.value}</div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-primary">{field.conf}%</span>
                  <CheckCircle className="w-3.5 h-3.5 text-primary" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TiltCard>
  );
}

export function Hero() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28 bg-background"
    >
      {/* Particle Background */}
      <ParticleBackground 
        particleCount={60} 
        colors={["rgba(45, 122, 94, 0.3)", "rgba(194, 113, 58, 0.3)", "rgba(139, 154, 125, 0.2)"]}
        className="z-0"
      />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-transparent to-transparent -z-10" />
      
      {/* Decorative blobs */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-copper/5 rounded-full blur-3xl -z-10" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div className={`${isInView ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Document Intelligence</span>
            </div>
            
            <h1 className="font-serif text-display-sm md:text-display-md lg:text-display tracking-tight">
              Transform compliance docs into{" "}
              <span className="text-gradient-primary">structured data</span>
            </h1>
            
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              ATESTO uses advanced AI to extract, validate, and organize compliance information 
              from any document format. Save hours of manual work with 98.7% accuracy.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/signup">
                <Button size="lg" className="btn-premium h-14 px-8 text-base group">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="#demo">
                <Button size="lg" variant="outline" className="h-14 px-8 text-base group">
                  <Play className="mr-2 w-4 h-4" />
                  Watch Demo
                </Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border/50">
              <div>
                <div className="font-display text-3xl font-bold text-foreground">
                  <AnimatedCounter end={500} suffix="+" />
                </div>
                <p className="text-sm text-muted-foreground mt-1">Companies</p>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-foreground">
                  <AnimatedCounter end={2} suffix="M+" />
                </div>
                <p className="text-sm text-muted-foreground mt-1">Documents</p>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-foreground">
                  <AnimatedCounter end={98} suffix="%" decimals={1} />
                </div>
                <p className="text-sm text-muted-foreground mt-1">Accuracy</p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Visual */}
          <div
            className={`relative ${isInView ? "animate-fade-in-left" : "opacity-0"}`}
            style={{ animationDelay: "200ms" }}
          >
            {/* Floating documents */}
            <FloatingDocument delay={0} className="top-0 left-0 w-40 z-10" />
            <FloatingDocument delay={500} className="top-20 right-0 w-36 z-10" />
            <FloatingDocument delay={1000} className="bottom-10 left-10 w-32 z-10" />
            
            {/* Main processing card */}
            <div className="relative z-20 ml-16 mt-16">
              <ProcessingVisual />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full animate-scroll-indicator" />
        </div>
      </div>
    </section>
  );
}
