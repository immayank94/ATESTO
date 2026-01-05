"use client";

import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { 
  Upload, 
  FileText, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Sparkles,
  Code,
  Download
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const sampleDocuments = [
  { name: "GOTS_Certificate.pdf", type: "Certificate" },
  { name: "Material_Declaration.pdf", type: "Declaration" },
  { name: "Safety_Data_Sheet.pdf", type: "SDS" },
];

const extractedFields = [
  { label: "Supplier", value: "EcoTextiles GmbH", confidence: 98 },
  { label: "Certificate", value: "GOTS-2024-78456", confidence: 99 },
  { label: "Valid Until", value: "2025-01-14", confidence: 95 },
  { label: "Materials", value: "Organic Cotton (65%)", confidence: 92 },
  { label: "REACH Compliant", value: "Yes", confidence: 97 },
];

export function LiveDemo() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });
  const [stage, setStage] = useState<"idle" | "uploading" | "processing" | "complete">("idle");
  const [selectedDoc, setSelectedDoc] = useState(0);
  const [progress, setProgress] = useState(0);
  const [visibleFields, setVisibleFields] = useState(0);

  useEffect(() => {
    if (stage === "uploading") {
      const timer = setTimeout(() => {
        setProgress(100);
        setStage("processing");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  useEffect(() => {
    if (stage === "processing") {
      const timer = setTimeout(() => {
        setStage("complete");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  useEffect(() => {
    if (stage === "complete" && visibleFields < extractedFields.length) {
      const timer = setTimeout(() => {
        setVisibleFields((prev) => prev + 1);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [stage, visibleFields]);

  const handleStartDemo = () => {
    setStage("uploading");
    setProgress(0);
    setVisibleFields(0);
    
    // Animate progress
    let p = 0;
    const interval = setInterval(() => {
      p += 10;
      setProgress(Math.min(p, 90));
      if (p >= 90) clearInterval(interval);
    }, 100);
  };

  const handleReset = () => {
    setStage("idle");
    setProgress(0);
    setVisibleFields(0);
  };

  return (
    <section id="demo" ref={ref} className="section-padding bg-secondary/20">
      <div className="container-custom">
        <div
          className={`text-center max-w-3xl mx-auto mb-16 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <span className="badge-copper mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Demo
          </span>
          <h2 className="font-serif text-display-sm lg:text-display tracking-tight mt-4">
            See ATESTO in{" "}
            <span className="text-gradient-primary">action</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Watch how we transform complex compliance documents into structured data in seconds.
          </p>
        </div>

        <div
          className={`max-w-5xl mx-auto ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "200ms" }}
        >
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Panel */}
            <div className="card-premium p-6 lg:p-8">
              <div className="flex items-center gap-2 mb-6">
                <Upload className="w-5 h-5 text-primary" />
                <h3 className="font-display font-semibold">Upload Document</h3>
              </div>

              {/* Document selector */}
              <div className="space-y-3 mb-6">
                {sampleDocuments.map((doc, index) => (
                  <button
                    key={doc.name}
                    onClick={() => setSelectedDoc(index)}
                    className={`w-full flex items-center gap-3 p-4 rounded-xl border transition-all ${
                      selectedDoc === index
                        ? "border-primary bg-primary/5"
                        : "border-border/50 hover:border-primary/30"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      selectedDoc === index ? "bg-primary/15" : "bg-muted"
                    }`}>
                      <FileText className={`w-5 h-5 ${
                        selectedDoc === index ? "text-primary" : "text-muted-foreground"
                      }`} />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-medium">{doc.name}</p>
                      <p className="text-xs text-muted-foreground">{doc.type}</p>
                    </div>
                    {selectedDoc === index && (
                      <CheckCircle className="w-5 h-5 text-primary ml-auto" />
                    )}
                  </button>
                ))}
              </div>

              {/* Process button */}
              {stage === "idle" && (
                <Button
                  onClick={handleStartDemo}
                  className="w-full btn-premium h-12 group"
                >
                  <Zap className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  Extract Data
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              )}

              {/* Progress */}
              {(stage === "uploading" || stage === "processing") && (
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {stage === "uploading" ? "Uploading..." : "Extracting data..."}
                    </span>
                    <span className="text-primary font-medium">{progress}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              )}

              {stage === "complete" && (
                <Button
                  onClick={handleReset}
                  variant="outline"
                  className="w-full h-12"
                >
                  Try Another Document
                </Button>
              )}
            </div>

            {/* Output Panel */}
            <div className="card-premium p-6 lg:p-8 bg-gradient-to-br from-card to-secondary/30">
              <div className="flex items-center gap-2 mb-6">
                <Code className="w-5 h-5 text-primary" />
                <h3 className="font-display font-semibold">Extracted Data</h3>
                {stage === "complete" && (
                  <span className="ml-auto badge-primary text-xs">
                    <CheckCircle className="w-3 h-3" />
                    Complete
                  </span>
                )}
              </div>

              {stage === "idle" && (
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  <p className="text-sm">Select a document and click Extract Data</p>
                </div>
              )}

              {(stage === "uploading" || stage === "processing") && (
                <div className="h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground">
                      {stage === "uploading" ? "Reading document..." : "AI extraction in progress..."}
                    </p>
                  </div>
                </div>
              )}

              {stage === "complete" && (
                <div className="space-y-3">
                  {extractedFields.map((field, index) => (
                    <div
                      key={field.label}
                      className={`flex items-center justify-between p-3 rounded-lg bg-card border border-border/50 transition-all duration-300 ${
                        index < visibleFields
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-2"
                      }`}
                    >
                      <div>
                        <p className="text-xs text-muted-foreground">{field.label}</p>
                        <p className="text-sm font-medium">{field.value}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full"
                            style={{ width: `${field.confidence}%` }}
                          />
                        </div>
                        <span className="text-xs text-primary font-medium w-8">
                          {field.confidence}%
                        </span>
                      </div>
                    </div>
                  ))}

                  {visibleFields >= extractedFields.length && (
                    <div className="flex gap-2 mt-4 pt-4 border-t border-border/50">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Download className="w-4 h-4 mr-2" />
                        Export JSON
                      </Button>
                      <Link href="/signup" className="flex-1">
                        <Button size="sm" className="w-full btn-premium">
                          Start Free
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
