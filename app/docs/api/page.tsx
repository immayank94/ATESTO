import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function APIReferencePage() {
  return (
    <main className="min-h-screen bg-white py-24">
      <div className="container-g max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-4">API Reference</h1>
        <p className="text-lg text-gray-600 mb-8">
          API documentation is being prepared. Contact us at support@atesto.io for early API access.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[#2d5a3d] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </main>
  );
}
