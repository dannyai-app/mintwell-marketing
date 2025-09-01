import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer id="footer" className="bg-mintwell-navy text-white py-16 mt-16">
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
              <li><Link href="/#features-overview" className="text-blue-200 hover:text-white transition-colors duration-200">Features</Link></li>
              <li><Link href="/#pricing-section" className="text-blue-200 hover:text-white transition-colors duration-200">Pricing</Link></li>
              <li><Link href="/#security-compliance" className="text-blue-200 hover:text-white transition-colors duration-200">Security</Link></li>
              <li><Link href="/#report-generation" className="text-blue-200 hover:text-white transition-colors duration-200">Integrations</Link></li>
              <li><Link href="/#advisor-workflow" className="text-blue-200 hover:text-white transition-colors duration-200">API</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Support</h4>
            <ul className="space-y-3">
              <li><Link href="/support" className="text-blue-200 hover:text-white transition-colors duration-200">Help Center</Link></li>
              <li><Link href="/support" className="text-blue-200 hover:text-white transition-colors duration-200">Contact Us</Link></li>
              <li><Link href="/#advisor-workflow" className="text-blue-200 hover:text-white transition-colors duration-200">Training</Link></li>
              <li><Link href="/#testimonials-section" className="text-blue-200 hover:text-white transition-colors duration-200">Webinars</Link></li>
              <li><Link href="/support" className="text-blue-200 hover:text-white transition-colors duration-200">Status</Link></li>
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
  );
}

