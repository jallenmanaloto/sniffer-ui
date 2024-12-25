import Analysis from "@/components/analysis";
import Header from "@/components/header"
import Lookup from "@/components/lookup/Lookup";
import { responseData } from "@/data/mock";

export default function Home() {
  return (
    <div className="w-screen h-screen dark:bg-slate-900">
      <main className="container mx-auto px-8 lg:px-36">
        <Header />
        <Lookup />
        <Analysis response={responseData} />
      </main>
    </div>
  );
}
