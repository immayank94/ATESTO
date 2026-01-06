"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-[#f5f5f0]">
      {/* Grid layout - text left, octopus right */}
      <div className="grid lg:grid-cols-2 min-h-[85vh]">
        {/* LEFT SIDE - Text content with solid background */}
        <div className="relative z-20 flex items-center bg-[#f5f5f0] px-8 md:px-12 lg:px-16 xl:px-24 py-20">
          <div className="max-w-xl">
            <h1 
              className="font-serif text-5xl md:text-6xl lg:text-[68px] leading-[1.02] tracking-tight text-[#1a1a1a] animate-fade-in-up"
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
        
        {/* RIGHT SIDE - Octopus illustration */}
        <div className="relative hidden lg:flex items-center justify-center overflow-hidden">
          <img
            src="/images/octopus-hero.png"
            alt=""
            className="w-[140%] max-w-none h-auto absolute"
            style={{
              filter: 'grayscale(100%) contrast(1.2)',
              mixBlendMode: 'multiply',
              right: '-20%',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          />
        </div>
      </div>
      
      {/* Mobile/Tablet: subtle background octopus */}
      <div 
        className="lg:hidden absolute inset-0 flex items-end justify-end overflow-hidden pointer-events-none"
        style={{ zIndex: 1 }}
      >
        <img
          src="/images/octopus-hero.png"
          alt=""
          className="w-[60%] h-auto opacity-20"
          style={{
            filter: 'grayscale(100%) contrast(1.1)',
            mixBlendMode: 'multiply',
            transform: 'translateX(20%) translateY(20%)',
          }}
        />
      </div>
    </section>
  );
}
