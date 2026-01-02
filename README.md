# ATESTO - Compliance Data Extraction SaaS

ATESTO extracts compliance data from certificates, spec sheets, and supplier documents in seconds. Stop copying data from PDFs manually.

## Features

- **Smart Document Recognition**: Automatically identifies certificates, safety data sheets, material declarations, and spec sheets
- **AI-Powered Extraction**: Extracts materials, certifications (FSC, ISO, GOTS), hazardous substance declarations, REACH/RoHS compliance
- **Confidence Scoring**: Each field shows a confidence score so you know what needs review
- **Export Options**: Export to JSON or CSV for integration with your systems
- **Secure Storage**: All documents and data stored securely with user isolation

## Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Next.js API Routes
- **Database**: Supabase (PostgreSQL with Row Level Security)
- **AI**: Google Gemini 2.0 Flash for document analysis
- **Auth**: Supabase Auth (email/password + magic link)
- **Storage**: Supabase Storage

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account
- Google Cloud account with Gemini API access

### Installation

1. Clone the repository:
```bash
git clone <repo-url>
cd atesto
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your credentials:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
GEMINI_API_KEY=your_gemini_api_key
MOCK_MODE=false
```

4. Set up the database:
   - Go to your Supabase project's SQL editor
   - Run the contents of `supabase/schema.sql`

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

### Mock Mode

For development without the Gemini API, set `MOCK_MODE=true` in your `.env.local`. This returns sample extraction data without making API calls.

## Project Structure

```
/app
  /page.tsx              # Landing page
  /login/page.tsx        # Login page
  /signup/page.tsx       # Signup page
  /dashboard
    /page.tsx            # Dashboard (extractions list)
    /extract/page.tsx    # New extraction flow
    /extraction/[id]/page.tsx  # View/edit extraction
  /api
    /extract/route.ts    # Gemini extraction API
/components
  /ui                    # shadcn/ui components
  /landing               # Landing page sections
  /dashboard             # Dashboard components
  /shared                # Shared components
/lib
  /supabase.ts           # Supabase client
  /supabase-server.ts    # Server-side Supabase
  /gemini.ts             # Gemini API helper
  /types.ts              # TypeScript types
  /utils.ts              # Utility functions
/hooks
  /useAuth.ts            # Authentication hook
  /useExtraction.ts      # Extraction operations hook
/supabase
  /schema.sql            # Database schema
```

## Deployment

### Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in Vercel settings
4. Deploy

The app is configured for Vercel with proper Next.js settings.

### Environment Variables for Production

Make sure to set all environment variables in your Vercel project settings:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `GEMINI_API_KEY`
- `MOCK_MODE` (set to `false` for production)

## Usage

1. **Sign Up**: Create an account with your company name
2. **Upload Document**: Drag & drop a PDF, PNG, or JPG
3. **Review Extraction**: Check the extracted data and confidence scores
4. **Edit if Needed**: Correct any fields with low confidence
5. **Confirm & Save**: Save to your database
6. **Export**: Download as JSON or CSV

## Supported Document Types

- Certificates (GOTS, OEKO-TEX, FSC, ISO, etc.)
- Material Declarations
- Safety Data Sheets (SDS)
- Spec Sheets
- Invoices

## API Reference

### POST /api/extract

Extracts data from an uploaded document.

**Request:**
- Content-Type: `multipart/form-data`
- Body: `file` (PNG, JPG, or PDF, max 10MB)

**Response:**
```json
{
  "document_type": "certificate",
  "supplier": {
    "company_name": "Company Name",
    "country": "Country",
    "contact_email": "email@company.com"
  },
  "materials": [...],
  "certifications": [...],
  "hazardous_materials": [...],
  "compliance_flags": {
    "reach_compliant": "yes",
    "rohs_compliant": "yes"
  },
  "overall_confidence": 85,
  "notes": "..."
}
```

## License

MIT
