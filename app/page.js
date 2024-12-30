"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const testimonials = [
  {
    quote: "The best PDF tools I've ever used. Simple, fast, and reliable.",
    author: "Dalma Bonaiti",
    role: "CEO",
    icon: (
      <div className="relative w-10 h-10 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20"></div>
        <span className="text-lg font-bold text-blue-600">DB</span>
      </div>
    ),
  },
  {
    quote: "PDFDevices has streamlined our document workflow significantly.",
    author: "Hammad Ali",
    role: "Product Designer",
    icon: (
      <div className="relative w-10 h-10 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-20"></div>
        <span className="text-lg font-bold text-purple-600">HA</span>
      </div>
    ),
  },
  {
    quote:
      "Incredibly user-friendly tools that save us hours of work every week.",
    author: "Salman Ali",
    role: "Operations Director",
    icon: (
      <div className="relative w-10 h-10 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full opacity-20"></div>
        <span className="text-lg font-bold text-emerald-600">SA</span>
      </div>
    ),
  },
];

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-secondary-50">
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-32 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
          {/* Additional decorative elements */}
          <div className="absolute top-1/4 left-0 w-32 h-32 bg-primary-200 rounded-full blur-2xl opacity-20"></div>
          <div className="absolute bottom-1/4 right-0 w-32 h-32 bg-primary-200 rounded-full blur-2xl opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 sm:py-16 md:py-20 lg:py-24">
            {/* Main Content */}
            <div className="text-center space-y-6 sm:space-y-8 animate-fade-in">
              {/* Eyebrow Text */}
              <div className="inline-block">
                <p className="inline-flex items-center px-4 py-2 bg-primary-100 bg-opacity-50 rounded-full text-primary-600 font-semibold text-sm sm:text-base">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Professional PDF Tools
                </p>
              </div>

              {/* Main Heading */}
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-600 tracking-tight">
                  <span className="block mb-2">Powerful PDF Solutions</span>
                  <span className="block text-primary-500">Made Simple</span>
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-secondary-500 leading-relaxed">
                  Edit, convert, and manage your PDF files with ease.
                  Professional PDF tools for all your document needs.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-8 sm:mt-12">
                <Link
                  href="/tools"
                  className="w-full sm:w-auto px-8 py-4 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 group"
                >
                  <span>Try Our Tools</span>
                  <svg
                    className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
                <Link
                  href="/features"
                  className="w-full sm:w-auto px-8 py-4 bg-white text-primary-500 font-medium rounded-lg border-2 border-primary-400 hover:bg-primary-50 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Learn More</span>
                </Link>
              </div>
              {/* Popular Tools Section */}
              <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-secondary-50">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  {/* Section Header */}
                  <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                    <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-primary-600 bg-primary-100 rounded-full">
                      PDF Tools
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-secondary-600 mb-4">
                      Most Popular Tools
                    </h2>
                    <p className="text-lg text-secondary-500">
                      Quick access to our powerful PDF tools that help you work
                      smarter
                    </p>
                  </div>

                  {/* Tools Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {[
                      {
                        icon: (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        ),
                        title: "Edit PDF",
                        description:
                          "Modify text, images, and pages in your PDF documents",
                        color: "text-blue-500",
                        bgColor: "bg-blue-50",
                        borderColor: "border-blue-100",
                        hoverBorderColor: "hover:border-blue-200",
                        link: "/tools/edit",
                      },
                      {
                        icon: (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                          />
                        ),
                        title: "Merge PDF",
                        description:
                          "Combine multiple PDFs into a single document",
                        color: "text-purple-500",
                        bgColor: "bg-purple-50",
                        borderColor: "border-purple-100",
                        hoverBorderColor: "hover:border-purple-200",
                        link: "/tools/merge",
                      },
                      {
                        icon: (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        ),
                        title: "Compress PDF",
                        description:
                          "Reduce PDF file size while maintaining quality",
                        color: "text-green-500",
                        bgColor: "bg-green-50",
                        borderColor: "border-green-100",
                        hoverBorderColor: "hover:border-green-200",
                        link: "/tools/compress",
                      },
                      {
                        icon: (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                          />
                        ),
                        title: "Convert PDF",
                        description:
                          "Convert PDFs to and from other file formats",
                        color: "text-orange-500",
                        bgColor: "bg-orange-50",
                        borderColor: "border-orange-100",
                        hoverBorderColor: "hover:border-orange-200",
                        link: "/tools/convert",
                      },
                    ].map((tool, index) => (
                      <Link
                        key={index}
                        href={tool.link}
                        className={`group relative p-6 sm:p-8 bg-white rounded-2xl border ${tool.borderColor} ${tool.hoverBorderColor} shadow-sm hover:shadow-md transition-all duration-300 flex flex-col`}
                      >
                        <div
                          className={`${tool.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}
                        >
                          <svg
                            className={`w-7 h-7 ${tool.color}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            {tool.icon}
                          </svg>
                        </div>

                        <h3 className="text-xl font-semibold text-secondary-600 mb-3">
                          {tool.title}
                        </h3>

                        <p className="text-secondary-500 mb-6 flex-grow">
                          {tool.description}
                        </p>

                        <div className="flex items-center text-sm font-medium text-primary-500 group-hover:text-primary-600">
                          Try Now
                          <svg
                            className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </div>

                        {/* Hover Effect */}
                        <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-primary-100 transition-colors duration-300 pointer-events-none" />
                      </Link>
                    ))}
                  </div>

                  {/* Additional Tools Link */}
                  <div className="text-center mt-12 sm:mt-16">
                    <Link
                      href="/tools"
                      className="inline-flex items-center px-6 py-3 text-primary-500 hover:text-primary-600 font-medium group"
                    >
                      <span>View All Tools</span>
                      <svg
                        className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </section>

              {/* Features Section */}
              <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-secondary-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  {/* Section Header */}
                  <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-secondary-600 mb-4">
                      Everything You Need for PDF Management
                    </h2>
                    <p className="text-secondary-500 text-lg">
                      Powerful tools to handle all your PDF needs in one place
                    </p>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {[
                      {
                        icon: (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                          />
                        ),
                        title: "PDF Editor",
                        description:
                          "Edit text, images, and pages in your PDF files with professional precision.",
                        features: [
                          "Text Editing",
                          "Image Insertion",
                          "Page Management",
                        ],
                      },
                      {
                        icon: (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        ),
                        title: "Convert & Merge",
                        description:
                          "Convert PDFs to different formats or combine multiple files effortlessly.",
                        features: [
                          "Multiple Formats",
                          "Batch Processing",
                          "Quick Merge",
                        ],
                      },
                      {
                        icon: (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        ),
                        title: "Secure & Private",
                        description:
                          "Advanced encryption and secure processing for your sensitive documents.",
                        features: [
                          "256-bit Encryption",
                          "Password Protection",
                          "Secure Storage",
                        ],
                      },
                    ].map((feature, index) => (
                      <div
                        key={index}
                        className="group relative p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-secondary-200 flex flex-col"
                      >
                        {/* Icon Header */}
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="flex-shrink-0">
                            <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-200">
                              <svg
                                className="w-7 h-7 text-primary-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                {feature.icon}
                              </svg>
                            </div>
                          </div>
                          <h3 className="text-xl font-semibold text-secondary-600">
                            {feature.title}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="text-secondary-500 leading-relaxed mb-6">
                          {feature.description}
                        </p>

                        {/* Feature List */}
                        <div className="mt-auto">
                          <ul className="space-y-3">
                            {feature.features.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-center text-secondary-500"
                              >
                                <svg
                                  className="w-5 h-5 text-primary-500 mr-3"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Hover Effect Overlay */}
                        <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-primary-200 transition-colors duration-300 pointer-events-none" />
                      </div>
                    ))}
                  </div>

                  {/* Call to Action */}
                  <div className="text-center mt-16">
                    <Link
                      href="/tools"
                      className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-primary-500 rounded-lg hover:bg-primary-600 transition-all duration-200 group"
                    >
                      Explore All Features
                      <svg
                        className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </section>

              {/* Pricing Section */}
              <section className="py-20 bg-gradient-to-b from-white to-secondary-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  {/* Section Header */}
                  <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-primary-600 bg-primary-100 rounded-full">
                      Pricing Plans
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
                      Choose the Perfect Plan
                    </h2>
                    <p className="text-lg text-secondary-600">
                      Simple, transparent pricing that grows with you. Try any
                      plan free for 14 days.
                    </p>
                  </div>

                  {/* Pricing Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
                    {/* Free Plan */}
                    <div className="relative p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-secondary-200">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                          Free
                        </h3>
                        <p className="text-secondary-600">
                          Perfect to get started
                        </p>
                        <div className="mt-4">
                          <span className="text-4xl font-bold text-secondary-900">
                            $0
                          </span>
                          <span className="text-secondary-500">/month</span>
                        </div>
                      </div>

                      <ul className="space-y-4 mb-8">
                        {[
                          "Basic PDF editing",
                          "Up to 3 files per day",
                          "Maximum file size: 10MB",
                          "Email support",
                          "Basic tools access",
                        ].map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center text-secondary-600"
                          >
                            <svg
                              className="w-5 h-5 text-primary-500 mr-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Link
                        href="/signup"
                        className="block w-full py-3 px-4 text-center text-primary-600 font-medium rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-colors duration-200"
                      >
                        Get Started
                      </Link>
                    </div>

                    {/* Pro Plan */}
                    <div className="relative p-8 bg-primary-600 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="absolute -top-4 right-8">
                        <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-primary-100 text-primary-800">
                          Most Popular
                        </span>
                      </div>

                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          Pro
                        </h3>
                        <p className="text-primary-100">
                          Best for professionals
                        </p>
                        <div className="mt-4">
                          <span className="text-4xl font-bold text-white">
                            $15
                          </span>
                          <span className="text-primary-100">/month</span>
                        </div>
                      </div>

                      <ul className="space-y-4 mb-8">
                        {[
                          "Advanced PDF editing",
                          "Unlimited conversions",
                          "Maximum file size: 100MB",
                          "Priority support",
                          "OCR text recognition",
                          "Batch processing",
                        ].map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center text-white"
                          >
                            <svg
                              className="w-5 h-5 text-primary-200 mr-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Link
                        href="/signup"
                        className="block w-full py-3 px-4 text-center text-primary-700 font-medium rounded-lg bg-white hover:bg-primary-50 transition-colors duration-200"
                      >
                        Start Free Trial
                      </Link>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="relative p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-secondary-200">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                          Enterprise
                        </h3>
                        <p className="text-secondary-600">For large teams</p>
                        <div className="mt-4">
                          <span className="text-4xl font-bold text-secondary-900">
                            Custom
                          </span>
                        </div>
                      </div>

                      <ul className="space-y-4 mb-8">
                        {[
                          "Everything in Pro",
                          "Unlimited storage",
                          "No file size limits",
                          "24/7 priority support",
                          "API access",
                          "Custom integration",
                          "Advanced security",
                        ].map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center text-secondary-600"
                          >
                            <svg
                              className="w-5 h-5 text-primary-500 mr-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Link
                        href="/contact"
                        className="block w-full py-3 px-4 text-center text-primary-600 font-medium rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-colors duration-200"
                      >
                        Contact Sales
                      </Link>
                    </div>
                  </div>

                  {/* FAQ Link */}
                  <div className="text-center mt-12">
                    <Link
                      href="/faq"
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                    >
                      <span>Have questions? Check our FAQ</span>
                      <svg
                        className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </section>

              {/* Testimonials Section */}
              <motion.section
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={stagger}
                className="py-20 bg-gradient-to-b from-white to-secondary-50"
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <motion.div
                    variants={fadeIn}
                    className="text-center max-w-3xl mx-auto mb-16"
                  >
                    <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
                      Trusted by Professionals
                    </h2>
                    <p className="text-lg text-secondary-600">
                      Join thousands of satisfied users who trust PDFDevices for
                      their PDF needs
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                      <motion.div
                        key={index}
                        variants={fadeIn}
                        className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                      >
                        {/* Quote Icon */}
                        <div className="absolute -top-4 right-8">
                          <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                            <svg
                              className="w-4 h-4 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                          </div>
                        </div>

                        {/* Stars */}
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-5 h-5 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>

                        {/* Quote */}
                        <blockquote className="text-secondary-800 text-lg font-medium mb-6">
                          "{testimonial.quote}"
                        </blockquote>

                        {/* Author */}
                        <div className="flex items-center space-x-4">
                          {testimonial.icon}
                          <div>
                            <div className="font-semibold text-secondary-900">
                              {testimonial.author}
                            </div>
                            <div className="text-sm text-secondary-600">
                              {testimonial.role}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Call to Action */}
                  <motion.div variants={fadeIn} className="mt-16 text-center">
                    <Link
                      href="/tools"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200"
                    >
                      Try Our Tools
                      <svg
                        className="ml-2 w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </motion.div>
                </div>
              </motion.section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
