"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "PDF Tools",
      links: [
        { name: "Merge & Edit", href: "/tools#merge-edit" },
        { name: "Optimize & Extract", href: "/tools#optimize-extract" },
        { name: "Convert to PDF", href: "/tools#convert-to-pdf" },
        { name: "Convert from PDF", href: "/tools#convert-from-pdf" },
        { name: "PDF Security", href: "/tools#security" },
      ],
    },
    {
      title: "Popular Tools",
      links: [
        { name: "Merge PDF", href: "/merge-pdf", badge: "Popular" },
        { name: "Compress PDF", href: "/compress-pdf", badge: "New" },
        { name: "JPG to PDF", href: "/jpg-to-pdf" },
        { name: "PDF to Word", href: "/pdf-to-word" },
        { name: "Protect PDF", href: "/protect-pdf" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "API Documentation", href: "/api-docs" },
        { name: "Tutorials", href: "/tutorials" },
        { name: "Blog", href: "/blog" },
        { name: "Developer Guide", href: "/developers" },
      ],
    },
  ];

  return (
    <motion.footer
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeIn}
      className="bg-white border-t border-gray-100"
    >
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="col-span-1">
            <Link
              href="/"
              className="inline-flex items-center space-x-3 mb-6 group"
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
            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              Professional PDF tools to help you work smarter. Convert,
              compress, and edit PDFs with ease.
            </p>
            <div className="mt-6 flex items-center space-x-4">
              <a
                href="#"
                className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50/60 rounded-lg transition-all duration-200"
                aria-label="Follow us on Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50/60 rounded-lg transition-all duration-200"
                aria-label="Visit our GitHub"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50/60 rounded-lg transition-all duration-200"
                aria-label="Connect on LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="col-span-1">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-center text-[15px] text-gray-600 hover:text-primary-600 transition-colors duration-200"
                    >
                      {link.name}
                      {link.badge && (
                        <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <p className="text-sm text-gray-600">
                © {currentYear} PDFDevices. All rights reserved.
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Made with</span>
                <svg
                  className="w-4 h-4 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <span className="text-sm text-gray-500">
                  by PDFDevices Team
                </span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center space-x-6">
              <Link
                href="/privacy"
                className="text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200"
              >
                Terms
              </Link>
              <Link
                href="/cookies"
                className="text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200"
              >
                Cookies
              </Link>
              <Link
                href="/sitemap"
                className="text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
