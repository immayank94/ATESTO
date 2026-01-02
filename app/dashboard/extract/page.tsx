"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FileUpload } from "@/components/dashboard/FileUpload";
import { DocumentViewer } from "@/components/dashboard/DocumentViewer";
import { ExtractedDataForm } from "@/components/dashboard/ExtractedDataForm";
import { LoadingSpinner } from "@/components/shared/LoadingSpinner";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useExtraction } from "@/hooks/useExtraction";
import { useToast } from "@/hooks/use-toast";
import type { ExtractedData } from "@/lib/types";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const emptyExtractedData: ExtractedData = {
  document_type: "other",
  supplier: {
    company_name: null,
    country: null,
    contact_email: null,
  },
  materials: [],
  certifications: [],
  hazardous_materials: [],
  compliance_flags: {
    reach_compliant: "unknown",
    rohs_compliant: "unknown",
  },
  overall_confidence: 0,
  notes: "",
  custom_fields: [],
};

export default function ExtractPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [extractedData, setExtractedData] =
    useState<ExtractedData>(emptyExtractedData);
  const [isExtracting, setIsExtracting] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [hasExtracted, setHasExtracted] = useState(false);

  const { company } = useAuth();
  const { extractFromFile, saveExtraction } = useExtraction();
  const { toast } = useToast();
  const router = useRouter();

  const handleFileSelect = async (file: File) => {
    setSelectedFile(file);
    setIsExtracting(true);
    setHasExtracted(false);

    try {
      const data = await extractFromFile(file);
      if (data) {
        setExtractedData(data);
        setHasExtracted(true);
        toast({
          title: "Extraction complete",
          description: `Extracted data with ${data.overall_confidence}% confidence`,
          variant: "success",
        });
      } else {
        toast({
          title: "Extraction failed",
          description: "Could not extract data from the document",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Extraction failed",
        description:
          error instanceof Error ? error.message : "An error occurred",
        variant: "destructive",
      });
    } finally {
      setIsExtracting(false);
    }
  };

  const handleClear = () => {
    setSelectedFile(null);
    setExtractedData(emptyExtractedData);
    setHasExtracted(false);
  };

  const handleSave = async () => {
    if (!company?.id || !selectedFile) {
      toast({
        title: "Cannot save",
        description: "Missing company or file information",
        variant: "destructive",
      });
      return;
    }

    setIsSaving(true);

    try {
      const result = await saveExtraction(
        company.id,
        selectedFile.name,
        selectedFile,
        extractedData
      );

      if (result) {
        toast({
          title: "Saved successfully",
          description: "Your extraction has been saved",
          variant: "success",
        });
        router.push(`/dashboard/extraction/${result.id}`);
      } else {
        toast({
          title: "Save failed",
          description: "Could not save the extraction",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Save failed",
        description:
          error instanceof Error ? error.message : "An error occurred",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/dashboard">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">New Extraction</h1>
          <p className="text-muted-foreground">
            Upload a document to extract compliance data
          </p>
        </div>
      </div>

      {/* Upload Section */}
      {!hasExtracted && (
        <FileUpload
          onFileSelect={handleFileSelect}
          selectedFile={selectedFile}
          onClear={handleClear}
          disabled={isExtracting}
        />
      )}

      {/* Processing State */}
      {isExtracting && (
        <div className="flex flex-col items-center justify-center py-20">
          <LoadingSpinner size="lg" />
          <p className="mt-4 text-lg font-medium">Extracting data...</p>
          <p className="text-sm text-muted-foreground">
            This may take a few seconds
          </p>
        </div>
      )}

      {/* Results - Split Screen */}
      {hasExtracted && !isExtracting && (
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Document Viewer */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            <DocumentViewer file={selectedFile || undefined} className="h-[600px]" />
          </div>

          {/* Extracted Data Form */}
          <div>
            <ExtractedDataForm
              data={extractedData}
              onChange={setExtractedData}
              onSave={handleSave}
              onReset={handleClear}
              isSaving={isSaving}
              fileName={selectedFile?.name.replace(/\.[^/.]+$/, "") || "extraction"}
            />
          </div>
        </div>
      )}
    </div>
  );
}
