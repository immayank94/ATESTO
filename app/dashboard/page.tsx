"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { ExtractionList } from "@/components/dashboard/ExtractionList";
import { useAuth } from "@/hooks/useAuth";
import { useExtraction } from "@/hooks/useExtraction";
import { calculateDataPoints, estimateTimeSaved } from "@/lib/utils";
import type { Extraction, DashboardStats } from "@/lib/types";
import { Plus } from "lucide-react";

export default function DashboardPage() {
  const { company } = useAuth();
  const { getExtractions } = useExtraction();
  const [extractions, setExtractions] = useState<Extraction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState<DashboardStats>({
    documents_processed: 0,
    data_points_extracted: 0,
    time_saved_hours: 0,
  });

  useEffect(() => {
    const loadExtractions = async () => {
      if (!company?.id) return;

      setIsLoading(true);
      const data = await getExtractions(company.id);
      setExtractions(data);

      // Calculate stats
      const totalDataPoints = data.reduce((acc, extraction) => {
        return acc + calculateDataPoints((extraction.extracted_data || {}) as unknown as Record<string, unknown>);
      }, 0);

      setStats({
        documents_processed: data.length,
        data_points_extracted: totalDataPoints,
        time_saved_hours: estimateTimeSaved(data.length),
      });

      setIsLoading(false);
    };

    loadExtractions();
  }, [company?.id, getExtractions]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your compliance document extractions
          </p>
        </div>
        <Link href="/dashboard/extract">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Extraction
          </Button>
        </Link>
      </div>

      {/* Stats */}
      <StatsCards stats={stats} />

      {/* Extractions List */}
      <div>
        <h2 className="mb-4 text-lg font-semibold">Recent Extractions</h2>
        <ExtractionList extractions={extractions} isLoading={isLoading} />
      </div>
    </div>
  );
}
