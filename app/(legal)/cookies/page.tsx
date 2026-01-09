export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-white py-24">
      <div className="container-g max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: January 2025</p>
        
        <div className="prose prose-gray max-w-none space-y-6">
          <section>
            <p className="text-gray-600">
              This Cookie Policy explains how ATESTO uses cookies and similar tracking technologies 
              in compliance with the EU ePrivacy Directive and GDPR.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">What Are Cookies?</h2>
            <p className="text-gray-600">
              Cookies are small text files stored on your device when you visit our website. 
              They help us provide functionality and improve your experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Cookies We Use</h2>
            
            <h3 className="text-xl font-medium mt-4 mb-2">Essential Cookies (Always Active)</h3>
            <p className="text-gray-600 mb-2">Required for the website to function. No consent needed.</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <table className="w-full text-sm">
                <thead><tr className="text-left"><th className="pb-2">Cookie</th><th className="pb-2">Purpose</th><th className="pb-2">Duration</th></tr></thead>
                <tbody className="text-gray-600">
                  <tr><td>session</td><td>User authentication</td><td>Session</td></tr>
                  <tr><td>csrf_token</td><td>Security</td><td>Session</td></tr>
                  <tr><td>cookie_consent</td><td>Store your cookie preferences</td><td>1 year</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-medium mt-6 mb-2">Analytics Cookies (Consent Required)</h3>
            <p className="text-gray-600 mb-2">Help us understand how visitors use our site.</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <table className="w-full text-sm">
                <thead><tr className="text-left"><th className="pb-2">Cookie</th><th className="pb-2">Purpose</th><th className="pb-2">Duration</th></tr></thead>
                <tbody className="text-gray-600">
                  <tr><td>_ga</td><td>Google Analytics</td><td>2 years</td></tr>
                  <tr><td>_gid</td><td>Google Analytics</td><td>24 hours</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
            <p className="text-gray-600">
              You can manage your cookie preferences:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-2">
              <li>Through our cookie consent banner when you first visit</li>
              <li>By updating your browser settings to block all cookies</li>
              <li>By contacting us at privacy@atesto.io</li>
            </ul>
            <p className="text-gray-600 mt-4">
              Note: Blocking essential cookies may prevent the website from functioning properly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
            <p className="text-gray-600">
              We use services that may set their own cookies:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-2">
              <li><strong>Google Analytics:</strong> Website analytics (with IP anonymization enabled)</li>
              <li><strong>Stripe:</strong> Payment processing (only on checkout pages)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="text-gray-600">
              For questions about our cookie practices, contact us at privacy@atesto.io
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
