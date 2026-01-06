"use client";
import Link from "next/link";
import { Zap, Twitter, Linkedin, Github } from "lucide-react";

const links = {
  product: [
    { label: "Pricing", href: "#pricing" },
    { label: "Docs", href: "#" },
    { label: "API", href: "#" },
    { label: "Security", href: "#security" },
    { label: "Privacy", href: "#" },
  ],
  company: [
    { label: "Blog", href: "#" },
    { label: "Case Studies", href: "#testimonials" },
    { label: "Enterprise", href: "#security" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  helpful: [
    { label: "For EU Companies", href: "#" },
    { label: "ATESTO vs Manual Entry", href: "#" },
    { label: "What is DPP?", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#f8f8f5] border-t border-[#e0e0e0] py-16">
      <div className="container-g">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="flex items-center gap-2 font-semibold text-lg mb-4">
              <Zap className="w-5 h-5 text-[#2d5a3d]" />
              atesto
            </Link>
            <p className="text-sm text-[#666]">AI-powered compliance data extraction for modern supply chains.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            {links.product.map(l => (
              <Link key={l.label} href={l.href} className="block text-sm text-[#666] hover:text-[#1a1a1a] mb-2">{l.label}</Link>
            ))}
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            {links.company.map(l => (
              <Link key={l.label} href={l.href} className="block text-sm text-[#666] hover:text-[#1a1a1a] mb-2">{l.label}</Link>
            ))}
          </div>
          <div>
            <h4 className="font-semibold mb-4">Helpful Links</h4>
            {links.helpful.map(l => (
              <Link key={l.label} href={l.href} className="block text-sm text-[#666] hover:text-[#1a1a1a] mb-2">{l.label}</Link>
            ))}
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[#e0e0e0] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#666]">© 2025 ATESTO. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-[#666] hover:text-[#1a1a1a]"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-[#666] hover:text-[#1a1a1a]"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="text-[#666] hover:text-[#1a1a1a]"><Github className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
