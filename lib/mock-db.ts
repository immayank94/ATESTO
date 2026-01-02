"use client";

import type { Company, Extraction, ExtractedData } from "./types";
import { generateId } from "./utils";
import { getMockExtractionData } from "./gemini";

// Mock user type
export interface MockUser {
  id: string;
  email: string;
  created_at: string;
}

// In-memory storage (persisted to localStorage in browser)
const STORAGE_KEYS = {
  USER: "atesto_mock_user",
  COMPANY: "atesto_mock_company",
  EXTRACTIONS: "atesto_mock_extractions",
};

// Helper to safely access localStorage
function getStorage<T>(key: string, defaultValue: T): T {
  if (typeof window === "undefined") return defaultValue;
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch {
    return defaultValue;
  }
}

function setStorage<T>(key: string, value: T): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error("Failed to save to localStorage:", e);
  }
}

// Mock Auth Functions
export const mockAuth = {
  getUser: (): MockUser | null => {
    return getStorage<MockUser | null>(STORAGE_KEYS.USER, null);
  },

  signUp: async (
    email: string,
    password: string,
    companyName: string
  ): Promise<{ user: MockUser; company: Company }> => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const userId = generateId();
    const user: MockUser = {
      id: userId,
      email,
      created_at: new Date().toISOString(),
    };

    const company: Company = {
      id: generateId(),
      name: companyName,
      created_at: new Date().toISOString(),
      user_id: userId,
    };

    setStorage(STORAGE_KEYS.USER, user);
    setStorage(STORAGE_KEYS.COMPANY, company);
    setStorage(STORAGE_KEYS.EXTRACTIONS, []);

    return { user, company };
  },

  signIn: async (
    email: string,
    password: string
  ): Promise<{ user: MockUser; company: Company | null }> => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Check if user exists
    let user = getStorage<MockUser | null>(STORAGE_KEYS.USER, null);

    if (!user) {
      // Auto-create a demo user for convenience
      const result = await mockAuth.signUp(email, password, "Demo Company");
      return { user: result.user, company: result.company };
    }

    // Update email if different (for demo purposes)
    user = { ...user, email };
    setStorage(STORAGE_KEYS.USER, user);

    const company = getStorage<Company | null>(STORAGE_KEYS.COMPANY, null);
    return { user, company };
  },

  signInWithMagicLink: async (email: string): Promise<void> => {
    // Simulate sending magic link
    await new Promise((resolve) => setTimeout(resolve, 500));
    // In mock mode, we'll just sign them in directly
    await mockAuth.signIn(email, "mock-password");
  },

  signOut: async (): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    // Don't clear data, just simulate logout
    // User data persists for next login
  },

  getCompany: (): Company | null => {
    return getStorage<Company | null>(STORAGE_KEYS.COMPANY, null);
  },
};

