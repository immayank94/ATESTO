"use client";
import { ArrowRight, FileText, Settings, BarChart3, Brain } from "lucide-react";
import Link from "next/link";

const features = [
  { tag: "IN-LINE EXTRACTION", icon: FileText, title: "Get structured data from any document", desc: "Materials, certifications, hazardous substances, and compliance flags extracted automatically." },
  { tag: "CUSTOM FIELDS", icon: Settings, title: "Define your compliance requirements", desc: "Tell ATESTO what data you need. It will extract and validate against your standards." },
  { tag: "CONFIDENCE SCORES", icon: BarChart3, title: "Know what needs review", desc: "Each field shows confidence levels so you know exactly what to verify." },
  { tag: "CONTINUOUS LEARNING", icon: Brain, title: "ATESTO learns from your corrections", desc: "The more you use it, the better it gets at understanding your documents." },
];

export function FeatureSection() {
  return (
    <section className="section-spacing section-g" id="features" >
      <div className="container-g">
        <div className="max-w-2xl mb-16">
          <span className="section-label">[ SHIP FASTER ]</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight">Your second pair of eyes.</h2>
          <p className="mt-4 text-[#666] text-lg">
            ATESTO automatically extracts compliance data from supplier documents with full context understanding.
          </p>
          <Link href="#demo" className="btn-outline mt-6 inline-flex">
            See ATESTO in action <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {features.map((f, i) => (
            <div key={i} className="card-g">
              <span className="section-label">[{f.tag}]</span>
              <div className="flex items-start gap-6 md:gap-8">
                <div className="w-12 h-12 rounded-xl bg-[#e8f0e8] flex items-center justify-center flex-shrink-0">
                  <f.icon className="w-6 h-6 text-[#2d5a3d]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                  <p className="text-[#666] text-sm">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
