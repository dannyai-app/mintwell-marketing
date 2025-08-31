import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faCalendarDays,
  faClock,
  faCircleInfo,
  faDatabase,
  faGears,
  faShareAlt,
  faCookieBite,
  faLock,
  faUserShield,
  faEnvelope,
  faUsers,
  faRocket,
  faChartLine,
  faCircleCheck,
  faGlobe,
  faLocationDot,
  faMobileScreen,
  faSliders,
  faTriangleExclamation,
  faWrench,
  faMagnifyingGlass,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Mintwell collects, uses, and protects your personal information.",
  openGraph: { title: "Mintwell — Privacy Policy", description: "How Mintwell collects, uses, and protects your personal information." },
  twitter: { title: "Mintwell — Privacy Policy", description: "How Mintwell collects, uses, and protects your personal information." }
};

export default function PrivacyPage() {
  const lastUpdated = "January 2025";
  return (
    <main>
      {/* Hero */}
      <section id="hero-section" className="bg-gradient-to-br from-white to-mintwell-light py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-mintwell-teal/10 text-mintwell-teal text-sm font-medium mb-6">
              <FontAwesomeIcon icon={faShieldHalved} className="mr-2" aria-hidden="true" />
              Legal Documentation
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-mintwell-navy mb-6 leading-tight">Privacy Policy</h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. This Policy explains how Mintwell handles your information with care and transparency.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 text-sm text-gray-500">
            <div className="flex items-center"><FontAwesomeIcon icon={faCalendarDays} className="mr-2" aria-hidden="true" />Last updated: {lastUpdated}</div>
            <div className="flex items-center"><FontAwesomeIcon icon={faClock} className="mr-2" aria-hidden="true" />10 minute read</div>
          </div>
        </div>
      </section>

      {/* Data Security */}
      <section id="data-security" className="py-16 bg-mintwell-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
            <div className="border-l-4 border-red-500 pl-6 mb-8">
              <h2 className="text-3xl font-bold text-mintwell-navy mb-2">Data Security</h2>
              <div className="flex items-center text-red-500 text-sm font-medium mb-2">
                <FontAwesomeIcon icon={faShieldHalved} className="mr-2" aria-hidden="true" />
                Enterprise‑Grade Protection
              </div>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-red-800 mb-2">Our Security Commitment</h3>
              <p className="text-red-700">We use bank‑level encryption and follow industry standards to keep your data safe and confidential.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-8 text-sm">
              <div className="rounded-xl p-6 border border-blue-200 bg-blue-50">
                <div className="flex items-center mb-3"><div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center mr-4"><FontAwesomeIcon icon={faKey} className="text-blue-700 text-xl" aria-hidden="true" /></div><h3 className="text-xl font-bold text-blue-800">Encryption & Access</h3></div>
                <ul className="space-y-2 text-blue-700">
                  <li className="flex items-start"><FontAwesomeIcon icon={faCircleCheck} className="mr-2" aria-hidden="true" />AES‑256 at rest and TLS in transit</li>
                  <li className="flex items-start"><FontAwesomeIcon icon={faCircleCheck} className="mr-2" aria-hidden="true" />Multi‑factor authentication for advisors</li>
                  <li className="flex items-start"><FontAwesomeIcon icon={faCircleCheck} className="mr-2" aria-hidden="true" />Role‑based access (least privilege)</li>
                </ul>
              </div>
              <div className="rounded-xl p-6 border border-green-200 bg-green-50">
                <div className="flex items-center mb-3"><div className="w-12 h-12 bg-green-200 rounded-lg flex items-center justify-center mr-4"><FontAwesomeIcon icon={faServer} className="text-green-700 text-xl" aria-hidden="true" /></div><h3 className="text-xl font-bold text-green-800">Infrastructure</h3></div>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-start"><FontAwesomeIcon icon={faCircleCheck} className="mr-2" aria-hidden="true" />SOC 2 Type II controls</li>
                  <li className="flex items-start"><FontAwesomeIcon icon={faCircleCheck} className="mr-2" aria-hidden="true" />Secure cloud hosting</li>
                  <li className="flex items-start"><FontAwesomeIcon icon={faCircleCheck} className="mr-2" aria-hidden="true" />Encrypted backups</li>
                </ul>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              {[
                {t:"24/7 Monitoring",d:"Real‑time detection & alerts",i:faEye},
                {t:"Vulnerability Testing",d:"Pen tests & 3rd‑party reviews",i:faBug},
                {t:"Security Updates",d:"Continuous patching",i:faScrewdriverWrench},
              ].map((x,i)=> (
                <div key={i} className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-2"><FontAwesomeIcon icon={x.i} className="text-mintwell-teal mr-3" aria-hidden="true" /><h4 className="font-semibold text-mintwell-navy">{x.t}</h4></div>
                  <p className="text-gray-600">{x.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Cookies & Tracking */}
      <section id="cookies-tracking" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
            <div className="border-l-4 border-mintwell-blue pl-6 mb-8">
              <h2 className="text-3xl font-bold text-mintwell-navy mb-2">Cookies & Tracking Technologies</h2>
              <div className="flex items-center text-mintwell-blue text-sm font-medium mb-2">
                <FontAwesomeIcon icon={faCookieBite} className="mr-2" aria-hidden="true" />
                Transparency in Data Collection
              </div>
            </div>
            <div className="bg-mintwell-light rounded-xl p-6 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-mintwell-blue/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <FontAwesomeIcon icon={faCircleInfo} className="text-mintwell-blue" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-mintwell-navy mb-2">What Are Cookies?</h3>
                  <p className="text-gray-700">Small text files stored on your device that help us provide a better, more personalized experience. We use cookies to improve performance, remember preferences, and understand usage.</p>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-mintwell-navy">Types of Cookies</h3>
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <div className="flex items-center mb-3"><FontAwesomeIcon icon={faCircleCheck} className="text-green-600 mr-3" aria-hidden="true" /><h4 className="font-semibold text-green-800">Essential</h4><span className="ml-auto bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Required</span></div>
                  <p className="text-green-700 text-sm mb-3">Authentication, security, core features</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <div className="flex items-center mb-3"><FontAwesomeIcon icon={faGears} className="text-blue-600 mr-3" aria-hidden="true" /><h4 className="font-semibold text-blue-800">Functional</h4><span className="ml-auto bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Optional</span></div>
                  <p className="text-blue-700 text-sm mb-3">Preferences, layout, themes, notifications</p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <div className="flex items-center mb-3"><FontAwesomeIcon icon={faChartLine} className="text-purple-600 mr-3" aria-hidden="true" /><h4 className="font-semibold text-purple-800">Analytics</h4><span className="ml-auto bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Optional</span></div>
                  <p className="text-purple-700 text-sm mb-3">Usage patterns and performance (anonymized)</p>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-mintwell-navy">Managing Preferences</h3>
                <div className="bg-mintwell-light rounded-xl p-6">
                  <div className="flex items-center mb-4"><FontAwesomeIcon icon={faSliders} className="text-mintwell-teal mr-3" aria-hidden="true" /><h4 className="font-semibold text-mintwell-navy">Cookie Control Center</h4></div>
                  <p className="text-gray-700 text-sm mb-4">Control optional cookies through your browser or provided controls.</p>
                  <button className="bg-mintwell-blue text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">Manage Cookie Preferences</button>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <div className="flex items-center mb-3"><FontAwesomeIcon icon={faTriangleExclamation} className="text-red-600 mr-3" aria-hidden="true" /><h4 className="font-semibold text-red-800">Important Note</h4></div>
                  <p className="text-red-700 text-sm">Disabling essential cookies may impact core functionality. Functional and analytics cookies can be disabled without affecting core operation.</p>
                </div>
              </div>
            </div>
            <div className="bg-mintwell-light rounded-xl p-6">
              <h3 className="text-lg font-bold text-mintwell-navy mb-2">Third‑Party Tracking</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold text-mintwell-navy mb-1">What We Use</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Analytics (anonymized)</li>
                    <li>• Performance monitoring tools</li>
                    <li>• Customer support widgets</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-mintwell-navy mb-1">Your Options</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Opt out via cookie controls</li>
                    <li>• Use browser privacy settings</li>
                    <li>• Enable “Do Not Track”</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Sharing of Information */}
      <section id="information-sharing" className="py-16 bg-mintwell-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
            <div className="border-l-4 border-red-500 pl-6 mb-8">
              <h2 className="text-3xl font-bold text-mintwell-navy mb-2">Sharing of Information</h2>
              <div className="flex items-center text-red-500 text-sm font-medium mb-2">
                <FontAwesomeIcon icon={faTriangleExclamation} className="mr-2" aria-hidden="true" />
                We Do Not Sell Your Data
              </div>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-bold text-red-800 mb-2">Our Promise</h3>
              <p className="text-red-700">Mintwell does not sell, rent, or trade your personal information to third parties for marketing purposes.</p>
            </div>
            <div className="space-y-8">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-800 mb-4">When We May Share Information</h3>
                <p className="text-green-700 mb-4">We share information only in limited circumstances:</p>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">Trusted Service Providers</h4>
                    <ul className="text-green-700 space-y-1">
                      <li>• Cloud hosting providers</li>
                      <li>• Email services</li>
                      <li>• Analytics (anonymized)</li>
                      <li>• Support tools</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">Legal Requirements</h4>
                    <ul className="text-green-700 space-y-1">
                      <li>• Court orders or subpoenas</li>
                      <li>• Regulatory investigations</li>
                      <li>• Law enforcement requests</li>
                      <li>• Protection of rights and safety</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Service Provider Safeguards</h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="font-medium text-blue-800 mb-1">Contractual Obligations</h5>
                    <p className="text-blue-600">Data processing agreements with confidentiality clauses</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="font-medium text-blue-800 mb-1">Security Standards</h5>
                    <p className="text-blue-600">SOC 2 and industry certifications</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="font-medium text-blue-800 mb-1">Limited Access</h5>
                    <p className="text-blue-600">Least-privilege, purpose-limited access</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Business Transfers</h3>
                <p className="text-gray-700">In the unlikely event of a merger, acquisition, or sale, your information may transfer as business assets. We will provide notice and require the acquiring company to honor this Policy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* How We Use Information */}
      <section id="information-usage" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
            <div className="border-l-4 border-mintwell-teal pl-6 mb-8">
              <h2 className="text-3xl font-bold text-mintwell-navy mb-2">How We Use Your Information</h2>
              <div className="flex items-center text-mintwell-teal text-sm font-medium mb-2">
                <FontAwesomeIcon icon={faGears} className="mr-2" aria-hidden="true" />
                Purpose & Implementation
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="rounded-xl p-6 border border-mintwell-blue/20 bg-gradient-to-br from-mintwell-blue/5 to-mintwell-teal/5">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-mintwell-blue/10 rounded-lg flex items-center justify-center mr-4">
                    <FontAwesomeIcon icon={faRocket} className="text-mintwell-blue text-xl" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-mintwell-navy">Service Delivery</h3>
                </div>
                <ul className="space-y-3 text-gray-700 text-sm">
                  {[
                    "Provide and maintain platform functionality",
                    "Generate personalized financial plans and scores",
                    "Facilitate advisor–client collaboration",
                    "Process and deliver PDF reports",
                  ].map((t,i)=> (
                    <li key={i} className="flex items-start"><FontAwesomeIcon icon={faCircleCheck} className="text-mintwell-blue mr-3 mt-1" aria-hidden="true" />{t}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl p-6 border border-mintwell-teal/20 bg-gradient-to-br from-mintwell-teal/5 to-mintwell-blue/5">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-mintwell-teal/10 rounded-lg flex items-center justify-center mr-4">
                    <FontAwesomeIcon icon={faChartLine} className="text-mintwell-teal text-xl" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-mintwell-navy">Platform Enhancement</h3>
                </div>
                <ul className="space-y-3 text-gray-700 text-sm">
                  {[
                    "Improve service quality and user experience",
                    "Develop new features based on usage",
                    "Optimize performance and reliability",
                    "Conduct analytics to understand needs",
                  ].map((t,i)=> (
                    <li key={i} className="flex items-start"><FontAwesomeIcon icon={faCircleCheck} className="text-mintwell-teal mr-3 mt-1" aria-hidden="true" />{t}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-mintwell-light rounded-xl p-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-mintwell-navy/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <FontAwesomeIcon icon={faUserShield} className="text-mintwell-navy" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-mintwell-navy mb-2">Personalization</h4>
                    <p className="text-gray-700 mb-3">We tailor the experience for advisors and clients:</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h5 className="font-medium text-mintwell-navy mb-2">For Advisors</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Customized dashboards</li>
                          <li>• Client management preferences</li>
                          <li>• Template suggestions</li>
                          <li>• Workflow optimizations</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h5 className="font-medium text-mintwell-navy mb-2">For Clients</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Personalized insights</li>
                          <li>• Relevant recommendations</li>
                          <li>• Health score metrics</li>
                          <li>• Goal-specific content</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-mintwell-light rounded-xl p-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-mintwell-teal/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <FontAwesomeIcon icon={faEnvelope} className="text-mintwell-teal" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-mintwell-navy mb-2">Communication</h4>
                    <p className="text-gray-700 mb-4">We send necessary updates and support communications:</p>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="bg-white p-4 rounded-lg border-l-4 border-mintwell-blue"><h6 className="font-medium text-mintwell-navy mb-1">Service Updates</h6><p className="text-gray-600">Maintenance and new features</p></div>
                      <div className="bg-white p-4 rounded-lg border-l-4 border-mintwell-teal"><h6 className="font-medium text-mintwell-navy mb-1">Support</h6><p className="text-gray-600">Technical and account help</p></div>
                      <div className="bg-white p-4 rounded-lg border-l-4 border-gray-300"><h6 className="font-medium text-mintwell-navy mb-1">Plan Delivery</h6><p className="text-gray-600">Notifications and confirmations</p></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <FontAwesomeIcon icon={faLock} className="text-red-600" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-red-800 mb-2">Security & Compliance</h4>
                    <ul className="space-y-2 text-red-700 text-sm">
                      <li className="flex items-start"><FontAwesomeIcon icon={faMagnifyingGlass} className="mr-2 mt-1" aria-hidden="true" />Monitor for suspicious activity</li>
                      <li className="flex items-start"><FontAwesomeIcon icon={faGavel} className="mr-2 mt-1" aria-hidden="true" />Meet regulatory obligations</li>
                      <li className="flex items-start"><FontAwesomeIcon icon={faUserShield} className="mr-2 mt-1" aria-hidden="true" />Verify advisor credentials</li>
                      <li className="flex items-start"><FontAwesomeIcon icon={faDatabase} className="mr-2 mt-1" aria-hidden="true" />Maintain data integrity and backups</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Information We Collect */}
      <section id="information-collection" className="py-16 bg-mintwell-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
            <div className="border-l-4 border-mintwell-blue pl-6 mb-8">
              <h2 className="text-3xl font-bold text-mintwell-navy mb-2">Information We Collect</h2>
              <div className="flex items-center text-mintwell-blue text-sm font-medium mb-2">
                <FontAwesomeIcon icon={faDatabase} className="mr-2" aria-hidden="true" />
                Data Categories & Sources
              </div>
            </div>
            <div className="space-y-6">
              <details className="bg-gray-50 rounded-xl border border-gray-200" open>
                <summary className="list-none p-6 cursor-pointer rounded-xl hover:bg-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-mintwell-teal/10 rounded-lg flex items-center justify-center mr-4">
                        <FontAwesomeIcon icon={faUsers} className="text-mintwell-teal" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-mintwell-navy">Personal Information</h3>
                        <p className="text-gray-600 text-sm">Identity and contact details</p>
                      </div>
                    </div>
                  </div>
                </summary>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-mintwell-navy mb-3">For Financial Advisors</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        {[
                          "Full name and professional title",
                          "Business email address",
                          "Phone number",
                          "Firm/company information",
                          "Professional licenses and certifications",
                        ].map((t,i)=> (
                          <li key={i} className="flex items-center"><FontAwesomeIcon icon={faCircleCheck} className="text-mintwell-teal mr-2 text-sm" aria-hidden="true" />{t}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-mintwell-navy mb-3">For Clients</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        {[
                          "Name and contact information",
                          "Email address (for plan delivery)",
                          "Financial questionnaire responses",
                          "Financial goals and preferences",
                          "Risk tolerance assessments",
                        ].map((t,i)=> (
                          <li key={i} className="flex items-center"><FontAwesomeIcon icon={faCircleCheck} className="text-mintwell-blue mr-2 text-sm" aria-hidden="true" />{t}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </details>

              <details className="bg-gray-50 rounded-xl border border-gray-200">
                <summary className="list-none p-6 cursor-pointer rounded-xl hover:bg-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-mintwell-blue/10 rounded-lg flex items-center justify-center mr-4">
                        <FontAwesomeIcon icon={faChartLine} className="text-mintwell-blue" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-mintwell-navy">Usage Data</h3>
                        <p className="text-gray-600 text-sm">Interactions and analytics</p>
                      </div>
                    </div>
                  </div>
                </summary>
                <div className="p-6 space-y-4 text-gray-700">
                  <p>We collect information about how you interact with Mintwell to improve our services and user experience.</p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-mintwell-light p-4 rounded-lg">
                      <h5 className="font-medium text-mintwell-navy mb-2">Navigation Data</h5>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Pages visited</li>
                        <li>• Features used</li>
                        <li>• Time on platform</li>
                        <li>• Click patterns</li>
                      </ul>
                    </div>
                    <div className="bg-mintwell-light p-4 rounded-lg">
                      <h5 className="font-medium text-mintwell-navy mb-2">Performance Metrics</h5>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Load times</li>
                        <li>• Error reports</li>
                        <li>• Feature frequency</li>
                        <li>• Session duration</li>
                      </ul>
                    </div>
                    <div className="bg-mintwell-light p-4 rounded-lg">
                      <h5 className="font-medium text-mintwell-navy mb-2">Engagement Data</h5>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Plan generation rate</li>
                        <li>• Invitation patterns</li>
                        <li>• Support interactions</li>
                        <li>• Feature adoption</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </details>

              <details className="bg-gray-50 rounded-xl border border-gray-200">
                <summary className="list-none p-6 cursor-pointer rounded-xl hover:bg-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                        <FontAwesomeIcon icon={faLaptop} className="text-gray-600" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-mintwell-navy">Device & Technical Data</h3>
                        <p className="text-gray-600 text-sm">System and browser information</p>
                      </div>
                    </div>
                  </div>
                </summary>
                <div className="p-6 grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h4 className="font-semibold text-mintwell-navy mb-3">Automatically Collected</h4>
                    <div className="space-y-3 text-gray-700">
                      <div className="flex items-start">
                        <FontAwesomeIcon icon={faGlobe} className="text-mintwell-teal mr-3 mt-1" aria-hidden="true" />
                        <div>
                          <p className="font-medium">Browser Information</p>
                          <p className="text-gray-600">Type, version, language</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <FontAwesomeIcon icon={faLocationDot} className="text-mintwell-teal mr-3 mt-1" aria-hidden="true" />
                        <div>
                          <p className="font-medium">IP Address</p>
                          <p className="text-gray-600">Security and approximate location</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <FontAwesomeIcon icon={faMobileScreen} className="text-mintwell-teal mr-3 mt-1" aria-hidden="true" />
                        <div>
                          <p className="font-medium">Device Type</p>
                          <p className="text-gray-600">Desktop, mobile, tablet</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-mintwell-navy mb-3">Cookie Data</h4>
                    <div className="space-y-3 text-gray-700">
                      <div className="flex items-start">
                        <FontAwesomeIcon icon={faCookieBite} className="text-mintwell-blue mr-3 mt-1" aria-hidden="true" />
                        <div>
                          <p className="font-medium">Session Cookies</p>
                          <p className="text-gray-600">Login state and preferences</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <FontAwesomeIcon icon={faChartLine} className="text-mintwell-blue mr-3 mt-1" aria-hidden="true" />
                        <div>
                          <p className="font-medium">Analytics Cookies</p>
                          <p className="text-gray-600">Usage patterns (anonymized)</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <FontAwesomeIcon icon={faGears} className="text-mintwell-blue mr-3 mt-1" aria-hidden="true" />
                        <div>
                          <p className="font-medium">Functional Cookies</p>
                          <p className="text-gray-600">Remember preferences</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>
      {/* Introduction */}
      <section id="introduction" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
            <div className="border-l-4 border-mintwell-teal pl-6 mb-8">
              <h2 className="text-3xl font-bold text-mintwell-navy mb-4">Introduction</h2>
              <div className="flex items-center text-mintwell-teal text-sm font-medium mb-4">
                <FontAwesomeIcon icon={faShieldHalved} className="mr-2" aria-hidden="true" />
                Trust & Transparency
              </div>
            </div>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>Mintwell values your trust above all else. As a platform for licensed financial professionals and their clients, we maintain high standards of data privacy and security. This Privacy Policy explains how we collect, use, and protect your information.</p>
              <div className="bg-mintwell-light rounded-xl p-6 border-l-4 border-mintwell-blue">
                <h3 className="text-lg font-semibold text-mintwell-navy mb-3">Key Commitment</h3>
                <p>By using Mintwell, you consent to the practices in this Policy. We commit to transparency and to providing you control over your personal information.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-2">
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
                    <div className="w-10 h-10 bg-mintwell-blue/10 rounded-lg flex items-center justify-center mr-4">
                      <FontAwesomeIcon icon={faUserShield} className="text-mintwell-blue" aria-hidden="true" />
                    </div>
                    <h4 className="font-semibold text-mintwell-navy">For Clients</h4>
                  </div>
                  <p className="text-gray-600 text-sm">Your financial information is handled with care and is accessible only to your designated advisor.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Quick Navigation */}
      <section id="quick-navigation" className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-mintwell-navy mb-8 text-center">Quick Navigation</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { href: "#introduction", icon: faCircleInfo, label: "Introduction" },
              { href: "#information-collection", icon: faDatabase, label: "Data Collection" },
              { href: "#information-usage", icon: faGears, label: "How We Use Data" },
              { href: "#information-sharing", icon: faShareAlt, label: "Data Sharing" },
              { href: "#cookies-tracking", icon: faCookieBite, label: "Cookies" },
              { href: "#data-security", icon: faLock, label: "Security" },
              { href: "#user-rights", icon: faUserShield, label: "Your Rights" },
              { href: "#data-retention", icon: faClock, label: "Data Retention" },
            ].map((i, idx) => (
              <Link key={idx} href={i.href} className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-mintwell-teal hover:bg-mintwell-teal/5 transition-all group">
                <FontAwesomeIcon icon={i.icon} className="text-mintwell-teal mr-3 group-hover:scale-110 transition-transform" aria-hidden="true" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-mintwell-navy">{i.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
