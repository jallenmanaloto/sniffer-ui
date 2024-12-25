import Analysis from "@/components/analysis";
import Disclaimer from "@/components/disclaimer";
import Footer from "@/components/footer";
import Header from "@/components/header"
import Lookup from "@/components/lookup/Lookup";
import { responseData } from "@/data/mock";

export default function Home() {
  return (
    <div className="w-screen dark:bg-slate-900">
      <Header />
      <main className="container mx-auto px-8 lg:px-36">
        <Disclaimer />
        <Lookup />
        <Analysis response={responseData} />
      </main>
      <Footer />
    </div>
  );
}
