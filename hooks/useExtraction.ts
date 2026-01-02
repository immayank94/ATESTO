"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase";
import type { ExtractedData, Extraction } from "@/lib/types";
import { generateId } from "@/lib/utils";

export function useExtraction() {
  const [isExtracting, setIsExtracting] = useState(false);
  const [extractedData, setExtractedData] = useState<ExtractedData | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const supabase = createClient();

  const extractFromFile = async (file: File): Promise<ExtractedData | null> => {
    setIsExtracting(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/extract", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Extraction failed");
      }

      const data = await response.json();
      setExtractedData(data);
      return data;
    } catch (err) {
      const message = err instanceof Error ? err.message : "Extraction failed";
      setError(message);
      return null;
    } finally {
      setIsExtracting(false);
    }
  };

  const saveExtraction = async (
    companyId: string,
    fileName: string,
    file: File,
    data: ExtractedData
  ): Promise<Extraction | null> => {
    try {
      // Upload file to storage
      const fileExt = fileName.split(".").pop();
      const filePath = `extractions/${companyId}/${generateId()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("documents")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      // Save extraction record
      const { data: extraction, error: insertError } = await supabase
        .from("extractions")
        .insert({
          company_id: companyId,
          file_name: fileName,
          file_path: filePath,
          document_type: data.document_type,
          supplier_name: data.supplier.company_name,
          supplier_country: data.supplier.country,
          extracted_data: data,
          overall_confidence: data.overall_confidence,
          status: "pending",
        })
        .select()
        .single();

      if (insertError) {
        throw insertError;
      }

      return extraction;
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to save";
      setError(message);
      return null;
    }
  };

  const updateExtraction = async (
    extractionId: string,
    data: Partial<ExtractedData>,
    status?: "pending" | "reviewed" | "confirmed"
  ): Promise<boolean> => {
    try {
      const updateData: Record<string, unknown> = {
        extracted_data: data,
        updated_at: new Date().toISOString(),
      };

      if (status) {
        updateData.status = status;
        if (status === "confirmed") {
          updateData.confirmed_at = new Date().toISOString();
        }
      }

      if (data.supplier) {
        updateData.supplier_name = data.supplier.company_name;
        updateData.supplier_country = data.supplier.country;
      }

      if (data.document_type) {
        updateData.document_type = data.document_type;
      }

      if (data.overall_confidence !== undefined) {
        updateData.overall_confidence = data.overall_confidence;
      }

      const { error: updateError } = await supabase
        .from("extractions")
        .update(updateData)
        .eq("id", extractionId);

      if (updateError) {
        throw updateError;
      }

      return true;
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to update";
      setError(message);
      return false;
    }
  };

  const getExtractions = async (companyId: string): Promise<Extraction[]> => {
    try {
      const { data, error } = await supabase
        .from("extractions")
        .select("*")
        .eq("company_id", companyId)
        .order("created_at", { ascending: false });

      if (error) {
        throw error;
      }

      return data || [];
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to load extractions";
      setError(message);
      return [];
    }
  };

  const getExtraction = async (
    extractionId: string
  ): Promise<Extraction | null> => {
    try {
      const { data, error } = await supabase
        .from("extractions")
        .select("*")
        .eq("id", extractionId)
        .single();

      if (error) {
        throw error;
      }

      // Get file URL
      if (data?.file_path) {
        const { data: urlData } = supabase.storage
          .from("documents")
          .getPublicUrl(data.file_path);
        data.file_url = urlData.publicUrl;
      }

      return data;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to load extraction";
      setError(message);
      return null;
    }
  };

  const deleteExtraction = async (extractionId: string): Promise<boolean> => {
    try {
      const { error } = await supabase
        .from("extractions")
        .delete()
        .eq("id", extractionId);

      if (error) {
        throw error;
      }

      return true;
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to delete";
      setError(message);
      return false;
    }
  };

  const clearData = () => {
    setExtractedData(null);
    setError(null);
  };

  return {
    isExtracting,
    extractedData,
    error,
    extractFromFile,
    saveExtraction,
    updateExtraction,
    getExtractions,
    getExtraction,
    deleteExtraction,
    clearData,
    setExtractedData,
  };
}
