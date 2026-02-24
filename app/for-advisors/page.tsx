import type { Metadata } from "next";
import EmailCapture from "../../components/EmailCapture";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faBolt,
  faShieldHalved,
  faChartPie,
  faCheck,
  faBell,
  faDownload,
  faChartBar,
  faUsers,
  faPalette,
  faLightbulb,
  faMobileScreen,
  faClock,
  faArrowsRotate,
  faHeadset,
  faCreditCard,
  faServer,
  faEyeSlash,
  faScaleBalanced,
  faCertificate,
  faGavel,
  faUserShield,
  faCircleInfo,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "For Advisors",
  description: "Generate professional financial plans in minutes and impress prospects.",
  openGraph: { title: "Mintwell — For Advisors", description: "Generate professional financial plans in minutes." },
  twitter: { title: "Mintwell — For Advisors", description: "Generate professional financial plans in minutes." },
};

export default function ForAdvisorsPage() {
  return (
    <main>
      {/* Hero */}
      <section id="hero-section" className="bg-white py-20 min-h-[700px] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-mintwell-blue to-mintwell-teal text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <FontAwesomeIcon icon={faStar} className="mr-2" aria-hidden="true" />
                Trusted by 500+ Financial Advisors
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-mintwell-navy mb-6 leading-tight">
                Plan Smart.<br /><span className="text-mintwell-blue">Live Well.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Generate professional financial plans in minutes. Impress clients with comprehensive reports that showcase your expertise and build lasting trust.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-mintwell-blue rounded-lg flex items-center justify-center mr-4">
                    <FontAwesomeIcon icon={faBolt} className="text-white text-sm" aria-hidden="true" />
                  </div>
                  <span className="text-mintwell-navy font-medium">Setup in under 5 minutes</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-mintwell-teal rounded-lg flex items-center justify-center mr-4">
                    <FontAwesomeIcon icon={faShieldHalved} className="text-white text-sm" aria-hidden="true" />
                  </div>
                  <span className="text-mintwell-navy font-medium">Bank-level security</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                    <FontAwesomeIcon icon={faChartPie} className="text-white text-sm" aria-hidden="true" />
                  </div>
                  <span className="text-mintwell-navy font-medium">Professional PDF reports</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-mintwell-blue">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-mintwell-blue to-mintwell-teal rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FontAwesomeIcon icon={faChartPie} className="text-white text-2xl" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-mintwell-navy mb-2">Start Your Free Trial</h3>
                  <p className="text-gray-600">Join 500+ advisors already using Mintwell</p>
                </div>
                <div id="advisor-email" className="mt-6">
                  <EmailCapture label="Professional Email Address" placeholder="advisor@yourfirm.com" cta="Start Free 14-Day Trial" />
                </div>
                <div className="text-center mt-4">
                  <p className="text-sm text-gray-500 mb-3">No credit card required • Setup in under 5 minutes</p>
                  <div className="flex justify-center items-center space-x-4 text-xs text-gray-400">
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faCheck} className="text-mintwell-teal mr-1" aria-hidden="true" />
                      <span>SOC 2 Compliant</span>
                    </div>
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faCheck} className="text-mintwell-teal mr-1" aria-hidden="true" />
                      <span>FINRA Ready</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq-section" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mintwell-navy mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common questions about Mintwell and how it can help your practice.</p>
          </div>
          <div className="space-y-6">
            {[
              {
                color: "border-mintwell-blue",
                q: "How quickly can I get started with Mintwell?",
                a: "You can be up and running in under 5 minutes. Simply sign up with your email address, customize your branding preferences, and start inviting clients.",
                open: true,
              },
              {
                color: "border-mintwell-teal",
                q: "Do my clients need to connect their bank accounts?",
                a: "No bank logins are required. Clients provide information through our secure 10-question assessment, giving them complete control over what they share.",
              },
              {
                color: "border-green-500",
                q: "Can I customize the reports with my branding?",
                a: "Absolutely. All reports can be customized with your logo, colors, contact information, and professional credentials.",
              },
            ].map((f, i) => (
              <div key={i} className={`bg-mintwell-light rounded-2xl p-6 border-l-4 ${f.color}`}>
                <details open={!!f.open} className="group">
                  <summary className="w-full text-left flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-xl font-bold text-mintwell-navy">{f.q}</h3>
                    <span className="text-mintwell-blue group-open:hidden">+</span>
                    <span className="text-mintwell-blue hidden group-open:inline">−</span>
                  </summary>
                  <div className="mt-4 text-gray-600">{f.a}</div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency */}
      <section id="urgency-section" className="py-20 bg-mintwell-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-mintwell-blue">
            <div className="mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-mintwell-blue to-mintwell-teal rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={faClock} className="text-white text-2xl" aria-hidden="true" />
              </div>
              <h2 className="text-4xl font-bold text-mintwell-navy mb-4">Every Day You Wait, Competitors Get Ahead</h2>
              <p className="text-xl text-gray-600 mb-6">
                While you're manually creating proposals, other advisors are closing deals with professional Mintwell reports.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-left">
              <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-500">
                <h4 className="font-bold text-red-700 mb-4">Cost of Waiting</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Lost prospects to competitors</li>
                  <li>• Hours wasted on manual proposals</li>
                  <li>• Clients questioning your expertise</li>
                  <li>• Missing referral opportunities</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
                <h4 className="font-bold text-green-700 mb-4">Start Today & Get</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Professional edge over competitors</li>
                  <li>• Instant client impression boost</li>
                  <li>• More closed deals this month</li>
                  <li>• Referrals from impressed clients</li>
                </ul>
              </div>
            </div>
            <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200 mb-8">
              <div className="flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={faStar} className="text-yellow-600 text-2xl mr-3" aria-hidden="true" />
                <h3 className="text-xl font-bold text-yellow-800">Limited Time: Extended Trial</h3>
              </div>
              <p className="text-yellow-700 font-medium">
                Start your free trial today and get 21 days (instead of 14) to see results. No credit card required.
              </p>
            </div>
            <div className="max-w-md mx-auto"><EmailCapture label="Enter your email to claim offer" cta="Claim Extended Trial" /></div>
            <p className="text-sm text-gray-500 mt-4">
              Setup in under 5 minutes • Generate your first report today • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta-section" className="py-20 bg-gradient-to-r from-mintwell-blue to-mintwell-teal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Transform Your Practice?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of financial advisors who are already impressing clients and growing their practices with Mintwell's professional financial planning tools.
          </p>
          <div className="max-w-md mx-auto bg-white rounded-2xl p-4">
            <EmailCapture label="Enter your email to start" cta="Start Free Trial" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-10">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={faClock} className="text-mintwell-blue text-xl" aria-hidden="true" />
              </div>
              <h3 className="text-white font-bold mb-2">5-Minute Setup</h3>
              <p className="text-blue-100 text-sm">Get started immediately with email signup</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={faCreditCard} className="text-mintwell-blue text-xl" aria-hidden="true" />
              </div>
              <h3 className="text-white font-bold mb-2">No Credit Card</h3>
              <p className="text-blue-100 text-sm">14-day free trial with full access</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={faHeadset} className="text-mintwell-blue text-xl" aria-hidden="true" />
              </div>
              <h3 className="text-white font-bold mb-2">Expert Support</h3>
              <p className="text-blue-100 text-sm">Dedicated help when you need it</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section id="security-compliance" className="py-20 bg-mintwell-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mintwell-navy mb-4">Enterprise-Grade Security</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your clients' financial information is protected by the same security standards used by major financial institutions.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-mintwell-blue rounded-xl flex items-center justify-center mr-6">
                    <FontAwesomeIcon icon={faShieldHalved} className="text-white text-xl" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-mintwell-navy mb-2">256-Bit SSL Encryption</h3>
                    <p className="text-gray-600">All data transmission is protected with bank-level encryption protocols.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-mintwell-teal rounded-xl flex items-center justify-center mr-6">
                    <FontAwesomeIcon icon={faServer} className="text-white text-xl" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-mintwell-navy mb-2">SOC 2 Type II Compliant</h3>
                    <p className="text-gray-600">Independently audited security controls and data handling procedures.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-6">
                    <FontAwesomeIcon icon={faEyeSlash} className="text-white text-xl" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-mintwell-navy mb-2">Privacy by Design</h3>
                    <p className="text-gray-600">No bank logins required. Clients control what information they share.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mr-6">
                    <FontAwesomeIcon icon={faScaleBalanced} className="text-white text-xl" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-mintwell-navy mb-2">FINRA Compliant</h3>
                    <p className="text-gray-600">Designed with regulatory requirements in mind for financial advisors.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-mintwell-blue">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faCertificate} className="text-green-600 mr-3" aria-hidden="true" />
                    <span className="font-medium text-mintwell-navy">SOC 2 Type II</span>
                  </div>
                  <span className="text-green-600 font-bold">✓ Verified</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faShieldHalved} className="text-mintwell-blue mr-3" aria-hidden="true" />
                    <span className="font-medium text-mintwell-navy">SSL/TLS 1.3</span>
                  </div>
                  <span className="text-mintwell-blue font-bold">✓ Active</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faGavel} className="text-purple-600 mr-3" aria-hidden="true" />
                    <span className="font-medium text-mintwell-navy">FINRA Compliant</span>
                  </div>
                  <span className="text-purple-600 font-bold">✓ Certified</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-teal-50 rounded-lg">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faUserShield} className="text-mintwell-teal mr-3" aria-hidden="true" />
                    <span className="font-medium text-mintwell-navy">GDPR Ready</span>
                  </div>
                  <span className="text-mintwell-teal font-bold">✓ Compliant</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-mintwell-light rounded-lg">
                <p className="text-sm text-gray-600 text-center">
                  <FontAwesomeIcon icon={faCircleInfo} className="mr-2" aria-hidden="true" />
                  Security audits performed quarterly by independent third parties
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mintwell-navy mb-4">Trusted by Financial Professionals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what advisors are saying about how Mintwell has transformed their client relationships and practice efficiency.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {["https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg","https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg","https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg"].map((avatar, i)=> (
              <div key={i} className={`bg-mintwell-light rounded-2xl p-8 border-t-4 ${["border-mintwell-blue","border-mintwell-teal","border-green-500"][i]}`}>
                <div className="flex items-center mb-6">
                  <img className="w-12 h-12 rounded-full mr-4" src={avatar} alt="Advisor" />
                  <div>
                    <h4 className="font-bold text-mintwell-navy">{["David Thompson","Sarah Mitchell","Michael Rodriguez"][i]}</h4>
                    <p className="text-gray-600 text-sm">{["CFP®, Thompson Financial","Principal, Mitchell Wealth Management","Senior Advisor, Pinnacle Financial"][i]}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">{[
                  "Mintwell has revolutionized how I work with new clients. The professional reports impress prospects and the streamlined process saves me hours each week.",
                  "My clients love the visual health scores and clear recommendations. It's made complex financial planning accessible and engaging for everyone.",
                  "The setup was incredibly simple and my first client report looked like it came from a Fortune 500 firm. Mintwell has elevated my entire practice."
                ][i]}</p>
                <div className="flex items-center">
                  <div className="flex text-yellow-400 mr-3">{Array.from({length:5}).map((_,s)=>(<FontAwesomeIcon key={s} icon={faStar} />))}</div>
                  <span className="text-gray-600 text-sm">5/5 stars</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 bg-gradient-to-r from-mintwell-blue to-mintwell-teal rounded-2xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-6">Join 500+ Advisors Growing Their Practice</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Mintwell has helped financial advisors generate over 10,000 professional reports and serve more than 25,000 clients nationwide.
            </p>
            <div className="max-w-md mx-auto"><EmailCapture label="Enter your email to start" cta="Start Free Trial" /></div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing-section" className="py-20 bg-mintwell-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mintwell-navy mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your practice. No hidden fees, no long-term contracts, and no surprises.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-mintwell-gray">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-mintwell-navy mb-4">Starter</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-mintwell-navy">$29</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-gray-600">Perfect for new advisors getting started</p>
              </div>
              <ul className="space-y-3 mb-8">
                {["Up to 25 clients","Unlimited reports","Basic branding","Email support"].map((t,i)=> (
                  <li key={i} className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-mintwell-teal mr-3" aria-hidden="true" /><span className="text-gray-700">{t}</span></li>
                ))}
              </ul>
              <div className="max-w-md mx-auto"><EmailCapture label="Enter your email to start" cta="Start Free Trial" /></div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl border-t-4 border-mintwell-blue relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-mintwell-blue text-white px-6 py-2 rounded-full text-sm font-bold uppercase">Most Popular</span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-mintwell-navy mb-4">Professional</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-mintwell-navy">$79</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-gray-600">Ideal for growing practices</p>
              </div>
              <ul className="space-y-3 mb-8">
                {["Up to 100 clients","Unlimited reports","Full branding customization","Priority support","Advanced analytics","API access"].map((t,i)=> (
                  <li key={i} className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-mintwell-teal mr-3" aria-hidden="true" /><span className="text-gray-700">{t}</span></li>
                ))}
              </ul>
              <div className="max-w-md mx-auto"><EmailCapture label="Enter your email to start" cta="Start Free Trial" /></div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-mintwell-teal">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-mintwell-navy mb-4">Enterprise</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-mintwell-navy">$199</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-gray-600">For large practices and RIAs</p>
              </div>
              <ul className="space-y-3 mb-8">
                {["Unlimited clients","White-label solution","Custom integrations","Dedicated account manager","Custom reporting","SLA guarantee"].map((t,i)=> (
                  <li key={i} className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-mintwell-teal mr-3" aria-hidden="true" /><span className="text-gray-700">{t}</span></li>
                ))}
              </ul>
              <div className="max-w-md mx-auto"><EmailCapture label="Enter your email to contact sales" cta="Contact Sales" /></div>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">All plans include a 14-day free trial. No credit card required.</p>
            <div className="flex justify-center items-center space-x-6">
              <div className="flex items-center"><FontAwesomeIcon icon={faShieldHalved} className="text-mintwell-teal mr-2" aria-hidden="true" /><span className="text-gray-700">Bank-level security</span></div>
              <div className="flex items-center"><FontAwesomeIcon icon={faHeadset} className="text-mintwell-teal mr-2" aria-hidden="true" /><span className="text-gray-700">24/7 support</span></div>
              <div className="flex items-center"><FontAwesomeIcon icon={faArrowsRotate} className="text-mintwell-teal mr-2" aria-hidden="true" /><span className="text-gray-700">Cancel anytime</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Report Generation */}
      <section id="report-generation" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mintwell-navy mb-4">Professional Financial Reports</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Generate comprehensive, branded PDF reports that showcase your expertise and provide clients with actionable insights.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-mintwell-light rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-mintwell-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={faPalette} className="text-white text-2xl" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-mintwell-navy mb-4">Branded Templates</h3>
              <p className="text-gray-600">Customize reports with your logo, colors, and contact information to maintain professional consistency.</p>
            </div>
            <div className="bg-mintwell-light rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-mintwell-teal rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={faChartBar} className="text-white text-2xl" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-mintwell-navy mb-4">Visual Analytics</h3>
              <p className="text-gray-600">Interactive charts and graphs make complex financial data easy to understand and engaging for clients.</p>
            </div>
            <div className="bg-mintwell-light rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={faLightbulb} className="text-white text-2xl" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-mintwell-navy mb-4">Smart Recommendations</h3>
              <p className="text-gray-600">AI-powered insights provide personalized recommendations based on each client's unique financial situation.</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-mintwell-blue to-mintwell-teal rounded-2xl p-1">
            <div className="bg-white rounded-2xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-mintwell-navy mb-6">Sample Financial Plan</h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-mintwell-blue pl-6">
                      <h4 className="font-bold text-mintwell-navy mb-2">Executive Summary</h4>
                      <p className="text-gray-600">Clear overview of current financial position and key recommendations.</p>
                    </div>
                    <div className="border-l-4 border-mintwell-teal pl-6">
                      <h4 className="font-bold text-mintwell-navy mb-2">Financial Health Score</h4>
                      <p className="text-gray-600">Visual representation of overall financial wellness with detailed breakdowns.</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-6">
                      <h4 className="font-bold text-mintwell-navy mb-2">Action Plan</h4>
                      <p className="text-gray-600">Step-by-step recommendations prioritized by impact and urgency.</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-6">
                      <h4 className="font-bold text-mintwell-navy mb-2">Progress Tracking</h4>
                      <p className="text-gray-600">Metrics and milestones to monitor financial improvement over time.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-2xl p-6 border">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-mintwell-blue rounded-lg mr-3"></div>
                      <span className="font-bold text-mintwell-navy">Your Financial Advisor</span>
                    </div>
                    <span className="text-sm text-gray-500">Page 1 of 12</span>
                  </div>
                  <h4 className="text-xl font-bold text-mintwell-navy mb-4">Financial Health Report</h4>
                  <div className="space-y-4">
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-mintwell-navy">Overall Score</span>
                        <span className="font-bold text-green-600 text-xl">85/100</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-mintwell-navy">$45K</div>
                        <div className="text-sm text-gray-600">Emergency Fund</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-mintwell-navy">18%</div>
                        <div className="text-sm text-gray-600">Debt Ratio</div>
                      </div>
                    </div>
                    <div className="bg-mintwell-light rounded-lg p-4">
                      <h5 className="font-bold text-mintwell-navy mb-2">Top Recommendations</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Increase 401(k) contribution to 15%</li>
                        <li>• Build emergency fund to 6 months</li>
                        <li>• Consider term life insurance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Experience */}
      <section id="client-experience" className="py-20 bg-mintwell-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mintwell-navy mb-4">Exceptional Client Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your clients will love the simple, intuitive process that provides valuable insights into their financial health without any complexity.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-mintwell-blue">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-mintwell-navy">Financial Health Assessment</h3>
                  <span className="bg-mintwell-blue text-white px-3 py-1 rounded-full text-sm font-medium">Step 7 of 10</span>
                </div>
                <div className="w-full bg-mintwell-gray rounded-full h-2 mb-6">
                  <div className="bg-gradient-to-r from-mintwell-blue to-mintwell-teal h-2 rounded-full" style={{ width: "70%" }}></div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-mintwell-navy font-medium mb-2">What is your current monthly income?</label>
                  <input type="text" className="w-full border-2 border-mintwell-gray rounded-xl p-4 focus:border-mintwell-blue focus:outline-none transition-colors duration-200" placeholder="Enter amount" />
                </div>
                <div>
                  <label className="block text-mintwell-navy font-medium mb-2">How much do you currently have in savings?</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="border-2 border-mintwell-gray hover:border-mintwell-blue rounded-xl p-3 text-left transition-colors duration-200">
                      <span className="block font-medium text-mintwell-navy">Less than $1,000</span>
                    </button>
                    <button className="border-2 border-mintwell-blue bg-blue-50 rounded-xl p-3 text-left">
                      <span className="block font-medium text-mintwell-navy">$1,000 - $5,000</span>
                    </button>
                    <button className="border-2 border-mintwell-gray hover:border-mintwell-blue rounded-xl p-3 text-left transition-colors duration-200">
                      <span className="block font-medium text-mintwell-navy">$5,000 - $10,000</span>
                    </button>
                    <button className="border-2 border-mintwell-gray hover:border-mintwell-blue rounded-xl p-3 text-left transition-colors duration-200">
                      <span className="block font-medium text-mintwell-navy">More than $10,000</span>
                    </button>
                  </div>
                </div>
                <div className="flex justify-between">
                  <button className="border-2 border-mintwell-teal text-mintwell-teal hover:bg-mintwell-teal hover:text-white px-6 py-3 rounded-xl font-bold uppercase transition-all duration-200">
                    Previous
                  </button>
                  <button className="bg-mintwell-blue hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-bold uppercase transition-all duration-200">
                    Continue
                  </button>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-mintwell-navy mb-6">Simple 10-Question Process</h3>
              <p className="text-gray-600 mb-8">
                No overwhelming forms or complex financial jargon. Just 10 thoughtfully crafted questions that capture the essential information needed for a comprehensive financial assessment.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-mintwell-blue rounded-full flex items-center justify-center mr-4 mt-1">
                    <FontAwesomeIcon icon={faShieldHalved} className="text-white text-sm" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-bold text-mintwell-navy mb-2">Privacy First</h4>
                    <p className="text-gray-600">No bank logins required. Clients provide only the information they're comfortable sharing.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-mintwell-teal rounded-full flex items-center justify-center mr-4 mt-1">
                    <FontAwesomeIcon icon={faMobileScreen} className="text-white text-sm" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-bold text-mintwell-navy mb-2">Mobile Optimized</h4>
                    <p className="text-gray-600">Clients can complete their assessment on any device, anywhere, at their own pace.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <FontAwesomeIcon icon={faClock} className="text-white text-sm" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-bold text-mintwell-navy mb-2">Quick Completion</h4>
                    <p className="text-gray-600">Most clients complete their assessment in under 10 minutes with our intuitive interface.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="success-stories" className="py-20 bg-mintwell-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mintwell-navy mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real advisors sharing how Mintwell transformed their client acquisition and retention.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-mintwell-blue">
              <div className="flex items-center mb-6">
                <img className="w-16 h-16 rounded-full mr-4" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" alt="David Thompson" />
                <div>
                  <h4 className="text-xl font-bold text-mintwell-navy">David Thompson, CFP®</h4>
                  <p className="text-gray-600">Thompson Financial Planning</p>
                  <div className="flex text-yellow-400 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-700 mb-6 text-lg italic">
                “I closed 4 new clients in my first month using Mintwell. The professional reports make prospects see me as the expert advisor they need, not just another salesperson.”
              </blockquote>
              <div className="grid grid-cols-2 gap-4 bg-mintwell-light rounded-xl p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-mintwell-blue">$2.4M</div>
                  <div className="text-sm text-gray-600">New AUM in 60 days</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">85%</div>
                  <div className="text-sm text-gray-600">Prospect close rate</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-mintwell-teal">
              <div className="flex items-center mb-6">
                <img className="w-16 h-16 rounded-full mr-4" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg" alt="Sarah Mitchell" />
                <div>
                  <h4 className="text-xl font-bold text-mintwell-navy">Sarah Mitchell</h4>
                  <p className="text-gray-600">Principal, Mitchell Wealth Management</p>
                  <div className="flex text-yellow-400 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-700 mb-6 text-lg italic">
                “My existing clients are referring more than ever. They love showing off their financial health scores to friends and family. It's become my best marketing tool.”
              </blockquote>
              <div className="grid grid-cols-2 gap-4 bg-mintwell-light rounded-xl p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-mintwell-teal">23</div>
                  <div className="text-sm text-gray-600">Referrals this quarter</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">95%</div>
                  <div className="text-sm text-gray-600">Client retention</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisor Results */}
      <section id="advisor-results" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mintwell-navy mb-4">Real Results from Financial Advisors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how Mintwell is helping advisors close more prospects, impress existing clients, and grow their AUM.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-green-50 rounded-2xl p-8 text-center border-t-4 border-green-500">
              <div className="text-5xl font-bold text-green-600 mb-4">3.2x</div>
              <h3 className="text-xl font-bold text-mintwell-navy mb-2">Higher Prospect Conversion</h3>
              <p className="text-gray-600">Advisors using Mintwell see 3.2x higher conversion rates from prospects to clients</p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8 text-center border-t-4 border-mintwell-blue">
              <div className="text-5xl font-bold text-mintwell-blue mb-4">87%</div>
              <h3 className="text-xl font-bold text-mintwell-navy mb-2">Client Satisfaction</h3>
              <p className="text-gray-600">Of clients rate their advisor's professionalism higher after receiving a Mintwell report</p>
            </div>
            <div className="bg-teal-50 rounded-2xl p-8 text-center border-t-4 border-mintwell-teal">
              <div className="text-5xl font-bold text-mintwell-teal mb-4">12hrs</div>
              <h3 className="text-xl font-bold text-mintwell-navy mb-2">Time Saved Per Week</h3>
              <p className="text-gray-600">Average time saved on client intake and financial plan preparation</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-mintwell-blue to-mintwell-teal rounded-2xl p-1">
            <div className="bg-white rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-mintwell-navy mb-4">From First Meeting to Signed Client</h3>
                <p className="text-xl text-gray-600">How Mintwell transforms your prospect process</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-500">
                    <h4 className="font-bold text-red-700 mb-2">❌ Without Mintwell</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Generic financial questionnaires</li>
                      <li>• Hours wasted on manual proposals</li>
                      <li>• Clients questioning your expertise</li>
                      <li>• Missing referral opportunities</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
                    <h4 className="font-bold text-green-700 mb-2">✅ With Mintwell</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Professional branded assessment</li>
                      <li>• Instant comprehensive reports</li>
                      <li>• Prospects engaged and impressed</li>
                      <li>• Immediate value demonstration</li>
                      <li>• Competing on expertise and service</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section id="features-overview" className="py-20 bg-mintwell-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mintwell-navy mb-4">Everything You Need to Succeed</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Streamline your practice with tools designed specifically for financial advisors who want to deliver exceptional client experiences.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-mintwell-blue">
              <div className="w-12 h-12 bg-mintwell-blue rounded-xl flex items-center justify-center mb-6"><FontAwesomeIcon icon={faBolt} className="text-white text-xl" aria-hidden="true"/></div>
              <h3 className="text-2xl font-bold text-mintwell-navy mb-4">Lightning Fast Setup</h3>
              <p className="text-gray-600 mb-6">Get started in under 5 minutes. No complex integrations or lengthy onboarding processes.</p>
              <ul className="space-y-2">
                {[
                  "Email signup only",
                  "Instant client invitations",
                  "No bank login required",
                ].map((t,i)=> (
                  <li key={i} className="flex items-center text-gray-600"><FontAwesomeIcon icon={faCheck} className="text-mintwell-teal mr-2" aria-hidden="true"/>{t}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-mintwell-teal">
              <div className="w-12 h-12 bg-mintwell-teal rounded-xl flex items-center justify-center mb-6"><FontAwesomeIcon icon={faChartPie} className="text-white text-xl" aria-hidden="true"/></div>
              <h3 className="text-2xl font-bold text-mintwell-navy mb-4">Professional Reports</h3>
              <p className="text-gray-600 mb-6">Generate comprehensive PDF financial plans that showcase your expertise and build client trust.</p>
              <ul className="space-y-2">
                {[
                  "Branded templates",
                  "Interactive charts",
                  "Actionable recommendations",
                ].map((t,i)=> (
                  <li key={i} className="flex items-center text-gray-600"><FontAwesomeIcon icon={faCheck} className="text-mintwell-teal mr-2" aria-hidden="true"/>{t}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-green-500">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-6"><FontAwesomeIcon icon={faUsers} className="text-white text-xl" aria-hidden="true"/></div>
              <h3 className="text-2xl font-bold text-mintwell-navy mb-4">Client Experience</h3>
              <p className="text-gray-600 mb-6">Provide clients with clear, visual insights into their financial health without overwhelming complexity.</p>
              <ul className="space-y-2">
                {[
                  "10-question intake",
                  "Health score visualization",
                  "Mobile-friendly interface",
                ].map((t,i)=> (
                  <li key={i} className="flex items-center text-gray-600"><FontAwesomeIcon icon={faCheck} className="text-mintwell-teal mr-2" aria-hidden="true"/>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advisor Workflow */}
      <section id="advisor-workflow" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mintwell-navy mb-4">Simple Workflow for Advisors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From client invitation to final report delivery, our streamlined process saves you hours while impressing your clients.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {["Sign Up & Setup","Invite Clients","Track Progress","Generate Reports"].map((title, idx)=> (
              <div key={idx} className="text-center">
                <div className={`${["bg-mintwell-blue","bg-mintwell-teal","bg-green-500","bg-purple-500"][idx]} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-2xl font-bold text-white">{idx+1}</span>
                </div>
                <h3 className="text-xl font-bold text-mintwell-navy mb-4">{title}</h3>
                <p className="text-gray-600">{
                  [
                    "Create your account with just an email address. Customize your branding and preferences in minutes.",
                    "Send secure email invitations to your clients. They'll receive a personalized link to begin their intake.",
                    "Monitor client intake completion in real-time. Receive notifications when clients finish their assessment.",
                    "Create professional PDF financial plans instantly. Download, print, or share directly with clients."
                  ][idx]
                }</p>
              </div>
            ))}
          </div>
          <div className="mt-16 bg-mintwell-light rounded-2xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-mintwell-navy mb-6">Dashboard Overview</h3>
                <p className="text-gray-600 mb-6">
                  Keep track of all your clients, their progress, and generated reports in one centralized dashboard. Get insights into your practice growth and client engagement.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-mintwell-blue rounded-lg flex items-center justify-center mr-4">
                      <FontAwesomeIcon icon={faChartBar} className="text-white text-sm" aria-hidden="true" />
                    </div>
                    <span className="text-mintwell-navy font-medium">Real-time client progress tracking</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-mintwell-teal rounded-lg flex items-center justify-center mr-4">
                      <FontAwesomeIcon icon={faBell} className="text-white text-sm" aria-hidden="true" />
                    </div>
                    <span className="text-mintwell-navy font-medium">Automated completion notifications</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                      <FontAwesomeIcon icon={faDownload} className="text-white text-sm" aria-hidden="true" />
                    </div>
                    <span className="text-mintwell-navy font-medium">One-click report generation</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-bold text-mintwell-navy">Recent Activity</h4>
                  <a href="#advisor-email" className="text-mintwell-teal hover:text-mintwell-blue text-sm font-medium">View All</a>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center">
                      <img className="w-8 h-8 rounded-full mr-3" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg" alt="Client" />
                      <div>
                        <p className="font-medium text-mintwell-navy">Sarah Johnson</p>
                        <p className="text-sm text-gray-600">Completed intake</p>
                      </div>
                    </div>
                    <span className="text-green-600 font-medium text-sm">Just now</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center">
                      <img className="w-8 h-8 rounded-full mr-3" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg" alt="Client" />
                      <div>
                        <p className="font-medium text-mintwell-navy">Michael Chen</p>
                        <p className="text-sm text-gray-600">Report generated</p>
                      </div>
                    </div>
                    <span className="text-mintwell-blue font-medium text-sm">2 min ago</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <div className="flex items-center">
                      <img className="w-8 h-8 rounded-full mr-3" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" alt="Client" />
                      <div>
                        <p className="font-medium text-mintwell-navy">Emily Rodriguez</p>
                        <p className="text-sm text-gray-600">Started intake</p>
                      </div>
                    </div>
                    <span className="text-yellow-600 font-medium text-sm">5 min ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
