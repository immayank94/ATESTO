"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ConfidenceIndicator } from "@/components/dashboard/ConfidenceIndicator";
import { FileText, ArrowRight } from "lucide-react";

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

  return (
    <section id="demo" className="bg-secondary/30 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            See it in action
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Watch how ATESTO extracts structured data from a supplier
            certificate.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Document Preview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Sample Certificate
              </CardTitle>
              <CardDescription>
                A typical supplier certificate with material composition and
                certifications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border-2 border-dashed bg-muted/50 p-8 text-center">
                <div className="mx-auto max-w-sm space-y-4 text-left">
                  <div className="border-b pb-4">
                    <p className="font-bold">CERTIFICATE OF COMPLIANCE</p>
                    <p className="text-sm text-muted-foreground">
                      EcoMaterials GmbH - Germany
                    </p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Material Composition:</strong>
                    </p>
                    <p>65% Recycled Polyester, 30% Organic Cotton, 5% Elastane</p>
                    <p className="mt-4">
                      <strong>Certifications:</strong>
                    </p>
                    <p>GOTS Certified: GOTS-2024-78456</p>
                    <p>OEKO-TEX Standard 100: OT-24-89012</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Button
                  size="lg"
                  onClick={handleDemo}
                  disabled={isProcessing || showResult}
                >
                  {isProcessing ? (
                    <>Processing...</>
                  ) : showResult ? (
                    <>Extracted!</>
                  ) : (
                    <>
                      Extract Data
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Extraction Result */}
          <Card
            className={showResult ? "border-green-200" : "border-muted opacity-60"}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Extracted Data</CardTitle>
                {showResult && (
                  <Badge variant="success">
                    {mockExtractionResult.overall_confidence}% Confidence
                  </Badge>
                )}
              </div>
              <CardDescription>
                {showResult
                  ? "Structured data ready for export"
                  : "Click 'Extract Data' to see the result"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {showResult ? (
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Document Type
                    </p>
                    <p className="font-medium">
                      {mockExtractionResult.document_type}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Supplier
                    </p>
                    <p className="font-medium">
                      {mockExtractionResult.supplier.company_name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {mockExtractionResult.supplier.country}
                    </p>
                  </div>

                  <div>
                    <p className="mb-2 text-sm font-medium text-muted-foreground">
                      Materials
                    </p>
                    <div className="space-y-2">
                      {mockExtractionResult.materials.map((material) => (
                        <div
                          key={material.name}
                          className="flex items-center justify-between text-sm"
                        >
                          <span>
                            {material.name} ({material.percentage})
                          </span>
                          <ConfidenceIndicator
                            confidence={material.confidence}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="mb-2 text-sm font-medium text-muted-foreground">
                      Certifications
                    </p>
                    <div className="space-y-2">
                      {mockExtractionResult.certifications.map((cert) => (
                        <div
                          key={cert.type}
                          className="flex items-center justify-between text-sm"
                        >
                          <span>
                            {cert.type}: {cert.number}
                          </span>
                          <ConfidenceIndicator confidence={cert.confidence} />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button size="sm" variant="outline">
                      Export JSON
                    </Button>
                    <Button size="sm" variant="outline">
                      Export CSV
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex h-64 items-center justify-center text-muted-foreground">
                  <p>Waiting for extraction...</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
