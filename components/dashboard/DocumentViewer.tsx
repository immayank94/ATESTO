"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ZoomIn, ZoomOut, RotateCw } from "lucide-react";
import { cn } from "@/lib/utils";

interface DocumentViewerProps {
  file?: File;
  fileUrl?: string;
  className?: string;
}

export function DocumentViewer({ file, fileUrl, className }: DocumentViewerProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [zoom, setZoom] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [isPdf, setIsPdf] = useState(false);
  const [pdfError, setPdfError] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (fileUrl) {
      setImageUrl(fileUrl);
      setIsPdf(fileUrl.toLowerCase().endsWith('.pdf'));
      return;
    }

    if (!file) {
      setImageUrl(null);
      return;
    }

    const isPdfFile = file.type === "application/pdf";
    setIsPdf(isPdfFile);

    if (isPdfFile) {
      renderPdf(file);
    } else {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [file, fileUrl]);

  const renderPdf = async (pdfFile: File) => {
    try {
      const pdfjsLib = await import("pdfjs-dist");
      pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

      const arrayBuffer = await pdfFile.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      const page = await pdf.getPage(1);

      const scale = 1.5;
      const viewport = page.getViewport({ scale });

      const canvas = canvasRef.current;
      if (!canvas) return;

      const context = canvas.getContext("2d");
      if (!context) return;

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      await page.render({
        canvasContext: context,
        viewport: viewport,
      }).promise;

      setImageUrl(canvas.toDataURL());
      setPdfError(false);
    } catch (error) {
      console.error("Error rendering PDF:", error);
      setPdfError(true);
    }
  };

  const handleZoomIn = () => setZoom((z) => Math.min(z + 25, 200));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 25, 50));
  const handleRotate = () => setRotation((r) => (r + 90) % 360);

  if (!file && !fileUrl) {
    return (
      <div className={cn("flex items-center justify-center rounded-lg border-2 border-dashed bg-muted/50 p-8", className)}>
        <p className="text-muted-foreground">No document uploaded</p>
      </div>
    );
  }

  if (pdfError) {
    return (
      <div className={cn("flex items-center justify-center rounded-lg border bg-muted/50 p-8", className)}>
        <p className="text-muted-foreground">
          Could not render PDF. Please use an image format (PNG, JPG) for best results.
        </p>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col rounded-lg border bg-card", className)}>
      {/* Toolbar */}
      <div className="flex items-center justify-between border-b p-2">
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" onClick={handleZoomOut}>
            <ZoomOut className="h-4 w-4" />
          </Button>
          <span className="min-w-[4rem] text-center text-sm">{zoom}%</span>
          <Button variant="ghost" size="icon" onClick={handleZoomIn}>
            <ZoomIn className="h-4 w-4" />
          </Button>
        </div>
        <Button variant="ghost" size="icon" onClick={handleRotate}>
          <RotateCw className="h-4 w-4" />
        </Button>
      </div>

      {/* Document */}
      <div className="flex-1 overflow-auto p-4">
        <div className="flex min-h-[400px] items-center justify-center">
          {isPdf && <canvas ref={canvasRef} className="hidden" />}
          {imageUrl && (
            <img
              src={imageUrl}
              alt="Document preview"
              className="max-w-full transition-transform"
              style={{
                transform: `scale(${zoom / 100}) rotate(${rotation}deg)`,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
