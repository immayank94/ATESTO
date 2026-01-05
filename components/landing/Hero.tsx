"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Play, 
  CheckCircle, 
  FileText, 
  Zap, 
  Shield, 
  Sparkles,
  FileCheck,
  Database,
  ArrowDown
} from "lucide-react";

function DocumentStack() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
      
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/30 animate-float"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      
      <div className="relative perspective">
        <div 
          className="absolute -top-4 -left-4 w-64 h-80 rounded-2xl bg-gradient-to-br from-copper/20 to-copper/5 border border-copper/20 shadow-lg transform rotate-6 animate-float-slow"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="p-4">
            <div className="w-full h-3 bg-copper/20 rounded mb-2" />
            <div className="w-3/4 h-3 bg-copper/15 rounded mb-4" />
            <div className="space-y-2">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-full h-2 bg-copper/10 rounded" />
              ))}
            </div>
          </div>
        </div>
        
        <div 
          className="absolute -top-2 -left-2 w-64 h-80 rounded-2xl bg-gradient-to-br from-muted to-card border border-border/30 shadow-medium transform rotate-3 animate-float-slow"
          style={{ animationDelay: "0.25s" }}
        >
          <div className="p-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileText className="w-4 h-4 text-primary" />
              </div>
              <div>
                <div className="w-24 h-2.5 bg-foreground/20 rounded" />
                <div className="w-16 h-2 bg-muted-foreground/20 rounded mt-1" />
              </div>
            </div>
            <div className="space-y-2">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="flex gap-2">
                  <div className="w-1/3 h-2 bg-muted-foreground/15 rounded" />
                  <div className="w-2/3 h-2 bg-muted-foreground/10 rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="relative w-64 h-80 rounded-2xl bg-card border border-border/50 shadow-elevated animate-float-slow overflow-hidden">
          <div className="p-4 border-b border-border/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-glow-sm">
                  <FileCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-sm">GOTS Certificate</p>
                  <p className="text-xs text-muted-foreground">Processing...</p>
                </div>
              </div>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-primary/50 animate-pulse" style={{ animationDelay: "0.2s" }} />
                <div className="w-2 h-2 rounded-full bg-primary/30 animate-pulse" style={{ animationDelay: "0.4s" }} />
              </div>
            </div>
          </div>
          
          <div className="p-4 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-primary/15 flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-foreground">Document parsed</span>
                  <span className="text-primary font-medium">100%</span>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-full bg-primary rounded-full" />
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-primary/15 flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-foreground">Extracting fields</span>
                  <span className="text-primary font-medium">87%</span>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[87%] bg-primary rounded-full animate-pulse" />
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center">
                <Shield className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-foreground">Validation</span>
                  <span className="text-muted-foreground font-medium">Pending</span>
                </div>
                <div className="h-1.5 bg-muted rounded-full" />
              </div>
            </div>
          </div>
          
          <div className="mx-4 p-3 rounded-xl bg-secondary/50 border border-border/30">
            <div className="flex items-center gap-2 mb-2">
              <Database className="w-3 h-3 text-primary" />
              <span className="text-xs font-medium">Extracted Data</span>
              <span className="px-1.5 py-0.5 rounded-full bg-primary/10 text-2xs font-medium text-primary">14 fields</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <div className="px-2 py-1 rounded-lg bg-card border border-border/30 text-2xs">Supplier</div>
              <div className="px-2 py-1 rounded-lg bg-card border border-border/30 text-2xs">Cert ID</div>
              <div className="px-2 py-1 rounded-lg bg-card border border-border/30 text-2xs">Expiry</div>
              <div className="px-2 py-1 rounded-lg bg-card border border-primary/20 text-2xs text-primary">+11 more</div>
            </div>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
        </div>
        
        <div className="absolute -right-16 top-8 px-3 py-1.5 rounded-full bg-card shadow-medium border border-primary/20 text-xs font-medium text-primary animate-bounce-subtle">
          <span className="flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            98.7% Accurate
          </span>
        </div>
        
        <div className="absolute -left-20 bottom-16 px-3 py-1.5 rounded-full bg-card shadow-medium border border-copper/20 text-xs font-medium animate-bounce-subtle" style={{ animationDelay: "1s" }}>
          <span className="flex items-center gap-1 text-copper-dark">
            <Zap className="w-3 h-3 text-copper" />
            10x Faster
          </span>
        </div>
      </div>
      
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[60%] lg:translate-x-[70%] w-56 opacity-80 hidden lg:block">
        <div className="rounded-xl bg-card border border-border/50 shadow-medium p-4 animate-float-reverse">
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border/30">
            <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center">
              <Database className="w-3 h-3 text-primary" />
            </div>
            <span className="text-xs font-medium">Structured Output</span>
          </div>
          <pre className="text-2xs text-muted-foreground font-mono leading-relaxed">
{`{
  "supplier": "EcoTex...",
  "certificate": "GOTS-24",
  "valid_until": "2025",
  "materials": [...],
  "confidence": 0.98
}`}
          </pre>
        </div>
      </div>
    </div>
  );
}

function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-subtle">
      <span className="text-xs text-muted-foreground font-medium">Scroll to explore</span>
      <div className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-1">
        <div className="w-1.5 h-2.5 rounded-full bg-primary animate-bounce" />
      </div>
    </div>
  );
}

export function Hero() {
  const [isInView, setIsInView] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsInView(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20 pattern-noise"
    >
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-mesh-gradient" />
      <div className="absolute inset-0 pattern-dots opacity-40" />
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-morph" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-copper/5 rounded-full blur-3xl animate-morph" style={{ animationDelay: "4s" }} />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-2xl">
            <div 
              className={`mb-6 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: '0ms' }}
            >
              <span className="badge-primary">
                <Sparkles className="w-3.5 h-3.5" />
                <span>AI-Powered Document Intelligence</span>
              </span>
            </div>
            
            <h1 
              className={`font-serif text-display lg:text-display-lg xl:text-display-xl tracking-tight text-foreground mb-6 ${
                isInView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '100ms' }}
            >
              Your complete{' '}
              <span className="text-gradient-primary">document</span>
              <br />
              extraction toolkit
            </h1>
            
            <p 
              className={`text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg ${
                isInView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '200ms' }}
            >
              Transform compliance certificates, safety data sheets, and supplier documents into{' '}
              <span className="text-foreground font-medium">structured, actionable data</span>{' '}
              in seconds—not hours.
            </p>
            
            <div 
              className={`flex flex-wrap gap-4 mb-10 ${
                isInView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '300ms' }}
            >
              <Link href="/signup">
                <Button 
                  size="lg" 
                  className="btn-premium h-12 px-8 text-base font-medium group"
                >
                  <span>Start Extracting Free</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="#demo">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="btn-secondary-premium h-12 px-6 text-base font-medium group"
                >
                  <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  <span>Watch Demo</span>
                </Button>
              </Link>
            </div>
            
            <div 
              className={`flex flex-wrap items-center gap-6 text-sm text-muted-foreground ${
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
          
          <div 
            className={`relative h-[450px] lg:h-[550px] ${
              isInView ? 'animate-fade-in-right' : 'opacity-0'
            }`}
            style={{ animationDelay: '300ms' }}
          >
            <DocumentStack />
          </div>
        </div>
      </div>
      
      <ScrollIndicator />
      
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
