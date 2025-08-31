"use client";

import { useState } from "react";

function FAQ({ id, openByDefault=false, color, q, children }:{ id:number; openByDefault?:boolean; color:string; q:string; children:React.ReactNode; }){
  const [open, setOpen] = useState(openByDefault);
  return (
    <div className={`bg-mintwell-light rounded-2xl p-6 border-l-4 ${color}`}>
      <button className="w-full text-left flex items-center justify-between" onClick={()=>setOpen(!open)}>
        <h3 className="text-xl font-bold text-mintwell-navy">{q}</h3>
        <i className={`fa-solid ${open ? "fa-chevron-up" : "fa-chevron-down"} text-mintwell-blue`} />
      </button>
      <div className={`mt-4 text-gray-600 ${open ? "" : "hidden"}`}>
        {children}
      </div>
    </div>
  );
}

export default function Page(){
  return (
    <main>
      {/* Header */}
      <header id="header" className="bg-white shadow-sm border-b border-mintwell-gray sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-mintwell-blue to-mintwell-teal rounded-xl flex items-center justify-center">
                  <i className="fa-solid fa-chart-line text-white text-lg"></i>
                </div>
                <h1 className="ml-3 text-2xl font-bold text-mintwell-navy">Mintwell</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-mintwell-navy hover:text-mintwell-teal transition-colors duration-200 font-medium">For Advisors</button>
              <button className="text-mintwell-navy hover:text-mintwell-teal transition-colors duration-200 font-medium">For Clients</button>
              <button className="bg-mintwell-blue hover:bg-blue-800 text-white px-6 py-2 rounded-xl font-bold uppercase text-sm transition-all duration-200 shadow-lg hover:shadow-xl">Get Started</button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero-section" className="bg-white py-20 min-h-[700px] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-mintwell-blue to-mintwell-teal text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <i className="fa-solid fa-sparkles mr-2"></i>
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
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <svg className="w-32 h-32 transform -rotate-90">
                    <circle cx="64" cy="64" r="56" stroke="#e5e7eb" strokeWidth="8" fill="none"></circle>
                    <circle cx="64" cy="64" r="56" stroke="#0891b2" strokeWidth="8" fill="none" strokeDasharray="351" strokeDashoffset="70" strokeLinecap="round"></circle>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-mintwell-navy">85</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center"><span className="text-gray-600">Emergency Fund</span><span className="font-medium text-mintwell-navy">6 months</span></div>
                  <div className="flex justify-between items-center"><span className="text-gray-600">Debt-to-Income</span><span className="font-medium text-mintwell-navy">18%</span></div>
                  <div className="flex justify-between items-center"><span className="text-gray-600">Retirement Savings</span><span className="font-medium text-mintwell-navy">On Track</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview Section (trimmed to 3 tiles) */}
      <section id="features-overview" className="py-20 bg-mintwell-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mintwell-navy mb-4">Everything You Need to Succeed</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamline your practice with tools designed specifically for financial advisors who want to deliver exceptional client experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-mintwell-blue">
              <div className="w-12 h-12 bg-mintwell-blue rounded-xl flex items-center justify-center mb-6"><i className="fa-solid fa-bolt text-white text-xl"></i></div>
              <h3 className="text-2xl font-bold text-mintwell-navy mb-4">Lightning Fast Setup</h3>
              <p className="text-gray-600 mb-6">Get started in under 5 minutes. No complex integrations or lengthy onboarding processes.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600"><i className="fa-solid fa-check text-mintwell-teal mr-2"></i>Email signup only</li>
                <li className="flex items-center text-gray-600"><i className="fa-solid fa-check text-mintwell-teal mr-2"></i>Instant client invitations</li>
                <li className="flex items-center text-gray-600"><i className="fa-solid fa-check text-mintwell-teal mr-2"></i>No bank login required</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-mintwell-teal">
              <div className="w-12 h-12 bg-mintwell-teal rounded-xl flex items-center justify-center mb-6"><i className="fa-solid fa-chart-pie text-white text-xl"></i></div>
              <h3 className="text-2xl font-bold text-mintwell-navy mb-4">Professional Reports</h3>
              <p className="text-gray-600 mb-6">Generate comprehensive PDF financial plans that showcase your expertise and build client trust.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600"><i className="fa-solid fa-check text-mintwell-teal mr-2"></i>Branded templates</li>
                <li className="flex items-center text-gray-600"><i className="fa-solid fa-check text-mintwell-teal mr-2"></i>Interactive charts</li>
                <li className="flex items-center text-gray-600"><i className="fa-solid fa-check text-mintwell-teal mr-2"></i>Actionable recommendations</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-green-500">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-6"><i className="fa-solid fa-users text-white text-xl"></i></div>
              <h3 className="text-2xl font-bold text-mintwell-navy mb-4">Client Experience</h3>
              <p className="text-gray-600 mb-6">Provide clients with clear, visual insights into their financial health without overwhelming complexity.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600"><i className="fa-solid fa-check text-mintwell-teal mr-2"></i>10-question intake</li>
                <li className="flex items-center text-gray-600"><i className="fa-solid fa-check text-mintwell-teal mr-2"></i>Health score visualization</li>
                <li className="flex items-center text-gray-600"><i className="fa-solid fa-check text-mintwell-teal mr-2"></i>Mobile-friendly interface</li>
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

      {/* Footer (trimmed) */}
      <footer id="footer" className="bg-mintwell-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-mintwell-blue to-mintwell-teal rounded-xl flex items-center justify-center mr-3">
                  <i className="fa-solid fa-chart-line text-white text-lg"></i>
                </div>
                <h3 className="text-2xl font-bold">Mintwell</h3>
              </div>
              <p className="text-blue-200 mb-6 max-w-md">
                Empowering financial advisors with professional tools to create exceptional client experiences and grow their practices.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Product</h4>
              <ul className="space-y-3">
                <li><span className="text-blue-200 hover:text-white transition-colors duration-200 cursor-pointer">Features</span></li>
                <li><span className="text-blue-200 hover:text-white transition-colors duration-200 cursor-pointer">Pricing</span></li>
                <li><span className="text-blue-200 hover:text-white transition-colors duration-200 cursor-pointer">Security</span></li>
                <li><span className="text-blue-200 hover:text-white transition-colors duration-200 cursor-pointer">Integrations</span></li>
                <li><span className="text-blue-200 hover:text-white transition-colors duration-200 cursor-pointer">API</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Support</h4>
              <ul className="space-y-3">
                <li><span className="text-blue-200 hover:text-white transition-colors duration-200 cursor-pointer">Help Center</span></li>
                <li><span className="text-blue-200 hover:text-white transition-colors duration-200 cursor-pointer">Contact Us</span></li>
                <li><span className="text-blue-200 hover:text-white transition-colors duration-200 cursor-pointer">Training</span></li>
                <li><span className="text-blue-200 hover:text-white transition-colors duration-200 cursor-pointer">Webinars</span></li>
                <li><span className="text-blue-200 hover:text-white transition-colors duration-200 cursor-pointer">Status</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-700 mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm">© {new Date().getFullYear()} Mintwell. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 lg:mt-0">
              <span className="text-blue-200 hover:text-white text-sm transition-colors duration-200 cursor-pointer">Privacy Policy</span>
              <span className="text-blue-200 hover:text-white text-sm transition-colors duration-200 cursor-pointer">Terms of Service</span>
              <span className="text-blue-200 hover:text-white text-sm transition-colors duration-200 cursor-pointer">Cookie Policy</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
