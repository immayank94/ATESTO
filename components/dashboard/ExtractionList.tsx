"use client";

import Link from "next/link";
import { Extraction } from "@/lib/types";
import { formatDate, getStatusColor, getStatusLabel } from "@/lib/utils";
import { ConfidenceIndicator } from "./ConfidenceIndicator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FileText, ExternalLink } from "lucide-react";

interface ExtractionListProps {
  extractions: Extraction[];
  isLoading?: boolean;
}

export function ExtractionList({ extractions, isLoading }: ExtractionListProps) {
  if (isLoading) {
    return (
      <div className="rounded-lg border bg-card">
        <div className="p-8 text-center text-muted-foreground">
          Loading extractions...
        </div>
      </div>
    );
  }

  if (extractions.length === 0) {
    return (
      <div className="rounded-lg border bg-card">
        <div className="flex flex-col items-center justify-center p-12 text-center">
          <FileText className="h-12 w-12 text-muted-foreground/50" />
          <h3 className="mt-4 text-lg font-semibold">No extractions yet</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Upload your first document to get started
          </p>
          <Link href="/dashboard/extract" className="mt-4">
            <Button>New Extraction</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Document</TableHead>
            <TableHead>Supplier</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Confidence</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {extractions.map((extraction) => (
            <TableRow key={extraction.id}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">{extraction.file_name}</span>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <p className="font-medium">
                    {extraction.supplier_name || "Unknown"}
                  </p>
                  {extraction.supplier_country && (
                    <p className="text-sm text-muted-foreground">
                      {extraction.supplier_country}
                    </p>
                  )}
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="secondary">
                  {extraction.document_type?.replace(/_/g, " ") || "Unknown"}
                </Badge>
              </TableCell>
              <TableCell>
                {extraction.overall_confidence !== null && (
                  <ConfidenceIndicator
                    confidence={extraction.overall_confidence}
                    showPercentage
                  />
                )}
              </TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={getStatusColor(extraction.status)}
                >
                  {getStatusLabel(extraction.status)}
                </Badge>
              </TableCell>
              <TableCell className="text-muted-foreground">
                {formatDate(extraction.created_at)}
              </TableCell>
              <TableCell className="text-right">
                <Link href={`/dashboard/extraction/${extraction.id}`}>
                  <Button variant="ghost" size="sm">
                    View
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
