"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-primary/10" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />

          {/* Content */}
          <div className="relative px-8 py-16 sm:px-16 sm:py-24 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Start extracting in minutes
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
              Ready to automate your
              <span className="text-gradient-primary"> compliance workflow?</span>
            </h2>

            {/* Subheadline */}
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Join 500+ compliance teams already saving hours every week. Start free,
              no credit card required.
            </p>

            {/* CTA button */}
            <div className="mt-10">
              <Link href="/signup">
                <Button size="lg" className="text-base px-8 py-6 glow-primary-lg group">
                  Book Your Intro Call
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <p className="mt-6 text-sm text-muted-foreground">
              10 documents free every month • No credit card required • GDPR compliant
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
