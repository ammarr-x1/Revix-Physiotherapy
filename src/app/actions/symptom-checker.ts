'use server';

import { ActionResponse, actionError, actionSuccess } from '@/lib/action-utils';
import { SERVICES } from '@/lib/symptom-checker/constants';
import { AIResponse, SymptomIntake } from '@/lib/symptom-checker/types';
import { z } from 'zod';

const aiResponseSchema = z.object({
  possible_categories: z.array(
    z.object({
      title: z.string(),
      explanation: z.string(),
    })
  ),
  recommended_service: z.string(),
  why_this_service: z.string(),
  self_care_tips: z.array(z.string()),
  questions_for_physio: z.array(z.string()),
});

export async function analyzeSymptoms(intake: SymptomIntake): Promise<ActionResponse<AIResponse>> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return actionError("AI service is not configured (missing Gemini API key).");
  }

  const sysPrompt = `You are a careful health-information assistant for Revix Physio Care, a physiotherapy clinic in Pakistan (Islamabad/Rawalpindi). A visitor completed a symptom intake (NOT a clinical exam). Write a short, careful, plain-language response.

Rules:
- Never give a diagnosis. Use cautious phrasing like "this pattern is sometimes associated with..." or "can sometimes relate to...".
- Do NOT prescribe specific exercises, repetitions, sets, durations, medications, or dosages.
- Self-care tips must stay generic: gentle activity modification, general comfort measures, avoiding clearly aggravating movements — never a specific protocol.
- recommended_service must be EXACTLY one value from this list: ${JSON.stringify(SERVICES)}
- Tone: warm, reassuring, professional, concise.`;

  const userPrompt = `Here is the user's symptom intake details:
- Area bothering them: ${intake.region}
- Feeling descriptors: ${intake.feelings.join(', ')}
- Onset: ${intake.onset}
- Duration: ${intake.duration}
- Current severity: ${intake.severity}/10
- Additional details: ${intake.notes || 'None provided'}`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: sysPrompt }]
          },
          contents: [{
            parts: [{ text: userPrompt }]
          }],
          generationConfig: {
            responseMimeType: 'application/json',
            responseSchema: {
              type: 'OBJECT',
              properties: {
                possible_categories: {
                  type: 'ARRAY',
                  items: {
                    type: 'OBJECT',
                    properties: {
                      title: { type: 'STRING' },
                      explanation: { type: 'STRING' }
                    },
                    required: ['title', 'explanation']
                  }
                },
                recommended_service: { type: 'STRING' },
                why_this_service: { type: 'STRING' },
                self_care_tips: {
                  type: 'ARRAY',
                  items: { type: 'STRING' }
                },
                questions_for_physio: {
                  type: 'ARRAY',
                  items: { type: 'STRING' }
                }
              },
              required: ['possible_categories', 'recommended_service', 'why_this_service', 'self_care_tips', 'questions_for_physio']
            }
          }
        })
      }
    );

    if (!response.ok) {
      console.error('Gemini API call failed:', response.statusText);
      return actionError("Failed to connect to the AI assistant. Please try again.");
    }

    const responseJson = await response.json();
    const responseText = responseJson?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!responseText) {
      console.error('Empty response from Gemini:', responseJson);
      return actionError("Received empty response from the AI assistant.");
    }

    const parsed = JSON.parse(responseText);
    const validated = aiResponseSchema.safeParse(parsed);

    if (!validated.success) {
      console.error('AI response validation failed:', validated.error);
      return actionError("AI response format was invalid.");
    }

    const result = validated.data;
    if (!SERVICES.includes(result.recommended_service)) {
      result.recommended_service = "General Physiotherapy";
    }

    return actionSuccess(result);
  } catch (err) {
    console.error('Symptom checker analysis error:', err);
    return actionError("An unexpected error occurred during symptom analysis.");
  }
}
