import React from "react";
import { RED_FLAGS } from "@/lib/symptom-checker/constants";
import { Button } from "@/components/ui/button";
import ProgressBar from "../ProgressBar";

interface SafetyScreenProps {
  selectedRedFlags: string[];
  onToggleRedFlag: (flag: string) => void;
  onClearRedFlags: () => void;
  onBack: () => void;
  onSubmit: () => void;
}

export default function SafetyScreen({
  selectedRedFlags,
  onToggleRedFlag,
  onClearRedFlags,
  onBack,
  onSubmit
}: SafetyScreenProps) {
  const isNoneChecked = selectedRedFlags.length === 0;

  const handleNoneChange = (checked: boolean) => {
    if (checked) {
      onClearRedFlags();
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-4 px-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <ProgressBar step={4} />
      <div className="text-center mb-6">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Step 4 of 4 · Quick safety check</div>
        <h2 className="text-2xl font-bold text-foreground">Does any of this apply to you?</h2>
        <p className="text-sm text-muted-foreground mt-1">This helps us flag anything that needs urgent attention. Select all that apply.</p>
      </div>

      <div className="space-y-3">
        {/* Red Flags List Card */}
        <div className="bg-card rounded-xl border border-border p-3 divide-y divide-border">
          {RED_FLAGS.map((flag) => {
            const isChecked = selectedRedFlags.includes(flag);
            return (
              <label key={flag} className="flex gap-3 items-start py-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => onToggleRedFlag(flag)}
                  className="mt-1 size-4 rounded border-border text-destructive accent-destructive cursor-pointer"
                />
                <span className="text-sm text-foreground leading-relaxed">{flag}</span>
              </label>
            );
          })}
        </div>

        {/* None Option Card */}
        <div className="bg-card rounded-xl border border-border p-4">
          <label className="flex gap-3 items-center cursor-pointer select-none">
            <input
              type="checkbox"
              checked={isNoneChecked}
              onChange={(e) => handleNoneChange(e.target.checked)}
              className="size-4 rounded border-border text-primary accent-primary cursor-pointer"
            />
            <span className="text-sm font-bold text-foreground">None of these apply to me</span>
          </label>
        </div>
      </div>

      <div className="flex justify-end gap-3 mt-8 border-t border-border pt-4">
        <Button variant="ghost" onClick={onBack} className="font-semibold text-muted-foreground hover:bg-muted">
          ← Back
        </Button>
        <Button
          onClick={onSubmit}
          className="font-semibold bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg px-6"
        >
          Get My Results →
        </Button>
      </div>
    </div>
  );
}
