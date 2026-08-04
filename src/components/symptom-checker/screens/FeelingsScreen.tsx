import React from "react";
import { FEELINGS } from "@/lib/symptom-checker/constants";
import { Button } from "@/components/ui/button";
import ProgressBar from "../ProgressBar";

interface FeelingsScreenProps {
  selectedFeelings: string[];
  onToggleFeeling: (feeling: string) => void;
  onBack: () => void;
  onContinue: () => void;
}

export default function FeelingsScreen({
  selectedFeelings,
  onToggleFeeling,
  onBack,
  onContinue
}: FeelingsScreenProps) {
  return (
    <div className="max-w-3xl mx-auto py-4 px-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <ProgressBar step={2} />
      <div className="text-center mb-6">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Step 2 of 4</div>
        <h2 className="text-2xl font-bold text-foreground">What does it feel like?</h2>
        <p className="text-sm text-muted-foreground mt-1">Select all that apply to help us understand the character of the pain.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 my-6" role="group" aria-label="Symptom selection">
        {FEELINGS.map((f) => {
          const isSelected = selectedFeelings.includes(f);
          return (
            <button
              key={f}
              type="button"
              onClick={() => onToggleFeeling(f)}
              aria-pressed={isSelected}
              className={`p-3 text-center text-xs sm:text-sm font-semibold rounded-xl border transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "bg-primary/10 border-primary text-primary shadow-sm ring-1 ring-primary"
                  : "bg-card border-border text-card-foreground hover:border-primary/50 hover:shadow-xs hover:-translate-y-0.5"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      <div className="flex justify-end gap-3 mt-8 border-t border-border pt-4">
        <Button variant="ghost" onClick={onBack} className="font-semibold text-muted-foreground hover:bg-muted">
          ← Back
        </Button>
        <Button
          onClick={onContinue}
          disabled={selectedFeelings.length === 0}
          className="font-semibold bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg px-6"
        >
          Continue →
        </Button>
      </div>
    </div>
  );
}
