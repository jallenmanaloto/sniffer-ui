export type Findings = {
  topicFinding: TopicFinding
  riskLevel: string
  screenshots: Screenshot[]
}

export type Reasons = {
  good: string[]
  bad: string[]
}

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

