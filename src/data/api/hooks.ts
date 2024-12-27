import { useMutation, useQuery } from "@tanstack/react-query";
import { analyze, healthCheck } from "./api";

export function useAnalyze() {
  return useMutation({
    mutationFn: async (urls: string[]) => {
      return analyze(urls);
    },
    mutationKey: ["analyze"],
  });
}

export function useHealthCheck() {
  return useQuery({
    queryFn: async () => healthCheck(),
    queryKey: ["healthCheck"],
  });
}
