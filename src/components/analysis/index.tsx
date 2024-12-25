import { AnalysisResponse, RiskLevel } from "@/lib/types";
import Screenshots from "./Screenshots";
import Summary from "./Summary";
import TopicFindings from "./TopicFindings";

export default function Analysis({ response }: { response: AnalysisResponse }) {
  const { findings } = response;
  return (
    <div className="py-12">
      <Summary riskLevel={findings.riskLevel as RiskLevel} />
      <Screenshots screenshots={findings.screenshots} />
      <TopicFindings topicFinding={findings.topicFinding} />
    </div>
  )
}
