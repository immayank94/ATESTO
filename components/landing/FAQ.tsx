"use client";
import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";

const faqs = [
  { q: "How does ATESTO pricing work?", a: "ATESTO offers tiered pricing based on document volume. Free tier includes 20 extractions/month. Pro starts at $19/month for 500 documents." },
  { q: "What document types are supported?", a: "Certificates (GOTS, OEKO-TEX), Material Declarations, Safety Data Sheets, Technical Spec Sheets, and more. PDF, images, and scanned documents are all supported." },
  { q: "Is there a free trial?", a: "Yes! Start with 20 free extractions, no credit card required. Upgrade anytime to Pro or Enterprise." },
  { q: "How accurate is the extraction?", a: "ATESTO achieves 97-99% accuracy on standard document types. Accuracy improves over time as the system learns from your corrections." },
  { q: "Is ATESTO compatible with my ERP?", a: "ATESTO integrates with major ERPs including SAP, Oracle, and Microsoft Dynamics. We also offer a REST API for custom integrations." },
  { q: "Can I use ATESTOs API?", a: "Yes, our REST API is available on Pro and Enterprise plans. Full documentation and code examples are provided." },
  { q: "What is AI document extraction?", a: "AI document extraction uses machine learning to automatically identify and extract structured data from unstructured documents like PDFs and images." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section-g">
      <div className="container-g max-w-3xl">
        <div className="text-center mb-12">
          <span className="section-label">[ FAQ ]</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight">Frequently Asked Questions</h2>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-[#666]">
            Your question not answered here?
            <Link href="#" className="text-[#2d5a3d] hover:underline flex items-center gap-1">
              Contact Us <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
        
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-[#e0e0e0] rounded-lg overflow-hidden">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-[#f8f8f5] transition-colors"
              >
                <span className="font-medium">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-[#666] transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && (
                <div className="px-4 pb-4 text-[#666]">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
