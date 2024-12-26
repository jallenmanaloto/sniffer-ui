import { useMutation, useQuery } from "@tanstack/react-query";
import { analyze, healthCheck } from "./api";
import { useAnalysis } from "@/lib/store";
import { AnalysisResponse } from "@/lib/types";

export function useAnalyze() {
  return useMutation({
    mutationFn: async (urls: string[]) => analyze(urls),
    mutationKey: ["analyze"],
    onSuccess: async (data: AnalysisResponse) => {
      const { setAnalysisResponse } = useAnalysis();
      setAnalysisResponse(data);
    },
    onError: () => {
      console.error("Error analyzing",)
    }
  });
}

export function useHealthCheck() {
  return useQuery({
    queryFn: async () => healthCheck(),
    queryKey: ["healthCheck"],
  });
}
