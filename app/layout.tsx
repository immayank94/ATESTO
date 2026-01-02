import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "ATESTO - Compliance Data Extraction",
  description:
    "Extract compliance data from supplier PDFs in seconds. Stop manual data entry.",
  keywords: [
    "compliance",
    "data extraction",
    "REACH",
    "RoHS",
    "ESPR",
    "supply chain",
    "sustainability",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
