export type AnalysisResponse = {
  databaseMatch: boolean
  findings: Findings
}

export type Findings = {
  topicFinding: TopicFinding
  riskLevel: string
  screenshots: Screenshot[]
}

export type Reasons = {
  good: string[] | null
  bad: string[] | null
}

export type RiskLevel = "LOW" | "MODERATE" | "HIGH"

export type Screenshot = {
  image: string
}

export type StrategyFinding = {
  points: number
  reasons: Reasons
}

export type TopicFinding = {
  domain: StrategyFinding
  certificate: StrategyFinding
  content: StrategyFinding
  hiddenInput: StrategyFinding
}
