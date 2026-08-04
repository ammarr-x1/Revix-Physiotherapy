'use client';

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function SymptomCheckerError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Symptom Checker error boundary caught:", error);
  }, [error]);

  return (
    <div className="w-full min-h-screen bg-linear-to-b from-cyan-50/30 to-background flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl border border-border shadow-xs p-8 max-w-lg w-full text-center space-y-6">
        <h2 className="text-xl font-bold text-brand-dark">Something went wrong!</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          An error occurred while loading the Symptom Checker. Please try resetting the page or contact our team if the issue persists.
        </p>
        <div className="flex justify-center gap-3">
          <Button onClick={reset} className="rounded-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold">
            Try Again
          </Button>
          <Button variant="outline" asChild className="rounded-full font-semibold border-cyan-200 text-cyan-700 hover:bg-cyan-50">
            <a href="/">Go to Homepage</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
