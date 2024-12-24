import { RiskLevel } from "@/lib/types";

export default function Summary({ riskLevel }: { riskLevel: RiskLevel }) {
  const low = "This website appears to be safe, with no significant indicators of malicious activity. However, always exercise caution when sharing personal information online."
  const likely = "This website exhibits suspicious characteristics and is likely a phishing site designed to steal personal or financial information. Be cautious, as engaging with it could put your data or money at risk."
  const summary = riskLevel === "LOW" ? low : likely;

  return (
    <div className="py-8 border-b-2">
      <div className="summary leading-7">
        <h1 className="text-2xl font-semibold py-4 tracking-wider">
          Summary
        </h1>
        <p className="tracking-wide">
          {summary}
        </p>
      </div>
    </div>
  )
}
