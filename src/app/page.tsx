import Header from "@/components/header"
import Lookup from "@/components/lookup/Lookup";

export default function Home() {
  return (
    <div className="w-screen h-screen dark:bg-slate-900">
      <main className="container mx-auto px-8">
        <Header />
        <Lookup />
      </main>
    </div>
  );
}
