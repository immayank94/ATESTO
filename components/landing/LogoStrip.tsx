"use client";
import { Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

const logos = ["Siemens", "BASF", "H&M", "Adidas", "Unilever", "Nestle"];

export function LogoStrip() {
  return (
    <section className="py-12 md:py-16 border-y border-gray-100">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 mx-8">
            <span className="text-white text-sm font-medium">
              50+ COMPLIANCE TEAMS USE ATESTO TO SAVE TIME
            </span>
            <span className="text-white/50">•</span>
            <Link href="#testimonials" className="text-white text-sm flex items-center gap-1 hover:underline">
              SEE WHY TEAMS <Heart className="w-3 h-3 fill-current" /> ATESTO <ArrowRight className="w-3 h-3" />
            </Link>
            <span className="text-white/50">•</span>
          </div>
        ))}
      </div>
    </section>
  );
}
