"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, Sparkles, FileCheck, Zap } from "lucide-react";

export function CTA() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-copper/5" />
      <div className="absolute inset-0 pattern-dots opacity-30" />
      
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-morph" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-copper/10 rounded-full blur-3xl animate-morph" style={{ animationDelay: "4s" }} />
      
      <div className="container-narrow relative z-10">
        <div 
          className={`text-center ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <span className="badge-primary mb-6 inline-flex">
            <Sparkles className="w-3.5 h-3.5" />
            Start for free
          </span>
          
          <h2 className="font-serif text-display-sm lg:text-display tracking-tight mb-6">
            Ready to transform your{" "}
            <span className="text-gradient-primary">document workflows</span>?
          </h2>
          
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Join hundreds of companies using ATESTO to eliminate manual document processing
            and accelerate their compliance workflows.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/signup">
              <Button 
                size="lg" 
                className="btn-premium h-14 px-10 text-lg font-medium group w-full sm:w-auto"
              >
                <span>Start Extracting Free</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="#demo">
              <Button 
                variant="outline" 
                size="lg"
                className="btn-secondary-premium h-14 px-8 text-lg font-medium w-full sm:w-auto"
              >
                Book a Demo
              </Button>
            </Link>
          </div>
          
          <div 
            className={`flex flex-wrap justify-center gap-6 lg:gap-10 ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '200ms' }}
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <FileCheck className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">No credit card required</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Zap className="w-5 h-5 text-copper" />
              <span className="text-sm font-medium">Setup in 5 minutes</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">50 free extractions/month</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
