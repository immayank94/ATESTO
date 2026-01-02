"use client";

import {
  FileText,
  Shield,
  Zap,
  Download,
  Eye,
  Building2,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Smart Document Recognition",
    description:
      "Automatically identifies certificates, safety data sheets, material declarations, and spec sheets.",
  },
  {
    icon: Shield,
    title: "Compliance Data Extraction",
    description:
      "Extracts REACH, RoHS, materials composition, certifications (FSC, ISO, GOTS), and hazardous substance declarations.",
  },
  {
    icon: Eye,
    title: "Confidence Scoring",
    description:
      "Each extracted field shows a confidence score so you know what needs review vs. what's accurate.",
  },
  {
    icon: Zap,
    title: "Seconds, Not Hours",
    description:
      "Process a document in 10-30 seconds. What took 20 minutes of copy-pasting now takes seconds.",
  },
  {
    icon: Download,
    title: "Export Anywhere",
    description:
      "Export extracted data as JSON or CSV. Import directly into your compliance management system.",
  },
  {
    icon: Building2,
    title: "Supplier Database",
    description:
      "Build a searchable database of supplier compliance data. Find documents by supplier, material, or certificate type.",
  },
];

const useCases = [
  {
    title: "ESPR Compliance",
    description:
      "Prepare Digital Product Passports by extracting material origins, recyclability data, and sustainability certifications from supplier documents.",
  },
  {
    title: "REACH & RoHS",
    description:
      "Extract substance declarations, exemptions, and compliance confirmations from supplier communications and certificates.",
  },
  {
    title: "Supplier Audits",
    description:
      "Quickly compile supplier compliance data before audits. Export structured data for audit documentation.",
  },
  {
    title: "Supplier Onboarding",
    description:
      "Accelerate new supplier qualification by automatically extracting and organizing compliance documentation.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Features Grid */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Built for compliance teams
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Everything you need to extract, organize, and export supplier
            compliance data.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Use Cases */}
        <div id="use-cases" className="mt-32">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Use cases
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              How compliance teams use ATESTO to save time and reduce errors.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="rounded-lg border bg-card p-8"
              >
                <h3 className="text-xl font-semibold">{useCase.title}</h3>
                <p className="mt-4 text-muted-foreground">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
