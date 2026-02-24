import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadset,
  faComments,
  faEnvelope,
  faClock,
  faShieldHalved,
  faUserGraduate,
  faCreditCard,
  faCheck,
  faGear,
  faRocket,
  faCircleQuestion,
  faPaperPlane,
  faTimes,
  faChevronDown,
  faCloudArrowUp,
  faPaperclip,
  faCircleCheck,
  faRobot,
  faPhone,
  faCalendar,
  faBookOpen,
  faVideo,
  faCode,
  faLightbulb,
  faBug,
  faGraduationCap,
  faUserLock,
  faPhoneSlash,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import FAQ from "../../components/FAQ";
import EmailCapture from "../../components/EmailCapture";
import ChatWidget from "../../components/ChatWidget";
import SupportForm from "../../components/SupportForm";

export const metadata: Metadata = {
  title: "Support",
  description: "Find answers quickly, contact support, or start a live chat — 24/7.",
  openGraph: { title: "Mintwell — Support", description: "Find answers quickly, contact support, or start a live chat — 24/7." },
  twitter: { title: "Mintwell — Support", description: "Find answers quickly, contact support, or start a live chat — 24/7." },
};

export default function SupportPage() {
  return (
    <main>
      {/* Hero */}
      <section id="hero-section" className="bg-gradient-to-br from-mintwell-light via-blue-50 to-teal-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 mb-6">
              <FontAwesomeIcon icon={faHeadset} className="text-mintwell-teal mr-2" aria-hidden="true" />
              <span className="text-sm text-gray-600 font-medium">24/7 Support Available</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-mintwell-navy mb-6 leading-tight">
              We&apos;re Here to <span className="text-transparent bg-clip-text bg-gradient-to-r from-mintwell-blue to-mintwell-teal">Help</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Find answers quickly, get in touch with our team, or start a chat with our support bot. Mintwell makes support simple and accessible.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="#live-chat-integration" className="bg-mintwell-blue text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center">
              <FontAwesomeIcon icon={faComments} className="mr-3" aria-hidden="true" />
              Start Live Chat
            </a>
            <a href="#support-form" className="bg-white text-mintwell-blue px-8 py-4 rounded-xl font-semibold text-lg border-2 border-mintwell-blue hover:bg-mintwell-blue hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-3" aria-hidden="true" />
              Submit a Support Request
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
              <FontAwesomeIcon icon={faClock} className="text-mintwell-teal text-2xl mb-3" aria-hidden="true" />
              <h3 className="font-semibold text-mintwell-navy mb-2">Fast Response</h3>
              <p className="text-gray-600 text-sm">Average response time under 2 hours</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
              <FontAwesomeIcon icon={faShieldHalved} className="text-mintwell-blue text-2xl mb-3" aria-hidden="true" />
              <h3 className="font-semibold text-mintwell-navy mb-2">Secure Support</h3>
              <p className="text-gray-600 text-sm">Enterprise-grade security for all communications</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
              <FontAwesomeIcon icon={faUserGraduate} className="text-mintwell-teal text-2xl mb-3" aria-hidden="true" />
              <h3 className="font-semibold text-mintwell-navy mb-2">Expert Team</h3>
              <p className="text-gray-600 text-sm">Financial planning specialists ready to help</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section id="support-categories" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mintwell-navy mb-6">Choose Your Support Category</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Select the category that best matches your question for the fastest, most accurate support experience.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
              icon: faCreditCard,
              iconColor: "text-green-600",
              bgFrom: "from-green-100",
              title: "Billing & Subscriptions",
              desc: "Questions about your subscription, billing cycles, payment methods, or account upgrades.",
              checks: ["Payment issues","Subscription changes","Billing history"],
            },{
              icon: faGear,
              iconColor: "text-blue-600",
              bgFrom: "from-blue-100",
              title: "Technical Help",
              desc: "Platform issues, login problems, feature troubleshooting, and technical difficulties.",
              checks: ["Login issues","Feature bugs","Performance issues"],
            },{
              icon: faRocket,
              iconColor: "text-purple-600",
              bgFrom: "from-purple-100",
              title: "Getting Started",
              desc: "New to Mintwell? Find onboarding guides, setup instructions, and resources.",
              checks: ["Account setup","First steps guide","Feature overview"],
            },{
              icon: faCircleQuestion,
              iconColor: "text-orange-600",
              bgFrom: "from-orange-100",
              title: "General Questions",
              desc: "General inquiries, feature requests, feedback, or anything else.",
              checks: ["Feature requests","General inquiries","Feedback"],
            }].map((c, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="p-8">
                  <div className={`bg-gradient-to-br ${c.bgFrom} to-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                    <FontAwesomeIcon icon={c.icon} className={`${c.iconColor} text-2xl`} aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-mintwell-navy mb-4">{c.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{c.desc}</p>
                  <div className="space-y-3 mb-6">
                    {c.checks.map((t, k) => (
                      <div key={k} className="flex items-center text-sm text-gray-500">
                        <FontAwesomeIcon icon={faCheck} className={`mr-2 ${["text-green-500","text-blue-500","text-purple-500","text-orange-500"][i]}`} aria-hidden="true" />
                        {t}
                      </div>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <a href="#faq-section" className="flex-1 bg-mintwell-blue text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm text-center">View FAQs</a>
                    <a href="#support-form" className="bg-gray-100 text-gray-600 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm text-center">Contact</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Form */}
      <section id="support-form" className="py-20 bg-mintwell-light">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-mintwell-navy mb-6">Submit a Support Request</h2>
            <p className="text-xl text-gray-600">Can&apos;t find what you&apos;re looking for? Send us a detailed message and we&apos;ll get back to you as soon as possible.</p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
            <SupportForm />
          </div>
        </div>
      </section>

      {/* Live Chat Integration */}
      <section id="live-chat-integration" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-mintwell-blue to-mintwell-teal rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24" />
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-6">Need Fast Answers? Chat With Us Now</h2>
                  <p className="text-xl mb-8 text-blue-100">Our intelligent chat bot is available 24/7 to provide instant answers to common questions. For complex issues, you&apos;ll be connected directly with our support team.</p>
                  <div className="space-y-4 mb-8">
                    {["Instant responses to common questions","Seamless handoff to human agents","Available 24/7 for your convenience"].map((t,i)=> (
                      <div key={i} className="flex items-center"><FontAwesomeIcon icon={faCircleCheck} className="text-green-300 mr-3 text-xl" aria-hidden="true" /><span className="text-lg">{t}</span></div>
                    ))}
                  </div>
                  <a href="#" className="bg-white text-mintwell-blue px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center">
                    <FontAwesomeIcon icon={faComments} className="mr-3" aria-hidden="true" />
                    Start Live Chat Now
                  </a>
                </div>
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm mx-auto text-gray-800">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-mintwell-blue rounded-full flex items-center justify-center"><FontAwesomeIcon icon={faRobot} className="text-white" aria-hidden="true" /></div>
                      <div className="ml-3">
                        <h4 className="font-semibold">Mintwell Assistant</h4>
                        <p className="text-sm text-green-600 flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2" />Online</p>
                      </div>
                    </div>
                    <div className="space-y-3 mb-4">
                      <div className="bg-gray-100 rounded-lg p-3"><p className="text-sm">Hi! I&apos;m here to help. What can I assist you with today?</p></div>
                      <div className="bg-mintwell-blue text-white rounded-lg p-3 ml-8"><p className="text-sm">I need help with my billing</p></div>
                      <div className="bg-gray-100 rounded-lg p-3"><p className="text-sm">I&apos;d be happy to help with billing questions! Let me pull up some options for you...</p></div>
                    </div>
                    <div className="flex items-center border-t pt-3">
                      <input type="text" placeholder="Type your message..." className="flex-1 text-sm text-gray-600 focus:outline-none" />
                      <button className="text-mintwell-blue ml-2"><FontAwesomeIcon icon={faPaperPlane} aria-hidden="true" /></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq-section" className="py-20 bg-mintwell-light">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mintwell-navy mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to the most common questions we receive.</p>
          </div>
          <div className="space-y-4">
            <FAQ id={1} openByDefault color="border-mintwell-blue" q="How quickly does support respond?">
              <p>Our support team typically responds within 2 hours during business hours (Mon-Fri, 9am-6pm EST). For urgent issues, we offer priority support with response times under 30 minutes. Our chat bot is available 24/7 for immediate assistance with common questions.</p>
            </FAQ>
            <FAQ id={2} color="border-mintwell-teal" q="Do you offer onboarding help?">
              <p>Yes! We provide comprehensive onboarding support including personalized setup assistance, training sessions, and dedicated onboarding specialists. New users receive access to our getting started guide, video tutorials, and can schedule onboarding calls.</p>
            </FAQ>
            <FAQ id={3} color="border-green-500" q="Can I update my subscription anytime?">
              <p>You can upgrade or downgrade your subscription at any time from your account settings. Changes take effect immediately for upgrades, while downgrades take effect at the end of your current billing cycle. Pro-rated billing ensures you only pay for what you use.</p>
            </FAQ>
            <FAQ id={4} color="border-purple-500" q="What if I need advanced technical support?">
              <p>For complex technical issues, we offer escalated support with our senior technical team. This includes screen sharing sessions, custom integrations assistance, API support, and priority bug fixes. Enterprise customers have dedicated technical account managers.</p>
            </FAQ>
            <FAQ id={5} color="border-yellow-500" q="How do I reset my password?">
              <p>Click "Forgot Password" on the login page. You&apos;ll receive a secure reset link via email. We also support two-factor authentication and SSO options for additional security.</p>
            </FAQ>
            <FAQ id={6} color="border-red-500" q="Is my data secure with Mintwell?">
              <p>Yes, security is our top priority. We use enterprise-grade encryption, comply with SOC 2 Type II standards, and maintain regular security audits. All data is encrypted in transit and at rest, with role-based access controls and audit logging.</p>
            </FAQ>
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Still have questions?</p>
            <a href="#support-form" className="bg-mintwell-blue text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg inline-block">Contact Our Support Team</a>
          </div>
        </div>
      </section>

      {/* Knowledge Base */}
      <section id="knowledge-base" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mintwell-navy mb-6">Knowledge Base & Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Explore our comprehensive library of guides, tutorials, and documentation to get the most out of Mintwell.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: faBookOpen, title: "Getting Started Guide", desc: "Complete walkthrough for new users, from account setup to creating your first financial plan.", meta: "12 articles", c: "from-blue-500 to-blue-600" },
              { icon: faVideo, title: "Video Tutorials", desc: "Step-by-step video guides covering all major features and advanced workflows.", meta: "25 videos", c: "from-green-500 to-green-600" },
              { icon: faCode, title: "API Documentation", desc: "Comprehensive API reference for developers building integrations with Mintwell.", meta: "Technical docs", c: "from-purple-500 to-purple-600" },
              { icon: faLightbulb, title: "Best Practices", desc: "Expert tips and proven strategies for maximizing your financial planning efficiency.", meta: "8 guides", c: "from-orange-500 to-orange-600" },
              { icon: faBug, title: "Troubleshooting", desc: "Solutions to common issues and error messages you might encounter.", meta: "15 solutions", c: "from-red-500 to-red-600" },
              { icon: faGraduationCap, title: "Training Resources", desc: "Comprehensive training materials for teams and advanced user certification.", meta: "6 courses", c: "from-teal-500 to-teal-600" },
            ].map((k, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className={`bg-gradient-to-br ${k.c} p-6 text-white`}>
                  <FontAwesomeIcon icon={k.icon} className="text-3xl mb-4" aria-hidden="true" />
                  <h3 className="text-xl font-bold">{k.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{k.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{k.meta}</span>
                    <a href="#" className="text-mintwell-blue hover:text-blue-700 font-medium">Learn More →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Stats */}
      <section id="support-stats" className="py-20 bg-gradient-to-r from-mintwell-navy to-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Our Support by the Numbers</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">See why thousands of financial advisors trust Mintwell&apos;s support team to keep their practices running smoothly.</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[{n:"99.9%",t:"Uptime",d:"Reliable platform you can count on"},{n:"<2hr",t:"Response Time",d:"Average support response time"},{n:"98%",t:"Satisfaction",d:"Customer satisfaction rating"},{n:"24/7",t:"Availability",d:"Chat support always available"}].map((s,i)=> (
              <div key={i} className="text-center">
                <div className="text-5xl font-bold text-mintwell-teal mb-4">{s.n}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{s.t}</h3>
                <p className="text-gray-300">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section id="contact-options" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mintwell-navy mb-6">Multiple Ways to Reach Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Choose the contact method that works best for you. We&apos;re here to help however you prefer to communicate.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-mintwell-light rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={faEnvelope} className="text-white text-2xl" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-mintwell-navy mb-4">Email Support</h3>
              <p className="text-gray-600 mb-4">Send us a detailed message</p>
              <a href="mailto:support@mintwell.ai" className="text-mintwell-blue font-semibold hover:text-blue-700">support@mintwell.ai</a>
            </div>
            <div className="text-center bg-mintwell-light rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={faPhone} className="text-white text-2xl" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-mintwell-navy mb-4">Phone Support</h3>
              <p className="text-gray-600 mb-4">Speak with our team directly</p>
              <a href="tel:+15551234567" className="text-mintwell-blue font-semibold hover:text-blue-700">(555) 123-4567</a>
            </div>
            <div className="text-center bg-mintwell-light rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={faComments} className="text-white text-2xl" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-mintwell-navy mb-4">Live Chat</h3>
              <p className="text-gray-600 mb-4">Get instant help</p>
              <a href="#live-chat-integration" className="text-mintwell-blue font-semibold hover:text-blue-700">Start a Live Chat</a>
            </div>
            <div className="text-center bg-mintwell-light rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={faCalendar} className="text-white text-2xl" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-mintwell-navy mb-4">Schedule Call</h3>
              <p className="text-gray-600 mb-4">Book a time that works</p>
              <a href="#support-form" className="text-mintwell-blue font-semibold hover:text-blue-700">Schedule Meeting</a>
            </div>
          </div>
          <div className="mt-16 bg-gradient-to-r from-mintwell-blue to-mintwell-teal rounded-3xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Our Support Hours</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="text-xl font-semibold mb-2">Email & Form</h4>
                <p className="text-blue-100">24/7 - We&apos;ll respond within 2 hours</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Phone Support</h4>
                <p className="text-blue-100">Mon-Fri, 9am-6pm EST</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Live Chat</h4>
                <p className="text-blue-100">24/7 - Always available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Chat Widget */}
      <ChatWidget />
    </main>
  );
}
