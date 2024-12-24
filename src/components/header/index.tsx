import DarkMode from "./DarkMode";

export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-between py-4">
        <h1 className="text-4xl font-bold dark:text-teal-500/75">
          BaitSniffer
        </h1>
        <div>
          <DarkMode />
        </div>
      </div>
    </header>
  )
}
