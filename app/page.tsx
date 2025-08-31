import type { Metadata } from "next";
import FAQ from "../components/FAQ";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faBolt,
  faCheck,
  faChartPie,
  faUsers,
  faShieldHalved,
  faPiggyBank,
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Home",
  description: "Plan Smart. Live Well. Generate professional financial plans in minutes.",
  openGraph: { title: "Mintwell — Plan Smart. Live Well.", description: "Generate professional financial plans in minutes." },
  twitter: { title: "Mintwell — Plan Smart. Live Well.", description: "Generate professional financial plans in minutes." }
};

export default function Page(){
  return (
    <main>
      {/* Hero Section */}
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
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-mintwell-blue hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-bold uppercase text-lg transition-all duration-200 shadow-lg hover:shadow-xl">Start Free Trial</button>
                <button className="border-2 border-mintwell-teal text-mintwell-teal hover:bg-mintwell-teal hover:text-white px-8 py-4 rounded-xl font-bold uppercase text-lg transition-all duration-200">Watch Demo</button>
              </div>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" alt="User" />
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" alt="User" />
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg" alt="User" />
                  </div>
                  <span className="ml-3 text-sm font-medium text-gray-600">500+ advisors trust Mintwell</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-mintwell-blue">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-mintwell-navy">Financial Health Score</h3>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Excellent</div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Overall Score</p>
                    <div className="text-5xl font-bold text-mintwell-blue">86</div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Goal Progress</p>
                    <div className="text-5xl font-bold text-mintwell-teal">72%</div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-2 bg-gradient-to-r from-mintwell-blue to-mintwell-teal rounded-full w-4/5"></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>Needs Work</span>
                    <span>Excellent</span>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center bg-blue-50 rounded-xl p-4">
                    <div className="w-10 h-10 bg-mintwell-blue rounded-lg flex items-center justify-center mr-3">
                      <FontAwesomeIcon icon={faShieldHalved} className="text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Emergency Fund</p>
                      <p className="text-mintwell-navy font-bold">On Track</p>
                    </div>
                  </div>
                  <div className="flex items-center bg-teal-50 rounded-xl p-4">
                    <div className="w-10 h-10 bg-mintwell-teal rounded-lg flex items-center justify-center mr-3">
                      <FontAwesomeIcon icon={faPiggyBank} className="text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Savings Rate</p>
                      <p className="text-mintwell-navy font-bold">Needs Improvement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features-section" className="py-20 bg-mintwell-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mintwell-navy mb-4">Everything You Need to Impress Clients</h2>
            <p className="text-xl text-gray-600">Mintwell helps you deliver value fast without complex setup.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-mintwell-blue">
              <div className="w-12 h-12 bg-mintwell-blue rounded-xl flex items-center justify-center mb-6"><FontAwesomeIcon icon={faBolt} className="text-white text-xl" aria-hidden="true" /></div>
              <h3 className="text-2xl font-bold text-mintwell-navy mb-4">Lightning Fast Setup</h3>
              <p className="text-gray-600 mb-6">Get started in under 5 minutes. No complex integrations or lengthy onboarding processes.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600"><FontAwesomeIcon icon={faCheck} className="text-mintwell-teal mr-2" aria-hidden="true" />Email signup only</li>
                <li className="flex items-center text-gray-600"><FontAwesomeIcon icon={faCheck} className="text-mintwell-teal mr-2" aria-hidden="true" />Instant client invitations</li>
                <li className="flex items-center text-gray-600"><FontAwesomeIcon icon={faCheck} className="text-mintwell-teal mr-2" aria-hidden="true" />No bank login required</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-mintwell-teal">
              <div className="w-12 h-12 bg-mintwell-teal rounded-xl flex items-center justify-center mb-6"><FontAwesomeIcon icon={faChartPie} className="text-white text-xl" aria-hidden="true" /></div>
              <h3 className="text-2xl font-bold text-mintwell-navy mb-4">Professional Reports</h3>
              <p className="text-gray-600 mb-6">Generate comprehensive PDF financial plans that showcase your expertise and build client trust.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600"><FontAwesomeIcon icon={faCheck} className="text-mintwell-teal mr-2" aria-hidden="true" />Branded templates</li>
                <li className="flex items-center text-gray-600"><FontAwesomeIcon icon={faCheck} className="text-mintwell-teal mr-2" aria-hidden="true" />Interactive charts</li>
                <li className="flex items-center text-gray-600"><FontAwesomeIcon icon={faCheck} className="text-mintwell-teal mr-2" aria-hidden="true" />Actionable recommendations</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-green-500">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-6"><FontAwesomeIcon icon={faUsers} className="text-white text-xl" aria-hidden="true" /></div>
              <h3 className="text-2xl font-bold text-mintwell-navy mb-4">Client Experience</h3>
              <p className="text-gray-600 mb-6">Provide clients with clear, visual insights into their financial health without overwhelming complexity.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600"><FontAwesomeIcon icon={faCheck} className="text-mintwell-teal mr-2" aria-hidden="true" />10-question intake</li>
                <li className="flex items-center text-gray-600"><FontAwesomeIcon icon={faCheck} className="text-mintwell-teal mr-2" aria-hidden="true" />Health score visualization</li>
                <li className="flex items-center text-gray-600"><FontAwesomeIcon icon={faCheck} className="text-mintwell-teal mr-2" aria-hidden="true" />Mobile-friendly interface</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section (sample) */}
      <section id="faq-section" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mintwell-navy mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common questions about Mintwell and how it can help your practice.</p>
          </div>
          <div className="space-y-6">
            <FAQ id={1} openByDefault color="border-mintwell-blue" q="How quickly can I get started with Mintwell?">
              <p>You can be up and running in under 5 minutes. Simply sign up with your email address, customize your branding preferences, and start inviting clients. No complex integrations or lengthy setup processes required.</p>
            </FAQ>
            <FAQ id={2} color="border-mintwell-teal" q="Do my clients need to connect their bank accounts?">
              <p>No bank logins are required. Clients provide information through our secure 10-question assessment, giving them complete control over what they share.</p>
            </FAQ>
            <FAQ id={3} color="border-green-500" q="Can I customize the reports with my branding?">
              <p>Absolutely. All reports can be customized with your logo, colors, contact information, and professional credentials. Professional and Enterprise plans offer advanced options.</p>
            </FAQ>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta-section" className="py-20 bg-gradient-to-r from-mintwell-blue to-mintwell-teal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Transform Your Practice?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of financial advisors who are already impressing clients and growing their practices with Mintwell&apos;s professional financial planning tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-white text-mintwell-blue hover:bg-gray-100 px-8 py-4 rounded-xl font-bold uppercase text-lg transition-all duration-200 shadow-lg hover:shadow-xl">Start Free Trial</button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-mintwell-blue px-8 py-4 rounded-xl font-bold uppercase text-lg transition-all duration-200">Schedule Demo</button>
          </div>
        </div>
      </section>
    </main>
  );
}
