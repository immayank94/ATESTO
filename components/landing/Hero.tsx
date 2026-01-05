"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Play, FileText, Sparkles, Shield, Zap, Upload } from "lucide-react";
import Link from "next/link";
import { ParticleBackground } from "@/components/shared/ParticleBackground";
import { TiltCard } from "@/components/shared/TiltCard";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";

function ProcessingVisual() {
  return (
    <TiltCard className="w-full max-w-md" tiltAmount={8}>
      <div className="relative bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/90 rounded-2xl p-6 shadow-2xl border border-white/10 overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-copper/15 rounded-full blur-3xl" />
        
        {/* Header */}
        <div className="flex items-center justify-between mb-5 relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-white/50 font-mono">Processing</span>
          </div>
        </div>
        
        {/* Upload indicator */}
        <div className="flex items-center gap-3 mb-5 p-3 rounded-xl bg-white/5 border border-white/10 relative z-10">
          <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
            <FileText className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <div className="text-white/90 text-sm font-medium">GOTS_Certificate.pdf</div>
            <div className="text-white/40 text-xs">2.4 MB • Uploaded</div>
          </div>
          <CheckCircle className="w-5 h-5 text-green-400" />
        </div>
        
        {/* Progress bar */}
        <div className="mb-5 relative z-10">
          <div className="flex justify-between text-xs mb-2">
            <span className="text-white/60">AI Extraction</span>
            <span className="text-primary font-medium">87%</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full w-[87%] bg-gradient-to-r from-primary to-primary/70 rounded-full relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            </div>
          </div>
        </div>
        
        {/* Extracted fields */}
        <div className="space-y-2.5 relative z-10">
          <div className="text-xs text-white/40 uppercase tracking-wider mb-3">Extracted Data</div>
          {[
            { label: "Supplier", value: "EcoMaterials GmbH", conf: 98 },
            { label: "Certificate", value: "GOTS-2024-78456", conf: 99 },
            { label: "Valid Until", value: "2025-01-14", conf: 95 },
          ].map((field, i) => (
            <div
              key={field.label}
              className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2.5 border border-white/5 animate-fade-in-up"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div>
                <span className="text-white/40 text-xs block">{field.label}</span>
                <div className="text-white/90 text-sm font-medium">{field.value}</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full" 
                    style={{ width: `${field.conf}%` }}
                  />
                </div>
                <span className="text-xs text-primary font-medium w-8">{field.conf}%</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom glow line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
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
        particleCount={40} 
        colors={["rgba(45, 122, 94, 0.25)", "rgba(194, 113, 58, 0.2)", "rgba(139, 154, 125, 0.15)"]}
        className="z-0"
      />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-transparent to-transparent -z-10" />
      
      {/* Decorative blobs */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-copper/5 rounded-full blur-3xl -z-10" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
                  <AnimatedCounter end={98} suffix="%" />
                </div>
                <p className="text-sm text-muted-foreground mt-1">Accuracy</p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Clean Visual */}
          <div
            className={`flex justify-center lg:justify-end ${isInView ? "animate-fade-in-left" : "opacity-0"}`}
            style={{ animationDelay: "200ms" }}
          >
            <ProcessingVisual />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
