"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import Link from "next/link";

// Halftone Owl Illustration (wisdom/oversight for compliance)
function HalftoneOwl() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Halftone dot pattern overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="halftone" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
            <circle cx="4" cy="4" r="1.5" fill="#1a1a1a" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#halftone)" />
      </svg>
      
      {/* Main Owl SVG with halftone styling */}
      <div className="relative z-10 w-80 h-80 lg:w-96 lg:h-96">
        <svg viewBox="0 0 400 400" className="w-full h-full" style={{ filter: 'url(#halftone-filter)' }}>
          <defs>
            {/* Halftone filter */}
            <filter id="halftone-filter">
              <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
            {/* Dot pattern for fills */}
            <pattern id="dots" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="1.2" fill="#2d5a3d" opacity="0.8" />
            </pattern>
            <pattern id="dots-light" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
              <circle cx="4" cy="4" r="1" fill="#2d5a3d" opacity="0.4" />
            </pattern>
          </defs>
          
          {/* Owl body - main silhouette with halftone fill */}
          <ellipse cx="200" cy="240" rx="120" ry="140" fill="url(#dots)" opacity="0.9" />
          
          {/* Owl head */}
          <circle cx="200" cy="130" r="90" fill="url(#dots)" />
          
          {/* Ear tufts */}
          <polygon points="130,60 145,120 115,100" fill="url(#dots)" />
          <polygon points="270,60 255,120 285,100" fill="url(#dots)" />
          
          {/* Eye circles - left */}
          <circle cx="155" cy="130" r="45" fill="#faf9f6" stroke="#2d5a3d" strokeWidth="3" />
          <circle cx="155" cy="130" r="25" fill="#1a1a1a" />
          <circle cx="148" cy="122" r="8" fill="#fff" />
          
          {/* Eye circles - right */}
          <circle cx="245" cy="130" r="45" fill="#faf9f6" stroke="#2d5a3d" strokeWidth="3" />
          <circle cx="245" cy="130" r="25" fill="#1a1a1a" />
          <circle cx="238" cy="122" r="8" fill="#fff" />
          
          {/* Beak */}
          <polygon points="200,160 185,190 200,210 215,190" fill="#c4a574" stroke="#8b7355" strokeWidth="2" />
          
          {/* Wings with lighter dot pattern */}
          <ellipse cx="95" cy="270" rx="35" ry="80" fill="url(#dots-light)" />
          <ellipse cx="305" cy="270" rx="35" ry="80" fill="url(#dots-light)" />
          
          {/* Chest pattern - document/data lines */}
          <g opacity="0.6">
            <line x1="140" y1="250" x2="260" y2="250" stroke="#2d5a3d" strokeWidth="3" strokeDasharray="4,4" />
            <line x1="150" y1="275" x2="250" y2="275" stroke="#2d5a3d" strokeWidth="3" strokeDasharray="4,4" />
            <line x1="160" y1="300" x2="240" y2="300" stroke="#2d5a3d" strokeWidth="3" strokeDasharray="4,4" />
            <line x1="155" y1="325" x2="245" y2="325" stroke="#2d5a3d" strokeWidth="3" strokeDasharray="4,4" />
          </g>
          
          {/* Document held in talons */}
          <g transform="translate(160, 360)">
            <rect x="0" y="0" width="80" height="50" rx="4" fill="#fff" stroke="#2d5a3d" strokeWidth="2" />
            <line x1="10" y1="12" x2="70" y2="12" stroke="#2d5a3d" strokeWidth="2" opacity="0.5" />
            <line x1="10" y1="24" x2="55" y2="24" stroke="#2d5a3d" strokeWidth="2" opacity="0.5" />
            <line x1="10" y1="36" x2="65" y2="36" stroke="#2d5a3d" strokeWidth="2" opacity="0.5" />
            {/* Checkmark */}
            <circle cx="65" cy="36" r="8" fill="#2d5a3d" />
            <path d="M61,36 L64,39 L70,33" stroke="#fff" strokeWidth="2" fill="none" />
          </g>
          
          {/* Talons */}
          <g fill="#c4a574" stroke="#8b7355" strokeWidth="1.5">
            <path d="M155,380 Q150,395 145,410 L155,400 L165,410 Q160,395 155,380" />
            <path d="M245,380 Q240,395 235,410 L245,400 L255,410 Q250,395 245,380" />
          </g>
        </svg>
      </div>
      
      {/* Floating particles around owl */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-[#2d5a3d] opacity-40 animate-float"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${10 + Math.random() * 80}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${4 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
}

// Bottom scrolling banner
function ScrollingBanner() {
  const content = "50+ COMPLIANCE TEAMS USE ATESTO TO SAVE TIME";
  
  return (
    <div className="bg-[#2d5a3d] text-white py-3 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="mx-8 flex items-center gap-2 text-sm font-medium tracking-wide">
            {content}
            <span className="mx-4 opacity-50">•</span>
            <Link href="#testimonials" className="flex items-center gap-1 hover:underline">
              SEE WHY TEAMS <Heart className="w-3 h-3 fill-current" /> ATESTO
              <ArrowRight className="w-3 h-3" />
            </Link>
            <span className="mx-4 opacity-50">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <>
      <section
        ref={ref}
        className="relative min-h-[85vh] flex items-center overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(45,90,61,0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(45,90,61,0.02) 0%, transparent 40%),
            linear-gradient(180deg, #faf9f6 0%, #f5f4f0 100%)
          `,
        }}
      >
        {/* Subtle paper texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-8 items-center">
            {/* Left Column - Text (60%) */}
            <div className="max-w-2xl">
              {/* Main Headline - staggered animation */}
              <h1 
                className={`font-serif text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.05] tracking-tight text-[#1a1a1a] ${
                  isInView ? "animate-fade-in-up" : "opacity-0"
                }`}
              >
                The Compliance<br />
                <span className="text-[#2d5a3d]">Data Extractor</span>
              </h1>
              
              {/* Subheadline - monospace, uppercase, green */}
              <p 
                className={`mt-8 font-mono text-sm md:text-base uppercase tracking-[0.15em] text-[#2d5a3d] leading-relaxed ${
                  isInView ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: "150ms" }}
              >
                AI THAT EXTRACTS DATA<br />
                FROM SUPPLIER DOCUMENTS<br />
                IN SECONDS, NOT HOURS
              </p>
              
              {/* CTA */}
              <div 
                className={`mt-10 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: "300ms" }}
              >
                <Link href="/signup">
                  <Button 
                    size="lg" 
                    className="h-14 px-8 text-base font-medium bg-[#2d5a3d] hover:bg-[#234a31] text-white rounded-lg group"
                  >
                    Try For Free
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <p className="mt-4 text-sm text-[#666] tracking-wide">
                  no credit card required • 20 free extractions
                </p>
              </div>
            </div>
            
            {/* Right Column - Halftone Owl Illustration (40%) */}
            <div 
              className={`relative h-[400px] lg:h-[500px] ${
                isInView ? "animate-fade-in-left" : "opacity-0"
              }`}
              style={{ animationDelay: "200ms" }}
            >
              <HalftoneOwl />
            </div>
          </div>
        </div>
      </section>
      
      {/* Bottom Scrolling Banner */}
      <ScrollingBanner />
    </>
  );
}
