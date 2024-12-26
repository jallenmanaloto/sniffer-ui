"use client"

import Analysis from "@/components/analysis";
import Disclaimer from "@/components/disclaimer";
import Footer from "@/components/footer";
import Header from "@/components/header"
import Lookup from "@/components/lookup/Lookup";
import { responseData } from "@/data/mock";
import { useHealthCheck } from "@/data/api/hooks";

export default function Home() {
  const { data: health } = useHealthCheck();

  return (
    <div className="w-screen dark:bg-slate-900">
      <Header />
      <main className="container mx-auto px-8 lg:px-36">
        <Disclaimer />
        <Lookup available={health} />
        <Analysis response={responseData} />
      </main>
      <Footer />
    </div>
  );
}
