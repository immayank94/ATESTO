import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-white py-24">
      <div className="container-g max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-8">
          Get in touch at hello@atesto.io or schedule a demo. Based in Wroclaw, Poland.
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
