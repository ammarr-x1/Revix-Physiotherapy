import React from "react";
import { Onset, Duration } from "@/lib/symptom-checker/types";
import { getSeverityLabel } from "@/lib/symptom-checker/helpers";
import { Button } from "@/components/ui/button";
import ProgressBar from "../ProgressBar";

interface DetailsScreenProps {
  onset: Onset | null;
  duration: Duration | null;
  severity: number;
  freeText: string;
  onChangeOnset: (o: Onset) => void;
  onChangeDuration: (d: Duration) => void;
  onChangeSeverity: (s: number) => void;
  onChangeFreeText: (t: string) => void;
  onBack: () => void;
  onContinue: () => void;
}

export default function DetailsScreen({
  onset,
  duration,
  severity,
  freeText,
  onChangeOnset,
  onChangeDuration,
  onChangeSeverity,
  onChangeFreeText,
  onBack,
  onContinue
}: DetailsScreenProps) {
  const isFormValid = onset && duration;

  return (
    <div className="max-w-2xl mx-auto py-4 px-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <ProgressBar step={3} />
      <div className="text-center mb-6">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Step 3 of 4</div>
        <h2 className="text-2xl font-bold text-foreground">A few more details</h2>
      </div>

      <div className="space-y-6">
        {/* Onset */}
        <div className="space-y-2">
          <label className="block text-sm font-bold text-foreground">How did it start?</label>
          <div className="flex flex-wrap gap-2">
            {(["Suddenly", "Gradually over time", "Not sure"] as Onset[]).map((o) => {
              const isSelected = onset === o;
              return (
                <button
                  key={o}
                  type="button"
                  onClick={() => onChangeOnset(o)}
                  className={`py-2 px-4 text-sm font-semibold rounded-full border transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? "bg-primary text-primary-foreground border-primary shadow-sm"
                      : "bg-card border-border text-card-foreground hover:border-primary/50"
                  }`}
                >
                  {o}
                </button>
              );
            })}
          </div>
        </div>

        {/* Duration */}
        <div className="space-y-2">
          <label className="block text-sm font-bold text-foreground">How long has it been going on?</label>
          <div className="flex flex-wrap gap-2">
            {(["Today / yesterday", "A few days", "1–4 weeks", "More than a month"] as Duration[]).map((d) => {
              const isSelected = duration === d;
              return (
                <button
                  key={d}
                  type="button"
                  onClick={() => onChangeDuration(d)}
                  className={`py-2 px-4 text-sm font-semibold rounded-full border transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? "bg-primary text-primary-foreground border-primary shadow-sm"
                      : "bg-card border-border text-card-foreground hover:border-primary/50"
                  }`}
                >
                  {d}
                </button>
              );
            })}
          </div>
        </div>

        {/* Severity */}
        <div className="space-y-2">
          <label className="block text-sm font-bold text-foreground">How would you rate it right now?</label>
          <div className="bg-card p-4 rounded-xl border border-border space-y-3">
            <input
              type="range"
              min="1"
              max="10"
              value={severity}
              onChange={(e) => onChangeSeverity(Number(e.target.value))}
              className="w-full h-1.5 bg-muted rounded-lg appearance-none cursor-pointer accent-primary focus:outline-none"
            />
            <div className="flex justify-between items-center text-xs text-muted-foreground">
              <span>Barely noticeable</span>
              <span className="text-sm font-bold text-foreground bg-muted px-2.5 py-0.5 rounded-full border border-border">
                {severity}/10 · {getSeverityLabel(severity)}
              </span>
              <span>Worst imaginable</span>
            </div>
          </div>
        </div>

        {/* Free text */}
        <div className="space-y-2">
          <label className="block text-sm font-bold text-foreground">
            Anything else worth mentioning? <span className="text-muted-foreground font-normal">(optional)</span>
          </label>
          <textarea
            value={freeText}
            onChange={(e) => onChangeFreeText(e.target.value)}
            placeholder="e.g. it's worse in the morning, or after sitting for long periods..."
            className="w-full min-h-[90px] p-3 text-sm rounded-xl border border-border bg-card text-card-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
          />
        </div>
      </div>

      <div className="flex justify-end gap-3 mt-8 border-t border-border pt-4">
        <Button variant="ghost" onClick={onBack} className="font-semibold text-muted-foreground hover:bg-muted">
          ← Back
        </Button>
        <Button
          onClick={onContinue}
          disabled={!isFormValid}
          className="font-semibold bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg px-6"
        >
          Continue →
        </Button>
      </div>
    </div>
  );
}
