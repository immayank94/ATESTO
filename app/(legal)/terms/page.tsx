export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white py-24">
      <div className="container-g max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: January 2025</p>
        
        <div className="prose prose-gray max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Agreement</h2>
            <p className="text-gray-600">
              By using ATESTO ("Service"), you agree to these Terms of Service ("Terms"). 
              The Service is provided by ATESTO Sp. z o.o., a company registered in Wrocław, Poland.
              These Terms are governed by Polish and European Union law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
            <p className="text-gray-600">
              ATESTO provides AI-powered document extraction services for compliance data. 
              We extract structured data from certificates, material declarations, and supplier documents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Account Responsibilities</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>You must provide accurate registration information</li>
              <li>You are responsible for maintaining account security</li>
              <li>You must be at least 18 years old or have legal capacity to enter contracts</li>
              <li>Business accounts must be authorized by the organization</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Acceptable Use</h2>
            <p className="text-gray-600 mb-2">You agree NOT to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Upload illegal, harmful, or infringing content</li>
              <li>Attempt to reverse engineer the AI models</li>
              <li>Use the service for automated scraping or data harvesting</li>
              <li>Share account credentials with unauthorized users</li>
              <li>Violate any applicable laws including GDPR</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Pricing & Payment</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Free tier: 20 extractions/month at no cost</li>
              <li>Paid plans: Billed monthly or annually via Stripe</li>
              <li>All prices are in EUR and include applicable VAT for EU customers</li>
              <li>Refunds are available within 14 days per EU consumer rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
            <p className="text-gray-600">
              <strong>Your Content:</strong> You retain all rights to documents you upload. 
              You grant us a limited license to process them for the service.<br /><br />
              <strong>Our Service:</strong> ATESTO, our AI models, and platform are our intellectual property. 
              You receive a limited license to use the service, not ownership.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Data Processing</h2>
            <p className="text-gray-600">
              Document processing is governed by our <a href="/privacy" className="text-[#2d5a3d] underline">Privacy Policy</a>. 
              For business customers processing personal data, we offer a Data Processing Agreement (DPA) 
              upon request to comply with GDPR Article 28.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-600">
              To the maximum extent permitted by EU law, ATESTO is not liable for indirect, 
              consequential, or punitive damages. Our total liability is limited to the amount 
              you paid us in the 12 months preceding the claim. This does not affect your 
              statutory rights under EU consumer protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
            <p className="text-gray-600">
              You may cancel your account at any time. We may terminate accounts that violate 
              these Terms. Upon termination, your data will be deleted within 30 days (except 
              where retention is required by law).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Governing Law & Disputes</h2>
            <p className="text-gray-600">
              These Terms are governed by Polish law. For EU consumers, mandatory consumer 
              protection laws of your residence country also apply. Disputes will be resolved 
              in the courts of Wrocław, Poland, or your local courts if required by EU law.
            </p>
            <p className="text-gray-600 mt-2">
              EU Online Dispute Resolution: <a href="https://ec.europa.eu/consumers/odr" className="text-[#2d5a3d] underline">ec.europa.eu/consumers/odr</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Contact</h2>
            <p className="text-gray-600">
              ATESTO Sp. z o.o.<br />
              Wrocław, Poland<br />
              Email: legal@atesto.io
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
