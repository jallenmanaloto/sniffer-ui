import { Findings, Screenshot } from "@/lib/types";
import Screenshots from "./Screenshots";

export default function Analysis() {
  // const { riskLevel, screenshots, topicFinding } = findings;
  const screenshots: Screenshot[] = [
    { image: "https://ik.imagekit.io/iakg6rt33o/20241224_040959_1735013399676242375?updatedAt=1735013401363" },
    { image: "https://ik.imagekit.io/iakg6rt33o/20241224_040954_1735013394422837181?updatedAt=1735013396657" },
  ]
  return (
    <div className="py-4">
      <Screenshots screenshots={screenshots} />
    </div>
  )
}
