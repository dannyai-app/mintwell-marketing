"use client";
import Link from "next/link";
import { useState, useMemo } from "react";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const navItems = [
    { href: "/#features-overview", label: "Features" },
    { href: "/#advisor-workflow", label: "Workflow" },
    { href: "/#report-generation", label: "Reports" },
    { href: "/#pricing-section", label: "Pricing" },
    { href: "/#testimonials-section", label: "Testimonials" },
    { href: "/#security-compliance", label: "Security" },
    { href: "/#faq-section", label: "FAQ" },
    { href: "/for-advisors", label: "For Advisors" },
    { href: "/for-clients", label: "For Clients" },
  ];

  const isActive = useMemo(() => (href: string) => {
    // Only treat real routes as active (ignore hash-only links)
    if (!href.startsWith("/")) return false;
    const base = href.split("#")[0];
    return pathname === base;
  }, [pathname]);

  return (
    <header id="header" className="bg-white shadow-sm border-b border-mintwell-gray sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-mintwell-blue to-mintwell-teal rounded-xl flex items-center justify-center">
              <FontAwesomeIcon icon={faChartLine} className="text-white text-lg" aria-hidden="true" />
            </div>
            <span className="ml-3 text-2xl font-bold text-mintwell-navy">Mintwell</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-4" aria-label="Primary">
            {navItems.map((n) => {
              const active = isActive(n.href);
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`transition-colors duration-200 font-medium ${active ? "text-mintwell-teal" : "text-mintwell-navy hover:text-mintwell-teal"}`}
                  aria-current={active ? "page" : undefined}
                >
                  {n.label}
                </Link>
              );
            })}
            <Link href="/for-advisors" className="bg-mintwell-blue hover:bg-blue-800 text-white px-6 py-2 rounded-xl font-bold uppercase text-sm transition-all duration-200 shadow-lg hover:shadow-xl">
              Get Started
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden text-mintwell-navy hover:text-mintwell-teal p-2"
            onClick={() => setOpen((v) => !v)}
          >
            <FontAwesomeIcon icon={open ? faXmark : faBars} className="text-xl" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden border-t border-mintwell-gray bg-white">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 grid grid-cols-1 gap-2" aria-label="Mobile">
            {navItems.map((n) => {
              const active = isActive(n.href);
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`block w-full py-2 transition-colors ${active ? "text-mintwell-teal" : "text-mintwell-navy hover:text-mintwell-teal"}`}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {n.label}
                </Link>
              );
            })}
            <Link
              href="/for-advisors"
              className="mt-2 inline-flex items-center justify-center bg-mintwell-blue hover:bg-blue-800 text-white px-4 py-2 rounded-lg font-semibold"
              onClick={() => setOpen(false)}
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
