import { Reasons, TopicFinding } from "@/lib/types";
import { Circle, CircleAlert } from "lucide-react";

const Finding = ({ topic, reasons }: { topic: string, reasons: Reasons }) => {
  return (
    <div className="py-5">
      <h2 className="text-lg text-primary/80 font-semibold tracking-wider py-2">
        {topic}
      </h2>

      {/** Mapping of Good Reasons */}
      {reasons.good !== null ? reasons.good.map((reason, key: number) => {
        return (
          <div key={key} className="reason-container flex justify-between items-start gap-2 py-2">
            <Circle
              className="text-teal-600 dark:text-teal-500/75 flex-shrink mt-1"
              size={14}
              strokeWidth={4}
            />
            <p className="w-5/6 flex-grow">
              {reason}
            </p>
          </div>
        )
      }) : ""}

      {/** Mapping of Bad Reasons */}
      {reasons.bad !== null ? reasons.bad.map((reason, key: number) => {
        return (
          <div key={key} className="reason-container flex justify-between items-start gap-2 py-2">
            <CircleAlert
              className="text-red-600 dark:text-red-500/75 flex-shrink mt-1"
              size={14}
              strokeWidth={4}
            />
            <p className="w-5/6 flex-grow">
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
    <div className="py-8">
      <div className="finding leading-7">
        <h1 className="text-2xl font-semibold py-4 tracking-wider">
          Findings
        </h1>
      </div>
      {/** Domain Topic */}
      {topicFinding.domain !== null
        ? <Finding topic="Domain" reasons={topicFinding.domain.reasons} />
        : null
      }

      {/** Content Topic */}
      {topicFinding.content !== null
        ? <Finding topic="Content" reasons={topicFinding.content.reasons} />
        : null
      }

      {/** Certificate Topic */}
      {topicFinding.certificate !== null
        ? <Finding topic="Certificate" reasons={topicFinding.certificate.reasons} />
        : null
      }

      {/** Hidden Inputs Topic */}
      {topicFinding.hiddenInput !== null
        ? <Finding topic="Hidden Inputs" reasons={topicFinding.hiddenInput.reasons} />
        : null
      }
    </div>
  )
}
