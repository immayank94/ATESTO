import { Hero } from "@/components/landing/Hero";
import { LogoStrip } from "@/components/landing/LogoStrip";
import { FeatureSection } from "@/components/landing/FeatureSection";
import { MetricsSection } from "@/components/landing/MetricsSection";
import { Pricing } from "@/components/landing/Pricing";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";
import { Navigation } from "@/components/landing/Navigation";
import { TopBanner } from "@/components/landing/TopBanner";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <TopBanner />
      <Navigation />
      <Hero />
      <LogoStrip />
      <FeatureSection />
      <MetricsSection />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
