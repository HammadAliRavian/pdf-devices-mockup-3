"use client";

import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const categories = [
  {
    title: "Merge & Edit",
    description: "Combine and modify your PDF files with ease",
    icon: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg opacity-20 animate-pulse"></div>
        <svg
          className="w-8 h-8 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
          />
        </svg>
        <div className="absolute -top-1 -right-1">
          <div className="w-2 h-2 bg-blue-400 rounded-full blur-sm"></div>
        </div>
      </div>
    ),
    tools: [
      {
        name: "Merge PDF",
        href: "/merge-pdf",
        description: "Combine multiple PDFs into one file",
        icon: (
          <div className="relative w-full h-full flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-lg group-hover:from-blue-400/30 group-hover:to-blue-600/30 transition-all duration-300"></div>
            <svg
              className="w-6 h-6 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
              />
            </svg>
          </div>
        ),
      },
      {
        name: "Rotate PDF",
        href: "/rotate-pdf",
        description: "Change page orientation easily",
        icon: (
          <div className="relative w-full h-full flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 to-indigo-600/20 rounded-lg group-hover:from-indigo-400/30 group-hover:to-indigo-600/30 transition-all duration-300"></div>
            <svg
              className="w-6 h-6 text-indigo-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </div>
        ),
      },
      {
        name: "Remove Pages",
        href: "/remove-pages",
        description: "Delete unwanted pages from PDF",
        icon: (
          <div className="relative w-full h-full flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-400/20 to-rose-600/20 rounded-lg group-hover:from-rose-400/30 group-hover:to-rose-600/30 transition-all duration-300"></div>
            <svg
              className="w-6 h-6 text-rose-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </div>
        ),
      },
      {
        name: "Organize PDF",
        href: "/organize-pdf",
        description: "Rearrange pages in your PDF",
        icon: (
          <div className="relative w-full h-full flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-lg group-hover:from-emerald-400/30 group-hover:to-emerald-600/30 transition-all duration-300"></div>
            <svg
              className="w-6 h-6 text-emerald-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
          </div>
        ),
      },
    ],
  },
  {
    title: "Optimize & Extract",
    description: "Enhance and extract content from your PDFs",
    icon: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg opacity-20 animate-pulse"></div>
        <svg
          className="w-8 h-8 text-purple-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
        <div className="absolute -bottom-1 -right-1">
          <div className="w-2 h-2 bg-purple-400 rounded-full blur-sm"></div>
        </div>
      </div>
    ),
    tools: [
      {
        name: "Compress PDF",
        href: "/compress-pdf",
        description: "Reduce PDF file size while maintaining quality",
        icon: (
          <div className="relative w-full h-full flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-lg group-hover:from-purple-400/30 group-hover:to-purple-600/30 transition-all duration-300"></div>
            <svg
              className="w-6 h-6 text-purple-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        ),
      },
      {
        name: "Grayscale PDF",
        href: "/grayscale-pdf",
        description: "Convert PDF to black and white",
        icon: (
          <div className="relative w-full h-full flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-400/20 to-slate-600/20 rounded-lg group-hover:from-slate-400/30 group-hover:to-slate-600/30 transition-all duration-300"></div>
            <svg
              className="w-6 h-6 text-slate-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v6m0 0l-3-3m3 3l3-3"
              />
            </svg>
          </div>
        ),
      },
      {
        name: "Extract Pages",
        href: "/extract-pages",
        description: "Extract specific pages from PDF",
        icon: (
          <div className="relative w-full h-full flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 to-indigo-600/20 rounded-lg group-hover:from-indigo-400/30 group-hover:to-indigo-600/30 transition-all duration-300"></div>
            <svg
              className="w-6 h-6 text-indigo-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 3l-4 4m0 0l4 4m-4-4h14"
              />
            </svg>
          </div>
        ),
      },
      {
        name: "Repair PDF",
        href: "/repair-pdf",
        description: "Fix corrupted or damaged PDFs",
        icon: (
          <div className="relative w-full h-full flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-lg group-hover:from-emerald-400/30 group-hover:to-emerald-600/30 transition-all duration-300"></div>
            <svg
              className="w-6 h-6 text-emerald-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.828 14.828a4 4 0 01-5.656 0M9.172 9.172a4 4 0 015.656 0"
              />
            </svg>
          </div>
        ),
      },
    ],
  },
  {
    title: "Convert To PDF",
    description: "Transform various formats into PDF",
    icon: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg opacity-20 animate-pulse"></div>
        <svg
          className="w-8 h-8 text-emerald-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0l-4 4m4-4v12"
          />
        </svg>
        <div className="absolute -top-1 -left-1">
          <div className="w-2 h-2 bg-emerald-400 rounded-full blur-sm"></div>
        </div>
      </div>
    ),
    tools: [
      {
        name: "JPG to PDF",
        href: "/jpg-to-pdf",
        description: "Convert JPG images to PDF files",
        icon: (
          <div className="relative w-full h-full flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-pink-600/20 rounded-lg group-hover:from-pink-400/30 group-hover:to-pink-600/30 transition-all duration-300"></div>
            <svg
              className="w-6 h-6 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        ),
      },
      {
        name: "PNG to PDF",
        href: "/png-to-pdf",
        description: "Convert PNG images to PDF files",
        icon: (
          <div className="relative w-full h-full flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-400/20 to-violet-600/20 rounded-lg group-hover:from-violet-400/30 group-hover:to-violet-600/30 transition-all duration-300"></div>
            <svg
              className="w-6 h-6 text-violet-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        ),
      },
      {
        name: "BMP to PDF",
        href: "/bmp-to-pdf",
        description: "Convert BMP images to PDF files",
        icon: (
          <div className="relative w-full h-full flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-cyan-600/20 rounded-lg group-hover:from-cyan-400/30 group-hover:to-cyan-600/30 transition-all duration-300"></div>
            <svg
              className="w-6 h-6 text-cyan-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        ),
      },
      {
        name: "TIFF to PDF",
        href: "/tiff-to-pdf",
        description: "Convert TIFF images to PDF files",
        icon: (
          <div className="relative w-full h-full flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-400/20 to-fuchsia-600/20 rounded-lg group-hover:from-fuchsia-400/30 group-hover:to-fuchsia-600/30 transition-all duration-300"></div>
            <svg
              className="w-6 h-6 text-fuchsia-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        ),
      },
      {
        name: "Word to PDF",
        href: "/word-to-pdf",
        description: "Convert DOCX files to PDF",
        icon: (
          <div className="relative w-full h-full flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-lg group-hover:from-blue-400/30 group-hover:to-blue-600/30 transition-all duration-300"></div>
            <svg
              className="w-6 h-6 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
        ),
      },
      {
        name: "Powerpoint to PDF",
        href: "/powerpoint-to-pdf",
        description: "Convert PPTX files to PDF",
        icon: (
          <div className="relative w-full h-full flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-lg group-hover:from-orange-400/30 group-hover:to-orange-600/30 transition-all duration-300"></div>
            <svg
              className="w-6 h-6 text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 12h10m-10 4h10M7 8h10M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        ),
      },
      {
        name: "TXT to PDF",
        href: "/txt-to-pdf",
        description: "Convert text files to PDF",
        icon: (
          <div className="relative w-full h-full flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-400/20 to-slate-600/20 rounded-lg group-hover:from-slate-400/30 group-hover:to-slate-600/30 transition-all duration-300"></div>
            <svg
              className="w-6 h-6 text-slate-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
        ),
      },
      {
        name: "Excel to PDF",
        href: "/excel-to-pdf",
        description: "Convert XLSX files to PDF",
        icon: (
          <div className="relative w-full h-full flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-lg group-hover:from-emerald-400/30 group-hover:to-emerald-600/30 transition-all duration-300"></div>
            <svg
              className="w-6 h-6 text-emerald-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </div>
        ),
      },
    ],
  },
  {
    title: "Convert from PDF",
    description: "Transform PDFs into other formats",
    icon: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-rose-600 rounded-lg opacity-20 animate-pulse"></div>
        <svg
          className="w-8 h-8 text-rose-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        <div className="absolute -bottom-1 -right-1">
          <div className="w-2 h-2 bg-rose-400 rounded-full blur-sm"></div>
        </div>
      </div>
    ),
    tools: [
      {
        name: "PDF to JPG",
        href: "/pdf-to-jpg",
        description: "Convert PDF pages to JPG images",
        icon: (
          <div className="relative w-full h-full flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-pink-600/20 rounded-lg group-hover:from-pink-400/30 group-hover:to-pink-600/30 transition-all duration-300"></div>
            <svg
              className="w-6 h-6 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        ),
      },
      {
        name: "PDF to PNG",
        href: "/pdf-to-png",
        description: "Convert PDF pages to PNG images",
        icon: (
          <div className="relative w-full h-full flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-400/20 to-violet-600/20 rounded-lg group-hover:from-violet-400/30 group-hover:to-violet-600/30 transition-all duration-300"></div>
            <svg
              className="w-6 h-6 text-violet-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        ),
      },
      {
        name: "PDF to BMP",
        href: "/pdf-to-bmp",
        description: "Convert PDF pages to BMP images",
        icon: (
          <div className="relative w-full h-full flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-cyan-600/20 rounded-lg group-hover:from-cyan-400/30 group-hover:to-cyan-600/30 transition-all duration-300"></div>
            <svg
              className="w-6 h-6 text-cyan-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        ),
      },
      {
        name: "PDF to TIFF",
        href: "/pdf-to-tiff",
        description: "Convert PDF pages to TIFF images",
        icon: (
          <div className="relative w-full h-full flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-400/20 to-fuchsia-600/20 rounded-lg group-hover:from-fuchsia-400/30 group-hover:to-fuchsia-600/30 transition-all duration-300"></div>
            <svg
              className="w-6 h-6 text-fuchsia-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        ),
      },
      {
        name: "PDF to Word",
        href: "/pdf-to-word",
        description: "Convert PDF to editable DOCX",
        icon: (
          <div className="relative w-full h-full flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-lg group-hover:from-blue-400/30 group-hover:to-blue-600/30 transition-all duration-300"></div>
            <svg
              className="w-6 h-6 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
        ),
      },
      {
        name: "PDF to Powerpoint",
        href: "/pdf-to-powerpoint",
        description: "Convert PDF to editable PPTX",
        icon: (
          <div className="relative w-full h-full flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-lg group-hover:from-orange-400/30 group-hover:to-orange-600/30 transition-all duration-300"></div>
            <svg
              className="w-6 h-6 text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 12h10m-10 4h10M7 8h10M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        ),
      },
      {
        name: "PDF to TXT",
        href: "/pdf-to-txt",
        description: "Extract text from PDF",
        icon: (
          <div className="relative w-full h-full flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-400/20 to-slate-600/20 rounded-lg group-hover:from-slate-400/30 group-hover:to-slate-600/30 transition-all duration-300"></div>
            <svg
              className="w-6 h-6 text-slate-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
        ),
      },
      {
        name: "PDF to ZIP",
        href: "/pdf-to-zip",
        description: "Compress PDF files into ZIP",
        icon: (
          <div className="relative w-full h-full flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-lg group-hover:from-yellow-400/30 group-hover:to-yellow-600/30 transition-all duration-300"></div>
            <svg
              className="w-6 h-6 text-yellow-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              />
            </svg>
          </div>
        ),
      },
    ],
  },
  {
    title: "PDF Security",
    description: "Protect and secure your PDF files",
    icon: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg opacity-20 animate-pulse"></div>
        <svg
          className="w-8 h-8 text-amber-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
        <div className="absolute -top-1 -left-1">
          <div className="w-2 h-2 bg-amber-400 rounded-full blur-sm"></div>
        </div>
      </div>
    ),
    tools: [
      {
        name: "Protect PDF",
        href: "/protect-pdf",
        description: "Add password protection to your PDF",
        icon: (
          <div className="relative w-full h-full flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-lg group-hover:from-amber-400/30 group-hover:to-amber-600/30 transition-all duration-300"></div>
            <svg
              className="w-6 h-6 text-amber-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
        ),
      },
      {
        name: "Unlock PDF",
        href: "/unlock-pdf",
        description: "Remove password from protected PDF",
        icon: (
          <div className="relative w-full h-full flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-lg group-hover:from-green-400/30 group-hover:to-green-600/30 transition-all duration-300"></div>
            <svg
              className="w-6 h-6 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
              />
            </svg>
          </div>
        ),
      },
    ],
  },
];

const ToolsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-50 to-white">
      {/* Hero Section */}
      <motion.section
        initial="initial"
        animate="animate"
        variants={stagger}
        className="py-12 sm:py-16 lg:py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeIn} className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-secondary-800 mb-4">
              All PDF Tools
            </h1>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Everything you need to work with PDFs in one place. Fast, easy,
              and secure.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Tools Grid */}
      <motion.section
        initial="initial"
        animate="animate"
        variants={stagger}
        className="py-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={fadeIn}
                className="bg-white rounded-2xl shadow-sm p-8"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12">{category.icon}</div>
                  <div>
                    <h2 className="text-2xl font-bold text-secondary-800">
                      {category.title}
                    </h2>
                    <p className="text-secondary-600">{category.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.tools.map((tool) => (
                    <motion.a
                      key={tool.name}
                      href={tool.href}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group block p-6 rounded-xl border-2 border-secondary-100 hover:border-primary-500 hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 flex-shrink-0">
                          {tool.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-secondary-800 mb-1 group-hover:text-primary-600 transition-colors duration-200">
                            {tool.name}
                          </h3>
                          <p className="text-sm text-secondary-600">
                            {tool.description}
                          </p>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ToolsPage;
