import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateId(): string {
  return crypto.randomUUID();
}

export function getConfidenceColor(confidence: number): string {
  if (confidence >= 80) return "text-green-600";
  if (confidence >= 50) return "text-yellow-600";
  return "text-red-600";
}

export function getConfidenceBgColor(confidence: number): string {
  if (confidence >= 80) return "bg-green-500";
  if (confidence >= 50) return "bg-yellow-500";
  return "bg-red-500";
}

export function getConfidenceLabel(confidence: number): string {
  if (confidence >= 90) return "Very High";
  if (confidence >= 80) return "High";
  if (confidence >= 70) return "Good";
  if (confidence >= 50) return "Moderate";
  if (confidence >= 30) return "Low";
  return "Very Low";
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function formatDateTime(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function calculateDataPoints(data: Record<string, unknown>): number {
  let count = 0;

  const materials = data.materials as unknown[] | undefined;
  const certifications = data.certifications as unknown[] | undefined;
  const hazardous_materials = data.hazardous_materials as unknown[] | undefined;
  const supplier = data.supplier as Record<string, unknown> | undefined;
  const compliance_flags = data.compliance_flags as Record<string, unknown> | undefined;

  if (materials) count += materials.length * 4;
  if (certifications) count += certifications.length * 4;
  if (hazardous_materials) count += hazardous_materials.length * 4;
  if (supplier) {
    if (supplier.company_name) count++;
    if (supplier.country) count++;
    if (supplier.contact_email) count++;
  }
  if (compliance_flags) {
    count += Object.keys(compliance_flags).length;
  }

  return count;
}

export function estimateTimeSaved(documentCount: number): number {
  // Estimate 20 minutes saved per document (manual data entry time)
  return Math.round((documentCount * 20) / 60 * 10) / 10;
}

export function downloadFile(content: string, filename: string, mimeType: string) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function exportToJson(data: unknown, filename: string) {
  const jsonString = JSON.stringify(data, null, 2);
  downloadFile(jsonString, `${filename}.json`, "application/json");
}

export function exportToCsv(data: Record<string, unknown>, filename: string) {
  const flatData = flattenObject(data);
  const headers = Object.keys(flatData);
  const values = Object.values(flatData).map((v) =>
    typeof v === "string" && v.includes(",") ? `"${v}"` : String(v ?? "")
  );

  const csvContent = headers.join(",") + "\n" + values.join(",");
  downloadFile(csvContent, `${filename}.csv`, "text/csv");
}

function flattenObject(
  obj: Record<string, unknown>,
  prefix = ""
): Record<string, unknown> {
  const result: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(obj)) {
    const newKey = prefix ? `${prefix}_${key}` : key;

    if (Array.isArray(value)) {
      value.forEach((item, index) => {
        if (typeof item === "object" && item !== null) {
          Object.assign(result, flattenObject(item as Record<string, unknown>, `${newKey}_${index}`));
        } else {
          result[`${newKey}_${index}`] = item;
        }
      });
    } else if (typeof value === "object" && value !== null) {
      Object.assign(result, flattenObject(value as Record<string, unknown>, newKey));
    } else {
      result[newKey] = value;
    }
  }

  return result;
}

export function getStatusColor(status: string): string {
  switch (status) {
    case "confirmed":
      return "text-green-700 bg-green-50 border-green-200";
    case "reviewed":
      return "text-blue-700 bg-blue-50 border-blue-200";
    case "pending":
    default:
      return "text-yellow-700 bg-yellow-50 border-yellow-200";
  }
}

export function getStatusLabel(status: string): string {
  switch (status) {
    case "confirmed":
      return "Confirmed";
    case "reviewed":
      return "Reviewed";
    case "pending":
    default:
      return "Pending Review";
  }
}
