import type { Metadata } from "next";
import EmailCapture from "../../components/EmailCapture";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faClock,
  faUserShield,
  faBan,
  faListCheck,
  faStopwatch,
  faGaugeHigh,
  faBolt,
  faRoute,
  faBullseye,
  faShieldHalved,
  faUserLock,
  faPhoneSlash,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "For Clients",
  description: "See your financial health clearly in minutes — no sales calls, no bank logins.",
  openGraph: { title: "Mintwell — For Clients", description: "See your financial health clearly in minutes." },
  twitter: { title: "Mintwell — For Clients", description: "See your financial health clearly in minutes." },
};

export default function ForClientsPage() {
  return (
    <main id="main-content">
      {/* Hero */}
      <section id="hero-section" className="relative bg-gradient-to-br from-mintwell-light via-white to-slate-50 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-mintwell-blue/5 to-mintwell-teal/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-mintwell-blue/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-mintwell-teal/10 to-transparent rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200 shadow-sm mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              <span className="text-sm font-medium text-slate-700">Trusted by 1,000+ Financial Advisors</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-mintwell-navy mb-8 leading-tight tracking-tight">
            Plan Smart.<br />
            <span className="bg-gradient-to-r from-mintwell-blue to-mintwell-teal bg-clip-text text-transparent">Live Well.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-16 max-w-4xl mx-auto font-medium leading-relaxed">
            See your financial health clearly in minutes — no sales calls, no bank logins.
          </p>
          <div className="max-w-lg mx-auto">
            <div className="bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-white/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-mintwell-blue via-mintwell-teal to-mintwell-blue" />
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-mintwell-navy mb-2">Get Your Free Financial Plan</h3>
                  <p className="text-sm text-slate-600">No commitment required</p>
                </div>
                <EmailCapture label=" " placeholder="Enter your email address" cta="Send Me My Free Plan" />
                <div className="flex items-center justify-center space-x-2 pt-2">
                  <FontAwesomeIcon icon={faLock} className="text-mintwell-teal text-sm" aria-hidden="true" />
                  <p className="text-sm text-slate-500 font-medium">Private. Your email is only used to send your plan.</p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-slate-600">
              <div className="flex items-center space-x-2"><FontAwesomeIcon icon={faClock} className="text-mintwell-teal" aria-hidden="true" /><span>2-minute setup</span></div>
              <div className="flex items-center space-x-2"><FontAwesomeIcon icon={faUserShield} className="text-mintwell-teal" aria-hidden="true" /><span>No sales calls</span></div>
              <div className="flex items-center space-x-2"><FontAwesomeIcon icon={faBan} className="text-mintwell-teal" aria-hidden="true" /><span>No bank login</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section id="trust-indicators" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-mintwell-navy mb-4">Trusted Financial Planning Process</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Simple, secure, and designed by financial professionals</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 text-center relative overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-mintwell-blue to-mintwell-teal" />
                <div className="w-20 h-20 bg-gradient-to-br from-mintwell-blue/10 to-mintwell-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <FontAwesomeIcon icon={faListCheck} className="text-3xl text-mintwell-blue" aria-hidden="true" />
                </div>
                <div className="mb-2">
                  <div className="inline-flex items-center px-3 py-1 bg-mintwell-blue/10 rounded-full mb-4">
                    <span className="text-sm font-semibold text-mintwell-blue">Step 1</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-mintwell-navy mb-4">Answer 10 Questions</h3>
                <p className="text-slate-600 leading-relaxed mb-6">Quick intake form to understand your financial situation and goals with smart, advisor-designed questions.</p>
                <div className="flex items-center justify-center space-x-2 text-sm text-mintwell-teal font-medium">
                  <FontAwesomeIcon icon={faStopwatch} aria-hidden="true" />
                  <span>Takes 3-5 minutes</span>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 text-center relative overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-mintwell-teal to-emerald-500" />
                <div className="w-20 h-20 bg-gradient-to-br from-mintwell-teal/10 to-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <FontAwesomeIcon icon={faGaugeHigh} className="text-3xl text-mintwell-teal" aria-hidden="true" />
                </div>
                <div className="mb-2">
                  <div className="inline-flex items-center px-3 py-1 bg-mintwell-teal/10 rounded-full mb-4">
                    <span className="text-sm font-semibold text-mintwell-teal">Step 2</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-mintwell-navy mb-4">Get Your Health Score Instantly</h3>
                <p className="text-slate-600 leading-relaxed mb-6">Receive an immediate assessment of your financial wellness with personalized insights and benchmarking.</p>
                <div className="flex items-center justify-center space-x-2 text-sm text-mintwell-teal font-medium">
                  <FontAwesomeIcon icon={faBolt} aria-hidden="true" />
                  <span>Instant results</span>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 text-center relative overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-mintwell-blue" />
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500/10 to-mintwell-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <FontAwesomeIcon icon={faRoute} className="text-3xl text-emerald-600" aria-hidden="true" />
                </div>
                <div className="mb-2">
                  <div className="inline-flex items-center px-3 py-1 bg-emerald-500/10 rounded-full mb-4">
                    <span className="text-sm font-semibold text-emerald-600">Step 3</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-mintwell-navy mb-4">See Your Personalized Roadmap</h3>
                <p className="text-slate-600 leading-relaxed mb-6">Get tailored recommendations for your financial future with actionable steps and priority guidance.</p>
                <div className="flex items-center justify-center space-x-2 text-sm text-emerald-600 font-medium">
                  <FontAwesomeIcon icon={faBullseye} aria-hidden="true" />
                  <span>Custom recommendations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section id="security-features" className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-mintwell-navy mb-4">Your Privacy & Security First</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Built with enterprise-grade security and compliance standards</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faShieldHalved} className="text-2xl text-green-600" aria-hidden="true" />
              </div>
              <h4 className="font-semibold text-mintwell-navy mb-2">Bank-Level Security</h4>
              <p className="text-sm text-slate-600">256-bit SSL encryption</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faUserLock} className="text-2xl text-mintwell-blue" aria-hidden="true" />
              </div>
              <h4 className="font-semibold text-mintwell-navy mb-2">No Data Sharing</h4>
              <p className="text-sm text-slate-600">Your data stays yours</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faPhoneSlash} className="text-2xl text-purple-600" aria-hidden="true" />
              </div>
              <h4 className="font-semibold text-mintwell-navy mb-2">No Sales Calls</h4>
              <p className="text-sm text-slate-600">Education-focused only</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faBan} className="text-2xl text-mintwell-teal" aria-hidden="true" />
              </div>
              <h4 className="font-semibold text-mintwell-navy mb-2">No Bank Login</h4>
              <p className="text-sm text-slate-600">Manual input only</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials-section" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-mintwell-navy mb-4">Trusted by Financial Professionals</h2>
            <p className="text-lg text-slate-600">See what advisors and clients are saying</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-mintwell-blue/5 to-mintwell-teal/5 p-8 rounded-3xl border border-slate-100">
              <div className="flex items-center mb-6">
                <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" alt="Advisor" className="w-14 h-14 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold text-mintwell-navy">Michael Chen, CFP</h4>
                  <p className="text-sm text-slate-600">Senior Financial Advisor</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">“Mintwell has transformed how I engage with new clients. The intake process is smooth, and the financial health scores give us a perfect starting point for deeper conversations.”</p>
              <div className="flex text-yellow-400">{Array.from({length:5}).map((_,i)=>(<FontAwesomeIcon key={i} icon={faStar}/>))}</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-mintwell-teal/5 p-8 rounded-3xl border border-slate-100">
              <div className="flex items-center mb-6">
                <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg" alt="Client" className="w-14 h-14 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold text-mintwell-navy">Sarah Johnson</h4>
                  <p className="text-sm text-slate-600">Marketing Executive</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">“I was hesitant about financial planning, but Mintwell made it so easy. The questions were straightforward, and I got clear insights about my financial health without any pressure.”</p>
              <div className="flex text-yellow-400">{Array.from({length:5}).map((_,i)=>(<FontAwesomeIcon key={i} icon={faStar}/>))}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta-section" className="py-20 bg-gradient-to-br from-mintwell-blue to-mintwell-teal relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Ready to See Your Financial Future?</h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">Join thousands who have discovered their financial potential with our free assessment.</p>
          <div className="max-w-md mx-auto bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-2xl">
            <EmailCapture label=" " placeholder="Enter your email address" cta="Get My Free Financial Plan" />
            <p className="text-sm text-slate-600 mt-4 font-medium"><FontAwesomeIcon icon={faLock} className="mr-1" aria-hidden="true" />100% secure and private</p>
          </div>
        </div>
      </section>
    </main>
  );
}
