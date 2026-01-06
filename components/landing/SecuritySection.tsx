"use client";
import { Shield, Server, ArrowRight } from "lucide-react";
import Link from "next/link";

export function SecuritySection() {
  return (
    <section id="security" className="section-g">
      <div className="container-g">
        <div className="max-w-2xl mb-12">
          <span className="section-label">[ SECURITY ]</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight">Security-First Design</h2>
          <Link href="#" className="btn-outline mt-6 inline-flex">
            View our security policy <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card-g flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#e8f0e8] flex items-center justify-center flex-shrink-0">
              <Server className="w-6 h-6 text-[#2d5a3d]" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Self-Hosted Option</h3>
              <p className="text-[#666] text-sm">Deploy ATESTO in your own environment. Your data never leaves your infrastructure.</p>
            </div>
          </div>
          <div className="card-g flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#e8f0e8] flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-[#2d5a3d]" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">SOC 2 Compliant</h3>
              <p className="text-[#666] text-sm">Enterprise-grade encryption and security controls. Annual third-party audits.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
