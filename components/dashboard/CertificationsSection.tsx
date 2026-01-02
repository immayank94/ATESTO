"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ConfidenceIndicator } from "./ConfidenceIndicator";
import type { Certification } from "@/lib/types";
import { Plus, Trash2 } from "lucide-react";
import { generateId } from "@/lib/utils";

interface CertificationsSectionProps {
  certifications: Certification[];
  onChange: (certifications: Certification[]) => void;
  readOnly?: boolean;
}

const CERTIFICATION_TYPES = [
  "FSC",
  "ISO 9001",
  "ISO 14001",
  "REACH",
  "RoHS",
  "GOTS",
  "OEKO-TEX",
  "CE",
  "UL",
  "Other",
];

export function CertificationsSection({
  certifications,
  onChange,
  readOnly,
}: CertificationsSectionProps) {
  const addCertification = () => {
    onChange([
      ...certifications,
      {
        id: generateId(),
        type: "",
        certificate_number: null,
        issue_date: null,
        expiry_date: null,
        confidence: 100,
      },
    ]);
  };

  const updateCertification = (
    index: number,
    field: keyof Certification,
    value: string
  ) => {
    const updated = [...certifications];
    updated[index] = { ...updated[index], [field]: value || null };
    onChange(updated);
  };

  const removeCertification = (index: number) => {
    onChange(certifications.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label className="text-base font-semibold">Certifications</Label>
        {!readOnly && (
          <Button variant="outline" size="sm" onClick={addCertification}>
            <Plus className="mr-2 h-3 w-3" />
            Add Certification
          </Button>
        )}
      </div>

      {certifications.length === 0 ? (
        <p className="text-sm text-muted-foreground">No certifications found</p>
      ) : (
        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <div
              key={cert.id || index}
              className="grid gap-3 rounded-lg border bg-muted/30 p-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">
                  Certification {index + 1}
                </span>
                <div className="flex items-center gap-2">
                  <ConfidenceIndicator confidence={cert.confidence} />
                  {!readOnly && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-muted-foreground hover:text-destructive"
                      onClick={() => removeCertification(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-1">
                  <Label htmlFor={`cert-type-${index}`} className="text-xs">
                    Type
                  </Label>
                  {readOnly ? (
                    <Input value={cert.type} readOnly />
                  ) : (
                    <Select
                      value={cert.type}
                      onValueChange={(value) =>
                        updateCertification(index, "type", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        {CERTIFICATION_TYPES.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                </div>
                <div className="space-y-1">
                  <Label htmlFor={`cert-number-${index}`} className="text-xs">
                    Certificate Number
                  </Label>
                  <Input
                    id={`cert-number-${index}`}
                    value={cert.certificate_number || ""}
                    onChange={(e) =>
                      updateCertification(
                        index,
                        "certificate_number",
                        e.target.value
                      )
                    }
                    placeholder="Certificate #"
                    readOnly={readOnly}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor={`cert-issue-${index}`} className="text-xs">
                    Issue Date
                  </Label>
                  <Input
                    id={`cert-issue-${index}`}
                    type={readOnly ? "text" : "date"}
                    value={cert.issue_date || ""}
                    onChange={(e) =>
                      updateCertification(index, "issue_date", e.target.value)
                    }
                    readOnly={readOnly}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor={`cert-expiry-${index}`} className="text-xs">
                    Expiry Date
                  </Label>
                  <Input
                    id={`cert-expiry-${index}`}
                    type={readOnly ? "text" : "date"}
                    value={cert.expiry_date || ""}
                    onChange={(e) =>
                      updateCertification(index, "expiry_date", e.target.value)
                    }
                    readOnly={readOnly}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
