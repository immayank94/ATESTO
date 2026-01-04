"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What document types does ATESTO support?",
    answer:
      "ATESTO supports PDF documents, images (PNG, JPG, TIFF), and scanned documents. We can process certificates, material declarations, safety data sheets, spec sheets, and supplier compliance documents in any of these formats.",
  },
  {
    question: "How accurate is the data extraction?",
    answer:
      "ATESTO achieves 95%+ accuracy on well-formatted documents. Each extracted field includes a confidence score, so you can quickly identify items that need human review. Complex or low-quality scans may require more manual verification.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. ATESTO is built on SOC 2 compliant infrastructure. All documents are encrypted at rest and in transit. We are fully GDPR compliant and do not train AI models on your data. Enterprise customers can opt for on-premise deployment.",
  },
  {
    question: "Can I integrate ATESTO with my existing systems?",
    answer:
      "Pro and Enterprise plans include API access. You can export data as JSON or CSV and integrate with your ERP, PLM, or compliance management system. Enterprise customers get access to custom integrations and webhooks.",
  },
  {
    question: "What compliance standards does ATESTO recognize?",
    answer:
      "ATESTO recognizes REACH, RoHS, GOTS, FSC, OEKO-TEX, ISO certifications, conflict minerals declarations, and many more. We continuously add support for new standards based on customer needs.",
  },
  {
    question: "How long does extraction take?",
    answer:
      "Most documents are processed in 10-30 seconds. Complex multi-page documents may take up to a minute. Batch uploads are processed in parallel, so you can upload multiple documents at once.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-transparent to-secondary/20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Frequently asked
            <span className="text-gradient-primary"> questions</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know about ATESTO.
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-xl border transition-all duration-300 ${
                openIndex === index
                  ? "border-primary/30 bg-card"
                  : "border-border/50 bg-card/30 hover:bg-card/50"
              }`}
            >
              <button
                className="flex w-full items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
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
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a
              href="mailto:support@atesto.io"
              className="text-primary hover:underline font-medium"
            >
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
