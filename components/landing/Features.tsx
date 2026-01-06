"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FileText, Zap, Shield, CheckCircle, ArrowRight, Sparkles, Target, Clock, Upload } from "lucide-react";
import { TiltCard } from "@/components/shared/TiltCard";

const features = [
  {
    tag: "CONTEXT-AWARE",
    title: "Get context-aware data extraction",
    description: "Intelligent extraction that understands document structure, relationships, and compliance requirements.",
    icon: Target,
    visual: "extraction",
  },
  {
    tag: "CUSTOM RULES",
    title: "Define your compliance standards in English",
    description: "Tell ATESTO about your requirements, and it will enforce them across all documents.",
    icon: FileText,
    visual: "rules",
  },
  {
    tag: "INSTANT REPORTS",
    title: "Generate compliance reports automatically",
    description: "Get detailed breakdowns, confidence scores, and audit trails for every document.",
    icon: Zap,
    visual: "reports",
  },
  {
    tag: "LEARNING",
    title: "ATESTO learns from your corrections",
    description: "The system improves over time by learning from your feedback and corrections.",
    icon: Sparkles,
    visual: "learning",
  },
];

function FeatureVisual({ type }: { type: string }) {
  return (
    <div className="relative h-48 bg-gradient-to-br from-secondary/50 to-secondary/30 rounded-xl overflow-hidden">
      {/* Simulated UI elements */}
      <div className="absolute inset-4">
        {type === "extraction" && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 p-2 bg-white/80 rounded-lg shadow-sm">
              <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center">
                <FileText className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1">
                <div className="h-2 w-24 bg-foreground/70 rounded" />
                <div className="h-1.5 w-16 bg-muted-foreground/40 rounded mt-1" />
              </div>
              <CheckCircle className="w-4 h-4 text-green-500" />
            </div>
            <div className="flex items-center gap-2 p-2 bg-white/80 rounded-lg shadow-sm">
              <div className="w-8 h-8 rounded bg-copper/20 flex items-center justify-center">
                <Shield className="w-4 h-4 text-copper" />
              </div>
              <div className="flex-1">
                <div className="h-2 w-20 bg-foreground/70 rounded" />
                <div className="h-1.5 w-12 bg-muted-foreground/40 rounded mt-1" />
              </div>
              <span className="text-xs text-primary font-medium">98%</span>
            </div>
            <div className="flex items-center gap-2 p-2 bg-white/60 rounded-lg shadow-sm opacity-70">
              <div className="w-8 h-8 rounded bg-muted/50" />
              <div className="flex-1">
                <div className="h-2 w-28 bg-muted rounded" />
              </div>
            </div>
          </div>
        )}
        {type === "rules" && (
          <div className="space-y-2">
            <div className="p-3 bg-white/80 rounded-lg shadow-sm">
              <div className="text-xs text-muted-foreground mb-2">Custom Rule:</div>
              <div className="text-sm font-mono text-foreground/80">
                All certificates must have<br />valid expiry dates within<br />12 months
              </div>
            </div>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">GOTS</span>
              <span className="px-2 py-1 bg-copper/10 text-copper text-xs rounded-full">ISO</span>
              <span className="px-2 py-1 bg-sage/20 text-sage text-xs rounded-full">REACH</span>
            </div>
          </div>
        )}
        {type === "reports" && (
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 bg-white/80 rounded-lg">
              <span className="text-xs font-medium">Compliance Score</span>
              <span className="text-lg font-bold text-primary">94%</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2 bg-green-50 rounded text-center">
                <div className="text-lg font-bold text-green-600">23</div>
                <div className="text-xs text-green-600/70">Pass</div>
              </div>
              <div className="p-2 bg-yellow-50 rounded text-center">
                <div className="text-lg font-bold text-yellow-600">3</div>
                <div className="text-xs text-yellow-600/70">Review</div>
              </div>
              <div className="p-2 bg-red-50 rounded text-center">
                <div className="text-lg font-bold text-red-600">1</div>
                <div className="text-xs text-red-600/70">Fail</div>
              </div>
            </div>
          </div>
        )}
        {type === "learning" && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-primary/20 animate-pulse" />
              <span className="text-xs text-muted-foreground">Learning from feedback...</span>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-primary rounded-full" />
                </div>
                <span className="text-xs">85%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[92%] bg-primary rounded-full" />
                </div>
                <span className="text-xs">92%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[78%] bg-primary rounded-full" />
                </div>
                <span className="text-xs">78%</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function Features() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="features" ref={ref} className="section-padding bg-background">
      <div className="container-custom">
        {/* Section header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-12 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="font-serif text-4xl lg:text-5xl tracking-tight">
            Your second pair of eyes.
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            ATESTO automatically processes documents with full context of your compliance requirements.
          </p>
        </div>

        {/* Horizontal scrolling feature cards like Greptile */}
        <div 
          className={`overflow-x-auto pb-4 -mx-4 px-4 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "200ms" }}
        >
          <div className="flex gap-6 min-w-max">
            {features.map((feature, index) => (
              <TiltCard key={feature.tag} tiltAmount={5} className="w-80 flex-shrink-0">
                <div 
                  className="h-full bg-card rounded-2xl border border-border/50 p-6 shadow-sm hover:shadow-md transition-shadow"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Tag */}
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-primary/8 text-primary text-xs font-medium rounded-full mb-4">
                    <feature.icon className="w-3 h-3" />
                    {feature.tag}
                  </span>
                  
                  {/* Visual */}
                  <FeatureVisual type={feature.visual} />
                  
                  {/* Content */}
                  <h3 className="font-semibold text-lg mt-4 mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
