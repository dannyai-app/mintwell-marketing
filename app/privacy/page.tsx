import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Mintwell Privacy Policy.",
  openGraph: { title: "Mintwell — Privacy Policy", description: "Mintwell Privacy Policy." },
  twitter: { title: "Mintwell — Privacy Policy", description: "Mintwell Privacy Policy." }
};

export default function PrivacyPage() {
  return (
    <main className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate">
        <h1 className="text-4xl font-bold text-mintwell-navy">Privacy Policy</h1>
        <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        <p>
          Your privacy is important to us. This policy explains what information we collect and how we use it.
        </p>
        <h2>Information We Collect</h2>
        <p>We may collect contact information, usage data, and other details necessary to provide the service.</p>
        <h2>How We Use Information</h2>
        <p>We use information to operate, protect, and improve our services, and to communicate with you.</p>
        <h2>Contact</h2>
        <p>Questions? Email us at <a className="text-mintwell-blue underline" href="mailto:privacy@mintwell.example">privacy@mintwell.example</a>.</p>
      </div>
    </main>
  );
}
