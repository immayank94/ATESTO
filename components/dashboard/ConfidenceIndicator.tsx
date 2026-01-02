"use client";

import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getConfidenceLabel } from "@/lib/utils";

interface ConfidenceIndicatorProps {
  confidence: number;
  showLabel?: boolean;
  showPercentage?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "h-2 w-2",
  md: "h-3 w-3",
  lg: "h-4 w-4",
};

export function ConfidenceIndicator({
  confidence,
  showLabel = false,
  showPercentage = false,
  size = "md",
}: ConfidenceIndicatorProps) {
  const getColor = () => {
    if (confidence >= 80) return "bg-green-500";
    if (confidence >= 50) return "bg-yellow-500";
    return "bg-red-500";
  };

  const indicator = (
    <div className="flex items-center gap-2">
      <div className={cn("rounded-full", sizeClasses[size], getColor())} />
      {showPercentage && (
        <span
          className={cn(
            "text-sm font-medium",
            confidence >= 80
              ? "text-green-700"
              : confidence >= 50
              ? "text-yellow-700"
              : "text-red-700"
          )}
        >
          {confidence}%
        </span>
      )}
      {showLabel && (
        <span className="text-sm text-muted-foreground">
          {getConfidenceLabel(confidence)}
        </span>
      )}
    </div>
  );

  if (!showLabel && !showPercentage) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>{indicator}</TooltipTrigger>
          <TooltipContent>
            <p>
              {confidence}% - {getConfidenceLabel(confidence)}
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return indicator;
}

export function OverallConfidenceScore({ confidence }: { confidence: number }) {
  const getColorClasses = () => {
    if (confidence >= 80)
      return "bg-green-50 border-green-200 text-green-800";
    if (confidence >= 50)
      return "bg-yellow-50 border-yellow-200 text-yellow-800";
    return "bg-red-50 border-red-200 text-red-800";
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-lg border px-4 py-2",
        getColorClasses()
      )}
    >
      <ConfidenceIndicator confidence={confidence} size="lg" />
      <div>
        <p className="text-sm font-medium">{confidence}% Confidence</p>
        <p className="text-xs opacity-75">{getConfidenceLabel(confidence)}</p>
      </div>
    </div>
  );
}
