"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Zap, Menu, X } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const navLinks = [
  { href: "#pricing", label: "Pricing" },
  { href: "#features", label: "Features" },
  { href: "#security", label: "Enterprise" },
  { href: "#faq", label: "Resources" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all ${isScrolled ? "bg-[#f5f5f0]/95 backdrop-blur-sm border-b border-[#e0e0e0]" : "bg-transparent"}`}>
      <div className="container-g flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
          <Zap className="w-5 h-5 text-[#2d5a3d]" />
          atesto
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="text-sm text-[#666] hover:text-[#1a1a1a] transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <Link href="/dashboard" className="btn-outline py-2 px-4">Dashboard</Link>
              <button onClick={() => signOut()} className="text-sm text-[#666] hover:text-[#1a1a1a]">Sign Out</button>
            </>
          ) : (
            <>
              <Link href="/login" className="btn-outline py-2 px-4">Sign In</Link>
              <Link href="/signup" className="btn-primary py-2 px-4">Start Now</Link>
            </>
          )}
        </div>
        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-[#f5f5f0] border-t border-[#e0e0e0] py-4 px-6">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="block py-2 text-[#666]" onClick={() => setMobileOpen(false)}>
              {link.label}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-[#e0e0e0] flex flex-col gap-2">
            <Link href="/login" className="btn-outline w-full justify-center">Sign In</Link>
            <Link href="/signup" className="btn-primary w-full justify-center">Start Now</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
