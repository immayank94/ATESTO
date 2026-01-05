"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChevronDown, MessageCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How does ATESTO's document AI work?",
    answer: "ATESTO uses advanced vision models specifically trained for document analysis. Our system indexes your documents and provides context-aware extraction, enabling it to understand document structure, identify key fields, and extract data accurately. The system learns from each extraction to improve accuracy over time."
  },
  {
    question: "What document formats does ATESTO support?",
    answer: "ATESTO supports processing documents in any format. Our vision models can parse PDFs, images (PNG, JPG, TIFF), and scanned documents. We handle certificates, material declarations, safety data sheets, spec sheets, and supplier compliance documents in any of these formats with high accuracy."
  },
  {
    question: "How do I integrate ATESTO into my workflow?",
    answer: "Pro and Enterprise plans include full API access. You can integrate ATESTO into your existing workflows by uploading documents via our REST API and receiving structured JSON data in return. Check our documentation for code examples in Python, JavaScript, and other languages."
  },
  {
    question: "What kind of accuracy can I expect?",
    answer: "ATESTO consistently achieves 98%+ extraction accuracy across most document types. Our AI models continuously learn and improve from corrections, often reaching 99%+ accuracy on document types you process frequently. You can monitor accuracy in real-time through our built-in evaluation dashboard."
  },
  {
    question: "Is my data secure with ATESTO?",
    answer: "Absolutely. ATESTO is SOC 2 Type II compliant with enterprise-grade security. All data is encrypted at rest and in transit. We offer data residency options for EU customers, and we never use your documents to train models without explicit consent."
  },
  {
    question: "Can ATESTO handle multi-language documents?",
    answer: "Yes, ATESTO supports documents in over 50 languages. Our vision models are trained to understand document structure regardless of language, making it ideal for global supply chain compliance where documents arrive in various languages."
  },
  {
    question: "What's the difference between Free and Pro plans?",
    answer: "The Free plan includes 50 document extractions per month with our core extraction features. Pro unlocks unlimited extractions, API access, custom extraction schemas, priority processing, and advanced analytics. Enterprise adds SSO, dedicated support, and custom integrations."
  },
];

function FAQAccordion({ item, isOpen, onToggle }: { 
  item: FAQItem; 
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div 
      className={`border-b border-border/50 last:border-b-0 ${
        isOpen ? 'bg-secondary/30' : ''
      } transition-colors duration-300`}
    >
      <button
        onClick={onToggle}
        className="w-full py-6 px-6 flex items-center justify-between text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-foreground pr-8 group-hover:text-primary transition-colors">
          {item.question}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
          isOpen 
            ? 'bg-primary text-primary-foreground rotate-180' 
            : 'bg-secondary text-muted-foreground group-hover:bg-primary/10'
        }`}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-500 ease-smooth ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export function FAQ() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" ref={ref} className="section-padding">
      <div className="container-narrow">
        <div 
          className={`text-center mb-12 ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <span className="badge-neutral mb-4">
            <MessageCircle className="w-3.5 h-3.5" />
            Support
          </span>
          <h2 className="font-serif text-display-sm lg:text-display tracking-tight mt-4">
            Frequently Asked{' '}
            <span className="text-gradient-primary">Questions</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Everything you need to know about ATESTO. Can't find what you're looking for? 
            <a href="mailto:support@atesto.io" className="text-primary hover:underline ml-1">Contact us</a>
          </p>
        </div>
        
        <div 
          className={`rounded-2xl border border-border/50 bg-card overflow-hidden shadow-soft ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '200ms' }}
        >
          {faqs.map((item, index) => (
            <FAQAccordion
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
        
        <div 
          className={`mt-12 text-center ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '400ms' }}
        >
          <p className="text-muted-foreground">
            Still have questions?{' '}
            <a 
              href="mailto:support@atesto.io" 
              className="text-primary font-medium hover:underline"
            >
              Get in touch with our team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
