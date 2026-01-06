"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, FileText, Shield, CheckCircle, Sparkles } from "lucide-react";
import Link from "next/link";
import { ParticleBackground } from "@/components/shared/ParticleBackground";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import Image from "next/image";

// Document mascot component with floating animation
function DocumentMascot() {
  return (
    <div className="relative">
      {/* Confetti particles */}
      <div className="absolute inset-0 -m-20">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#2D7A5E', '#C2713A', '#8B9A7D', '#E8B4A0', '#5A7D6F'][i % 5],
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              opacity: 0.6 + Math.random() * 0.4,
            }}
          />
        ))}
      </div>
      
      {/* Main document illustration */}
      <div className="relative z-10">
        <div className="relative w-64 h-80 mx-auto">
          {/* Main document */}
          <div 
            className="absolute inset-0 bg-white rounded-2xl shadow-2xl border border-border/20 p-6 animate-float"
            style={{ animationDuration: '4s' }}
          >
            {/* Document header */}
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border/30">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="h-3 w-24 bg-foreground/80 rounded" />
                <div className="h-2 w-16 bg-muted-foreground/40 rounded mt-1.5" />
              </div>
            </div>
            
            {/* Document content lines */}
            <div className="space-y-3">
              <div className="h-2.5 w-full bg-muted rounded" />
              <div className="h-2.5 w-4/5 bg-muted rounded" />
              <div className="h-2.5 w-full bg-muted rounded" />
              <div className="h-2.5 w-3/4 bg-muted rounded" />
            </div>
            
            {/* Verification badge */}
            <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            
            {/* Seal/stamp effect */}
            <div 
              className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full border-4 border-primary/30 flex items-center justify-center animate-pulse"
              style={{ animationDuration: '3s' }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold text-xs">VERIFIED</span>
              </div>
            </div>
          </div>
          
          {/* Floating secondary documents */}
          <div 
            className="absolute -left-8 top-1/4 w-20 h-24 bg-white rounded-xl shadow-lg border border-border/20 p-2 animate-float"
            style={{ animationDelay: '0.5s', animationDuration: '5s' }}
          >
            <div className="w-full h-2 bg-muted rounded mb-2" />
            <div className="w-3/4 h-2 bg-muted rounded mb-2" />
            <div className="w-full h-2 bg-muted rounded" />
          </div>
          
          <div 
            className="absolute -right-6 top-8 w-16 h-20 bg-white rounded-xl shadow-lg border border-border/20 p-2 animate-float"
            style={{ animationDelay: '1s', animationDuration: '4.5s' }}
          >
            <div className="w-full h-2 bg-primary/30 rounded mb-2" />
            <div className="w-3/4 h-2 bg-muted rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden pt-32 pb-16 lg:pt-44 lg:pb-24 bg-background"
    >
      {/* Subtle particle background */}
      <ParticleBackground 
        particleCount={25} 
        colors={["rgba(45, 122, 94, 0.15)", "rgba(194, 113, 58, 0.1)", "rgba(139, 154, 125, 0.1)"]}
        className="z-0 opacity-50"
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-transparent to-transparent -z-10" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div className={`${isInView ? "animate-fade-in-up" : "opacity-0"}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium text-primary uppercase tracking-wide">AI-Powered Compliance</span>
            </div>
            
            {/* Headline - Editorial serif like Greptile */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1]">
              The Document<br />
              <span className="text-gradient-primary">Verifier</span>
            </h1>
            
            {/* Subheadline */}
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              AI agents that extract compliance data from your documents with full context of your requirements.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Link href="/signup">
                <Button size="lg" className="btn-premium h-12 px-6 text-sm font-medium group">
                  Try For Free
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <span className="text-xs text-muted-foreground self-center">
                no credit card required • 14-day free trial
              </span>
            </div>
            
            {/* Trust line */}
            <div className="mt-10 pt-6 border-t border-border/40">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">
                Trusted by 500+ compliance teams worldwide
              </p>
              <div className="flex items-center gap-8">
                <div>
                  <div className="font-display text-2xl font-bold">
                    <AnimatedCounter end={2} suffix="M+" />
                  </div>
                  <p className="text-xs text-muted-foreground">Documents processed</p>
                </div>
                <div className="w-px h-8 bg-border/50" />
                <div>
                  <div className="font-display text-2xl font-bold">
                    <AnimatedCounter end={98} suffix="%" />
                  </div>
                  <p className="text-xs text-muted-foreground">Accuracy rate</p>
                </div>
                <div className="w-px h-8 bg-border/50" />
                <div>
                  <div className="font-display text-2xl font-bold">
                    <AnimatedCounter end={10} suffix="x" />
                  </div>
                  <p className="text-xs text-muted-foreground">Faster processing</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Document Mascot */}
          <div
            className={`flex justify-center ${isInView ? "animate-fade-in-left" : "opacity-0"}`}
            style={{ animationDelay: "200ms" }}
          >
            <DocumentMascot />
          </div>
        </div>
      </div>
    </section>
  );
}
