import { NextRequest, NextResponse } from "next/server";
import { extractDataFromDocument, getMockExtractionData } from "@/lib/gemini";
import type { ExtractedData } from "@/lib/types";

export const maxDuration = 60;

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Check file type
    const allowedTypes = ["image/png", "image/jpeg", "image/jpg", "application/pdf"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Invalid file type. Please upload PNG, JPG, or PDF." },
        { status: 400 }
      );
    }

    // Check file size (10MB)
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { error: "File too large. Maximum size is 10MB." },
        { status: 400 }
      );
    }

    // Check if mock mode is enabled
    if (process.env.MOCK_MODE === "true") {
      // Simulate processing delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return NextResponse.json(getMockExtractionData());
    }

    // Check for API key
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "Gemini API key not configured" },
        { status: 500 }
      );
    }

    // Convert file to base64
    const bytes = await file.arrayBuffer();
    const base64 = Buffer.from(bytes).toString("base64");

    // For PDFs, we need to handle them differently
    // The client should convert PDF pages to images before sending
    // For now, we'll attempt to process directly
    let mimeType = file.type;

    // If it's a PDF, we'll try to process it (Gemini 2.0 supports PDF)
    if (mimeType === "application/pdf") {
      mimeType = "application/pdf";
    }

    try {
      const extractedData = await extractDataFromDocument(base64, mimeType);

      // Ensure all required fields exist
      const normalizedData: ExtractedData = {
        document_type: extractedData.document_type || "other",
        supplier: {
          company_name: extractedData.supplier?.company_name || null,
          country: extractedData.supplier?.country || null,
          contact_email: extractedData.supplier?.contact_email || null,
        },
        materials: Array.isArray(extractedData.materials)
          ? extractedData.materials.map((m, i) => ({
              id: `material-${i}`,
              name: m.name || "",
              percentage: m.percentage || null,
              origin_country: m.origin_country || null,
              cas_number: m.cas_number || null,
              confidence: m.confidence || 50,
            }))
          : [],
        certifications: Array.isArray(extractedData.certifications)
          ? extractedData.certifications.map((c, i) => ({
              id: `cert-${i}`,
              type: c.type || "",
              certificate_number: c.certificate_number || null,
              issue_date: c.issue_date || null,
              expiry_date: c.expiry_date || null,
              confidence: c.confidence || 50,
            }))
          : [],
        hazardous_materials: Array.isArray(extractedData.hazardous_materials)
          ? extractedData.hazardous_materials.map((h, i) => ({
              id: `hm-${i}`,
              substance: h.substance || "",
              threshold: h.threshold || null,
              present: h.present || "unknown",
              amount: h.amount || null,
              confidence: h.confidence || 50,
            }))
          : [],
        compliance_flags: {
          reach_compliant:
            extractedData.compliance_flags?.reach_compliant || "unknown",
          rohs_compliant:
            extractedData.compliance_flags?.rohs_compliant || "unknown",
        },
        overall_confidence: extractedData.overall_confidence || 50,
        notes: extractedData.notes || "",
        custom_fields: [],
      };

      return NextResponse.json(normalizedData);
    } catch (parseError) {
      console.error("Extraction error:", parseError);
      return NextResponse.json(
        {
          error: "Failed to extract data from document",
          details:
            parseError instanceof Error ? parseError.message : "Unknown error",
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
