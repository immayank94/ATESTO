"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OverallConfidenceScore } from "./ConfidenceIndicator";
import { MaterialsSection } from "./MaterialsSection";
import { CertificationsSection } from "./CertificationsSection";
import { HazardousMaterialsSection } from "./HazardousMaterialsSection";
import { CustomFieldsSection } from "./CustomFieldsSection";
import { LoadingSpinner } from "@/components/shared/LoadingSpinner";
import { exportToJson, exportToCsv } from "@/lib/utils";
import type { ExtractedData, DocumentType, ComplianceStatus } from "@/lib/types";
import {
  Save,
  Download,
  FileJson,
  FileSpreadsheet,
  RotateCcw,
} from "lucide-react";

interface ExtractedDataFormProps {
  data: ExtractedData;
  onChange: (data: ExtractedData) => void;
  onSave?: () => Promise<void>;
  onReset?: () => void;
  isSaving?: boolean;
  fileName?: string;
  readOnly?: boolean;
}

const DOCUMENT_TYPES: { value: DocumentType; label: string }[] = [
  { value: "certificate", label: "Certificate" },
  { value: "material_declaration", label: "Material Declaration" },
  { value: "safety_data_sheet", label: "Safety Data Sheet" },
  { value: "spec_sheet", label: "Spec Sheet" },
  { value: "invoice", label: "Invoice" },
  { value: "other", label: "Other" },
];

const COMPLIANCE_OPTIONS: { value: ComplianceStatus; label: string }[] = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
  { value: "unknown", label: "Unknown" },
];

export function ExtractedDataForm({
  data,
  onChange,
  onSave,
  onReset,
  isSaving,
  fileName = "extraction",
  readOnly,
}: ExtractedDataFormProps) {
  const updateField = <K extends keyof ExtractedData>(
    field: K,
    value: ExtractedData[K]
  ) => {
    onChange({ ...data, [field]: value });
  };

  const updateSupplier = (
    field: keyof ExtractedData["supplier"],
    value: string
  ) => {
    onChange({
      ...data,
      supplier: { ...data.supplier, [field]: value || null },
    });
  };

  const updateComplianceFlag = (
    field: keyof ExtractedData["compliance_flags"],
    value: ComplianceStatus
  ) => {
    onChange({
      ...data,
      compliance_flags: { ...data.compliance_flags, [field]: value },
    });
  };

  const handleExportJson = () => {
    exportToJson(data, fileName);
  };

  const handleExportCsv = () => {
    exportToCsv(data as unknown as Record<string, unknown>, fileName);
  };

  return (
    <div className="space-y-6">
      {/* Header with confidence score */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-lg font-semibold">Extracted Data</h2>
          <p className="text-sm text-muted-foreground">
            Review and edit the extracted information
          </p>
        </div>
        <OverallConfidenceScore confidence={data.overall_confidence} />
      </div>

      {/* Document Type */}
      <div className="space-y-2">
        <Label htmlFor="document-type">Document Type</Label>
        {readOnly ? (
          <Input
            value={
              DOCUMENT_TYPES.find((t) => t.value === data.document_type)
                ?.label || data.document_type
            }
            readOnly
          />
        ) : (
          <Select
            value={data.document_type}
            onValueChange={(value) =>
              updateField("document_type", value as DocumentType)
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select document type" />
            </SelectTrigger>
            <SelectContent>
              {DOCUMENT_TYPES.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </div>

      <Separator />

      {/* Supplier Information */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Supplier Information</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="supplier-name">Company Name</Label>
            <Input
              id="supplier-name"
              value={data.supplier.company_name || ""}
              onChange={(e) => updateSupplier("company_name", e.target.value)}
              placeholder="Company name"
              readOnly={readOnly}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="supplier-country">Country</Label>
            <Input
              id="supplier-country"
              value={data.supplier.country || ""}
              onChange={(e) => updateSupplier("country", e.target.value)}
              placeholder="Country"
              readOnly={readOnly}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="supplier-email">Contact Email</Label>
            <Input
              id="supplier-email"
              type="email"
              value={data.supplier.contact_email || ""}
              onChange={(e) => updateSupplier("contact_email", e.target.value)}
              placeholder="email@company.com"
              readOnly={readOnly}
            />
          </div>
        </CardContent>
      </Card>

      {/* Materials */}
      <Card>
        <CardContent className="pt-6">
          <MaterialsSection
            materials={data.materials}
            onChange={(materials) => updateField("materials", materials)}
            readOnly={readOnly}
          />
        </CardContent>
      </Card>

      {/* Certifications */}
      <Card>
        <CardContent className="pt-6">
          <CertificationsSection
            certifications={data.certifications}
            onChange={(certifications) =>
              updateField("certifications", certifications)
            }
            readOnly={readOnly}
          />
        </CardContent>
      </Card>

      {/* Hazardous Materials */}
      <Card>
        <CardContent className="pt-6">
          <HazardousMaterialsSection
            hazardousMaterials={data.hazardous_materials}
            onChange={(hazardousMaterials) =>
              updateField("hazardous_materials", hazardousMaterials)
            }
            readOnly={readOnly}
          />
        </CardContent>
      </Card>

      {/* Compliance Flags */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Compliance Status</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="reach-compliant">REACH Compliant</Label>
            {readOnly ? (
              <Input
                value={
                  data.compliance_flags.reach_compliant === "yes"
                    ? "Yes"
                    : data.compliance_flags.reach_compliant === "no"
                    ? "No"
                    : "Unknown"
                }
                readOnly
              />
            ) : (
              <Select
                value={data.compliance_flags.reach_compliant}
                onValueChange={(value) =>
                  updateComplianceFlag(
                    "reach_compliant",
                    value as ComplianceStatus
                  )
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {COMPLIANCE_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="rohs-compliant">RoHS Compliant</Label>
            {readOnly ? (
              <Input
                value={
                  data.compliance_flags.rohs_compliant === "yes"
                    ? "Yes"
                    : data.compliance_flags.rohs_compliant === "no"
                    ? "No"
                    : "Unknown"
                }
                readOnly
              />
            ) : (
              <Select
                value={data.compliance_flags.rohs_compliant}
                onValueChange={(value) =>
                  updateComplianceFlag(
                    "rohs_compliant",
                    value as ComplianceStatus
                  )
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {COMPLIANCE_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Notes */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Notes</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            value={data.notes}
            onChange={(e) => updateField("notes", e.target.value)}
            placeholder="AI notes and any additional comments..."
            className="min-h-[100px]"
            readOnly={readOnly}
          />
        </CardContent>
      </Card>

      {/* Custom Fields */}
      <Card>
        <CardContent className="pt-6">
          <CustomFieldsSection
            customFields={data.custom_fields || []}
            onChange={(customFields) =>
              updateField("custom_fields", customFields)
            }
            readOnly={readOnly}
          />
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-3">
        {onSave && !readOnly && (
          <Button onClick={onSave} disabled={isSaving}>
            {isSaving ? (
              <LoadingSpinner size="sm" />
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Confirm & Save
              </>
            )}
          </Button>
        )}

        <Button variant="outline" onClick={handleExportJson}>
          <FileJson className="mr-2 h-4 w-4" />
          Export JSON
        </Button>

        <Button variant="outline" onClick={handleExportCsv}>
          <FileSpreadsheet className="mr-2 h-4 w-4" />
          Export CSV
        </Button>

        {onReset && !readOnly && (
          <Button variant="ghost" onClick={onReset}>
            <RotateCcw className="mr-2 h-4 w-4" />
            New Extraction
          </Button>
        )}
      </div>
    </div>
  );
}
