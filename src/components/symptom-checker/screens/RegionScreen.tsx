import React from "react";
import { REGIONS } from "@/lib/symptom-checker/constants";
import { RegionKey } from "@/lib/symptom-checker/types";
import { Button } from "@/components/ui/button";
import ProgressBar from "../ProgressBar";
import RegionIcon from "../RegionIcon";

interface RegionScreenProps {
  selectedRegion: RegionKey | null;
  onSelectRegion: (k: RegionKey) => void;
  onBack: () => void;
  onContinue: () => void;
}

export default function RegionScreen({
  selectedRegion,
  onSelectRegion,
  onBack,
  onContinue
}: RegionScreenProps) {
  return (
    <div className="max-w-3xl mx-auto py-4 px-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <ProgressBar step={1} />
      <div className="text-center mb-6">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Step 1 of 4</div>
        <h2 className="text-2xl font-bold text-foreground">Where does it hurt?</h2>
        <p className="text-sm text-muted-foreground mt-1">Pick the area that's bothering you most.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 my-6" role="group" aria-label="Body region selection">
        {REGIONS.map((r) => {
          const isSelected = selectedRegion === r.k;
          return (
            <button
              key={r.k}
              type="button"
              onClick={() => onSelectRegion(r.k)}
              aria-pressed={isSelected}
              className={`flex flex-col items-center justify-center p-4 rounded-xl border text-center transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "bg-primary/10 border-primary text-primary shadow-sm ring-1 ring-primary"
                  : "bg-card border-border text-card-foreground hover:border-primary/50 hover:shadow-xs hover:-translate-y-0.5"
              }`}
            >
              <div className={`p-2 rounded-lg mb-2 ${isSelected ? "text-primary bg-primary/20" : "text-muted-foreground bg-muted"}`}>
                <RegionIcon name={r.k} className="size-6" />
              </div>
              <span className="text-xs sm:text-sm font-semibold">{r.l}</span>
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
          disabled={!selectedRegion}
          className="font-semibold bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg px-6"
        >
          Continue →
        </Button>
      </div>
    </div>
  );
}
