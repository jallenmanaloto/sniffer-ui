import { AnalysisResponse } from "@/lib/types";

export const responseData: AnalysisResponse = {
  databaseMatch: false,
  findings: {
    topicFinding: {
      domain: {
        points: 3,
        reasons: {
          bad: [
            "Website uses a common top-level domain that is frequently associated with phishing attacks: ..pro.",
            "Multiple dashes were detected in the URL. Phishing websites often use an excessive number of dashes in their domain names to appear legitimate."
          ],
          good: [
            "No suspiciously replaced characters found in the URL, which is common in phishing sites trying to mimic legitimate domains."
          ]
        }
      },
      certificate: {
        points: 0,
        reasons: {
          bad: null,
          good: [
            "Website has a valid SSL certificate and uses a secure TLS connection, ensuring encrypted communication."
          ],
        }
      },
      content: {
        points: 3,
        reasons: {
          bad: [
            "Found suspicious keyword 'phone number' in the page content, which is often associated with phishing attacks.",
            "Found suspicious keyword 'exchange' in the page content, which is often associated with phishing attacks.",
            "Found suspicious keyword 'gift' in the page content, which is often associated with phishing attacks.",
            "Found suspicious keyword 'redeem' in the page content, which is often associated with phishing attacks.",
            "Found suspicious keyword 'points' in the page content, which is often associated with phishing attacks."
          ],
          good: null,
        }
      },
      hiddenInput: {
        points: 5,
        reasons: {
          bad: [
            "Found 2 hidden inputs on the page. While hidden inputs are commonly used for legitimate purposes, such as storing necessary data, they can also be exploited by scam sites to track tokens or collect sensitive information."
          ],
          good: null,
        }
      }
    },
    riskLevel: "MODERATE",
    screenshots: [
      { image: "20241225_060709_1735106829222268668" },
      { image: "20241225_060714_1735106834440804806" },
      { image: "20241225_060719_1735106839334431604" }
    ]
  }
}
