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
  Cpu,
  BarChart3,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight?: string;
}

// Bento Card Component with different styles
function BentoCard({
  feature,
  variant = "default",
  className = "",
  index = 0,
  isInView = false,
}: {
  feature: Feature;
  variant?: "default" | "large" | "highlight" | "dark";
  className?: string;
  index?: number;
  isInView?: boolean;
}) {
  const IconComponent = feature.icon;

  const baseClasses =
    "group relative rounded-2xl border transition-all duration-500 overflow-hidden card-shine";
  const variantClasses = {
    default:
      "p-6 bg-white border-border/50 hover:border-primary/30 hover:shadow-medium",
    large:
      "p-8 bg-white border-border/50 hover:border-primary/30 hover:shadow-large",
    highlight:
      "p-8 bg-gradient-to-br from-primary/5 via-white to-white border-primary/20 hover:border-primary/40 hover:shadow-glow",
    dark:
      "p-8 bg-foreground text-background border-foreground hover:shadow-elevated",
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className} ${
        isInView ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Icon */}
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-xl mb-5 transition-all duration-300 ${
          variant === "dark"
            ? "bg-background/10 group-hover:bg-background/20"
            : "bg-primary/10 group-hover:bg-primary/15 group-hover:scale-110"
        }`}
      >
        <IconComponent
          className={`h-6 w-6 ${
            variant === "dark" ? "text-background" : "text-primary"
          }`}
        />
      </div>

      {/* Content */}
      <h3
        className={`text-lg font-semibold mb-2 font-display ${
          variant === "dark" ? "text-background" : "text-foreground"
        }`}
      >
        {feature.title}
      </h3>
      <p
        className={`text-sm leading-relaxed ${
          variant === "dark" ? "text-background/70" : "text-muted-foreground"
        }`}
      >
        {feature.description}
      </p>

      {/* Highlight badge */}
      {feature.highlight && (
        <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-medium text-primary">
            {feature.highlight}
          </span>
        </div>
      )}

      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
  );
}

// Visual Demo Card for the bento grid
function VisualDemoCard({
  isInView,
  index,
}: {
  isInView: boolean;
  index: number;
}) {
  return (
    <div
      className={`group relative rounded-2xl border border-border/50 bg-gradient-to-br from-secondary/50 to-white p-6 overflow-hidden hover:shadow-large transition-all duration-500 ${
        isInView ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Mock interface */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <FileText className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium">Certificate_GOTS.pdf</p>
            <p className="text-xs text-muted-foreground">Processing...</p>
          </div>
        </div>

        {/* Progress bars */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-muted-foreground">Parsing document</span>
            <span className="text-primary font-medium">Complete</span>
          </div>
          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
            <div className="h-full w-full bg-primary rounded-full" />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-muted-foreground">Extracting fields</span>
            <span className="text-primary font-medium">12 found</span>
          </div>
          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
            <div className="h-full w-4/5 bg-primary rounded-full animate-pulse" />
          </div>
        </div>

        {/* Extracted data preview */}
        <div className="p-3 rounded-lg bg-white border border-border/50 mt-4">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <span className="text-muted-foreground">Supplier</span>
              <p className="font-medium">EcoTextiles GmbH</p>
            </div>
            <div>
              <span className="text-muted-foreground">Certificate</span>
              <p className="font-medium text-primary">GOTS-2024-78456</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating accent */}
      <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-colors" />
    </div>
  );
}

export function Features() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  const mainFeatures: Feature[] = [
    {
      icon: Eye,
      title: "State-of-the-art vision models",
      description:
        "Our vision models are built specifically for your most complex documents, handling everything from invoices to safety datasheets with incredible accuracy.",
    },
    {
      icon: Cpu,
      title: "Agents that optimize performance",
      description:
        "Our agents learn from your documents, run experiments, and automatically optimize your schemas to ensure the highest accuracy.",
      highlight: "AI-Powered",
    },
    {
      icon: Zap,
      title: "Flexible API Toolkit",
      description:
        "Extend's suite of APIs can enable you to build incredible products with document parsing, classification, extraction, and splitting capabilities.",
    },
    {
      icon: RefreshCw,
      title: "Continuous learning",
      description:
        "Models improve in-session by learning from each document to improve accuracy on similar ones. Every correction makes us better.",
    },
    {
      icon: BarChart3,
      title: "Build trust with evals",
      description:
        "Track your accuracy in real-time with our integrated evaluation suite so you can ship with confidence.",
    },
  ];

  const enterpriseFeatures: Feature[] = [
    {
      icon: Building2,
      title: "Supplier Database",
      description:
        "Build a searchable database of all your supplier compliance data. Find any document instantly.",
    },
    {
      icon: Search,
      title: "Intelligent Search",
      description:
        "Search across all extracted data. Find certifications, materials, or suppliers in seconds.",
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description:
        "SOC 2 compliant infrastructure. Your data is encrypted at rest and in transit.",
    },
  ];

  return (
    <section id="features" ref={ref} className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            All-in-one{" "}
            <span className="text-gradient-primary">document processing</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Enterprise-grade extraction with everything you need to create,
            evaluate, and optimize your most complex use cases.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First row - 2 large + 1 visual */}
          <BentoCard
            feature={mainFeatures[0]}
            variant="large"
            className="lg:col-span-1"
            index={0}
            isInView={isInView}
          />
          <BentoCard
            feature={mainFeatures[1]}
            variant="highlight"
            className="lg:col-span-1"
            index={1}
            isInView={isInView}
          />
          <VisualDemoCard isInView={isInView} index={2} />

          {/* Second row - 3 regular */}
          <BentoCard
            feature={mainFeatures[2]}
            variant="default"
            index={3}
            isInView={isInView}
          />
          <BentoCard
            feature={mainFeatures[3]}
            variant="default"
            index={4}
            isInView={isInView}
          />
          <BentoCard
            feature={mainFeatures[4]}
            variant="default"
            index={5}
            isInView={isInView}
          />
        </div>

        {/* Enterprise features banner */}
        <div
          className={`mt-16 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-background p-8 lg:p-12 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "600ms" }}
        >
          <div className="text-center mb-10">
            <span className="badge-primary text-sm font-medium mb-4">
              Enterprise Features
            </span>
            <h3 className="text-2xl lg:text-3xl font-bold font-display mt-4">
              Built for scale and security
            </h3>
            <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
              Everything you need to deploy document processing at enterprise scale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {enterpriseFeatures.map((feature, index) => {
              const IconComp = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={`text-center group ${
                    isInView ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${700 + index * 100}ms` }}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <IconComp className="h-7 w-7 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2 font-display">
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
