"use client";

import { Navbar } from "@/components/shared/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Demo } from "@/components/landing/Demo";
import { Pricing } from "@/components/landing/Pricing";
import { Footer } from "@/components/landing/Footer";
import { useAuth } from "@/hooks/useAuth";

export default function Home() {
  const { user, signOut, loading } = useAuth();

  return (
    <div className="min-h-screen">
      <Navbar isAuthenticated={!!user} onSignOut={signOut} />
      <main>
        <Hero />
        <Features />
        <Demo />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
