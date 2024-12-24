import { Reasons, TopicFinding } from "@/lib/types";
import { Circle, CircleAlert } from "lucide-react";

const Finding = ({ topic, reasons }: { topic: string, reasons: Reasons }) => {
  return (
    <div>
      <h2 className="text-lg text-primary/80 font-semibold tracking-wider py-2">
        {topic}
      </h2>
      {reasons.good !== null ? reasons.good.map((reason, key: number) => {
        return (
          <div key={key} className="reason-container flex items-center gap-2">
            <Circle
              className="text-teal-600 dark:text-teal-500/75"
              size={14}
              strokeWidth={4}
            />
            <p>
              {reason}
            </p>
          </div>
        )
      }) : ""}


      {reasons.bad !== null ? reasons.bad.map((reason, key: number) => {
        return (
          <div key={key} className="reason-container flex items-center gap-2">
            <CircleAlert
              className="text-red-600 dark:text-red-500/75"
              size={14}
              strokeWidth={4}
            />
            <p>
              {reason}
            </p>
          </div>
        )
      }) : ""}
    </div>
  )
}

export default function TopicFindings({ topicFinding }: { topicFinding: TopicFinding }) {
  return (
    <div className="py-8 border-b-2">
      <div className="finding leading-7">
        <h1 className="text-2xl font-semibold py-4 tracking-wider">
          Findings
        </h1>
      </div>
      <Finding topic="Domain" reasons={topicFinding.domain.reasons} />
    </div>
  )
}
