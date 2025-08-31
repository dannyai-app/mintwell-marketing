import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faCalendarDays,
  faClock,
  faHandshake,
  faTriangleExclamation,
  faUserCheck,
  faCircleExclamation,
  faCircleCheck,
  faXmark,
  faBan,
  faCircleInfo,
  faGears,
  faLock,
  faKey,
  faUserShield,
  faBell,
  faMobileScreen,
  faLaptop,
  faWifi,
  faCreditCard,
  faReceipt,
  faCalendarCheck,
  faShield,
  faExclamation,
  faBalanceScale,
  faGavel,
  faPenToSquare,
  faGlobe,
  faHistory,
  faUserClock,
  faEnvelope,
  faPhone,
  faComments,
  faHeadset
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Review Mintwell’s Terms of Service covering eligibility, acceptable use, security, payments, termination, and more.",
  openGraph: { title: "Mintwell — Terms of Service", description: "Review Mintwell’s Terms of Service covering eligibility, acceptable use, security, payments, termination, and more." },
  twitter: { title: "Mintwell — Terms of Service", description: "Review Mintwell’s Terms of Service covering eligibility, acceptable use, security, payments, termination, and more." }
};

export default function TermsPage() {
  const lastUpdated = "December 2024";
  return (
    <main>
      {/* Hero */}
      <section id="hero-section" className="bg-gradient-to-br from-white to-mintwell-light py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 bg-mintwell-blue/10 text-mintwell-blue rounded-full text-sm font-medium">
              <FontAwesomeIcon icon={faShieldHalved} className="mr-2" aria-hidden="true" />
              Legal Documentation
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-mintwell-navy mb-6">Terms of Service</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            These Terms govern your use of Mintwell. Please read them carefully to understand your rights and responsibilities when using our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center text-gray-500">
              <FontAwesomeIcon icon={faCalendarDays} className="mr-2" aria-hidden="true" />
              <span>Last updated: {lastUpdated}</span>
            </div>
            <div className="flex items-center text-gray-500">
              <FontAwesomeIcon icon={faClock} className="mr-2" aria-hidden="true" />
              <span>15 minute read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Changes to Terms */}
      <section id="changes" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-12">
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-mintwell-teal/10 rounded-xl flex items-center justify-center mr-4">
                <FontAwesomeIcon icon={faPenToSquare} className="text-mintwell-teal text-xl" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-mintwell-navy mb-4">Changes to Terms</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-mintwell-teal to-blue-500 rounded-full" />
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-mintwell-light p-6 rounded-xl border-l-4 border-mintwell-teal">
                <h4 className="font-semibold text-mintwell-navy mb-3">Right to Modify</h4>
                <p className="text-gray-700">We may update, modify, or replace these Terms to reflect new features, legal requirements, or improvements. We will make reasonable efforts to notify users of significant changes.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-mintwell-navy text-xl mb-4">Notification Methods</h4>
                  {[{i:faEnvelope,t:"Email Notification",d:"Important changes sent to your registered email"},{i:faBell,t:"In‑App Notifications",d:"Alerts displayed after you log in"},{i:faGlobe,t:"Website Updates",d:"Updated terms posted with revision dates"}].map((n,i)=> (
                    <div key={i} className="flex items-start mb-3"><FontAwesomeIcon icon={n.i} className="text-mintwell-teal mr-3 mt-1" aria-hidden="true" /><div><h5 className="font-medium text-gray-900">{n.t}</h5><p className="text-gray-600 text-sm">{n.d}</p></div></div>
                  ))}
                </div>
                <div>
                  <h4 className="font-semibold text-mintwell-navy text-xl mb-4">Acceptance Timeline</h4>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 space-y-4">
                    {[{n:"30",t:"Days notice for major changes"},{n:"7",t:"Days notice for minor updates"}].map((x,i)=> (
                      <div key={i} className="flex items-center"><div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3"><span className="text-blue-600 font-bold text-sm">{x.n}</span></div><span className="text-blue-700">{x.t}</span></div>
                    ))}
                    <div className="flex items-center"><FontAwesomeIcon icon={faCircleCheck} className="text-blue-600 mr-3" aria-hidden="true" /><span className="text-blue-700">Continued use implies acceptance</span></div>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {[{i:faHistory,t:"Version History",d:"Previous versions available upon request"},{i:faCalendarCheck,t:"Effective Date",d:"Changes take effect on specified date"},{i:faUserClock,t:"Grace Period",d:"Time to review and decide on acceptance"}].map((x,i)=> (
                  <div key={i} className="text-center p-6 bg-mintwell-light rounded-xl">
                    <FontAwesomeIcon icon={x.i} className="text-3xl text-mintwell-teal mb-3" aria-hidden="true" />
                    <h5 className="font-semibold text-mintwell-navy mb-2">{x.t}</h5>
                    <p className="text-gray-600 text-sm">{x.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-mintwell-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-12">
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-mintwell-blue/10 rounded-xl flex items-center justify-center mr-4">
                <FontAwesomeIcon icon={faHeadset} className="text-mintwell-blue text-xl" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-mintwell-navy mb-4">Contact Us</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-mintwell-blue to-mintwell-teal rounded-full" />
              </div>
            </div>
            <div className="space-y-8">
              <div className="text-center">
                <p className="text-xl text-gray-600">Questions about these Terms? Our support team is here to help.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-mintwell-light rounded-xl">
                  <FontAwesomeIcon icon={faEnvelope} className="text-3xl text-mintwell-blue mb-4" aria-hidden="true" />
                  <h4 className="font-semibold text-mintwell-navy mb-2">Email Support</h4>
                  <p className="text-gray-600 text-sm mb-3">Get help with any questions</p>
                  <a className="text-mintwell-blue hover:text-blue-700 font-medium" href="mailto:support@mintwell.ai">support@mintwell.ai</a>
                </div>
                <div className="text-center p-6 bg-mintwell-light rounded-xl">
                  <FontAwesomeIcon icon={faPhone} className="text-3xl text-mintwell-teal mb-4" aria-hidden="true" />
                  <h4 className="font-semibold text-mintwell-navy mb-2">Phone Support</h4>
                  <p className="text-gray-600 text-sm mb-3">Speak with our team</p>
                  <p className="text-mintwell-teal font-medium">1-800-MINTWELL</p>
                  <p className="text-gray-500 text-xs">Mon–Fri 9AM–6PM EST</p>
                </div>
                <div className="text-center p-6 bg-mintwell-light rounded-xl">
                  <FontAwesomeIcon icon={faComments} className="text-3xl text-green-600 mb-4" aria-hidden="true" />
                  <h4 className="font-semibold text-mintwell-navy mb-2">Live Chat</h4>
                  <p className="text-gray-600 text-sm mb-3">Instant help when you need it</p>
                  <Link href="/support#live-chat-integration" className="bg-mintwell-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block">Start Chat</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Liability */}
      <section id="liability" className="py-16 bg-mintwell-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-12">
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                <FontAwesomeIcon icon={faTriangleExclamation} className="text-red-600 text-xl" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-mintwell-navy mb-4">Limitation of Liability</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full" />
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-xl">
                <h4 className="font-semibold text-red-800 mb-3">Liability Limitations</h4>
                <p className="text-red-700">To the maximum extent permitted by law, Mintwell and its affiliates shall not be liable for indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-mintwell-navy text-xl mb-4">Excluded Damages</h4>
                  {[
                    "Loss of business or profits",
                    "Data loss or corruption",
                    "Service interruptions",
                    "Third-party service failures",
                    "Security breaches beyond our control",
                  ].map((t,i)=> (
                    <div key={i} className="flex items-start"><FontAwesomeIcon icon={faXmark} className="text-red-500 mr-3 mt-1" aria-hidden="true" /><span className="text-gray-700">{t}</span></div>
                  ))}
                </div>
                <div>
                  <h4 className="font-semibold text-mintwell-navy text-xl mb-4">Maximum Liability</h4>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <p className="text-blue-700 mb-4">In no event shall total liability exceed the amount paid by you to Mintwell in the twelve (12) months preceding the claim.</p>
                    <div className="bg-white p-4 rounded-lg border border-blue-300 flex items-center justify-between">
                      <span className="text-blue-800 font-medium">Maximum Liability Cap:</span>
                      <span className="text-blue-900 font-bold">12 months of fees paid</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h4 className="font-semibold text-gray-800 mb-3">Force Majeure</h4>
                <p className="text-gray-700">Mintwell shall not be liable for failures due to circumstances beyond reasonable control, including acts of God, disasters, terrorism, government actions, ISP failures, or other force majeure events.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {[{i:faExclamation,t:"User Responsibility",d:"Users assume risk for use of the platform"},{i:faBalanceScale,t:"Legal Limits",d:"Liability limited to the extent of law"},{i:faGavel,t:"Jurisdiction",d:"Subject to applicable laws"}].map((x,i)=> (
                  <div key={i} className="text-center p-6 bg-yellow-50 rounded-xl border">
                    <FontAwesomeIcon icon={x.i} className="text-3xl text-yellow-600 mb-3" aria-hidden="true" />
                    <h5 className="font-semibold text-yellow-800 mb-2">{x.t}</h5>
                    <p className="text-yellow-700 text-sm">{x.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimers */}
      <section id="disclaimers" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-12">
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mr-4">
                <FontAwesomeIcon icon={faTriangleExclamation} className="text-yellow-600 text-xl" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-mintwell-navy mb-4">Disclaimer of Warranties</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full" />
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
                <h4 className="font-semibold text-yellow-800 mb-3">"As Is" Service Provision</h4>
                <p className="text-yellow-700">Mintwell is provided "as is" and "as available" without warranties of any kind, express or implied. We do not warrant that the service will be uninterrupted, error-free, or completely secure.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-mintwell-navy text-xl mb-4">Service Limitations</h4>
                  <div className="space-y-4">
                    {[{t:"Technology Constraints",d:"Performance may vary based on internet connectivity and device capabilities."},{t:"Data Accuracy",d:"Users are responsible for verifying information and calculations."},{t:"Third-Party Integration",d:"We do not control third-party services and their performance."}].map((x,i)=> (
                      <div key={i} className="flex items-start"><FontAwesomeIcon icon={faCircleInfo} className="text-mintwell-teal mr-3 mt-1" aria-hidden="true" /><div><h5 className="font-medium text-gray-900">{x.t}</h5><p className="text-gray-600 text-sm">{x.d}</p></div></div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-mintwell-navy text-xl mb-4">Professional Responsibility</h4>
                  <div className="bg-mintwell-light p-6 rounded-xl">
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">Financial advisors remain fully responsible for professional advice and recommendations provided to clients.</p>
                    <ul className="space-y-2">
                      {[
                        "Verify all calculations and recommendations",
                        "Ensure compliance with regulatory requirements",
                        "Maintain professional liability coverage",
                      ].map((t,i)=> (
                        <li key={i} className="flex items-start text-gray-600 text-sm"><FontAwesomeIcon icon={faCircleCheck} className="text-mintwell-teal mr-2 mt-1" aria-hidden="true" />{t}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h4 className="font-semibold text-red-800 mb-3">Important Disclaimer</h4>
                <p className="text-red-700">Mintwell does not provide financial advice directly to clients. The platform facilitates planning between licensed advisors and their clients; all advice and decisions remain the responsibility of advisors and clients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Termination */}
      <section id="termination" className="py-16 bg-mintwell-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-12">
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                <FontAwesomeIcon icon={faBan} className="text-red-600 text-xl" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-mintwell-navy mb-4">Account Termination</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full" />
              </div>
            </div>
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-mintwell-navy text-xl mb-4">Grounds for Termination</h4>
                  <div className="space-y-3">
                    {["Violation of Terms of Service","Fraudulent or illegal activity","Breach of professional standards","Non-payment of subscription fees","Misuse of platform features"].map((t,i)=> (
                      <div key={i} className="flex items-start"><FontAwesomeIcon icon={faCircleExclamation} className="text-red-500 mr-3 mt-1" aria-hidden="true" /><span className="text-gray-700">{t}</span></div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-mintwell-navy text-xl mb-4">Termination Process</h4>
                  <div className="bg-red-50 border border-red-200 rounded-xl p-6 space-y-4">
                    {["Warning notification sent","Opportunity to address issues","Account suspension or termination","Data export period (30 days)"].map((t,i)=> (
                      <div key={i} className="flex items-center"><div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3"><span className="text-red-600 font-bold text-sm">{i+1}</span></div><span className="text-red-700">{t}</span></div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 className="font-semibold text-blue-800 mb-3">Your Right to Terminate</h4>
                <p className="text-blue-700">You may terminate your account at any time via support or account settings. After termination, you retain access to your data for 30 days to export.</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h4 className="font-semibold text-gray-800 mb-3">Effect of Termination</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Immediate loss of platform access",
                    "Cancellation of active subscriptions",
                    "Deletion of account data after grace period",
                    "Termination of client relationships on platform",
                    "Cessation of support services",
                    "No refund of prepaid subscription fees",
                  ].map((t,i)=> (
                    <div key={i} className="flex items-start text-gray-700"><span className="text-gray-400 mr-2 mt-2 text-xs">•</span><span className="text-sm">{t}</span></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payments */}
      <section id="payments" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-12">
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-mintwell-teal/10 rounded-xl flex items-center justify-center mr-4">
                <FontAwesomeIcon icon={faCreditCard} className="text-mintwell-teal text-xl" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-mintwell-navy mb-4">Subscriptions & Payments</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-mintwell-teal to-green-500 rounded-full" />
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-mintwell-light p-6 rounded-xl border-l-4 border-mintwell-blue">
                <h4 className="font-semibold text-mintwell-navy mb-3">Payment Structure</h4>
                <p className="text-gray-700">Certain features require paid subscription plans. All payments are processed securely through certified payment processors.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-mintwell-navy text-xl mb-4">Billing Information</h4>
                  <div className="space-y-4">
                    {[{i:faCalendarDays,t:"Automatic Renewal",d:"Subscriptions renew automatically unless canceled before the renewal date."},{i:faReceipt,t:"Invoice Generation",d:"Detailed invoices are provided for all transactions."},{i:faCreditCard,t:"Payment Methods",d:"We accept major credit cards, ACH, and other secure methods."}].map((b,k)=> (
                      <div key={k} className="flex items-start">
                        <FontAwesomeIcon icon={b.i} className="text-mintwell-teal mr-3 mt-1" aria-hidden="true" />
                        <div>
                          <h5 className="font-medium text-gray-900">{b.t}</h5>
                          <p className="text-gray-600 text-sm">{b.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-mintwell-navy text-xl mb-4">Cancellation Policy</h4>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                    {[
                      "Cancel anytime in account settings",
                      "Access continues until end of billing period",
                      "No refunds for partial periods",
                      "Data export available upon request",
                    ].map((t,i)=> (
                      <div key={i} className="flex items-start mb-2"><FontAwesomeIcon icon={faCircleInfo} className="text-blue-500 mr-2 mt-1" aria-hidden="true" /><span className="text-blue-700 text-sm">{t}</span></div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {[{i:faShield,t:"Secure Processing",d:"PCI DSS compliant"},{i:faLock,t:"Data Encryption",d:"Encrypted at rest and in transit"},{i:faUserShield,t:"Privacy Protected",d:"We never share payment info"}].map((c,i)=> (
                  <div key={i} className="text-center p-6 bg-mintwell-light rounded-xl border">
                    <FontAwesomeIcon icon={c.i} className="text-3xl text-mintwell-teal mb-3" aria-hidden="true" />
                    <h5 className="font-semibold text-mintwell-navy mb-2">{c.t}</h5>
                    <p className="text-gray-600 text-sm">{c.d}</p>
                  </div>
                ))}
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faTriangleExclamation} className="text-yellow-600 text-xl mr-3 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-2">Failed Payment Policy</h4>
                    <p className="text-yellow-700">If a payment fails, we will retry within 3–5 business days. Continued failure may result in account suspension; we will notify you before any suspension.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accounts & Security */}
      <section id="accounts" className="py-16 bg-mintwell-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-12">
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-mintwell-blue/10 rounded-xl flex items-center justify-center mr-4">
                <FontAwesomeIcon icon={faLock} className="text-mintwell-blue text-xl" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-mintwell-navy mb-4">Accounts & Security</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-mintwell-blue to-purple-500 rounded-full" />
              </div>
            </div>
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h4 className="font-semibold text-mintwell-navy text-xl">Account Responsibilities</h4>
                  {[{i:faKey,t:"Secure Credentials",d:"Safeguard your login information and maintain strong passwords."},{i:faUserShield,t:"Account Monitoring",d:"Monitor your account for unauthorized access or suspicious activity."},{i:faBell,t:"Immediate Notification",d:"Notify us immediately of any unauthorized use or security breaches."}].map((r,idx)=> (
                    <div key={idx} className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3"><FontAwesomeIcon icon={r.i} className="text-gray-700 text-sm" aria-hidden="true" /></div>
                      <div>
                        <h5 className="font-medium text-gray-900">{r.t}</h5>
                        <p className="text-gray-600 text-sm">{r.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-6">
                  <h4 className="font-semibold text-mintwell-navy text-xl">Security Features</h4>
                  <div className="bg-gradient-to-br from-mintwell-light to-blue-50 p-6 rounded-xl border border-blue-100">
                    {[
                      "Two-factor authentication",
                      "End-to-end encryption",
                      "Regular security audits",
                      "Automated threat detection",
                      "Secure data centers",
                    ].map((t,i)=> (
                      <div key={i} className="flex items-center mb-3"><FontAwesomeIcon icon={faShield} className="text-green-600 mr-3" aria-hidden="true" /><span className="text-gray-700">{t}</span></div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faTriangleExclamation} className="text-amber-500 text-xl mr-3 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-2">Account Sharing Prohibited</h4>
                    <p className="text-amber-700">Account credentials are personal and confidential. Sharing login information is strictly prohibited and may result in account termination. Each user must maintain an individual account.</p>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {[{i:faMobileScreen,t:"Mobile Security",d:"Use secure networks and keep your app updated"},{i:faLaptop,t:"Device Security",d:"Keep devices updated with security software"},{i:faWifi,t:"Network Safety",d:"Avoid public WiFi for sensitive activity"}].map((c,i)=> (
                  <div key={i} className="text-center p-6 bg-mintwell-light rounded-xl">
                    <FontAwesomeIcon icon={c.i} className="text-3xl text-mintwell-teal mb-3" aria-hidden="true" />
                    <h5 className="font-semibold text-mintwell-navy mb-2">{c.t}</h5>
                    <p className="text-gray-600 text-sm">{c.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Acceptable Use */}
      <section id="service-use" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-12">
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                <FontAwesomeIcon icon={faGears} className="text-green-600 text-xl" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-mintwell-navy mb-4">Acceptable Use of Service</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-mintwell-teal rounded-full" />
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h4 className="font-semibold text-mintwell-navy text-xl mb-4">Permitted Uses</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    {["Create and manage financial plans","Communicate with clients","Generate reports and documentation"].map((t,i)=> (
                      <div key={i} className="flex items-start"><FontAwesomeIcon icon={faCircleCheck} className="text-green-500 mr-3 mt-1" aria-hidden="true" /><span className="text-gray-700">{t}</span></div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    {["Access educational resources","Use analytical tools and calculators","Participate in platform updates and training"].map((t,i)=> (
                      <div key={i} className="flex items-start"><FontAwesomeIcon icon={faCircleCheck} className="text-green-500 mr-3 mt-1" aria-hidden="true" /><span className="text-gray-700">{t}</span></div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-xl">
                <h4 className="font-semibold text-red-800 mb-4 flex items-center">
                  <FontAwesomeIcon icon={faBan} className="mr-2" aria-hidden="true" />
                  Prohibited Activities
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Violating laws or regulations",
                    "Copying, redistributing, or reselling services",
                    "Reverse engineering the platform",
                    "Transmitting harmful code or malware",
                    "Impersonating other users or entities",
                    "Accessing unauthorized areas of the platform",
                    "Interfering with security features",
                    "Using the platform for unauthorized purposes",
                  ].map((t,i)=> (
                    <div key={i} className="flex items-start text-red-700"><FontAwesomeIcon icon={faXmark} className="text-red-500 mr-2 mt-1 text-sm" aria-hidden="true" /><span className="text-sm">{t}</span></div>
                  ))}
                </div>
              </div>
              <div className="bg-mintwell-light p-6 rounded-xl">
                <h4 className="font-semibold text-mintwell-navy mb-3">Professional Standards</h4>
                <p className="text-gray-700">Advisors must maintain professional standards and comply with regulatory requirements, including fiduciary duties, client confidentiality, and suitable recommendations based on client needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section id="eligibility" className="py-16 bg-mintwell-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-12">
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-mintwell-teal/10 rounded-xl flex items-center justify-center mr-4">
                <FontAwesomeIcon icon={faUserCheck} className="text-mintwell-teal text-xl" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-mintwell-navy mb-4">Eligibility Requirements</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-mintwell-teal to-mintwell-blue rounded-full" />
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h4 className="font-semibold text-red-800 mb-3 flex items-center">
                  <FontAwesomeIcon icon={faCircleExclamation} className="mr-2" aria-hidden="true" />
                  Age Requirement
                </h4>
                <p className="text-red-700 text-lg">You must be at least 18 years old and legally able to enter into contracts in your jurisdiction to use Mintwell.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-mintwell-navy text-xl">For Financial Advisors</h4>
                  <ul className="space-y-3">
                    {["Hold valid licenses","Comply with regulations","Maintain professional liability insurance","Provide accurate credentials"].map((t,i)=> (
                      <li key={i} className="flex items-start"><FontAwesomeIcon icon={faCircleCheck} className="text-green-500 mr-3 mt-1" aria-hidden="true" /><span className="text-gray-700">{t}</span></li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-mintwell-navy text-xl">For Clients</h4>
                  <ul className="space-y-3">
                    {["Invited by a licensed advisor","Provide accurate personal information","Consent to data processing","Understand the advisory relationship"].map((t,i)=> (
                      <li key={i} className="flex items-start"><FontAwesomeIcon icon={faCircleCheck} className="text-green-500 mr-3 mt-1" aria-hidden="true" /><span className="text-gray-700">{t}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 className="font-semibold text-blue-800 mb-3">Verification Process</h4>
                <p className="text-blue-700">We may verify eligibility and request documentation to confirm identity, age, and professional credentials. Failure to provide verification may result in account suspension or termination.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section id="introduction" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-12">
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-mintwell-blue/10 rounded-xl flex items-center justify-center mr-4">
                <FontAwesomeIcon icon={faHandshake} className="text-mintwell-blue text-xl" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-mintwell-navy mb-4">Introduction</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-mintwell-blue to-mintwell-teal rounded-full" />
              </div>
            </div>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>Welcome to Mintwell, a comprehensive financial planning platform designed to bridge the gap between licensed financial advisors and their clients. By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</p>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-xl">
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faTriangleExclamation} className="text-amber-500 text-xl mr-3 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-2">Important Notice</h4>
                    <p className="text-amber-700">If you do not agree to these terms, please discontinue use of Mintwell immediately. Continued use of our platform constitutes acceptance of these terms.</p>
                  </div>
                </div>
              </div>
              <p>These Terms govern your relationship with Mintwell and outline the rights and responsibilities of both parties. We may modify these terms at any time and will notify users of significant changes through our platform or via email.</p>
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="bg-mintwell-light p-6 rounded-xl">
                  <h4 className="font-semibold text-mintwell-navy mb-3">For Financial Advisors</h4>
                  <p className="text-gray-600">Access professional tools to manage client relationships, generate plans, and track progress.</p>
                </div>
                <div className="bg-mintwell-light p-6 rounded-xl">
                  <h4 className="font-semibold text-mintwell-navy mb-3">For Clients</h4>
                  <p className="text-gray-600">Complete intake assessments, view your financial health score, and access personalized plans.</p>
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { href: "#introduction", icon: faHandshake, label: "Introduction" },
              { href: "#eligibility", icon: faUserCheck, label: "Eligibility" },
              { href: "#service-use", icon: faGears, label: "Service Use" },
              { href: "#accounts", icon: faLock, label: "Accounts" },
              { href: "#payments", icon: faCreditCard, label: "Payments" },
            ].map((i, idx) => (
              <Link key={idx} href={i.href} className="flex items-center p-4 bg-mintwell-light rounded-xl hover:bg-mintwell-blue/10 transition-colors group">
                <FontAwesomeIcon icon={i.icon} className="text-mintwell-teal mr-3 group-hover:text-mintwell-blue" aria-hidden="true" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-mintwell-navy">{i.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
