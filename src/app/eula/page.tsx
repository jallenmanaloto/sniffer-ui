import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Eula() {
  return (

    <div className="w-screen h-screen dark:bg-slate-900">
      <Header />
      <main className="container mx-auto px-8 lg:px-36 pb-24">

        <h1 className="text-3xl font-bold py-8">End-User License Agreement (EULA)</h1>

        <div className="flex flex-col gap-5">
          <p><strong>Last Updated:</strong> December 25, 2024</p>
          <p>This End-User License Agreement ("Agreement") is a legal agreement between you ("User" or "You") and BaitSniffer ("the Company", "We", "Us", or "Our"). By accessing or using the BaitSniffer web application ("Application"), you agree to be bound by the terms of this Agreement. If you do not agree to these terms, you may not use the Application.</p>
        </div>


        <h2 className="text-3xl font-bold pt-8 py-4">1. Grant of License</h2>
        <p>The Company grants You a limited, non-exclusive, non-transferable, and revocable license to access and use the Application for personal, non-commercial purposes, strictly in accordance with this Agreement.</p>

        <h2 className="text-3xl font-bold pt-8 py-4">2. Restrictions</h2>
        <p>You agree not to:</p>

        <ul className="ml-6 list-disc">
          <li>Use the Application for any unlawful or malicious purpose.</li>
          <li>Modify, reverse engineer, decompile, or disassemble any part of the Application.</li>
          <li>Exploit the Application or its content for commercial purposes without prior written consent from the Company.</li>
          <li>Use automated tools or bots to interact with the Application.</li>
        </ul>

        <h2 className="text-3xl font-bold pt-8 py-4">3. Ownership</h2>
        <p>The Application and all associated intellectual property, including but not limited to logos, designs, content, and underlying code, are the sole property of the Company. This Agreement does not transfer ownership of any intellectual property to You.</p>

        <h2 className="text-3xl font-bold pt-8 py-4">4. No Warranty</h2>
        <p>The Application is provided "as is" without warranties of any kind, whether express or implied, including but not limited to fitness for a particular purpose, merchantability, or non-infringement. The Company does not guarantee the accuracy, reliability, or completeness of the analysis provided by the Application.</p>

        <h2 className="text-3xl font-bold pt-8 py-4">5. Limitation of Liability</h2>
        <p>To the maximum extent permitted by law, the Company shall not be liable for any damages, losses, or liabilities arising from:</p>
        <ul className="ml-6 list-disc">
          <li>Use the Application for any unlawful or malicious purpose.</li>
          <li>Modify, reverse engineer, decompile, or disassemble any part of the Application.</li>
          <li>Exploit the Application or its content for commercial purposes without prior written consent from the Company.</li>
          <li>Use automated tools or bots to interact with the Application.</li>
        </ul>

        <h2 className="text-3xl font-bold pt-8 py-4">6. Termination</h2>
        <p>The Company reserves the right to terminate or suspend Your access to the Application at any time, without prior notice, for any reason, including but not limited to violation of this Agreement.</p>

        <h2 className="text-3xl font-bold pt-8 py-4">7. Modifications</h2>
        <p>The Company reserves the right to update or modify this Agreement at any time. Any changes will be posted on this page, and the "Last Updated" date will be revised. Continued use of the Application after changes implies acceptance of the updated terms.</p>

        <h2 className="text-3xl font-bold pt-8 py-4">8. Governing Law</h2>
        <p>This Agreement shall be governed by and construed in accordance with the laws of the Philippines.</p>

        <h2 className="text-3xl font-bold pt-8 py-4">9. Contact Information</h2>
        <p>If You have any questions or concerns about this Agreement, You may contact Us at <b>support@baitsniffer.com</b>.</p>
      </main>
      <Footer />
    </div>
  )
}
