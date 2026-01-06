"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const offsetX = (e.clientX - window.innerWidth / 2) / 80;
      const offsetY = (e.clientY - window.innerHeight / 2) / 80;
      setMousePos({ x: offsetX, y: offsetY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Grain texture overlay - covers everything */}
      <div 
        className="absolute inset-0 pointer-events-none z-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '128px',
          opacity: 0.04,
          mixBlendMode: 'multiply',
        }}
      />

      {/* Text content - positioned left, high z-index */}
      <div className="relative z-30 container-g py-24 lg:py-32">
        <div className="max-w-lg lg:max-w-xl">
          <h1 
            className="font-serif text-5xl md:text-6xl lg:text-[72px] leading-[1.02] tracking-tight text-[#1a1a1a]"
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
      
      {/* Octopus - absolute positioned, floats on same background, NO container */}
      <div 
        className="absolute top-0 right-0 bottom-0 w-[55%] hidden lg:block pointer-events-none"
        style={{ 
          zIndex: 10,
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
          transition: 'transform 0.4s ease-out',
        }}
      >
        {/* Floating element - document icon buzzing */}
        <div 
          className="absolute z-20"
          style={{
            top: '18%',
            left: '25%',
            animation: 'buzz 9s ease-in-out infinite',
          }}
        >
          <div className="w-7 h-8 bg-[#f5f5f0] border border-[#1a1a1a]/20 rounded-sm flex items-center justify-center" style={{ filter: 'grayscale(100%) contrast(1.2)' }}>
            <FileText className="w-4 h-4 text-[#1a1a1a]/50" />
          </div>
        </div>

        {/* Octopus image - blends with background */}
        <img
          src="/images/octopus-hero.png"
          alt=""
          className="absolute h-full w-auto max-w-none"
          style={{
            right: '-8%',
            top: '50%',
            transform: 'translateY(-45%)',
            filter: 'grayscale(100%) contrast(1.2)',
            mixBlendMode: 'multiply',
          }}
        />
      </div>

      {/* Tablet view */}
      <div 
        className="absolute right-0 bottom-0 w-[45%] h-[50%] hidden md:block lg:hidden pointer-events-none"
        style={{ zIndex: 10 }}
      >
        <img
          src="/images/octopus-hero.png"
          alt=""
          className="w-full h-auto"
          style={{
            filter: 'grayscale(100%) contrast(1.15)',
            mixBlendMode: 'multiply',
            opacity: 0.8,
            transform: 'translateX(15%)',
          }}
        />
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes buzz {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          15% { transform: translate(12px, -18px) rotate(4deg); }
          30% { transform: translate(-8px, -30px) rotate(-3deg); }
          45% { transform: translate(22px, -10px) rotate(6deg); }
          60% { transform: translate(-15px, 8px) rotate(-4deg); }
          75% { transform: translate(18px, 12px) rotate(3deg); }
          90% { transform: translate(-6px, -22px) rotate(-2deg); }
        }
      `}</style>
    </section>
  );
}
