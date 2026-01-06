"use client";
import { useState } from "react";
import { X, ArrowRight } from "lucide-react";
import Link from "next/link";

export function TopBanner() {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;

  return (
    <div className="bg-[#2d5a3d] text-white py-3 px-4">
      <div className="container-g flex items-center justify-between">
        <div className="flex-1" />
        <Link href="#features" className="font-mono text-sm flex items-center gap-2 hover:underline">
          Extract compliance data 10x faster with AI. Read how <ArrowRight className="w-4 h-4" />
        </Link>
        <div className="flex-1 flex justify-end">
          <button onClick={() => setIsVisible(false)} className="p-1 hover:bg-white/10 rounded">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
