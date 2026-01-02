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
import type { HazardousMaterial, ComplianceStatus } from "@/lib/types";
import { Plus, Trash2 } from "lucide-react";
import { generateId } from "@/lib/utils";

interface HazardousMaterialsSectionProps {
  hazardousMaterials: HazardousMaterial[];
  onChange: (hazardousMaterials: HazardousMaterial[]) => void;
  readOnly?: boolean;
}

export function HazardousMaterialsSection({
  hazardousMaterials,
  onChange,
  readOnly,
}: HazardousMaterialsSectionProps) {
  const addHazardousMaterial = () => {
    onChange([
      ...hazardousMaterials,
      {
        id: generateId(),
        substance: "",
        threshold: null,
        present: "unknown",
        amount: null,
        confidence: 100,
      },
    ]);
  };

  const updateHazardousMaterial = (
    index: number,
    field: keyof HazardousMaterial,
    value: string
  ) => {
    const updated = [...hazardousMaterials];
    if (field === "present") {
      updated[index] = {
        ...updated[index],
        [field]: value as ComplianceStatus,
      };
    } else {
      updated[index] = { ...updated[index], [field]: value || null };
    }
    onChange(updated);
  };

  const removeHazardousMaterial = (index: number) => {
    onChange(hazardousMaterials.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label className="text-base font-semibold">Hazardous Materials</Label>
        {!readOnly && (
          <Button variant="outline" size="sm" onClick={addHazardousMaterial}>
            <Plus className="mr-2 h-3 w-3" />
            Add Substance
          </Button>
        )}
      </div>

      {hazardousMaterials.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          No hazardous material declarations found
        </p>
      ) : (
        <div className="space-y-4">
          {hazardousMaterials.map((hm, index) => (
            <div
              key={hm.id || index}
              className="grid gap-3 rounded-lg border bg-muted/30 p-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">
                  Substance {index + 1}
                </span>
                <div className="flex items-center gap-2">
                  <ConfidenceIndicator confidence={hm.confidence} />
                  {!readOnly && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-muted-foreground hover:text-destructive"
                      onClick={() => removeHazardousMaterial(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-1">
                  <Label htmlFor={`hm-substance-${index}`} className="text-xs">
                    Substance Name
                  </Label>
                  <Input
                    id={`hm-substance-${index}`}
                    value={hm.substance}
                    onChange={(e) =>
                      updateHazardousMaterial(index, "substance", e.target.value)
                    }
                    placeholder="e.g., Lead (Pb)"
                    readOnly={readOnly}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor={`hm-threshold-${index}`} className="text-xs">
                    Threshold
                  </Label>
                  <Input
                    id={`hm-threshold-${index}`}
                    value={hm.threshold || ""}
                    onChange={(e) =>
                      updateHazardousMaterial(index, "threshold", e.target.value)
                    }
                    placeholder="e.g., 0.1%"
                    readOnly={readOnly}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor={`hm-present-${index}`} className="text-xs">
                    Present
                  </Label>
                  {readOnly ? (
                    <Input
                      value={
                        hm.present === "yes"
                          ? "Yes"
                          : hm.present === "no"
                          ? "No"
                          : "Unknown"
                      }
                      readOnly
                    />
                  ) : (
                    <Select
                      value={hm.present}
                      onValueChange={(value) =>
                        updateHazardousMaterial(index, "present", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                        <SelectItem value="unknown">Unknown</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                </div>
                <div className="space-y-1">
                  <Label htmlFor={`hm-amount-${index}`} className="text-xs">
                    Amount (if present)
                  </Label>
                  <Input
                    id={`hm-amount-${index}`}
                    value={hm.amount || ""}
                    onChange={(e) =>
                      updateHazardousMaterial(index, "amount", e.target.value)
                    }
                    placeholder="Amount"
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