// Mock Database Functions
export const mockDb = {
  getExtractions: async (companyId: string): Promise<Extraction[]> => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const extractions = getStorage<Extraction[]>(STORAGE_KEYS.EXTRACTIONS, []);
    return extractions.filter((e) => e.company_id === companyId);
  },

  getExtraction: async (extractionId: string): Promise<Extraction | null> => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    const extractions = getStorage<Extraction[]>(STORAGE_KEYS.EXTRACTIONS, []);
    const extraction = extractions.find((e) => e.id === extractionId);

    if (extraction) {
      // Generate a mock file URL (data URL for demo)
      extraction.file_url = "/api/placeholder-doc.png";
    }

    return extraction || null;
  },

  saveExtraction: async (
    companyId: string,
    fileName: string,
    file: File,
    data: ExtractedData
  ): Promise<Extraction> => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const extraction: Extraction = {
      id: generateId(),
      company_id: companyId,
      file_name: fileName,
      file_path: `mock/${companyId}/${fileName}`,
      document_type: data.document_type,
      supplier_name: data.supplier.company_name,
      supplier_country: data.supplier.country,
      extracted_data: data,
      overall_confidence: data.overall_confidence,
      status: "pending",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      confirmed_by: null,
      confirmed_at: null,
    };

    const extractions = getStorage<Extraction[]>(STORAGE_KEYS.EXTRACTIONS, []);
    extractions.unshift(extraction);
    setStorage(STORAGE_KEYS.EXTRACTIONS, extractions);

    return extraction;
  },

  updateExtraction: async (
    extractionId: string,
    data: Partial<ExtractedData>,
    status?: "pending" | "reviewed" | "confirmed"
  ): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, 300));

    const extractions = getStorage<Extraction[]>(STORAGE_KEYS.EXTRACTIONS, []);
    const index = extractions.findIndex((e) => e.id === extractionId);

    if (index === -1) return false;

    const extraction = extractions[index];
    extractions[index] = {
      ...extraction,
      extracted_data: { ...extraction.extracted_data, ...data } as ExtractedData,
      status: status || extraction.status,
      updated_at: new Date().toISOString(),
      confirmed_at: status === "confirmed" ? new Date().toISOString() : extraction.confirmed_at,
      supplier_name: data.supplier?.company_name ?? extraction.supplier_name,
      supplier_country: data.supplier?.country ?? extraction.supplier_country,
      document_type: data.document_type ?? extraction.document_type,
      overall_confidence: data.overall_confidence ?? extraction.overall_confidence,
    };

    setStorage(STORAGE_KEYS.EXTRACTIONS, extractions);
    return true;
  },

  deleteExtraction: async (extractionId: string): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, 200));

    const extractions = getStorage<Extraction[]>(STORAGE_KEYS.EXTRACTIONS, []);
    const filtered = extractions.filter((e) => e.id !== extractionId);

    if (filtered.length === extractions.length) return false;

    setStorage(STORAGE_KEYS.EXTRACTIONS, filtered);
    return true;
  },

  // Seed with demo data
  seedDemoData: async (companyId: string): Promise<void> => {
    const existingExtractions = getStorage<Extraction[]>(STORAGE_KEYS.EXTRACTIONS, []);

    if (existingExtractions.length > 0) return; // Already has data

    const demoExtractions: Extraction[] = [
      {
        id: generateId(),
        company_id: companyId,
        file_name: "gots_certificate_2024.pdf",
        file_path: "demo/gots_certificate.pdf",
        document_type: "certificate",
        supplier_name: "EcoMaterials GmbH",
        supplier_country: "Germany",
        extracted_data: getMockExtractionData(),
        overall_confidence: 85,
        status: "confirmed",
        created_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        confirmed_by: null,
        confirmed_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      },
      {
        id: generateId(),
        company_id: companyId,
        file_name: "material_declaration_q4.pdf",
        file_path: "demo/material_declaration.pdf",
        document_type: "material_declaration",
        supplier_name: "TextilePro Industries",
        supplier_country: "Portugal",
        extracted_data: {
          ...getMockExtractionData(),
          document_type: "material_declaration",
          supplier: {
            company_name: "TextilePro Industries",
            country: "Portugal",
            contact_email: "compliance@textilepro.pt",
          },
          overall_confidence: 72,
        },
        overall_confidence: 72,
        status: "reviewed",
        created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
        confirmed_by: null,
        confirmed_at: null,
      },
      {
        id: generateId(),
        company_id: companyId,
        file_name: "reach_compliance_2024.pdf",
        file_path: "demo/reach_compliance.pdf",
        document_type: "certificate",
        supplier_name: "ChemSafe Solutions",
        supplier_country: "Netherlands",
        extracted_data: {
          ...getMockExtractionData(),
          supplier: {
            company_name: "ChemSafe Solutions",
            country: "Netherlands",
            contact_email: "reach@chemsafe.nl",
          },
          overall_confidence: 91,
        },
        overall_confidence: 91,
        status: "pending",
        created_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
        confirmed_by: null,
        confirmed_at: null,
      },
    ];

    setStorage(STORAGE_KEYS.EXTRACTIONS, demoExtractions);
  },
};

// Check if we're in mock mode
export function isMockMode(): boolean {
  // Always return true for client-side if the env var is set
  // or if Supabase URL is a placeholder
  if (typeof window !== "undefined") {
    return true; // Force mock mode in browser for now
  }
  return process.env.MOCK_MODE === "true" ||
         (process.env.NEXT_PUBLIC_SUPABASE_URL?.includes("placeholder") ?? false);
}
