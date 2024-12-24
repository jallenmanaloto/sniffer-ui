import { RiskLevel, Screenshot } from "@/lib/types";
import Screenshots from "./Screenshots";
import { responseData } from "@/data/mock";
import Summary from "./Summary";
import TopicFindings from "./TopicFindings";

export default function Analysis() {
  // const { riskLevel, screenshots, topicFinding } = findings;
  const { findings, databaseMatch } = responseData;

  const screenshots: Screenshot[] = [
    { image: "https://ik.imagekit.io/iakg6rt33o/20241224_040959_1735013399676242375?updatedAt=1735013401363" },
    { image: "https://ik.imagekit.io/iakg6rt33o/20241224_040954_1735013394422837181?updatedAt=1735013396657" },
  ]
  return (
    <div className="">
      <Summary riskLevel={findings.riskLevel as RiskLevel} />
      <Screenshots screenshots={screenshots} />
      <TopicFindings topicFinding={findings.topicFinding} />
    </div>
  )
}
