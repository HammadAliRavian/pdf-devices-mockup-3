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
                <Link
                  href="/"
                  className="inline-flex items-center space-x-3 mb-2 group"
                >
                  <div className="relative">
                    <div className="relative flex items-center justify-center w-12 h-12">
                      {/* Background Shape */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                      {/* Logo Icon */}
                      <svg
                        className="relative w-7 h-7 text-white transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 3C5.34315 3 4 4.34315 4 6V18C4 19.6569 5.34315 21 7 21H17C18.6569 21 20 19.6569 20 18V8.82843C20 8.03278 19.6839 7.26972 19.1213 6.70711L16.2929 3.87868C15.7303 3.31607 14.9672 3 14.1716 3H7Z"
                          className="fill-current"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7 14.5V16.5H17V14.5H7ZM7 10.5V12.5H17V10.5H7ZM7 6.5V8.5H11V6.5H7Z"
                          fill="white"
                          fillOpacity="0.85"
                        />
                      </svg>
                      {/* Decorative Elements */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary-300 rounded-full blur group-hover:blur-md transition-all duration-300"></div>
                      <div className="absolute -bottom-0.5 -left-0.5 w-2 h-2 bg-primary-300 rounded-full blur-sm group-hover:blur-md transition-all duration-300"></div>
                    </div>
                  </div>
                  <div className="flex flex-col -space-y-0.5">
                    <span className="text-2xl font-extrabold tracking-tight text-secondary-800">
                      PDF<span className="text-primary-600">Devices</span>
                    </span>
                    <span className="text-[10px] text-secondary-400 tracking-widest font-semibold">
                      DOCUMENT TOOLS
                    </span>
                  </div>
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
