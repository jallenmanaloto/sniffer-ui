import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { CircleAlert } from "lucide-react";

export default function Disclaimer() {
  return (
    <div className="py-6">
      <Alert>
        <CircleAlert className="h-4 w-4" />
        <AlertTitle className="font-bold">Disclaimer</AlertTitle>
        <AlertDescription className="tracking-wide leading-5">
          While this app provides an analysis of whether a website is likely to be a scam, it should not be relied upon as the sole method for determining the safety of a website. Always exercise caution and verify links from trusted sources before interacting with them.
        </AlertDescription>
      </Alert>
    </div>
  )
}
