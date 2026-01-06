"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

// Floating document icon that buzzes around
function FloatingElement() {
  return (
    <div className="floating-element absolute w-8 h-8 flex items-center justify-center">
      <div 
        className="w-6 h-6 bg-[#f5f5f0] rounded border border-[#2d5a3d]/30 flex items-center justify-center shadow-sm"
        style={{ filter: 'grayscale(100%) contrast(1.2)' }}
      >
        <FileText className="w-3 h-3 text-[#2d5a3d]" />
      </div>
    </div>
  );
}

export function Hero() {
  const octopusRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (octopusRef.current) {
        const rect = octopusRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Calculate offset (subtle movement)
        const offsetX = (e.clientX - centerX) / 50;
        const offsetY = (e.clientY - centerY) / 50;
        
        setMousePos({ x: offsetX, y: offsetY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      {/* Grain/noise texture overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-30 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '150px',
        }}
      />

      {/* Grid layout - 60/40 split */}
      <div className="grid lg:grid-cols-[1.2fr_1fr] min-h-[85vh]">
        {/* LEFT SIDE - Text content (60%) */}
        <div className="relative z-20 flex items-center px-8 md:px-12 lg:px-16 xl:px-24 py-20">
          <div className="max-w-xl">
            <h1 
              className="font-serif text-5xl md:text-6xl lg:text-[68px] leading-[1.02] tracking-tight text-[#1a1a1a]"
              style={{ 
                animation: 'fadeInUp 0.6s ease-out forwards',
              }}
            >
              The Compliance<br />
              <span className="text-[#2d5a3d]">Data Extractor</span>
            </h1>
            <p 
              className="mt-10 font-mono text-[13px] uppercase tracking-[0.2em] text-[#2d5a3d] leading-[1.8]"
              style={{ 
                animation: 'fadeInUp 0.6s ease-out 0.1s forwards',
                opacity: 0,
              }}
            >
              AI THAT EXTRACTS DATA<br />
              FROM SUPPLIER PDFS WITH<br />
              FULL CONTEXT OF YOUR DOCUMENTS
            </p>
            <div 
              className="mt-10"
              style={{ 
                animation: 'fadeInUp 0.6s ease-out 0.2s forwards',
                opacity: 0,
              }}
            >
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
        
        {/* RIGHT SIDE - Octopus illustration (40%) */}
        <div 
          ref={octopusRef}
          className="relative hidden lg:flex items-center justify-end overflow-visible"
        >
          {/* Floating document element - buzzes around */}
          <div 
            className="absolute z-10"
            style={{
              top: '25%',
              right: '35%',
              animation: 'buzz 8s ease-in-out infinite',
            }}
          >
            <FloatingElement />
          </div>
          
          {/* Second floating element */}
          <div 
            className="absolute z-10"
            style={{
              top: '60%',
              right: '60%',
              animation: 'buzz 10s ease-in-out infinite reverse',
              animationDelay: '-3s',
            }}
          >
            <div className="w-5 h-5 rounded-full border border-[#1a1a1a]/20" style={{ filter: 'grayscale(100%)' }} />
          </div>

          {/* Main octopus with parallax */}
          <div 
            className="absolute right-0 bottom-0 top-0 flex items-center"
            style={{
              transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          >
            <img
              src="/images/octopus-hero.png"
              alt=""
              className="w-auto h-[90%] max-w-none object-contain object-right"
              style={{
                filter: 'grayscale(100%) contrast(1.15) brightness(0.95)',
                mixBlendMode: 'multiply',
                transform: 'translateX(12%)',
              }}
            />
            
            {/* Halftone dot overlay on octopus */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, #1a1a1a 0.5px, transparent 0.5px)',
                backgroundSize: '3px 3px',
                mixBlendMode: 'multiply',
                opacity: 0.08,
              }}
            />
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes buzz {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          10% {
            transform: translate(15px, -10px) rotate(5deg);
          }
          20% {
            transform: translate(-5px, -25px) rotate(-3deg);
          }
          30% {
            transform: translate(20px, -15px) rotate(8deg);
          }
          40% {
            transform: translate(-10px, 5px) rotate(-5deg);
          }
          50% {
            transform: translate(25px, 10px) rotate(3deg);
          }
          60% {
            transform: translate(-15px, -20px) rotate(-8deg);
          }
          70% {
            transform: translate(10px, 15px) rotate(5deg);
          }
          80% {
            transform: translate(-20px, -5px) rotate(-3deg);
          }
          90% {
            transform: translate(5px, -15px) rotate(8deg);
          }
        }
      `}</style>
    </section>
  );
}
