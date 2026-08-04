import React from "react";

export default function SymptomCheckerLoading() {
  return (
    <div className="w-full min-h-screen bg-linear-to-b from-cyan-50/30 to-background flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl border border-border shadow-xs p-8 max-w-lg w-full text-center space-y-4">
        <div className="h-6 w-32 bg-muted animate-pulse rounded-md mx-auto" />
        <div className="h-10 w-64 bg-muted animate-pulse rounded-md mx-auto" />
        <div className="h-20 w-full bg-muted animate-pulse rounded-md mx-auto" />
        <div className="h-12 w-40 bg-muted animate-pulse rounded-full mx-auto" />
      </div>
    </div>
  );
}
