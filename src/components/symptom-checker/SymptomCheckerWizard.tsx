'use client';

import React, { useReducer, useTransition } from "react";
import { RegionKey } from "@/lib/symptom-checker/types";
import { symptomReducer, initialState } from "@/lib/symptom-checker/reducer";
import { REGIONS } from "@/lib/symptom-checker/constants";
import { analyzeSymptoms } from "@/app/actions/symptom-checker";
import IntroScreen from "./screens/IntroScreen";
import RegionScreen from "./screens/RegionScreen";
import FeelingsScreen from "./screens/FeelingsScreen";
import DetailsScreen from "./screens/DetailsScreen";
import SafetyScreen from "./screens/SafetyScreen";
import LoadingScreen from "./screens/LoadingScreen";
import UrgentScreen from "./screens/UrgentScreen";
import ResultScreen from "./screens/ResultScreen";

export default function SymptomCheckerWizard() {
  const [state, dispatch] = useReducer(symptomReducer, initialState);
  const [, startTransition] = useTransition();

  const handleStart = () => dispatch({ type: "SET_SCREEN", payload: "region" });
  const handleSelectRegion = (k: RegionKey) => dispatch({ type: "SET_REGION", payload: k });
  const handleToggleFeeling = (f: string) => dispatch({ type: "TOGGLE_FEELING", payload: f });
  
  const handleToggleRedFlag = (flag: string) => dispatch({ type: "TOGGLE_RED_FLAG", payload: flag });
  const handleClearRedFlags = () => dispatch({ type: "CLEAR_RED_FLAGS" });

  const handleReset = () => dispatch({ type: "RESET" });

  const handleAIRequest = async () => {
    dispatch({ type: "SET_SCREEN", payload: "loading" });

    const regionLabel = REGIONS.find(r => r.k === state.region)?.l || state.region || "Unknown";

    const intake = {
      region: regionLabel,
      feelings: state.feelings,
      onset: state.onset,
      duration: state.duration,
      severity: state.severity,
      notes: state.freeText
    };

    startTransition(async () => {
      const response = await analyzeSymptoms(intake);
      if (response.success && response.data) {
        dispatch({ type: "SET_RESULT", payload: response.data });
        dispatch({ type: "SET_SCREEN", payload: "result" });
      } else {
        dispatch({ type: "SET_ERROR", payload: response.error || "An error occurred during symptom analysis." });
        dispatch({ type: "SET_SCREEN", payload: "result" });
      }
    });
  };

  const handleSubmitIntake = () => {
    if (state.redFlags.length > 0) {
      dispatch({ type: "SET_SCREEN", payload: "urgent" });
    } else {
      handleAIRequest();
    }
  };

  const getScreenComponent = () => {
    switch (state.screen) {
      case "intro":
        return <IntroScreen onStart={handleStart} />;
      case "region":
        return (
          <RegionScreen
            selectedRegion={state.region}
            onSelectRegion={handleSelectRegion}
            onBack={() => dispatch({ type: "SET_SCREEN", payload: "intro" })}
            onContinue={() => dispatch({ type: "SET_SCREEN", payload: "feelings" })}
          />
        );
      case "feelings":
        return (
          <FeelingsScreen
            selectedFeelings={state.feelings}
            onToggleFeeling={handleToggleFeeling}
            onBack={() => dispatch({ type: "SET_SCREEN", payload: "region" })}
            onContinue={() => dispatch({ type: "SET_SCREEN", payload: "details" })}
          />
        );
      case "details":
        return (
          <DetailsScreen
            onset={state.onset}
            duration={state.duration}
            severity={state.severity}
            freeText={state.freeText}
            onChangeOnset={(o) => dispatch({ type: "SET_ONSET", payload: o })}
            onChangeDuration={(d) => dispatch({ type: "SET_DURATION", payload: d })}
            onChangeSeverity={(s) => dispatch({ type: "SET_SEVERITY", payload: s })}
            onChangeFreeText={(t) => dispatch({ type: "SET_FREE_TEXT", payload: t })}
            onBack={() => dispatch({ type: "SET_SCREEN", payload: "feelings" })}
            onContinue={() => dispatch({ type: "SET_SCREEN", payload: "safety" })}
          />
        );
      case "safety":
        return (
          <SafetyScreen
            selectedRedFlags={state.redFlags}
            onToggleRedFlag={handleToggleRedFlag}
            onClearRedFlags={handleClearRedFlags}
            onBack={() => dispatch({ type: "SET_SCREEN", payload: "details" })}
            onSubmit={handleSubmitIntake}
          />
        );
      case "loading":
        return <LoadingScreen />;
      case "urgent":
        return <UrgentScreen onReset={handleReset} />;
      case "result":
        return (
          <ResultScreen
            result={state.result}
            error={state.error}
            onReset={handleReset}
            onRetry={handleAIRequest}
          />
        );
      default:
        return <IntroScreen onStart={handleStart} />;
    }
  };

  return (
    <div className="w-full">
      {getScreenComponent()}
    </div>
  );
}
