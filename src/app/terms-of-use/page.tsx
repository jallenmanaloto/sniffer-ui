import Footer from "@/components/footer"
import Header from "@/components/header"

export default function TermsOfUse() {
  return (
    <div className="w-screen h-screen dark:bg-slate-900">
      <Header />

      <main className="container mx-auto px-8 lg:px-36 pb-24">
        <h1 className="text-3xl font-bold py-8">Terms of Use</h1>

        <p>Welcome to BaitSniffer! These terms and conditions outline the rules and regulations for the use of our Service. By accessing or using our Service, you agree to these terms. If you do not agree, please do not use the Service.</p>

        <h2 className="text-3xl font-bold pt-8 py-4">1. Use of the Service</h2>
        <p>BaitSniffer is provided to help users analyze links for potential phishing or scam activity. The analysis is based on various factors and provides a likelihood of risk. However, the Service does not guarantee that the links analyzed are definitively safe or unsafe. Users should exercise caution and discretion when interacting with links.</p>

        <h2 className="text-3xl font-bold pt-8 py-4">2. User Responsibilities</h2>
        <p>By using the Service, You agree to:</p>
        <ul className="ml-6 list-disc">
          <li>Use the Service only for its intended purpose.</li>
          <li>Avoid using the Service for any unlawful or malicious activities.</li>
          <li>Understand that the results provided are for informational purposes only and should not replace professional advice or judgment.</li>
        </ul>

        <h2 className="text-3xl font-bold pt-8 py-4">3. No Guarantees</h2>
        <p>The Service is provided "as is" without any guarantees, warranties, or representations of accuracy, reliability, or completeness. The Company is not liable for any damages or losses arising from the use of the Service.</p>

        <h2 className="text-3xl font-bold pt-8 py-4">4. Intellectual Property</h2>
        <p>All content, trademarks, and intellectual property associated with BaitSniffer are the property of the Company. You may not copy, distribute, or use any content from the Service without prior written permission.</p>

        <h2 className="text-3xl font-bold pt-8 py-4">5. Modifications to the Service</h2>
        <p>The Company reserves the right to modify or discontinue the Service at any time without prior notice.</p>

        <h2 className="text-3xl font-bold pt-8 py-4">6. Changes to These Terms</h2>
        <p>We may update these Terms and Conditions from time to time. Any changes will be reflected on this page, and the "Last Updated" date at the bottom of this page will be updated accordingly. Continued use of the Service after changes implies acceptance of the updated terms.</p>


        <h2 className="text-3xl font-bold pt-8 py-4">7. Governing Law</h2>
        <p>These Terms and Conditions are governed by and construed in accordance with the laws of the Philippines.</p>

        <p className="py-4">Last updated: December 25, 2024</p>

        <p>If you have any questions about these Terms and Conditions, please contact us at [Insert Contact Information].</p>
      </main>
      <Footer />
    </div>
  )
}
