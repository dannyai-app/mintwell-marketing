import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support",
  description: "Find answers or get in touch with Mintwell support.",
  openGraph: { title: "Mintwell — Support", description: "Find answers or get in touch." },
  twitter: { title: "Mintwell — Support", description: "Find answers or get in touch." }
};

export default function SupportPage() {
  return (
    <main className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-mintwell-navy mb-4">Support</h1>
        <p className="text-gray-600 mb-8">Find answers or get in touch.</p>
        <div className="space-y-4 text-gray-700">
          <p>Email: <a className="text-mintwell-blue underline" href="mailto:support@mintwell.example">support@mintwell.example</a></p>
          <p>Documentation and FAQs coming soon.</p>
        </div>
      </div>
    </main>
  );
}
