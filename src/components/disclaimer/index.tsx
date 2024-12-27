"use client"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { CircleAlert } from "lucide-react";
import { useState } from "react";

export default function Disclaimer() {
  const [readDisclaimer, setReadDisclaimer] = useState(false);
  const readingDisclaimer = "While this app provides an analysis of whether a website is likely to be a scam, it should not be relied upon as the sole method for determining the safety of a website. Always exercise caution and verify links from trusted sources before interacting with them.";

  return (
    <div className="lg:flex lg:justify-center">
      <div className="py-6 lg:w-3/4">
        <div className="block md:hidden" onClick={() => setReadDisclaimer(!readDisclaimer)}>
          <Alert>
            <CircleAlert className="h-4 w-4" />
            <AlertTitle className="font-bold">
              {readDisclaimer ? "Disclaimer" : "Click to read disclaimer"}
            </AlertTitle>
            <AlertDescription className={`h-auto md:h-full tracking-wide leading-5`}>
              {readDisclaimer ? readingDisclaimer : ""}
            </AlertDescription>
          </Alert>
        </div>
        <div className="hidden md:block">
          <Alert>
            <CircleAlert className="h-4 w-4" />
            <AlertTitle className="font-bold dark:text-slate-100/90">Disclaimer</AlertTitle>
            <AlertDescription className="md:h-full tracking-wide leading-5 dark:text-slate-100/70">
              While this app provides an analysis of whether a website is likely to be a scam, it should not be relied upon as the sole method for determining the safety of a website. Always exercise caution and verify links from trusted sources before interacting with them.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  )
}
