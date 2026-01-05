"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Link from "next/link";

const faqs = [
  {
    question: "How does ATESTO's code or document AI work?",
    answer:
      "Use either Claude or OpenAI as Greptile's backend for document analysis. Greptile indexes your documents and provides context-aware extraction, enabling it to understand document structure, identify key fields, and extract data accurately. The system learns from each extraction to improve accuracy over time.",
  },
  {
    question: "What programming languages does Greptile support?",
    answer:
      "ATESTO supports processing documents in any language. Our vision models can parse PDFs, images (PNG, JPG, TIFF), and scanned documents. We handle certificates, material declarations, safety data sheets, spec sheets, and supplier compliance documents in any of these formats with high accuracy.",
  },
  {
    question: "Why is ATESTO different from other document AI solutions?",
    answer:
      "ATESTO combines state-of-the-art vision models with intelligent agents that learn from your documents. Unlike generic solutions, our system is optimized for compliance documents and provides confidence scoring, continuous learning, and enterprise-grade security. We achieve 99%+ accuracy on well-formatted documents.",
  },
  {
    question: "How do I use Greptile's API for my project?",
    answer:
      "Pro and Enterprise plans include API access. You can integrate ATESTO into your existing workflows by uploading documents via our REST API and receiving structured JSON data in return. Check our documentation for code examples in Python, JavaScript, and other languages.",
  },
  {
    question: "Can I use ATESTO for my private documents?",
    answer:
      "Yes, absolutely. All documents are encrypted at rest and in transit. We're SOC 2 compliant and don't train models on your data. Enterprise customers can opt for on-premise deployment or dedicated infrastructure for maximum privacy and compliance.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className={`text-center mb-16 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <span className="badge-primary text-sm font-medium mb-4 inline-flex">
            <HelpCircle className="w-4 h-4 mr-2" />
            Support
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-4">
            Frequently Asked{" "}
            <span className="text-gradient-primary">Questions</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See what other devs ask us frequently via Discord and email
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl border overflow-hidden transition-all duration-500 ${
                openIndex === index
                  ? "border-primary/30 bg-white shadow-medium"
                  : "border-border/50 bg-white hover:border-border"
              } ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <button
                className="flex w-full items-center justify-between p-6 text-left group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-foreground pr-4 group-hover:text-primary transition-colors font-display">
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? "bg-primary/10 rotate-180"
                      : "bg-secondary"
                  }`}
                >
                  <ChevronDown
                    className={`h-4 w-4 transition-colors ${
                      openIndex === index
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  />
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact support */}
        <div
          className={`mt-12 p-6 rounded-2xl bg-secondary/50 border border-border/50 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "600ms" }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-medium text-foreground">
                Can&apos;t find the answer you&apos;re looking for?
              </p>
              <p className="text-sm text-muted-foreground">
                Reach out to our support team for personalized help.
              </p>
            </div>
            <Link
              href="mailto:support@atesto.io"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-border/50 text-foreground font-medium hover:border-primary/30 hover:text-primary transition-all group shadow-soft"
            >
              Contact Support
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
