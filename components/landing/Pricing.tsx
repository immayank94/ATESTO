"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "€0",
    period: "forever",
    description: "Perfect for trying out ATESTO",
    features: [
      "10 document extractions/month",
      "All document types supported",
      "JSON & CSV export",
      "7-day history",
      "Email support",
    ],
    cta: "Start Free",
    href: "/signup",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "€79",
    period: "per month",
    description: "For growing compliance teams",
    features: [
      "200 document extractions/month",
      "All document types supported",
      "JSON & CSV export",
      "Unlimited history",
      "Priority email support",
      "Bulk upload (up to 10 files)",
      "API access",
    ],
    cta: "Start Free Trial",
    href: "/signup?plan=pro",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "€149",
    period: "per month",
    description: "For large organizations",
    features: [
      "Unlimited extractions",
      "Custom integrations",
      "SSO & SAML",
      "Dedicated support",
      "Custom data fields",
      "On-premise option",
      "SLA guarantee",
      "Third-party integrations",
    ],
    cta: "Contact Sales",
    href: "mailto:sales@atesto.io",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-gradient-to-b from-secondary/20 to-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Simple,
            <span className="text-gradient-primary"> transparent pricing</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Start free, upgrade when you need more. No hidden fees, no surprises.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border transition-all duration-300 ${
                plan.highlighted
                  ? "border-primary bg-card scale-105 shadow-glow-lg"
                  : "border-border/50 bg-card/50 hover:bg-card hover:border-border"
              }`}
            >
              {/* Popular badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan name */}
                <h3 className="text-xl font-semibold text-foreground">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mt-4 flex items-baseline">
                  <span className="text-5xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="ml-2 text-muted-foreground">/{plan.period}</span>
                </div>

                {/* Description */}
                <p className="mt-2 text-sm text-muted-foreground">
                  {plan.description}
                </p>

                {/* CTA button */}
                <Link href={plan.href} className="block mt-8">
                  <Button
                    className={`w-full ${
                      plan.highlighted ? "glow-primary" : ""
                    }`}
                    variant={plan.highlighted ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.cta}
                    {plan.highlighted && (
                      <ArrowRight className="ml-2 h-4 w-4" />
                    )}
                  </Button>
                </Link>

                {/* Features list */}
                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className={`h-5 w-5 shrink-0 mt-0.5 ${
                        plan.highlighted ? "text-primary" : "text-muted-foreground"
                      }`} />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise callout */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Need a custom solution?{" "}
            <Link
              href="mailto:enterprise@atesto.io"
              className="text-primary hover:underline font-medium"
            >
              Contact our enterprise team
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
