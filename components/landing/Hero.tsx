"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileCheck, Clock, Shield } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Stop copying data from supplier PDFs
          </h1>
          <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
            ATESTO extracts compliance data from certificates, spec sheets, and
            supplier documents in seconds. No more manual data entry.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/signup">
              <Button size="lg" className="w-full sm:w-auto">
                Try Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="#demo">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                See Demo
              </Button>
            </Link>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            10 documents free every month. No credit card required.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mx-auto mt-20 max-w-4xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <h3 className="mt-4 font-semibold">Upload</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Drop your PDF, certificate image, or spec sheet
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <span className="text-xl font-bold text-primary">2</span>
              </div>
              <h3 className="mt-4 font-semibold">Extract</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                AI extracts materials, certifications, and compliance data
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <span className="text-xl font-bold text-primary">3</span>
              </div>
              <h3 className="mt-4 font-semibold">Export</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Review, confirm, and export to JSON or CSV
              </p>
            </div>
          </div>
        </div>

        {/* Before/After Comparison */}
        <div className="mx-auto mt-20 max-w-4xl rounded-xl border bg-card p-8">
          <h3 className="text-center text-lg font-semibold">
            Time saved per month
          </h3>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border-2 border-red-200 bg-red-50 p-6">
              <div className="flex items-center gap-3">
                <Clock className="h-8 w-8 text-red-600" />
                <div>
                  <p className="text-sm text-red-700">Manual Process</p>
                  <p className="text-3xl font-bold text-red-800">20+ hours</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-red-700">
                Copy-pasting from PDFs, re-typing data, fixing errors
              </p>
            </div>
            <div className="rounded-lg border-2 border-green-200 bg-green-50 p-6">
              <div className="flex items-center gap-3">
                <FileCheck className="h-8 w-8 text-green-600" />
                <div>
                  <p className="text-sm text-green-700">With ATESTO</p>
                  <p className="text-3xl font-bold text-green-800">
                    20 minutes
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm text-green-700">
                Upload, review extracted data, export. Done.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
