"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroAnimation } from "./HeroAnimation";

export function Hero() {
  return (
    <section className="hero-section relative pt-24 lg:pt-32 pb-20 lg:pb-28 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white pointer-events-none" />
      
      <div className="container-g relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm font-medium uppercase tracking-wider text-[#2d5a3d] mb-4"
            >
              Your complete compliance toolkit
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tight text-gray-900 mb-6"
            >
              Extract compliance data from any document in seconds
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 mb-8 max-w-lg"
            >
              The most accurate extraction for certificates, material declarations, and supplier documents. Ship compliance workflows in days, not months.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link 
                href="/signup" 
                className="inline-flex items-center gap-2 bg-[#2d5a3d] hover:bg-[#234a31] text-white px-6 py-3.5 rounded-lg text-base font-medium transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Try for free <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 border-2 border-gray-200 hover:border-gray-300 text-gray-700 px-6 py-3.5 rounded-lg text-base font-medium transition-all hover:bg-gray-50"
              >
                Get a demo
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <HeroAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
