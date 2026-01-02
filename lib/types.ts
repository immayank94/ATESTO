export type DocumentType =
  | "certificate"
  | "material_declaration"
  | "safety_data_sheet"
  | "spec_sheet"
  | "invoice"
  | "other";

export type ComplianceStatus = "yes" | "no" | "unknown";

export interface Supplier {
  company_name: string | null;
  country: string | null;
  contact_email: string | null;
}

export interface Material {
  id?: string;
  name: string;
  percentage: string | null;
  origin_country: string | null;
  cas_number: string | null;
  confidence: number;
}

export interface Certification {
  id?: string;
  type: string;
  certificate_number: string | null;
  issue_date: string | null;
  expiry_date: string | null;
  confidence: number;
}

export interface HazardousMaterial {
  id?: string;
  substance: string;
  threshold: string | null;
  present: ComplianceStatus;
  amount: string | null;
  confidence: number;
}

export interface ComplianceFlags {
  reach_compliant: ComplianceStatus;
  rohs_compliant: ComplianceStatus;
}

export interface CustomField {
  id?: string;
  field_name: string;
  value: string;
}

export interface ExtractedData {
  document_type: DocumentType;
  supplier: Supplier;
  materials: Material[];
  certifications: Certification[];
  hazardous_materials: HazardousMaterial[];
  compliance_flags: ComplianceFlags;
  overall_confidence: number;
  notes: string;
  custom_fields?: CustomField[];
}

export interface Extraction {
  id: string;
  company_id: string;
  file_name: string;
  file_path: string;
  file_url?: string;
  document_type: DocumentType | null;
  supplier_name: string | null;
  supplier_country: string | null;
  extracted_data: ExtractedData;
  overall_confidence: number | null;
  status: "pending" | "reviewed" | "confirmed";
  created_at: string;
  updated_at: string;
  confirmed_by: string | null;
  confirmed_at: string | null;
}

export interface Company {
  id: string;
  name: string;
  created_at: string;
  user_id: string;
}

export interface UserProfile {
  id: string;
  email: string;
  company?: Company;
}

export interface DashboardStats {
  documents_processed: number;
  data_points_extracted: number;
  time_saved_hours: number;
}

export interface ExtractionApiResponse {
  data?: ExtractedData;
  error?: string;
  raw?: string;
}
