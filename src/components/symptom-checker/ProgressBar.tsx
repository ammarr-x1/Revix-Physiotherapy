import React from "react";

interface ProgressBarProps {
  step: number;
  totalSteps?: number;
}

export default function ProgressBar({ step, totalSteps = 4 }: ProgressBarProps) {
  return (
    <div className="flex items-center gap-1.5 justify-center my-4 w-full max-w-md mx-auto">
      {Array.from({ length: totalSteps }).map((_, i) => {
        const isActive = i + 1 <= step;
        return (
          <div
            key={i}
            className={`h-1.5 flex-1 max-w-[60px] rounded-full transition-all duration-300 ${
              isActive ? "bg-gradient-to-r from-cyan-500 to-primary shadow-xs" : "bg-muted border border-border"
            }`}
          />
        );
      })}
    </div>
  );
}
