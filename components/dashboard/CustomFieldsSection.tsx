"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { CustomField } from "@/lib/types";
import { Plus, Trash2 } from "lucide-react";
import { generateId } from "@/lib/utils";

interface CustomFieldsSectionProps {
  customFields: CustomField[];
  onChange: (customFields: CustomField[]) => void;
  readOnly?: boolean;
}

export function CustomFieldsSection({
  customFields,
  onChange,
  readOnly,
}: CustomFieldsSectionProps) {
  const addField = () => {
    onChange([
      ...customFields,
      {
        id: generateId(),
        field_name: "",
        value: "",
      },
    ]);
  };

  const updateField = (index: number, field: keyof CustomField, value: string) => {
    const updated = [...customFields];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  const removeField = (index: number) => {
    onChange(customFields.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <Label className="text-base font-semibold">Custom Fields</Label>
          <p className="text-sm text-muted-foreground">
            Add any additional information the AI may have missed
          </p>
        </div>
        {!readOnly && (
          <Button variant="outline" size="sm" onClick={addField}>
            <Plus className="mr-2 h-3 w-3" />
            Add Field
          </Button>
        )}
      </div>

      {customFields.length === 0 ? (
        <p className="text-sm text-muted-foreground">No custom fields added</p>
      ) : (
        <div className="space-y-3">
          {customFields.map((field, index) => (
            <div key={field.id || index} className="flex items-start gap-3">
              <div className="flex-1 space-y-1">
                <Input
                  value={field.field_name}
                  onChange={(e) =>
                    updateField(index, "field_name", e.target.value)
                  }
                  placeholder="Field name"
                  readOnly={readOnly}
                />
              </div>
              <div className="flex-1 space-y-1">
                <Input
                  value={field.value}
                  onChange={(e) => updateField(index, "value", e.target.value)}
                  placeholder="Value"
                  readOnly={readOnly}
                />
              </div>
              {!readOnly && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:text-destructive"
                  onClick={() => removeField(index)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
