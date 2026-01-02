"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DocumentViewer } from "@/components/dashboard/DocumentViewer";
import { ExtractedDataForm } from "@/components/dashboard/ExtractedDataForm";
import { FullPageLoader } from "@/components/shared/LoadingSpinner";
import { useExtraction } from "@/hooks/useExtraction";
import { useToast } from "@/hooks/use-toast";
import { formatDateTime, getStatusColor, getStatusLabel } from "@/lib/utils";
import type { Extraction, ExtractedData } from "@/lib/types";
import { ArrowLeft, Pencil, Check, X } from "lucide-react";

export default function ExtractionDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const { getExtraction, updateExtraction, deleteExtraction } = useExtraction();

  const [extraction, setExtraction] = useState<Extraction | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [editedData, setEditedData] = useState<ExtractedData | null>(null);

  const extractionId = params.id as string;

  useEffect(() => {
    const loadExtraction = async () => {
      setIsLoading(true);
      const data = await getExtraction(extractionId);
      if (data) {
        setExtraction(data);
        setEditedData(data.extracted_data);
      } else {
        toast({
          title: "Not found",
          description: "Could not load the extraction",
          variant: "destructive",
        });
        router.push("/dashboard");
      }
      setIsLoading(false);
    };

    loadExtraction();
  }, [extractionId, getExtraction, router, toast]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    if (extraction) {
      setEditedData(extraction.extracted_data);
    }
  };

  const handleSave = async () => {
    if (!editedData) return;

    setIsSaving(true);
    const success = await updateExtraction(extractionId, editedData, "reviewed");

    if (success) {
      setExtraction((prev) =>
        prev
          ? {
              ...prev,
              extracted_data: editedData,
              status: "reviewed",
              updated_at: new Date().toISOString(),
            }
          : null
      );
      setIsEditing(false);
      toast({
        title: "Saved",
        description: "Changes have been saved",
        variant: "success",
      });
    } else {
      toast({
        title: "Save failed",
        description: "Could not save changes",
        variant: "destructive",
      });
    }
    setIsSaving(false);
  };

  const handleConfirm = async () => {
    if (!editedData) return;

    setIsSaving(true);
    const success = await updateExtraction(
      extractionId,
      editedData,
      "confirmed"
    );

    if (success) {
      setExtraction((prev) =>
        prev
          ? {
              ...prev,
              status: "confirmed",
              confirmed_at: new Date().toISOString(),
            }
          : null
      );
      toast({
        title: "Confirmed",
        description: "Extraction has been confirmed",
        variant: "success",
      });
    } else {
      toast({
        title: "Confirmation failed",
        description: "Could not confirm extraction",
        variant: "destructive",
      });
    }
    setIsSaving(false);
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this extraction?")) return;

    const success = await deleteExtraction(extractionId);
    if (success) {
      toast({
        title: "Deleted",
        description: "Extraction has been deleted",
        variant: "success",
      });
      router.push("/dashboard");
    } else {
      toast({
        title: "Delete failed",
        description: "Could not delete extraction",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return <FullPageLoader text="Loading extraction..." />;
  }

  if (!extraction || !editedData) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <p className="text-lg font-medium">Extraction not found</p>
        <Link href="/dashboard" className="mt-4">
          <Button>Back to Dashboard</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold tracking-tight">
                {extraction.file_name}
              </h1>
              <Badge
                variant="outline"
                className={getStatusColor(extraction.status)}
              >
                {getStatusLabel(extraction.status)}
              </Badge>
            </div>
            <p className="text-muted-foreground">
              Uploaded {formatDateTime(extraction.created_at)}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {isEditing ? (
            <>
              <Button variant="outline" onClick={handleCancel}>
                <X className="mr-2 h-4 w-4" />
                Cancel
              </Button>
              <Button onClick={handleSave} disabled={isSaving}>
                <Check className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </>
          ) : (
            <>
              {extraction.status !== "confirmed" && (
                <>
                  <Button variant="outline" onClick={handleEdit}>
                    <Pencil className="mr-2 h-4 w-4" />
                    Edit
                  </Button>
                  <Button onClick={handleConfirm} disabled={isSaving}>
                    <Check className="mr-2 h-4 w-4" />
                    Confirm
                  </Button>
                </>
              )}
              <Button
                variant="ghost"
                className="text-destructive hover:bg-destructive/10 hover:text-destructive"
                onClick={handleDelete}
              >
                Delete
              </Button>
            </>
          )}
        </div>
      </div>

      {/* Content - Split Screen */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Document Viewer */}
        <div className="lg:sticky lg:top-8 lg:self-start">
          <DocumentViewer
            fileUrl={extraction.file_url}
            className="h-[600px]"
          />
        </div>

        {/* Extracted Data Form */}
        <div>
          <ExtractedDataForm
            data={editedData}
            onChange={setEditedData}
            fileName={extraction.file_name.replace(/\.[^/.]+$/, "")}
            readOnly={!isEditing}
          />
        </div>
      </div>
    </div>
  );
}
