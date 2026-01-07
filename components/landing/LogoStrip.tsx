"use client";
import { motion } from "framer-motion";

export function LogoStrip() {
  const text = "50+ COMPLIANCE TEAMS USE ATESTO TO SAVE TIME   •   SEE WHY TEAMS ❤️ ATESTO   →   ";
  
  return (
    <section className="py-6 bg-[#f8f9fa] border-y border-gray-100 overflow-hidden">
      <div className="relative">
        {/* Scrolling marquee */}
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ 
            x: { 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }
          }}
        >
          {[...Array(8)].map((_, i) => (
            <span 
              key={i} 
              className="mx-8 text-sm font-medium tracking-wide text-gray-600"
            >
              {text}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
