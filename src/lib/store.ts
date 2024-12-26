import { create } from "zustand";
import { AnalysisResponse } from "./types";

export type TAnalysisStore = {
  analysisResponse: AnalysisResponse | null;
  setAnalysisResponse: (analysisResponse: AnalysisResponse) => void;
}

export const useAnalysis = create<TAnalysisStore>((set) => ({
  analysisResponse: null,
  setAnalysisResponse: (analysisResponse: AnalysisResponse) => set({ analysisResponse: analysisResponse }),
}));

export type TServiceStore = {
  available: boolean;
  setAvailable: (available: boolean) => void;
}

export const useService = create<TServiceStore>((set) => ({
  available: true,
  setAvailable: (available: boolean) => set({ available: available }),
}));
