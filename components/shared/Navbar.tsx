"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileCheck, Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

interface NavbarProps {
  isAuthenticated?: boolean;
  onSignOut?: () => void;
}

export function Navbar({ isAuthenticated, onSignOut }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = ["process", "features", "pricing"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            return;
          }
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/#process", label: "How it Works", id: "process" },
    { href: "/#features", label: "Features", id: "features" },
    { href: "/#pricing", label: "Pricing", id: "pricing" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-2 glass-strong border-b border-border/30 shadow-soft"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ${
              scrolled
                ? "bg-primary shadow-glow-sm"
                : "bg-primary/10 group-hover:bg-primary/20"
            }`}>
              <FileCheck className={`h-5 w-5 transition-colors ${
                scrolled ? "text-white" : "text-primary"
              }`} />
            </div>
            <span className="text-xl font-bold text-foreground tracking-tight font-display">
              ATESTO
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:gap-1">
            {!isAuthenticated &&
              navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                    activeSection === link.id
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {/* Active indicator */}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                      activeSection === link.id ? "w-6" : "w-0 group-hover:w-4"
                    }`}
                  />
                </Link>
              ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex md:items-center md:gap-3">
            {isAuthenticated ? (
              <>
                <Link href="/dashboard">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Dashboard
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onSignOut}
                  className="border-border/50 hover:bg-secondary/50"
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Log In
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button
                    size="sm"
                    className="btn-primary-enhanced group px-5 shadow-glow-sm hover:shadow-glow transition-shadow"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2.5 rounded-xl hover:bg-secondary/50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-5">
              <span
                className={`absolute block h-0.5 w-5 bg-foreground rounded transition-all duration-300 ${
                  mobileMenuOpen ? "top-2 rotate-45" : "top-0.5"
                }`}
              />
              <span
                className={`absolute block h-0.5 w-5 bg-foreground rounded top-2 transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                }`}
              />
              <span
                className={`absolute block h-0.5 w-5 bg-foreground rounded transition-all duration-300 ${
                  mobileMenuOpen ? "top-2 -rotate-45" : "top-3.5"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ease-smooth ${
            mobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-1 border-t border-border/30 mt-2">
            {!isAuthenticated &&
              navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 ${
                    activeSection === link.id
                      ? "text-primary bg-primary/5"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </Link>
              ))}

            <div className="pt-4 space-y-2 px-4">
              {isAuthenticated ? (
                <>
                  <Link
                    href="/dashboard"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block"
                  >
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-muted-foreground"
                    >
                      Dashboard
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="w-full border-border/50"
                    onClick={() => {
                      onSignOut?.();
                      setMobileMenuOpen(false);
                    }}
                  >
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block"
                  >
                    <Button
                      variant="outline"
                      className="w-full border-border/50 text-muted-foreground"
                    >
                      Log In
                    </Button>
                  </Link>
                  <Link
                    href="/signup"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block"
                  >
                    <Button className="w-full btn-primary-enhanced shadow-glow">
                      Get Started
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
