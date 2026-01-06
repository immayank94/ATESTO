"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[80vh] flex items-center">
      {/* Text content - z-10 to be above octopus */}
      <div className="container-g relative z-10">
        <div className="max-w-2xl">
          <h1 
            className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#1a1a1a] animate-fade-in-up"
          >
            The Compliance<br />
            <span className="text-[#2d5a3d]">Data Extractor</span>
          </h1>
          <p 
            className="mt-8 font-mono text-sm uppercase tracking-[0.15em] text-[#2d5a3d] leading-relaxed animate-fade-in-up delay-100"
          >
            AI THAT EXTRACTS DATA<br />
            FROM SUPPLIER PDFS WITH<br />
            FULL CONTEXT OF YOUR DOCUMENTS
          </p>
          <div className="mt-10 animate-fade-in-up delay-200">
            <Link href="/signup" className="btn-primary text-base">
              Try For Free <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="mt-4 text-sm text-[#666]">
              no credit card required • 20 free extractions
            </p>
          </div>
        </div>
      </div>
      
      {/* Octopus illustration - Greptile style */}
      <div 
        className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-[15%] w-[700px] lg:w-[850px] pointer-events-none select-none hidden md:block"
        style={{ zIndex: 0 }}
      >
        {/* Main octopus image with halftone effect */}
        <img
          src="/images/octopus-hero.png"
          alt=""
          className="w-full h-auto"
          style={{
            filter: 'grayscale(100%) contrast(1.15)',
            mixBlendMode: 'multiply',
            opacity: 0.85,
          }}
        />
        {/* Halftone dot overlay */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, #000 0.8px, transparent 0.8px)',
            backgroundSize: '4px 4px',
            mixBlendMode: 'multiply',
            opacity: 0.15,
          }}
        />
      </div>
      
      {/* Mobile: smaller centered octopus */}
      <div 
        className="md:hidden absolute bottom-0 right-0 w-[300px] pointer-events-none select-none"
        style={{ zIndex: 0 }}
      >
        <img
          src="/images/octopus-hero.png"
          alt=""
          className="w-full h-auto opacity-30"
          style={{
            filter: 'grayscale(100%) contrast(1.1)',
            mixBlendMode: 'multiply',
          }}
        />
      </div>
    </section>
  );
}
