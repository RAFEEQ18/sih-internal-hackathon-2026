"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Navigation active state helpers
  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  // Header class styles based on current page context
  const headerClass = isHome
    ? "absolute top-0 left-0 right-0 z-50 bg-slate-950/40 backdrop-blur-[2px] border-b border-white/10"
    : "sticky top-0 z-50 bg-slate-900 border-b border-slate-800";

  return (
    <header className={`${headerClass} transition-all duration-150`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Left Side: Logo + College name */}
          <Link href="/" className="flex items-center gap-3 group text-left">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="Anna University Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col text-white font-sans leading-tight">
              <span className="text-[10px] sm:text-xs font-bold tracking-tight uppercase">
                UNIVERSITY COLLEGE OF ENGINEERING,
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold text-slate-300 uppercase">
                ANNA UNIVERSITY-BIT CAMPUS,
              </span>
              <span className="text-[9px] sm:text-[10px] font-medium text-slate-400 uppercase">
                TIRUCHIRAPPALLI
              </span>
            </div>
          </Link>

          {/* Right Side: Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-bold uppercase tracking-wider">
            <Link
              href="/"
              className={`transition-colors duration-150 ${
                isLinkActive("/")
                  ? "text-orange-500 hover:text-orange-400"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              Home
            </Link>
            <span className="text-slate-700">|</span>
            <Link
              href="/problems"
              className={`transition-colors duration-150 ${
                isLinkActive("/problems")
                  ? "text-orange-500 hover:text-orange-400"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              Problem Statements
            </Link>
            <span className="text-slate-700">|</span>
            <a
              href="/SIH INTERNAL HACKATHON PS-26 - Sheet1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors duration-150"
            >
              Original PDF
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800/50 focus:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800" id="mobile-menu">
          <div className="px-4 py-3 space-y-2 flex flex-col text-sm font-bold uppercase tracking-wider">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`px-3 py-2 rounded-md transition-colors ${
                isLinkActive("/")
                  ? "text-orange-500 bg-slate-800/40"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/30"
              }`}
            >
              Home
            </Link>
            <Link
              href="/problems"
              onClick={() => setIsOpen(false)}
              className={`px-3 py-2 rounded-md transition-colors ${
                isLinkActive("/problems")
                  ? "text-orange-500 bg-slate-800/40"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/30"
              }`}
            >
              Problem Statements
            </Link>
            <a
              href="/SIH INTERNAL HACKATHON PS-26 - Sheet1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-white hover:bg-slate-800/30 px-3 py-2 rounded-md transition-colors"
            >
              Original PDF
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
