import React from "react";
import { AIResponse } from "@/lib/symptom-checker/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";

interface ResultScreenProps {
  result: AIResponse | null;
  error: string | null;
  onReset: () => void;
  onRetry: () => void;
}

export default function ResultScreen({ result, error, onReset, onRetry }: ResultScreenProps) {
  if (error) {
    return (
      <div className="max-w-2xl mx-auto py-8 px-4 animate-in fade-in duration-300 space-y-6">
        <div className="bg-destructive/10 border border-destructive/20 text-destructive-foreground rounded-2xl p-6 text-sm md:text-base font-semibold leading-relaxed">
          {error} Please reach out to our team directly and we'll help you right away.
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild className="rounded-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold">
            <a href="tel:+923251510459">
              <Phone className="size-4 mr-1" /> Call Revix Now
            </a>
          </Button>
          <Button asChild className="rounded-full bg-[#149a82] hover:bg-[#118570] text-white font-semibold">
            <a href="https://wa.me/923251510459" target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </a>
          </Button>
          <Button variant="outline" onClick={onRetry} className="rounded-full font-semibold border-cyan-200 text-cyan-700 hover:bg-cyan-50">
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  if (!result) return null;

  return (
    <div className="max-w-2xl mx-auto py-6 px-4 animate-in fade-in duration-300 space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-foreground">Here's what we found</h2>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1">General guidance based on your answers — not a medical diagnosis.</p>
      </div>

      {/* Possible Related Patterns */}
      <div className="bg-card rounded-2xl border border-border p-6 shadow-xs space-y-4">
        <h3 className="font-bold text-foreground text-base border-b border-border pb-2">Possible related patterns</h3>
        <div className="space-y-4">
          {result.possible_categories.map((c, i) => (
            <div key={i} className="space-y-1">
              <div className="font-bold text-foreground text-sm sm:text-base">{c.title}</div>
              <div className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{c.explanation}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Care */}
      <div className="bg-card rounded-2xl border border-border p-6 shadow-xs space-y-4">
        <h3 className="font-bold text-foreground text-base">Recommended care</h3>
        <div className="flex">
          <Badge className="bg-cyan-600 hover:bg-cyan-600 text-white rounded-full font-bold px-4 py-1.5 text-xs sm:text-sm border-none">
            {result.recommended_service}
          </Badge>
        </div>
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{result.why_this_service}</p>
        
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button asChild className="rounded-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold">
            <a href="/contact">
              <Calendar className="size-4 mr-1" /> Book an Appointment
            </a>
          </Button>
          <Button asChild className="rounded-full bg-[#149a82] hover:bg-[#118570] text-white font-semibold">
            <a href="https://wa.me/923251510459" target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </a>
          </Button>
          <Button variant="outline" asChild className="rounded-full font-semibold border-cyan-200 text-cyan-700 hover:bg-cyan-50">
            <a href="tel:+923251510459">
              Call Now
            </a>
          </Button>
        </div>
      </div>

      {/* Self Care */}
      <div className="bg-card rounded-2xl border border-border p-6 shadow-xs space-y-3">
        <h3 className="font-bold text-foreground text-base">General self-care while you wait</h3>
        <ul className="list-disc pl-5 text-xs sm:text-sm text-foreground space-y-2 leading-relaxed">
          {result.self_care_tips.map((tip, i) => (
            <li key={i}>{tip}</li>
          ))}
        </ul>
      </div>

      {/* Questions for Physio */}
      <div className="bg-card rounded-2xl border border-border p-6 shadow-xs space-y-3">
        <h3 className="font-bold text-foreground text-base">Worth asking your physiotherapist</h3>
        <ul className="list-disc pl-5 text-xs sm:text-sm text-foreground space-y-2 leading-relaxed">
          {result.questions_for_physio.map((q, i) => (
            <li key={i}>{q}</li>
          ))}
        </ul>
      </div>

      <div className="text-center pt-4">
        <Button variant="ghost" onClick={onReset} className="font-semibold text-muted-foreground hover:bg-muted">
          Start a New Check
        </Button>
      </div>

      <div className="text-center text-xs text-muted-foreground border-t border-border pt-6 space-y-1">
        <div className="font-bold text-foreground">Revix Physio Care · +92 325 1510459 · revixphysio@gmail.com</div>
        <div>This guide offers general information only and does not replace a professional physiotherapy assessment.</div>
      </div>
    </div>
  );
}
