import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faCalendarDays,
  faClock,
  faCircleInfo,
  faGears,
  faLock,
  faUserShield,
  faUsers,
  faRocket,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Mintwell collects, uses, and protects your personal information.",
  openGraph: {
    title: "Mintwell - Privacy Policy",
    description: "How Mintwell collects, uses, and protects your personal information.",
  },
  twitter: {
    title: "Mintwell - Privacy Policy",
    description: "How Mintwell collects, uses, and protects your personal information.",
  },
};

export default function PrivacyPage() {
  const lastUpdated = "January 2025";

  return (
    <main>
      {/* Hero */}
      <section id="hero-section" className="bg-gradient-to-br from-white to-mintwell-light py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-mintwell-teal/10 text-mintwell-teal text-sm font-medium mb-6">
            <FontAwesomeIcon icon={faShieldHalved} className="mr-2" aria-hidden="true" />
            Legal Documentation
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-mintwell-navy mb-6">Privacy Policy</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">Your privacy is important to us.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-500">
            <span className="flex items-center">
              <FontAwesomeIcon icon={faCalendarDays} className="mr-2" aria-hidden="true" />
              Last updated: {lastUpdated}
            </span>
            <span className="flex items-center">
              <FontAwesomeIcon icon={faClock} className="mr-2" aria-hidden="true" />
              Quick read
            </span>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section id="quick-navigation" className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-mintwell-navy mb-8 text-center">Quick Navigation</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: "#introduction", icon: faCircleInfo, label: "Introduction" },
              { href: "#information-usage", icon: faGears, label: "How We Use" },
              { href: "#data-security", icon: faLock, label: "Security" },
              { href: "#user-rights", icon: faUserShield, label: "Your Rights" },
            ].map((i, idx) => (
              <a
                key={idx}
                href={i.href}
                className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-mintwell-teal hover:bg-mintwell-teal/5 transition-all group"
              >
                <FontAwesomeIcon
                  icon={i.icon}
                  className="text-mintwell-teal mr-3 group-hover:scale-110 transition-transform"
                  aria-hidden="true"
                />
                <span className="text-sm font-medium text-gray-700 group-hover:text-mintwell-navy">{i.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section id="introduction" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
            <div className="border-l-4 border-mintwell-teal pl-6 mb-6">
              <h2 className="text-3xl font-bold text-mintwell-navy mb-2">Introduction</h2>
              <div className="flex items-center text-mintwell-teal text-sm font-medium">
                <FontAwesomeIcon icon={faShieldHalved} className="mr-2" aria-hidden="true" />
                Trust &amp; Transparency
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              Mintwell maintains high standards of data privacy and security for advisors and their clients. This page
              explains how we collect, use, and protect your information.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-mintwell-teal/10 rounded-lg flex items-center justify-center mr-4">
                    <FontAwesomeIcon icon={faUsers} className="text-mintwell-teal" aria-hidden="true" />
                  </div>
                  <h4 className="font-semibold text-mintwell-navy">For Advisors</h4>
                </div>
                <p className="text-gray-600 text-sm">We protect professional information and client data with enterprise-grade security.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-mintwell-teal/10 rounded-lg flex items-center justify-center mr-4">
                    <FontAwesomeIcon icon={faUserShield} className="text-mintwell-teal" aria-hidden="true" />
                  </div>
                  <h4 className="font-semibold text-mintwell-navy">For Clients</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Your financial information is handled with care and is only accessible to your designated advisor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Use */}
      <section id="information-usage" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
            <div className="border-l-4 border-mintwell-teal pl-6 mb-6">
              <h2 className="text-3xl font-bold text-mintwell-navy mb-2">How We Use Your Information</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-xl p-6 border border-mintwell-blue/20 bg-gradient-to-br from-mintwell-blue/5 to-mintwell-teal/5">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-mintwell-blue/10 rounded-lg flex items-center justify-center mr-4">
                    <FontAwesomeIcon icon={faRocket} className="text-mintwell-blue text-xl" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-mintwell-navy">Service Delivery</h3>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm list-disc list-inside">
                  <li>Provide and maintain platform functionality</li>
                  <li>Generate personalized plans and reports</li>
                  <li>Facilitate advisor-client collaboration</li>
                </ul>
              </div>
              <div className="rounded-xl p-6 border border-mintwell-teal/20 bg-gradient-to-br from-mintwell-teal/5 to-mintwell-blue/5">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-mintwell-teal/10 rounded-lg flex items-center justify-center mr-4">
                    <FontAwesomeIcon icon={faChartLine} className="text-mintwell-teal text-xl" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-mintwell-navy">Platform Enhancement</h3>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm list-disc list-inside">
                  <li>Improve user experience and reliability</li>
                  <li>Develop new features based on usage</li>
                  <li>Conduct analytics to understand needs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Rights */}
      <section id="data-security" className="py-12 bg-mintwell-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-mintwell-navy mb-2">Data Security</h2>
            <p className="text-gray-700 text-sm">We use industry-standard security controls to protect your data.</p>
          </div>
        </div>
      </section>

      <section id="user-rights" className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-mintwell-navy mb-2">Your Rights</h2>
            <p className="text-gray-700 text-sm">
              You may access, update, or request deletion of your personal information. Contact privacy@mintwell.ai for requests.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}