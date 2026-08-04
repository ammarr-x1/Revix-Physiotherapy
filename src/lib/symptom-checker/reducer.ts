import { SymptomState, SymptomAction } from "./types";

export const initialState: SymptomState = {
  screen: "intro",
  region: null,
  feelings: [],
  onset: null,
  duration: null,
  severity: 5,
  freeText: "",
  redFlags: [],
  result: null,
  error: null
};

export function symptomReducer(state: SymptomState, action: SymptomAction): SymptomState {
  switch (action.type) {
    case "SET_SCREEN":
      return { ...state, screen: action.payload };
    case "SET_REGION":
      return { ...state, region: action.payload };
    case "TOGGLE_FEELING": {
      const feelings = [...state.feelings];
      const idx = feelings.indexOf(action.payload);
      if (idx > -1) {
        feelings.splice(idx, 1);
      } else {
        feelings.push(action.payload);
      }
      return { ...state, feelings };
    }
    case "SET_ONSET":
      return { ...state, onset: action.payload };
    case "SET_DURATION":
      return { ...state, duration: action.payload };
    case "SET_SEVERITY":
      return { ...state, severity: action.payload };
    case "SET_FREE_TEXT":
      return { ...state, freeText: action.payload };
    case "TOGGLE_RED_FLAG": {
      const redFlags = [...state.redFlags];
      const idx = redFlags.indexOf(action.payload);
      if (idx > -1) {
        redFlags.splice(idx, 1);
      } else {
        redFlags.push(action.payload);
      }
      return { ...state, redFlags };
    }
    case "CLEAR_RED_FLAGS":
      return { ...state, redFlags: [] };
    case "SET_RESULT":
      return { ...state, result: action.payload, error: null };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}
