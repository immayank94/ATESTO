"use client";

import {
  FileText,
  Shield,
  Zap,
  Download,
  Eye,
  Building2,
  Search,
  Lock,
  type LucideIcon,
} from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: FileText,
    title: "Smart Document Recognition",
    description:
      "Automatically identifies certificates, safety data sheets, material declarations, and spec sheets from any format.",
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
    title: "Lightning Fast",
    description:
      "Process a document in 10-30 seconds. What took 20 minutes of copy-pasting now takes seconds.",
  },
  {
    icon: Download,
    title: "Flexible Export",
    description:
      "Export extracted data as JSON or CSV. Import directly into your compliance management system or ERP.",
  },
];

const advancedFeatures: Feature[] = [
  {
    icon: Building2,
    title: "Supplier Database",
    description:
      "Build a searchable database of supplier compliance data. Find documents by supplier, material, or certificate type.",
  },
  {
    icon: Search,
    title: "Intelligent Search",
    description:
      "Search across all your extracted data. Find any certification, material, or supplier in seconds.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description:
      "SOC 2 compliant infrastructure. Your data is encrypted at rest and in transit. GDPR ready.",
  },
];

function FeatureCard({ feature, large = false }: { feature: Feature; large?: boolean }) {
  const IconComponent = feature.icon;

  return (
    <div className={`group relative ${large ? 'p-8' : 'p-6'} rounded-2xl border border-border/50 bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300`}>
      <div className={`flex ${large ? 'h-14 w-14' : 'h-12 w-12'} items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors ${large ? 'mb-6' : 'mb-4'}`}>
        <IconComponent className={`${large ? 'h-7 w-7' : 'h-6 w-6'} text-primary`} />
      </div>
      <h3 className={`${large ? 'text-xl' : 'text-lg'} font-semibold text-foreground ${large ? 'mb-3' : 'mb-2'}`}>
        {feature.title}
      </h3>
      <p className={`${large ? '' : 'text-sm'} text-muted-foreground leading-relaxed`}>
        {feature.description}
      </p>
    </div>
  );
}

export function Features() {
  const FirstIcon = features[0].icon;
  const SecondIcon = features[1].icon;

  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Everything you need for
            <span className="text-gradient-primary"> compliance extraction</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Purpose-built for compliance teams. Extract, organize, and export supplier
            compliance data with enterprise-grade accuracy.
          </p>
        </div>

        {/* Main features - 2 column layout with highlight */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Feature 1 - Large */}
          <div className="lg:col-span-2 group relative p-8 rounded-2xl border border-border/50 bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors mb-6">
              <FirstIcon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              {features[0].title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {features[0].description}
            </p>

            {/* Feature preview mockup */}
            <div className="mt-6 p-4 rounded-lg bg-secondary/30 border border-border/30">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-medium text-primary">Auto-detected</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground w-20">Type:</span>
                  <span className="text-xs font-medium px-2 py-0.5 rounded bg-primary/20 text-primary">GOTS Certificate</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground w-20">Format:</span>
                  <span className="text-xs font-medium">PDF Document</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 - Large */}
          <div className="lg:col-span-3 group relative p-8 rounded-2xl border border-border/50 bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors mb-6">
              <SecondIcon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              {features[1].title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {features[1].description}
            </p>

            {/* Compliance badges mockup */}
            <div className="flex flex-wrap gap-2">
              {["REACH", "RoHS", "GOTS", "FSC", "ISO 14001", "OEKO-TEX"].map((cert) => (
                <span
                  key={cert}
                  className="px-3 py-1.5 rounded-lg bg-secondary border border-border/50 text-xs font-medium"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Secondary features - 3 column grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.slice(2).map((feature) => {
            const IconComp = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative p-6 rounded-xl border border-border/50 bg-card/30 hover:bg-card/50 hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
                  <IconComp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Advanced features banner */}
        <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card to-card p-8 lg:p-12">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary mb-4">
              Enterprise Features
            </span>
            <h3 className="text-2xl font-bold">Built for scale and security</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {advancedFeatures.map((feature) => {
              const IconComp = feature.icon;
              return (
                <div key={feature.title} className="text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 mx-auto mb-4">
                    <IconComp className="h-7 w-7 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
