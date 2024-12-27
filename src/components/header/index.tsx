import DarkMode from "./DarkMode";
import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b-2">
      <div className="header-wrapper container mx-auto px-8 lg:px-36">
        <div className="flex items-center justify-between py-4">
          <Link href="/">
            <h1 className="text-4xl font-bold text-teal-700 dark:text-teal-500/75">
              BaitSniffer
            </h1>
          </Link>
          <div>
            <DarkMode />
          </div>
        </div>
      </div>
    </header>
  )
}
