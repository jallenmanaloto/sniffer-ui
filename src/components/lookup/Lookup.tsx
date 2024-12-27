import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Lookup({ available }: { available: boolean | undefined }) {
  return (
    <div className="lg:flex lg:justify-center">
      <div className="lookup-container grid grid-cols-4 gap-y-3 gap-x-5 lg:w-3/4">
        <Input
          className="col-span-4 sm:col-span-3 border-gray-300"
          placeholder="Paste URL here"
        />
        <Button
          className="col-span-4 sm:col-span-1 bg-teal-700 hover:bg-teal-500/75 text-slate-200 dark:bg-teal-500/75 dark:hover:bg-teal-700 dark:text-slate-200"
          disabled={available}
        >
          <h2 className="text-lg">
            Lookup
          </h2>
        </Button>
      </div>
    </div>
  )
}
