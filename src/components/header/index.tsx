import DarkMode from "./DarkMode";

export default function Header() {
  return (
    <header className="border-b-2">
      <div className="header-wrapper container mx-auto px-8 lg:px-36">
        <div className="flex items-center justify-between py-4">
          <h1 className="text-4xl font-bold dark:text-teal-500/75">
            BaitSniffer
          </h1>
          <div>
            <DarkMode />
          </div>
        </div>
      </div>
    </header>
  )
}
