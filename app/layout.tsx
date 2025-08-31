import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Mintwell — Plan Smart. Live Well.",
    template: "%s — Mintwell",
  },
  description: "Generate instant financial plans that build trust and win clients.",
  openGraph: {
    siteName: "Mintwell",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@mintwell",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body className="bg-mintwell-light">
        {/* Site Header */}
        <header id="header" className="bg-white shadow-sm border-b border-mintwell-gray sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link href="/" className="flex-shrink-0 flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-mintwell-blue to-mintwell-teal rounded-xl flex items-center justify-center">
                    <FontAwesomeIcon icon={faChartLine} className="text-white text-lg" aria-hidden="true" />
                  </div>
                  <span className="ml-3 text-2xl font-bold text-mintwell-navy">Mintwell</span>
                </Link>
              </div>
              <nav className="flex items-center space-x-4" aria-label="Primary">
                <Link href="/for-advisors" className="text-mintwell-navy hover:text-mintwell-teal transition-colors duration-200 font-medium">For Advisors</Link>
                <Link href="/for-clients" className="text-mintwell-navy hover:text-mintwell-teal transition-colors duration-200 font-medium">For Clients</Link>
                <Link href="/for-advisors" className="bg-mintwell-blue hover:bg-blue-800 text-white px-6 py-2 rounded-xl font-bold uppercase text-sm transition-all duration-200 shadow-lg hover:shadow-xl">Get Started</Link>
              </nav>
            </div>
          </div>
        </header>

        {children}

        {/* Site Footer */}
        <footer id="footer" className="bg-mintwell-navy text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-mintwell-blue to-mintwell-teal rounded-xl flex items-center justify-center mr-3">
                    <FontAwesomeIcon icon={faChartLine} className="text-white text-lg" aria-hidden="true" />
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
                  <li><Link href="/" className="text-blue-200 hover:text-white transition-colors duration-200">Features</Link></li>
                  <li><Link href="/for-advisors" className="text-blue-200 hover:text-white transition-colors duration-200">Pricing</Link></li>
                  <li><span className="text-blue-200">Security</span></li>
                  <li><span className="text-blue-200">Integrations</span></li>
                  <li><span className="text-blue-200">API</span></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-6">Support</h4>
                <ul className="space-y-3">
                  <li><Link href="/support" className="text-blue-200 hover:text-white transition-colors duration-200">Help Center</Link></li>
                  <li><Link href="/support" className="text-blue-200 hover:text-white transition-colors duration-200">Contact Us</Link></li>
                  <li><span className="text-blue-200">Training</span></li>
                  <li><span className="text-blue-200">Webinars</span></li>
                  <li><span className="text-blue-200">Status</span></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-blue-700 mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center">
              <p className="text-blue-200 text-sm">© {new Date().getFullYear()} Mintwell. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 lg:mt-0">
                <Link href="/privacy" className="text-blue-200 hover:text-white text-sm transition-colors duration-200">Privacy Policy</Link>
                <Link href="/terms" className="text-blue-200 hover:text-white text-sm transition-colors duration-200">Terms of Service</Link>
                <Link href="/support" className="text-blue-200 hover:text-white text-sm transition-colors duration-200">Support</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
