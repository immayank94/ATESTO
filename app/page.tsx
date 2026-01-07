"use client";
import { TopBanner } from "@/components/landing/TopBanner";
import { Navigation } from "@/components/landing/Navigation";
import { Hero } from "@/components/landing/Hero";
import { LogoStrip } from "@/components/landing/LogoStrip";
import { FeatureSection } from "@/components/landing/FeatureSection";
import { MetricsSection } from "@/components/landing/MetricsSection";
import { SecuritySection } from "@/components/landing/SecuritySection";
import { Testimonials } from "@/components/landing/Testimonials";
import { Pricing } from "@/components/landing/Pricing";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";
import { useAuth } from "@/hooks/useAuth";

export default function Home() {
  const { user, loading } = useAuth();

  return (
    <main className="min-h-screen">
      <TopBanner />
      <Navigation />
      <Hero />
      <LogoStrip />
      <FeatureSection />
      <MetricsSection />
      <SecuritySection />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
