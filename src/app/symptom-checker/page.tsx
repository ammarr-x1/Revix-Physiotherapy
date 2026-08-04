import React from "react";
import { Metadata } from "next";
import SymptomCheckerWizard from "@/components/symptom-checker/SymptomCheckerWizard";

export const metadata: Metadata = {
  title: 'AI Symptom Checker & Guide',
  description:
    'Answer a few quick questions about your pain or discomfort. Get guided to likely causes, general self-care tips, and the right Revix physiotherapy specialist — in under two minutes.',
  alternates: { canonical: 'https://revixphysiotherapy.com/symptom-checker' },
  robots: { index: false, follow: false },
  openGraph: {
    title: 'AI Symptom Checker | Revix Physio Care',
    description:
      'Use our AI-powered symptom checker to understand your pain and find the right physiotherapy specialist at Revix Physio Care.',
    url: 'https://revixphysiotherapy.com/symptom-checker',
  },
  twitter: {
    card: 'summary',
    title: 'AI Symptom Checker | Revix Physio Care',
    description: 'Find out what your pain might mean and which physiotherapist can help.',
  },
};

export default function SymptomCheckerPage() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-cyan-50/30 to-background pt-24 md:pt-32">
      {/* Disclaimer Strip */}
      <div className="bg-foreground text-background text-xs text-center py-2 px-4 leading-normal">
        ⚕ <strong>General information only</strong> — this tool does not provide a medical diagnosis. Always consult a qualified physiotherapist for assessment and treatment.
      </div>

      <div className="container mx-auto max-w-4xl px-4 py-8 md:py-12">
        <div className="bg-card text-card-foreground rounded-2xl border border-border shadow-xs p-6 md:p-10">
          <SymptomCheckerWizard />
        </div>
      </div>
    </div>
  );
}
