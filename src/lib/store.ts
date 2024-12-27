import { create } from "zustand";
import { AnalysisResponse } from "./types";

export type TAnalysisStore = {
  analysisResponse: AnalysisResponse | null;
  isAnalyzing: boolean;
  setAnalysisResponse: (analysisResponse: AnalysisResponse) => void;
  setIsAnalyzing: (isAnalyzing: boolean) => void;
}

export const useAnalysis = create<TAnalysisStore>((set) => ({
  analysisResponse: null,
  isAnalyzing: false,
  setAnalysisResponse: (analysisResponse: AnalysisResponse) => set({ analysisResponse: analysisResponse }),
  setIsAnalyzing: (isAnalyzing: boolean) => set({ isAnalyzing: isAnalyzing }),
}));

export type TServiceStore = {
  notAvailable: boolean;
  setNotAvailable: (notAvailable: boolean) => void;
}

export const useService = create<TServiceStore>((set) => ({
  notAvailable: true,
  setNotAvailable: (notAvailable: boolean) => set({ notAvailable: notAvailable }),
}));
