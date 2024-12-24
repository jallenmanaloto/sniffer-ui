import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Lookup() {
  return (
    <div className="lookup-container grid grid-cols-4 gap-y-3 gap-x-5 py-12">
      <Input
        className="col-span-4 sm:col-span-3 border-gray-300"
        placeholder="Paste URL here"
      />
      <Button className="col-span-4 sm:col-span-1 dark:bg-teal-500/75 dark:hover:bg-teal-700 dark:text-slate-200">
        <h2 className="text-lg">
          Lookup
        </h2>
      </Button>
    </div>
  )
}
