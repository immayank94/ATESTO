"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      {/* Left side - Text content */}
      <div className="relative z-10 container-g py-20 lg:py-32">
        <div className="max-w-xl">
          <h1 
            className="font-serif text-5xl md:text-6xl lg:text-[72px] leading-[1.02] tracking-tight text-[#1a1a1a] animate-fade-in-up"
          >
            The Compliance<br />
            <span className="text-[#2d5a3d]">Data Extractor</span>
          </h1>
          <p 
            className="mt-10 font-mono text-[13px] uppercase tracking-[0.2em] text-[#2d5a3d] leading-[1.8] animate-fade-in-up delay-100"
          >
            AI THAT EXTRACTS DATA<br />
            FROM SUPPLIER PDFS WITH<br />
            FULL CONTEXT OF YOUR DOCUMENTS
          </p>
          <div className="mt-10 animate-fade-in-up delay-200">
            <Link 
              href="/signup" 
              className="inline-flex items-center gap-2 bg-[#2d5a3d] hover:bg-[#234a31] text-white px-8 py-4 rounded-lg text-base font-medium transition-all hover:-translate-y-0.5"
            >
              Try For Free <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="mt-4 text-sm text-[#666]">
              no credit card required • 20 free extractions
            </p>
          </div>
        </div>
      </div>
      
      {/* Right side - Octopus illustration (GREPTILE STYLE) */}
      {/* Positioned absolute, bleeds off right and bottom edges */}
      <div 
        className="absolute right-0 bottom-0 w-[55%] h-full hidden lg:block"
        style={{ 
          zIndex: 1,
        }}
      >
        <img
          src="/images/octopus-hero.png"
          alt=""
          className="absolute bottom-0 right-0 w-auto h-[110%] max-w-none object-contain object-right-bottom"
          style={{
            filter: 'grayscale(100%) contrast(1.25)',
            mixBlendMode: 'multiply',
            transform: 'translateX(5%) translateY(8%)',
          }}
        />
      </div>
      
      {/* Tablet: smaller octopus */}
      <div 
        className="absolute right-0 bottom-0 w-[50%] h-[60%] hidden md:block lg:hidden"
        style={{ zIndex: 1 }}
      >
        <img
          src="/images/octopus-hero.png"
          alt=""
          className="absolute bottom-0 right-0 w-auto h-full max-w-none object-contain object-right-bottom"
          style={{
            filter: 'grayscale(100%) contrast(1.2)',
            mixBlendMode: 'multiply',
            transform: 'translateX(10%)',
          }}
        />
      </div>
    </section>
  );
}
