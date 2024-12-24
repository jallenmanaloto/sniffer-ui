import { AnalysisResponse } from "@/lib/types";

export const responseData: AnalysisResponse = {
  databaseMatch: false,
  findings: {
    topicFinding: {
      domain: {
        points: 2,
        reasons: {
          bad: [
            "This Domain is bad.",
            "This domain is a scam."
          ],
          good: [
            "This domain quite good."
          ]
        }
      },
      certificate: {
        points: 0,
        reasons: {
          bad: null,
          good: null,
        }
      },
      content: {
        points: 0,
        reasons: {
          bad: null,
          good: null,
        }
      },
      hiddenInput: {
        points: 0,
        reasons: {
          bad: null,
          good: null,
        }
      }
    },
    riskLevel: "LOW",
    screenshots: [
      { image: "https://ik.imagekit.io/iakg6rt33o/20241224_040959_1735013399676242375?updatedAt=1735013401363" },
      { image: "https://ik.imagekit.io/iakg6rt33o/20241224_040954_1735013394422837181?updatedAt=1735013396657" },
    ]
  }
}

