"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Merge PDF", href: "/merge-pdf" },
    { name: "Compress PDF", href: "/compress-pdf" },
    { name: "All PDF Tools", href: "/tools" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md backdrop-blur-sm bg-white/80"
            : "bg-white"
        }`}
      >
        <nav className="mx-auto">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
              {/* Left Section - Logo */}
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center space-x-3 group">
                  <div className="relative w-9 h-9 sm:w-10 sm:h-10">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-primary-500 rounded-xl group-hover:shadow-lg group-hover:shadow-primary-500/25 transition-all duration-300"></div>
                    <svg
                      className="relative w-full h-full p-2 text-white transform group-hover:scale-110 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    PDFDevices
                  </span>
                </Link>
              </div>

              {/* Center Section - Navigation Links */}
              <div className="hidden md:flex items-center justify-center flex-1 ml-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="px-4 py-2 mx-1 rounded-lg text-[15px] font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50/60 transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Right Section - Auth Buttons */}
              <div className="hidden md:flex items-center space-x-3">
                <Link
                  href="/login"
                  className="px-4 py-2 text-[15px] font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50/60 rounded-lg transition-all duration-200"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="px-4 py-2 rounded-lg text-[15px] font-medium text-white bg-primary-600 hover:bg-primary-700 shadow-sm hover:shadow-md hover:shadow-primary-500/10 transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  Sign Up
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2.5 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-primary-50/60 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                  aria-expanded={isOpen}
                >
                  <span className="sr-only">Open menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={
                        isOpen
                          ? "M6 18L18 6M6 6l12 12"
                          : "M4 6h16M4 12h16M4 18h16"
                      }
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-sm"
              >
                <div className="max-w-6xl mx-auto px-4 py-3 space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block px-3 py-2.5 rounded-lg text-[15px] font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50/60 transition-all duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <div className="pt-4 mt-4 border-t border-gray-100">
                    <Link
                      href="/login"
                      className="block px-3 py-2.5 rounded-lg text-[15px] font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50/60 transition-all duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      href="/signup"
                      className="block px-3 py-2.5 mt-2 rounded-lg text-[15px] font-medium text-white bg-primary-600 hover:bg-primary-700 transition-all duration-200 text-center shadow-sm hover:shadow-md hover:shadow-primary-500/10"
                      onClick={() => setIsOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
      {/* Spacer div to prevent content overlap */}
      <div
        className={`h-16 sm:h-18 lg:h-20 ${isOpen ? "mb-[330px] md:mb-0" : ""}`}
      />
    </>
  );
};

export default Navbar;
