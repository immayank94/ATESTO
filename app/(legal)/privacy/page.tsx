export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white py-24">
      <div className="container-g max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: January 2025</p>
        
        <div className="prose prose-gray max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Data Controller</h2>
            <p className="text-gray-600">
              ATESTO ((&quot;we&quot;, &quot;us&quot;, &quot;our&quot;)) is operated by ATESTO Sp. z o.o., registered in Wrocław, Poland. 
              We are the data controller responsible for your personal data under the EU General Data Protection 
              Regulation (GDPR) and Polish data protection laws.
            </p>
            <p className="text-gray-600 mt-2">
              <strong>Contact:</strong> privacy@atesto.io<br />
              <strong>Address:</strong> Wrocław, Poland
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Data We Collect</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Account Data:</strong> Email address, name, company name when you register</li>
              <li><strong>Usage Data:</strong> How you interact with our service, features used, documents processed</li>
              <li><strong>Document Data:</strong> Documents you upload for extraction (processed securely and deleted after processing unless you save them)</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information</li>
              <li><strong>Payment Data:</strong> Processed by our payment provider (Stripe) - we do not store card details</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Legal Basis for Processing (GDPR Art. 6)</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Contract:</strong> To provide our document extraction services</li>
              <li><strong>Legitimate Interest:</strong> To improve our service, prevent fraud, ensure security</li>
              <li><strong>Consent:</strong> For marketing communications (you can withdraw anytime)</li>
              <li><strong>Legal Obligation:</strong> To comply with EU and Polish laws</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Your GDPR Rights</h2>
            <p className="text-gray-600 mb-2">Under GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Rectification:</strong> Correct inaccurate data</li>
              <li><strong>Erasure:</strong> Request deletion of your data ((&quot;right to be forgotten&quot;))</li>
              <li><strong>Restriction:</strong> Limit how we use your data</li>
              <li><strong>Portability:</strong> Receive your data in a machine-readable format</li>
              <li><strong>Object:</strong> Object to processing based on legitimate interest</li>
              <li><strong>Withdraw Consent:</strong> At any time for consent-based processing</li>
            </ul>
            <p className="text-gray-600 mt-4">
              To exercise these rights, contact us at <strong>privacy@atesto.io</strong>. 
              We will respond within 30 days as required by GDPR.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Data Storage & Security</h2>
            <p className="text-gray-600">
              Your data is stored on secure servers within the European Union (EU/EEA). 
              We use industry-standard encryption (TLS 1.3, AES-256) and access controls. 
              Documents uploaded for extraction are processed in memory and deleted within 24 hours 
              unless explicitly saved to your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Account data: Until you delete your account</li>
              <li>Processing logs: 90 days</li>
              <li>Documents: 24 hours (or until you delete them from saved extractions)</li>
              <li>Payment records: 7 years (Polish tax law requirement)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Cookies</h2>
            <p className="text-gray-600">
              We use essential cookies for authentication and security. Analytics cookies are only used 
              with your consent. See our <a href="/cookies" className="text-[#2d5a3d] underline">Cookie Policy</a> for details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Third-Party Processors</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Supabase:</strong> Database hosting (EU servers)</li>
              <li><strong>Vercel:</strong> Application hosting (EU region available)</li>
              <li><strong>Stripe:</strong> Payment processing (PCI-DSS compliant)</li>
              <li><strong>Google:</strong> AI processing (with appropriate DPA in place)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Complaints</h2>
            <p className="text-gray-600">
              If you believe we have violated your data protection rights, you have the right to lodge 
              a complaint with the Polish Data Protection Authority (UODO):<br />
              <strong>Urząd Ochrony Danych Osobowych</strong><br />
              ul. Stawki 2, 00-193 Warszawa<br />
              <a href="https://uodo.gov.pl" className="text-[#2d5a3d] underline">uodo.gov.pl</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Changes to This Policy</h2>
            <p className="text-gray-600">
              We may update this policy periodically. Material changes will be notified via email 
              or in-app notification. Continued use after changes constitutes acceptance.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
