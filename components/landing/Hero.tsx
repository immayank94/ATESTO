"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <div className="container-g">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-8 items-center">
          {/* Left - Text */}
          <div className="animate-fade-in-up">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#1a1a1a]">
              The Compliance<br />
              <span className="text-[#2d5a3d]">Data Extractor</span>
            </h1>
            <p className="mt-8 font-mono text-sm uppercase tracking-[0.15em] text-[#2d5a3d] leading-relaxed">
              AI THAT EXTRACTS DATA<br />
              FROM SUPPLIER PDFS WITH<br />
              FULL CONTEXT OF YOUR DOCUMENTS
            </p>
            <div className="mt-10">
              <Link href="/signup" className="btn-primary text-base">
                Try For Free <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="mt-4 text-sm text-[#666]">
                no credit card required • 20 free extractions
              </p>
            </div>
          </div>
          
          {/* Right - Octopus */}
          <div className="relative animate-fade-in-left delay-200">
            <div className="relative w-full max-w-[600px] mx-auto animate-float">
              <Image
                src="/images/octopus-hero.png"
                alt="ATESTO Octopus - Document Intelligence"
                width={600}
                height={400}
                className="hero-illustration w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
