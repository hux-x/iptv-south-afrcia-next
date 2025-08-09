'use client'
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import TrialPopup from './TrialPopup';

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const [open, setOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <nav className="bg-slate-900 shadow-lg border-b border-emerald-500/20 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SA</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                South African IPTV Pro
              </span>
            </Link>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-6">
              {[
                { path: '/', label: 'Home' },
                { path: '/blogs', label: 'Blog' },
                { path: '/reseller', label: 'Reseller' },
                { path: '/faqs', label: 'FAQ' },
              ].map(({ path, label }) => (
                <Link
                  key={path}
                  href={path}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive(path)
                      ? 'text-emerald-300 bg-emerald-900/30 shadow-lg'
                      : 'text-slate-300 hover:text-emerald-300 hover:bg-slate-800/50'
                  }`}
                >
                  {label}
                </Link>
              ))}

              <button
                className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 rounded-full font-medium hover:from-emerald-600 hover:to-teal-600 transition-all duration-200 shadow-lg hover:shadow-emerald-500/25"
                onClick={() => setShowPopup(true)}
              >
                Start Free Trial
              </button>
            </div>

            {/* Mobile hamburger */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-emerald-300 hover:bg-slate-800 focus:outline-none"
                onClick={() => setOpen(!open)}
              >
                <svg
                  className={`${open ? 'hidden' : 'block'} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  className={`${open ? 'block' : 'hidden'} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${open ? 'block' : 'hidden'} md:hidden bg-slate-900/95 backdrop-blur-md`}>
          <div className="px-4 pt-2 pb-4 space-y-2">
            {[
              { path: '/', label: 'Home' },
              { path: '/blogs', label: 'Blog' },
              { path: '/reseller', label: 'Reseller' },
              { path: '/faqs', label: 'FAQ' },
            ].map(({ path, label }) => (
              <Link
                key={path}
                href={path}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  isActive(path)
                    ? 'text-emerald-300 bg-emerald-900/30'
                    : 'text-slate-300 hover:text-emerald-300 hover:bg-slate-800/50'
                }`}
              >
                {label}
              </Link>
            ))}

            <button
              onClick={() => {
                setOpen(false);
                setShowPopup(true);
              }}
              className="block w-full text-center px-4 py-3 rounded-xl text-base font-medium text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 transition-all"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      </nav>

      <TrialPopup visible={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
};

export default Navbar;