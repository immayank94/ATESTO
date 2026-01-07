"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for trying out ATESTO",
    features: [
      "20 documents/month",
      "All document types supported",
      "JSON & CSV export",
      "7-day history",
      "Community support",
    ],
    cta: "Start Free",
    href: "/signup",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "per month",
    description: "For growing compliance teams",
    features: [
      "500 documents/month",
      "All document types supported",
      "JSON & CSV export",
      "Unlimited history",
      "Priority email support",
      "Bulk upload (up to 10 files)",
      "API access",
      "Custom fields",
    ],
    cta: "Start Free Trial",
    href: "/signup?plan=pro",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "per month",
    description: "For large organizations",
    features: [
      "Everything in Pro",
      "Unlimited extractions",
      "Custom integrations",
      "SSO & SAML",
      "Dedicated support",
      "On-premise option",
      "SLA guarantee",
      "Volume discounts",
    ],
    cta: "Contact Sales",
    href: "mailto:sales@atesto.io",
    highlighted: false,
  },
];

export function Pricing() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="section-spacing" id="pricing" ref={ref} className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Turn your documents into{" "}
            <span className="text-gradient-primary">high quality data</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Simple, transparent pricing. Start free, upgrade when you need more.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border transition-all duration-500 overflow-hidden ${
                plan.highlighted
                  ? "border-primary bg-gradient-to-br from-primary/5 via-white to-white shadow-glow-lg scale-105 lg:scale-110 z-10"
                  : "border-border/50 bg-white hover:border-primary/30 hover:shadow-medium"
              } ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Popular badge */}
              {plan.highlighted && (
                <div className="absolute -top-px left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
              )}

              <div className="p-6 lg:p-8">
                {/* Plan header */}
                <div className="mb-6">
                  {plan.highlighted && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary mb-4">
                      <Sparkles className="w-3 h-3" />
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-xl font-semibold text-foreground font-display">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-foreground font-display">
                      {plan.price}
                    </span>
                    <span className="ml-2 text-muted-foreground">
                      /{plan.period}
                    </span>
                  </div>
                </div>

                {/* CTA button */}
                <Link href={plan.href} className="block mb-8">
                  <Button
                    className={`w-full ${
                      plan.highlighted
                        ? "btn-primary-enhanced shadow-glow hover:shadow-glow-lg"
                        : "bg-secondary hover:bg-secondary/80 text-foreground"
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                    {plan.highlighted && (
                      <ArrowRight className="ml-2 h-4 w-4" />
                    )}
                  </Button>
                </Link>

                {/* Features list */}
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div
                        className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                          plan.highlighted ? "bg-primary/10" : "bg-muted"
                        }`}
                      >
                        <Check
                          className={`h-3 w-3 ${
                            plan.highlighted
                              ? "text-primary"
                              : "text-muted-foreground"
                          }`}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Enterprise callout */}
        <div
          className={`mt-16 text-center ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "500ms" }}
        >
          <p className="text-muted-foreground">
            Need a custom solution?{" "}
            <Link
              href="mailto:enterprise@atesto.io"
              className="text-primary hover:underline font-medium inline-flex items-center gap-1"
            >
              Contact our enterprise team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
