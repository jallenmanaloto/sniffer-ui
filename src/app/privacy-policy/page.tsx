import Header from "@/components/header";

export default function PrivacyPolicy() {
  return (
    <div className="w-screen h-screen dark:bg-slate-900">
      <Header />
      <main className="container mx-auto px-8 lg:px-36">
        <h1 className="text-3xl font-bold py-8">Privacy Policy</h1>
        <div className="flex flex-col gap-5">
          <p>Last updated: December 25, 2024</p>
          <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
          <p>At BaitSniffer, we are committed to protecting your privacy. This Privacy Policy explains how we handle your information when you use our Service.</p>
        </div>
        <h2 className="text-3xl font-bold pt-8 py-4">Data Collection</h2>
        <p>We do not collect any personal data from users of the Service. We do not ask for, store, or process any personally identifiable information.</p>

        <h2 className="text-3xl font-bold pt-8 py-4">Third-Party Services</h2>
        <p>We do not share any data with third-party services. The Service is designed to operate independently without requiring external integrations that would collect user data.</p>

        <h2 className="text-3xl font-bold pt-8 py-4">Security</h2>
        <p>While we do not collect any personal data, we take the security of the Service seriously and implement measures to protect the data and information you interact with on our platform.</p>

        <h2 className="text-3xl font-bold pt-8 py-4">Changes to this Privacy Policy</h2>
        <div className="flex flex-col gap-5">
          <p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>
          <p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.</p>
          <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
        </div>

        <p className="py-4">Last updated: December 25, 2024</p>
        <p>If you have any questions about this Privacy Policy, please contact us at <b>support@baitsniffer.com</b>.</p>
      </main>
    </div>
  )
}
