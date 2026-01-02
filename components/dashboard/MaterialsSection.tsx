"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ConfidenceIndicator } from "./ConfidenceIndicator";
import type { Material } from "@/lib/types";
import { Plus, Trash2 } from "lucide-react";
import { generateId } from "@/lib/utils";

interface MaterialsSectionProps {
  materials: Material[];
  onChange: (materials: Material[]) => void;
  readOnly?: boolean;
}

export function MaterialsSection({
  materials,
  onChange,
  readOnly,
}: MaterialsSectionProps) {
  const addMaterial = () => {
    onChange([
      ...materials,
      {
        id: generateId(),
        name: "",
        percentage: null,
        origin_country: null,
        cas_number: null,
        confidence: 100,
      },
    ]);
  };

  const updateMaterial = (index: number, field: keyof Material, value: string) => {
    const updated = [...materials];
    updated[index] = { ...updated[index], [field]: value || null };
    onChange(updated);
  };

  const removeMaterial = (index: number) => {
    onChange(materials.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label className="text-base font-semibold">Materials</Label>
        {!readOnly && (
          <Button variant="outline" size="sm" onClick={addMaterial}>
            <Plus className="mr-2 h-3 w-3" />
            Add Material
          </Button>
        )}
      </div>

      {materials.length === 0 ? (
        <p className="text-sm text-muted-foreground">No materials found</p>
      ) : (
        <div className="space-y-4">
          {materials.map((material, index) => (
            <div
              key={material.id || index}
              className="grid gap-3 rounded-lg border bg-muted/30 p-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">
                  Material {index + 1}
                </span>
                <div className="flex items-center gap-2">
                  <ConfidenceIndicator confidence={material.confidence} />
                  {!readOnly && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-muted-foreground hover:text-destructive"
                      onClick={() => removeMaterial(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-1">
                  <Label htmlFor={`material-name-${index}`} className="text-xs">
                    Name
                  </Label>
                  <Input
                    id={`material-name-${index}`}
                    value={material.name}
                    onChange={(e) => updateMaterial(index, "name", e.target.value)}
                    placeholder="Material name"
                    readOnly={readOnly}
                  />
                </div>
                <div className="space-y-1">
                  <Label
                    htmlFor={`material-percentage-${index}`}
                    className="text-xs"
                  >
                    Percentage
                  </Label>
                  <Input
                    id={`material-percentage-${index}`}
                    value={material.percentage || ""}
                    onChange={(e) =>
                      updateMaterial(index, "percentage", e.target.value)
                    }
                    placeholder="e.g., 65%"
                    readOnly={readOnly}
                  />
                </div>
                <div className="space-y-1">
                  <Label
                    htmlFor={`material-origin-${index}`}
                    className="text-xs"
                  >
                    Origin Country
                  </Label>
                  <Input
                    id={`material-origin-${index}`}
                    value={material.origin_country || ""}
                    onChange={(e) =>
                      updateMaterial(index, "origin_country", e.target.value)
                    }
                    placeholder="Country"
                    readOnly={readOnly}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor={`material-cas-${index}`} className="text-xs">
                    CAS Number
                  </Label>
                  <Input
                    id={`material-cas-${index}`}
                    value={material.cas_number || ""}
                    onChange={(e) =>
                      updateMaterial(index, "cas_number", e.target.value)
                    }
                    placeholder="Optional"
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
