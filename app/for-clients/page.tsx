import EmailCapture from "../../components/EmailCapture";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Clients",
  description: "Preview your financial health score and join the waitlist.",
  openGraph: { title: "Mintwell — For Clients", description: "Preview your financial health score." },
  twitter: { title: "Mintwell — For Clients", description: "Preview your financial health score." }
};

export default function ForClientsPage() {
  return (
    <main className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-mintwell-navy mb-4">For Clients</h1>
        <p className="text-gray-600 mb-8">
          Get invited by your advisor or join the waitlist to preview your financial health score.
        </p>
        <EmailCapture label="Enter your email to join the waitlist" cta="Join Waitlist" />
      </div>
    </main>
  );
}
