export type RegionKey =
  | "headjaw"
  | "neck"
  | "shoulder"
  | "elbow"
  | "wrist"
  | "chest"
  | "upperback"
  | "lowerback"
  | "abdomen"
  | "hip"
  | "pelvic"
  | "buttock"
  | "thigh"
  | "knee"
  | "calf"
  | "ankle"
  | "multiple"
  | "other";

export interface Region {
  k: RegionKey;
  l: string;
}

export type Onset = "Suddenly" | "Gradually over time" | "Not sure";
export type Duration = "Today / yesterday" | "A few days" | "1–4 weeks" | "More than a month";

export interface SymptomState {
  screen: "intro" | "region" | "feelings" | "details" | "safety" | "loading" | "urgent" | "result";
  region: RegionKey | null;
  feelings: string[];
  onset: Onset | null;
  duration: Duration | null;
  severity: number;
  freeText: string;
  redFlags: string[];
  result: AIResponse | null;
  error: string | null;
}

export type SymptomAction =
  | { type: "SET_SCREEN"; payload: SymptomState["screen"] }
  | { type: "SET_REGION"; payload: RegionKey | null }
  | { type: "TOGGLE_FEELING"; payload: string }
  | { type: "SET_ONSET"; payload: Onset | null }
  | { type: "SET_DURATION"; payload: Duration | null }
  | { type: "SET_SEVERITY"; payload: number }
  | { type: "SET_FREE_TEXT"; payload: string }
  | { type: "TOGGLE_RED_FLAG"; payload: string }
  | { type: "CLEAR_RED_FLAGS" }
  | { type: "SET_RESULT"; payload: AIResponse }
  | { type: "SET_ERROR"; payload: string | null }
  | { type: "RESET" };

export interface PossibleCategory {
  title: string;
  explanation: string;
}

export interface AIResponse {
  possible_categories: PossibleCategory[];
  recommended_service: string;
  why_this_service: string;
  self_care_tips: string[];
  questions_for_physio: string[];
}

export interface SymptomIntake {
  region: string;
  feelings: string[];
  onset: Onset | null;
  duration: Duration | null;
  severity: number;
  notes: string;
}
