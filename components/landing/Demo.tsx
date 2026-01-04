"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileText, ArrowRight, Sparkles, Check } from "lucide-react";

const mockExtractionResult = {
  document_type: "Certificate",
  supplier: {
    company_name: "EcoMaterials GmbH",
    country: "Germany",
  },
  materials: [
    { name: "Recycled Polyester", percentage: "65%", confidence: 95 },
    { name: "Organic Cotton", percentage: "30%", confidence: 88 },
    { name: "Elastane", percentage: "5%", confidence: 72 },
  ],
  certifications: [
    { type: "GOTS", number: "GOTS-2024-78456", confidence: 98 },
    { type: "OEKO-TEX", number: "OT-24-89012", confidence: 95 },
  ],
  overall_confidence: 85,
};

function ConfidenceBadge({ confidence }: { confidence: number }) {
  const color =
    confidence >= 90
      ? "bg-green-500/20 text-green-400 border-green-500/30"
      : confidence >= 70
      ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      : "bg-red-500/20 text-red-400 border-red-500/30";

  return (
    <span className={`px-2 py-0.5 rounded text-xs font-medium border ${color}`}>
      {confidence}%
    </span>
  );
}

export function Demo() {
  const [showResult, setShowResult] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleDemo = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setShowResult(true);
    }, 2000);
  };

  const handleReset = () => {
    setShowResult(false);
    setIsProcessing(false);
  };

  return (
    <section id="demo" className="py-24 lg:py-32 bg-gradient-to-b from-transparent via-secondary/10 to-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            Interactive Demo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            See extraction
            <span className="text-gradient-primary"> in action</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Watch how ATESTO extracts structured data from a supplier certificate in seconds.
          </p>
        </div>

        {/* Demo area */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Document Preview */}
          <div className="rounded-2xl border border-border/50 bg-card/50 overflow-hidden">
            <div className="flex items-center gap-3 px-6 py-4 border-b border-border/50 bg-secondary/30">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <FileText className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Sample Certificate</h3>
                <p className="text-xs text-muted-foreground">Supplier compliance document</p>
              </div>
            </div>

            <div className="p-6">
              {/* Document mockup */}
              <div className="rounded-xl border border-border/30 bg-secondary/20 p-6">
                <div className="space-y-4 text-sm">
                  <div className="border-b border-border/30 pb-4">
                    <p className="text-lg font-bold text-foreground">CERTIFICATE OF COMPLIANCE</p>
                    <p className="text-muted-foreground mt-1">
                      EcoMaterials GmbH - Germany
                    </p>
                  </div>

                  <div className={`transition-all duration-500 ${isProcessing ? "animate-pulse" : ""}`}>
                    <p className="font-medium text-foreground mb-2">Material Composition:</p>
                    <div className={`space-y-1 ${showResult ? "text-primary" : "text-muted-foreground"}`}>
                      <p className={showResult ? "bg-primary/10 px-2 py-1 rounded -mx-2" : ""}>
                        65% Recycled Polyester
                      </p>
                      <p className={showResult ? "bg-primary/10 px-2 py-1 rounded -mx-2" : ""}>
                        30% Organic Cotton
                      </p>
                      <p className={showResult ? "bg-primary/10 px-2 py-1 rounded -mx-2" : ""}>
                        5% Elastane
                      </p>
                    </div>
                  </div>

                  <div className={`transition-all duration-500 ${isProcessing ? "animate-pulse" : ""}`}>
                    <p className="font-medium text-foreground mb-2">Certifications:</p>
                    <div className={`space-y-1 ${showResult ? "text-primary" : "text-muted-foreground"}`}>
                      <p className={showResult ? "bg-primary/10 px-2 py-1 rounded -mx-2" : ""}>
                        GOTS Certified: GOTS-2024-78456
                      </p>
                      <p className={showResult ? "bg-primary/10 px-2 py-1 rounded -mx-2" : ""}>
                        OEKO-TEX Standard 100: OT-24-89012
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action button */}
              <div className="mt-6 flex justify-center">
                {showResult ? (
                  <Button variant="outline" onClick={handleReset}>
                    Reset Demo
                  </Button>
                ) : (
                  <Button
                    onClick={handleDemo}
                    disabled={isProcessing}
                    className="glow-primary"
                  >
                    {isProcessing ? (
                      <>
                        <span className="h-4 w-4 mr-2 rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground animate-spin" />
                        Extracting...
                      </>
                    ) : (
                      <>
                        Extract Data
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Extraction Result */}
          <div
            className={`rounded-2xl border overflow-hidden transition-all duration-500 ${
              showResult
                ? "border-primary/50 bg-card shadow-glow"
                : "border-border/50 bg-card/30 opacity-60"
            }`}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-border/50 bg-secondary/30">
              <div className="flex items-center gap-3">
                <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                  showResult ? "bg-primary/20" : "bg-secondary"
                }`}>
                  {showResult ? (
                    <Check className="h-4 w-4 text-primary" />
                  ) : (
                    <span className="h-4 w-4 text-muted-foreground">?</span>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Extracted Data</h3>
                  <p className="text-xs text-muted-foreground">
                    {showResult ? "Ready for export" : "Waiting for extraction"}
                  </p>
                </div>
              </div>
              {showResult && (
                <span className="px-3 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-medium">
                  {mockExtractionResult.overall_confidence}% Confidence
                </span>
              )}
            </div>

            <div className="p-6">
              {showResult ? (
                <div className="space-y-5 animate-fade-in">
                  {/* Document Type */}
                  <div className="p-3 rounded-lg bg-secondary/30 border border-border/30">
                    <p className="text-xs text-muted-foreground mb-1">Document Type</p>
                    <p className="font-medium">{mockExtractionResult.document_type}</p>
                  </div>

                  {/* Supplier */}
                  <div className="p-3 rounded-lg bg-secondary/30 border border-border/30">
                    <p className="text-xs text-muted-foreground mb-1">Supplier</p>
                    <p className="font-medium">{mockExtractionResult.supplier.company_name}</p>
                    <p className="text-sm text-muted-foreground">{mockExtractionResult.supplier.country}</p>
                  </div>

                  {/* Materials */}
                  <div>
                    <p className="text-xs text-muted-foreground mb-2">Materials</p>
                    <div className="space-y-2">
                      {mockExtractionResult.materials.map((material) => (
                        <div
                          key={material.name}
                          className="flex items-center justify-between p-2 rounded-lg bg-secondary/20 border border-border/20"
                        >
                          <span className="text-sm">
                            {material.name} ({material.percentage})
                          </span>
                          <ConfidenceBadge confidence={material.confidence} />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Certifications */}
                  <div>
                    <p className="text-xs text-muted-foreground mb-2">Certifications</p>
                    <div className="space-y-2">
                      {mockExtractionResult.certifications.map((cert) => (
                        <div
                          key={cert.type}
                          className="flex items-center justify-between p-2 rounded-lg bg-secondary/20 border border-border/20"
                        >
                          <span className="text-sm">
                            {cert.type}: {cert.number}
                          </span>
                          <ConfidenceBadge confidence={cert.confidence} />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Export buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button size="sm" className="flex-1">
                      Export JSON
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      Export CSV
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-80 text-muted-foreground">
                  <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center mb-4">
                    <FileText className="h-8 w-8" />
                  </div>
                  <p className="text-sm">Click &ldquo;Extract Data&rdquo; to see results</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
