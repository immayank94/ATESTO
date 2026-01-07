"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const offsetX = (e.clientX - window.innerWidth / 2) / 100;
      const offsetY = (e.clientY - window.innerHeight / 2) / 100;
      setMousePos({ x: offsetX, y: offsetY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      {/* Grain texture overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '128px',
          opacity: 0.035,
          mixBlendMode: 'multiply',
        }}
      />

      {/* Text content - LEFT side, HIGH z-index */}
      <div className="relative z-10 container-g py-24 lg:py-36">
        <div className="max-w-xl">
          <h1 
            className="font-serif text-5xl md:text-6xl lg:text-[72px] leading-[1.02] tracking-tight text-[#1a1a1a]"
            style={{ animation: 'fadeInUp 0.6s ease-out forwards' }}
          >
            The Compliance<br />
            <span className="text-[#2d5a3d]">Data Extractor</span>
          </h1>
          <p 
            className="mt-10 font-mono text-[13px] uppercase tracking-[0.2em] text-[#2d5a3d] leading-[1.8]"
            style={{ animation: 'fadeInUp 0.6s ease-out 0.1s forwards', opacity: 0 }}
          >
            AI THAT EXTRACTS DATA<br />
            FROM SUPPLIER PDFS WITH<br />
            FULL CONTEXT OF YOUR DOCUMENTS
          </p>
          <div 
            className="mt-10"
            style={{ animation: 'fadeInUp 0.6s ease-out 0.2s forwards', opacity: 0 }}
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
      
      {/* Octopus - MORE VISIBLE (70-80%), right -50px */}
      <div 
        className="absolute top-1/2 z-0 hidden lg:block pointer-events-none"
        style={{
          right: '-50px',
          transform: `translateY(-50%) translateX(8%) translate(${mousePos.x}px, ${mousePos.y}px)`,
          transition: 'transform 0.4s ease-out',
          width: '700px',
        }}
      >
        {/* Floating document icon */}
        <div 
          className="absolute z-10"
          style={{ top: '12%', left: '15%', animation: 'buzz 8s ease-in-out infinite' }}
        >
          <div className="w-6 h-7 border border-[#1a1a1a]/30 rounded-sm flex items-center justify-center bg-[#f5f5f0]">
            <FileText className="w-3 h-3 text-[#1a1a1a]/40" />
          </div>
        </div>

        {/* Octopus image - NO WHITE BOX */}
        <img
          src="/images/octopus-hero.png"
          alt=""
          className="w-full h-auto"
          style={{
            mixBlendMode: 'multiply',
            opacity: 0.6,
          }}
        />
        
        {/* Halftone dot overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(0,0,0,0.3) 1px, transparent 1px)',
            backgroundSize: '3px 3px',
            mixBlendMode: 'multiply',
          }}
        />
      </div>

      {/* Tablet view */}
      <div 
        className="absolute right-[-30px] top-1/2 -translate-y-1/2 z-0 hidden md:block lg:hidden pointer-events-none"
        style={{ width: '400px' }}
      >
        <img
          src="/images/octopus-hero.png"
          alt=""
          className="w-full h-auto"
          style={{
            mixBlendMode: 'multiply',
            opacity: 0.5,
          }}
        />
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes buzz {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          15% { transform: translate(10px, -15px) rotate(3deg); }
          30% { transform: translate(-6px, -25px) rotate(-2deg); }
          45% { transform: translate(18px, -8px) rotate(4deg); }
          60% { transform: translate(-12px, 6px) rotate(-3deg); }
          75% { transform: translate(14px, 10px) rotate(2deg); }
          90% { transform: translate(-5px, -18px) rotate(-1deg); }
        }
      `}</style>
    </section>
  );
}
