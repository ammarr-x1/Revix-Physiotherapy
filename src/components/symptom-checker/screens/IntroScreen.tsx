import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, HeartPulse } from "lucide-react";

interface IntroScreenProps {
  onStart: () => void;
}

export default function IntroScreen({ onStart }: IntroScreenProps) {
  return (
    <div className="flex flex-col items-center text-center max-w-2xl mx-auto py-8 px-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="relative size-24 mb-6 rounded-full bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 shadow-xs">
        <HeartPulse className="size-12 animate-pulse" />
      </div>
      
      <h1 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight mb-4">
        Understand your pain.<br />Get guided to the right care.
      </h1>
      
      <p className="text-muted-foreground text-base md:text-lg max-w-lg mb-8 leading-relaxed">
        Answer a few quick questions about what you're feeling. We'll point you toward likely causes, simple self-care, and the right Revix specialist for your situation — in under two minutes.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
        <Button onClick={onStart} size="lg" className="rounded-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold flex items-center justify-center gap-2">
          Start Symptom Check <ArrowRight className="size-4" />
        </Button>
        <Button variant="outline" size="lg" asChild className="rounded-full font-semibold border-cyan-200 text-cyan-700 hover:bg-cyan-50">
          <a href="tel:+923251510459">
            <Phone className="size-4 mr-1 text-cyan-600" /> Call Us Now
          </a>
        </Button>
      </div>
    </div>
  );
}
