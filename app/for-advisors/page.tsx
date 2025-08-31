import EmailCapture from "../../components/EmailCapture";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Advisors",
  description: "Tools for advisors to generate professional financial plans in minutes.",
  openGraph: { title: "Mintwell — For Advisors", description: "Generate professional financial plans in minutes." },
  twitter: { title: "Mintwell — For Advisors", description: "Generate professional financial plans in minutes." }
};

export default function ForAdvisorsPage() {
  return (
    <main className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-mintwell-navy mb-4">For Advisors</h1>
        <p className="text-gray-600 mb-8">
          Get early access to tools that help you generate professional financial plans in minutes.
        </p>
        <EmailCapture label="Enter your email to get started" cta="Get Started" />

        <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow border-t-4 border-mintwell-blue">
            <h3 className="text-xl font-bold text-mintwell-navy mb-2">Fast Onboarding</h3>
            <p className="text-gray-600">Invite clients instantly and collect what you need in minutes.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow border-t-4 border-mintwell-teal">
            <h3 className="text-xl font-bold text-mintwell-navy mb-2">Branded Reports</h3>
            <p className="text-gray-600">Deliver professional, personalized plans that build trust.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow border-t-4 border-green-500">
            <h3 className="text-xl font-bold text-mintwell-navy mb-2">Client Experience</h3>
            <p className="text-gray-600">Clear visuals and insights without overwhelming complexity.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
