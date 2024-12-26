"use client"

import Analysis from "@/components/analysis";
import Disclaimer from "@/components/disclaimer";
import Footer from "@/components/footer";
import Header from "@/components/header"
import Lookup from "@/components/lookup/Lookup";
import { responseData } from "@/data/mock";
import { useHealthCheck } from "@/data/api/hooks";
import { useAnalysis } from "@/lib/store";

export default function Home() {
  const { data: health } = useHealthCheck();
  const { analysisResponse } = useAnalysis();

  return (
    <div className="flex flex-col min-h-screen w-screen dark:bg-slate-900">
      <Header />
      <main className="container flex-grow mx-auto px-8 lg:px-36">
        <Disclaimer />
        <Lookup available={health} />
        {analysisResponse === null ? null : <Analysis response={responseData} />}
      </main>
      <Footer />
    </div>
  );
}
