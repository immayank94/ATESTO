"use client";

import { useState, useCallback } from "react";
import type { ExtractedData, Extraction } from "@/lib/types";
import { generateId } from "@/lib/utils";
import { mockDb, isMockMode } from "@/lib/mock-db";
import { getMockExtractionData } from "@/lib/gemini";

export function useExtraction() {
  const [isExtracting, setIsExtracting] = useState(false);
  const [extractedData, setExtractedData] = useState<ExtractedData | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  const extractFromFile = useCallback(async (file: File): Promise<ExtractedData | null> => {
    setIsExtracting(true);
    setError(null);

    try {
      // In mock mode, just return mock data without calling API
      if (isMockMode()) {
        await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate processing
        const data = getMockExtractionData();
        setExtractedData(data);
        return data;
      }

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
  }, []);

  const saveExtraction = useCallback(async (
    companyId: string,
    fileName: string,
    file: File,
    data: ExtractedData
  ): Promise<Extraction | null> => {
    try {
      if (isMockMode()) {
        return await mockDb.saveExtraction(companyId, fileName, file, data);
      }

      // Real Supabase storage
      const { createClient } = await import("@/lib/supabase");
      const supabase = createClient();

      const fileExt = fileName.split(".").pop();
      const filePath = `extractions/${companyId}/${generateId()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("documents")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

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
  }, []);

  const updateExtraction = useCallback(async (
    extractionId: string,
    data: Partial<ExtractedData>,
    status?: "pending" | "reviewed" | "confirmed"
  ): Promise<boolean> => {
    try {
      if (isMockMode()) {
        return await mockDb.updateExtraction(extractionId, data, status);
      }

      // Real Supabase update
      const { createClient } = await import("@/lib/supabase");
      const supabase = createClient();

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
  }, []);

  const getExtractions = useCallback(async (companyId: string): Promise<Extraction[]> => {
    try {
      if (isMockMode()) {
        return await mockDb.getExtractions(companyId);
      }

      // Real Supabase query
      const { createClient } = await import("@/lib/supabase");
      const supabase = createClient();

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
  }, []);

  const getExtraction = useCallback(async (
    extractionId: string
  ): Promise<Extraction | null> => {
    try {
      if (isMockMode()) {
        return await mockDb.getExtraction(extractionId);
      }

      // Real Supabase query
      const { createClient } = await import("@/lib/supabase");
      const supabase = createClient();

      const { data, error } = await supabase
        .from("extractions")
        .select("*")
        .eq("id", extractionId)
        .single();

      if (error) {
        throw error;
      }

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
  }, []);

  const deleteExtraction = useCallback(async (extractionId: string): Promise<boolean> => {
    try {
      if (isMockMode()) {
        return await mockDb.deleteExtraction(extractionId);
      }

      // Real Supabase delete
      const { createClient } = await import("@/lib/supabase");
      const supabase = createClient();

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
  }, []);

  const clearData = useCallback(() => {
    setExtractedData(null);
    setError(null);
  }, []);

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
