import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Mintwell Terms of Service.",
  openGraph: { title: "Mintwell — Terms of Service", description: "Mintwell Terms of Service." },
  twitter: { title: "Mintwell — Terms of Service", description: "Mintwell Terms of Service." }
};

export default function TermsPage() {
  return (
    <main className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate">
        <h1 className="text-4xl font-bold text-mintwell-navy">Terms of Service</h1>
        <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        <p>
          These Terms of Service ("Terms") govern your use of the Mintwell website and services. By using our services, you agree to these Terms.
        </p>
        <h2>Use of Service</h2>
        <p>You agree to use the service in compliance with applicable laws and not to misuse it.</p>
        <h2>Accounts</h2>
        <p>You are responsible for maintaining the confidentiality of your account and password and for restricting access to your account.</p>
        <h2>Liability</h2>
        <p>Our services are provided "as is" without warranties of any kind to the fullest extent permitted by law.</p>
      </div>
    </main>
  );
}
