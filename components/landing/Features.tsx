"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { 
  Eye, 
  Cpu, 
  Zap, 
  RefreshCw, 
  BarChart3, 
  Building2, 
  Search, 
  Lock,
  FileText,
  CheckCircle,
  TrendingUp,
  Shield
} from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight?: string;
}

function BentoCard({ 
  feature, 
  variant = "default",
  className = "",
  index = 0,
  isInView = false
}: { 
  feature: Feature;
  variant?: "default" | "large" | "highlight";
  className?: string;
  index?: number;
  isInView?: boolean;
}) {
  const Icon = feature.icon;
  
  const baseClasses = "card-premium p-6 group";
  const variantClasses: Record<string, string> = {
    default: "",
    large: "lg:row-span-2",
    highlight: "card-highlight",
  };
  
  return (
    <div 
      className={`${baseClasses} ${variantClasses[variant]} ${className} ${
        isInView ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${200 + index * 100}ms` }}
    >
      <div className="relative z-10">
        {feature.highlight && (
          <span className="badge-primary text-xs mb-4">{feature.highlight}</span>
        )}
        
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 mb-5 group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        
        <h3 className="text-lg font-semibold font-display text-foreground mb-3">
          {feature.title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>
      
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-radial from-primary/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}

function LiveDemoCard({ isInView, index }: { isInView: boolean; index: number }) {
  return (
    <div 
      className={`card-premium p-6 overflow-hidden ${
        isInView ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${200 + index * 100}ms` }}
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="badge-copper text-xs">
          <Zap className="w-3 h-3" />
          Live Demo
        </span>
      </div>
      
      <div className="rounded-xl bg-secondary/50 border border-border/30 p-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <FileText className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium">Certificate_GOTS.pdf</p>
            <p className="text-xs text-muted-foreground">Processing...</p>
          </div>
        </div>
        
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-muted-foreground">Parsing document</span>
              <span className="text-primary font-medium flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> Complete
              </span>
            </div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <div className="h-full w-full bg-primary rounded-full" />
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-muted-foreground">Extracting fields</span>
              <span className="text-primary font-medium">14 found</span>
            </div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <div className="h-full w-4/5 bg-primary rounded-full animate-pulse" />
            </div>
          </div>
        </div>
        
        <div className="mt-4 p-3 rounded-lg bg-card border border-border/50">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <span className="text-muted-foreground">Supplier</span>
              <p className="font-medium truncate">EcoTextiles GmbH</p>
            </div>
            <div>
              <span className="text-muted-foreground">Certificate</span>
              <p className="font-medium text-primary">GOTS-2024-78456</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AccuracyChartCard({ isInView, index }: { isInView: boolean; index: number }) {
  return (
    <div 
      className={`card-premium p-6 ${
        isInView ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${200 + index * 100}ms` }}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold font-display">Accuracy Over Time</h3>
          <p className="text-xs text-muted-foreground">Self-improving AI models</p>
        </div>
        <div className="flex items-center gap-1 text-primary">
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm font-semibold">+12%</span>
        </div>
      </div>
      
      <div className="h-32 flex items-end gap-2">
        {[65, 72, 78, 82, 88, 93, 96, 98].map((value, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div 
              className="w-full bg-primary/20 rounded-t-sm relative overflow-hidden"
              style={{ height: `${value}%` }}
            >
              <div 
                className="absolute inset-x-0 bottom-0 bg-primary rounded-t-sm transition-all duration-1000"
                style={{ 
                  height: isInView ? '100%' : '0%',
                  transitionDelay: `${500 + i * 100}ms`
                }}
              />
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-between mt-2 text-xs text-muted-foreground">
        <span>Week 1</span>
        <span>Week 8</span>
      </div>
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
        "Our agents learn from your documents, run experiments, and automatically optimize your extraction schemas for maximum accuracy.",
      highlight: "AI-Powered",
    },
    {
      icon: Zap,
      title: "Flexible API Toolkit",
      description:
        "ATESTO's suite of APIs enables you to build incredible products with document parsing, classification, extraction, and splitting capabilities.",
    },
    {
      icon: RefreshCw,
      title: "Continuous learning",
      description:
        "Models improve in-session by learning from each document to boost accuracy on similar ones. Every correction makes us better.",
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
    <section id="features" ref={ref} className="section-padding bg-section-gradient">
      <div className="container-custom">
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <h2 className="font-serif text-display-sm lg:text-display tracking-tight mb-4">
            All-in-one{' '}
            <span className="text-gradient-primary">document processing</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Enterprise-grade extraction with everything you need to create,
            evaluate, and optimize your most complex use cases.
          </p>
        </div>

        <div className="bento-grid">
          <BentoCard
            feature={mainFeatures[0]}
            variant="large"
            index={0}
            isInView={isInView}
          />
          <BentoCard
            feature={mainFeatures[1]}
            variant="highlight"
            index={1}
            isInView={isInView}
          />
          <LiveDemoCard isInView={isInView} index={2} />

          <BentoCard
            feature={mainFeatures[2]}
            index={3}
            isInView={isInView}
          />
          <AccuracyChartCard isInView={isInView} index={4} />
          <BentoCard
            feature={mainFeatures[4]}
            index={5}
            isInView={isInView}
          />
        </div>

        <div
          className={`mt-20 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-copper/5 p-10 lg:p-14 ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '600ms' }}
        >
          <div className="text-center mb-12">
            <span className="badge-primary mb-4">
              <Shield className="w-3.5 h-3.5" />
              Enterprise Features
            </span>
            <h3 className="font-serif text-2xl lg:text-3xl font-semibold mt-4">
              Built for scale and security
            </h3>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Everything you need to deploy document processing at enterprise scale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {enterpriseFeatures.map((feature, index) => {
              const IconComp = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={`text-center group ${
                    isInView ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${700 + index * 100}ms` }}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mx-auto mb-5 group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
                    <IconComp className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-display font-semibold text-foreground mb-2">
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
