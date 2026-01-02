import { GoogleGenerativeAI } from "@google/generative-ai";
import type { ExtractedData } from "./types";

const EXTRACTION_PROMPT = `You are a compliance data extraction assistant. Analyze this document and extract all relevant compliance information.

Return a JSON object with this exact structure:
{
  "document_type": "certificate" | "material_declaration" | "safety_data_sheet" | "spec_sheet" | "invoice" | "other",
  "supplier": {
    "company_name": string | null,
    "country": string | null,
    "contact_email": string | null
  },
  "materials": [
    {
      "name": string,
      "percentage": string | null,
      "origin_country": string | null,
      "cas_number": string | null,
      "confidence": number (0-100)
    }
  ],
  "certifications": [
    {
      "type": string,
      "certificate_number": string | null,
      "issue_date": string | null,
      "expiry_date": string | null,
      "confidence": number (0-100)
    }
  ],
  "hazardous_materials": [
    {
      "substance": string,
      "threshold": string | null,
      "present": "yes" | "no" | "unknown",
      "amount": string | null,
      "confidence": number (0-100)
    }
  ],
  "compliance_flags": {
    "reach_compliant": "yes" | "no" | "unknown",
    "rohs_compliant": "yes" | "no" | "unknown"
  },
  "overall_confidence": number (0-100),
  "notes": string (any uncertainties or issues found)
}

Extract ALL information you can find. If a field is not present in the document, use null.
For confidence scores: 90-100 = clearly stated, 70-89 = inferred with high confidence, 50-69 = uncertain, below 50 = guessing.

Return ONLY valid JSON. No markdown, no explanation, no code blocks.`;

export async function extractDataFromDocument(
  base64Data: string,
  mimeType: string
): Promise<ExtractedData> {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  const result = await model.generateContent([
    {
      inlineData: {
        mimeType: mimeType.startsWith("image/") ? mimeType : "image/png",
        data: base64Data,
      },
    },
    { text: EXTRACTION_PROMPT },
  ]);

  const responseText = result.response.text();

  // Clean potential markdown formatting
  let cleanedText = responseText.trim();
  if (cleanedText.startsWith("```json")) {
    cleanedText = cleanedText.slice(7);
  }
  if (cleanedText.startsWith("```")) {
    cleanedText = cleanedText.slice(3);
  }
  if (cleanedText.endsWith("```")) {
    cleanedText = cleanedText.slice(0, -3);
  }
  cleanedText = cleanedText.trim();

  const extracted = JSON.parse(cleanedText) as ExtractedData;
  return extracted;
}

export function getMockExtractionData(): ExtractedData {
  return {
    document_type: "certificate",
    supplier: {
      company_name: "EcoMaterials GmbH",
      country: "Germany",
      contact_email: "compliance@ecomaterials.de",
    },
    materials: [
      {
        name: "Recycled Polyester",
        percentage: "65%",
        origin_country: "Germany",
        cas_number: "25038-59-9",
        confidence: 95,
      },
      {
        name: "Organic Cotton",
        percentage: "30%",
        origin_country: "India",
        cas_number: null,
        confidence: 88,
      },
      {
        name: "Elastane",
        percentage: "5%",
        origin_country: "China",
        cas_number: "25038-36-2",
        confidence: 72,
      },
    ],
    certifications: [
      {
        type: "GOTS",
        certificate_number: "GOTS-2024-78456",
        issue_date: "2024-01-15",
        expiry_date: "2025-01-14",
        confidence: 98,
      },
      {
        type: "OEKO-TEX",
        certificate_number: "OT-24-89012",
        issue_date: "2024-03-01",
        expiry_date: "2025-02-28",
        confidence: 95,
      },
    ],
    hazardous_materials: [
      {
        substance: "Lead (Pb)",
        threshold: "0.1%",
        present: "no",
        amount: null,
        confidence: 92,
      },
      {
        substance: "Cadmium (Cd)",
        threshold: "0.01%",
        present: "no",
        amount: null,
        confidence: 90,
      },
      {
        substance: "Phthalates",
        threshold: "0.1%",
        present: "unknown",
        amount: null,
        confidence: 45,
      },
    ],
    compliance_flags: {
      reach_compliant: "yes",
      rohs_compliant: "yes",
    },
    overall_confidence: 85,
    notes:
      "Document is a valid GOTS certificate. Some material percentages were calculated from the composition breakdown. Phthalate status requires additional testing documentation.",
  };
}
