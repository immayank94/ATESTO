"use client";

import { Navbar } from "@/components/shared/Navbar";
import { Hero } from "@/components/landing/Hero";
import { TrustLogos } from "@/components/landing/TrustLogos";
import { Benefits } from "@/components/landing/Benefits";
import { Process } from "@/components/landing/Process";
import { Features } from "@/components/landing/Features";
import { LiveDemo } from "@/components/landing/LiveDemo";
import { Pricing } from "@/components/landing/Pricing";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";
import { MouseGlow } from "@/components/shared/MouseGlow";
import { useAuth } from "@/hooks/useAuth";

export default function Home() {
    const { user, loading } = useAuth();

    return (
        <main className="min-h-screen bg-background relative">
            {/* Global mouse glow effect */}
            <MouseGlow color="rgba(45, 122, 94, 0.08)" size={500} blur={120} opacity={0.5} />

            <Navbar />
            <Hero />
            <TrustLogos />
            <Benefits />
            <Process />
            <Features />
            <LiveDemo />
            <Pricing />
            <Testimonials />
            <FAQ />
            <CTA />
            <Footer />
        </main>
    );
}
