"use client"

import Analysis from "@/components/analysis";
import Disclaimer from "@/components/disclaimer";
import Footer from "@/components/footer";
import Header from "@/components/header"
import Lookup from "@/components/lookup/Lookup";
import { responseData } from "@/data/mock";
import { useHealthCheck } from "@/data/api/hooks";
import { useAnalysis } from "@/lib/store";
import { Info } from "lucide-react";
import Loading from "@/components/loading/Loading";

function UnavailableService() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex gap-2 py-2 lg:w-3/4">
        <Info className="text-red-400 dark:text-red-400/80 h-5 w-5" />
        <p className="text-red-400 dark:text-red-400/80">
          This service is currently not available.
        </p>
      </div>
    </div>
  )
}

export default function Home() {
  const { data: health } = useHealthCheck();
  const { analysisResponse, isAnalyzing } = useAnalysis();

  return (
    <div className="flex flex-col min-h-screen w-screen dark:bg-slate-900">
      <Header />
      <main className="container flex-grow mx-auto px-8 lg:px-36">
        <Disclaimer />
        <Lookup available={health} />
        {health ? <UnavailableService /> : null}
        {analysisResponse === null ? null : isAnalyzing ? (
          <Loading />
        ) : (
          <Analysis response={responseData} />
        )}
      </main>
      <Footer />
    </div>
  );
}
