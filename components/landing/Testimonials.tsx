"use client";

import { Star, Quote, ArrowRight, Building2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Link from "next/link";

const testimonials = [
  {
    name: "Pedro Franceschi",
    role: "Co-founder & CEO",
    company: "Brex",
    avatar: "PF",
    companyLogo: "BX",
    quote:
      "ATESTO implemented every solution we tested — other vendors, open source, and even going direct to foundation models. It then powered through documents 10x better, helping us build the most intelligent and modern financial platform yet.",
    highlight: true,
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    company: "Vendr",
    avatar: "SC",
    companyLogo: "VN",
    quote:
      "We can now leverage all of the information in our documents and provide new experiences for our customers that they've been asking about for years.",
  },
  {
    name: "George Xie",
    role: "Head of Engineering",
    company: "Checkr",
    avatar: "GX",
    companyLogo: "CR",
    quote:
      "ATESTO's accuracy and speed have transformed our compliance workflow. What used to take days now happens in minutes.",
  },
];

const caseStudies = [
  {
    company: "Brex",
    logo: "BX",
    title: "How Brex Reached 99% Accuracy Across Millions of Financial Documents",
    description:
      "Brex implemented every solution we tested — other vendors, open source, and even going direct to foundation models. It just wasn't good enough to meet our accuracy targets. It was around this time we started trying ATESTO's products, so we applied this to our problem.",
    person: "Pedro Franceschi",
    role: "CEO, Brex",
    color: "primary",
  },
  {
    company: "Vendr",
    logo: "VN",
    title: "Vendr unlocks data from millions of documents",
    description:
      "We can now leverage all of the information in our documents and provide new experiences for our customers that they've been asking about for years.",
    person: "Mike Salomon",
    role: "CTO, Vendr",
    color: "copper",
  },
];

export function Testimonials() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <span className="badge-primary text-sm font-medium mb-4 inline-flex">
            <Quote className="w-4 h-4 mr-2" />
            Customer Stories
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-4">
            Trusted by the world&apos;s{" "}
            <span className="text-gradient-primary">best AI teams</span>
          </h2>
        </div>

        {/* Main testimonial - Featured */}
        <div
          className={`mb-12 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "200ms" }}
        >
          <div className="relative rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-white to-white p-8 lg:p-12 overflow-hidden">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Quote */}
              <div className="lg:col-span-2">
                <Quote className="w-10 h-10 text-primary/30 mb-4" />
                <blockquote className="text-xl lg:text-2xl text-foreground leading-relaxed font-medium">
                  &ldquo;{testimonials[0].quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4 mt-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                    {testimonials[0].avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonials[0].name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[0].role}, {testimonials[0].company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Company card */}
              <div className="relative">
                <div className="rounded-2xl border border-border/50 bg-white p-6 shadow-soft">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-foreground flex items-center justify-center">
                      <span className="text-sm font-bold text-background">
                        {testimonials[0].companyLogo}
                      </span>
                    </div>
                    <span className="font-semibold text-foreground">
                      {testimonials[0].company}
                    </span>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    99% accuracy achieved across millions of documents
                  </p>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          </div>
        </div>

        {/* Secondary testimonials */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {testimonials.slice(1).map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`rounded-2xl border border-border/50 bg-white p-6 hover:border-primary/20 hover:shadow-medium transition-all duration-500 ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <blockquote className="text-foreground leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case studies section */}
        <div
          className={`${isInView ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "500ms" }}
        >
          <div className="text-center mb-10">
            <h3 className="text-xl font-bold text-foreground font-display">
              Powering modern companies in all industries
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((study, index) => (
              <div
                key={study.company}
                className={`group rounded-2xl border overflow-hidden hover:shadow-large transition-all duration-500 ${
                  study.color === "primary"
                    ? "border-primary/20 bg-gradient-to-br from-primary/5 to-white"
                    : "border-copper/20 bg-gradient-to-br from-copper/5 to-white"
                }`}
              >
                <div className="p-6 lg:p-8">
                  {/* Company header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        study.color === "primary"
                          ? "bg-primary/10"
                          : "bg-copper/10"
                      }`}
                    >
                      <span
                        className={`text-sm font-bold ${
                          study.color === "primary"
                            ? "text-primary"
                            : "text-copper"
                        }`}
                      >
                        {study.logo}
                      </span>
                    </div>
                    <span className="font-semibold text-foreground">
                      {study.company}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-semibold text-foreground mb-3 font-display">
                    {study.title}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {study.description}
                  </p>

                  {/* Person */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                          study.color === "primary"
                            ? "bg-primary/10 text-primary"
                            : "bg-copper/10 text-copper"
                        }`}
                      >
                        {study.person
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {study.person}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {study.role}
                        </p>
                      </div>
                    </div>
                    <Link
                      href="#"
                      className={`inline-flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all ${
                        study.color === "primary"
                          ? "text-primary"
                          : "text-copper"
                      }`}
                    >
                      Read more
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
