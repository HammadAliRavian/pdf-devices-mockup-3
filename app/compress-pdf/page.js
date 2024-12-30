"use client";

import { useState } from "react";
import PDFDropzone from "@/components/compress-pdf/PDFDropzone";
import PDFList from "@/components/compress-pdf/PDFList";

const howToSteps = [
  {
    number: "01",
    title: "Upload PDF",
    description:
      "Select or drag & drop the PDF file you want to compress. We support files up to 100MB.",
    icon: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-rose-600 rounded-lg opacity-20 animate-pulse"></div>
        <div className="relative">
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
            <path
              d="M7 10V9a5 5 0 015-5v0a5 5 0 015 5v1"
              className="stroke-rose-500"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M12 12v5m0 0l-2-2m2 2l2-2"
              className="stroke-rose-600"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 12h14v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6z"
              className="fill-rose-500"
              fillOpacity="0.2"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
          <div className="absolute -right-1 -top-1">
            <div className="w-3 h-3 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "02",
    title: "Choose Quality",
    description:
      "Select your preferred compression level. Balance between file size and quality.",
    icon: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg opacity-20"></div>
        <div className="relative">
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"
              className="fill-amber-500 fill-opacity-20 stroke-amber-500"
              strokeWidth="2"
            />
            <path
              d="M8 12h8m-8 3h6m-6-6h4"
              className="stroke-amber-600"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="19" cy="5" r="2" className="fill-amber-500" />
          </svg>
          <div className="absolute -left-1 -bottom-1">
            <div className="w-2 h-2 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full"></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "03",
    title: "Download",
    description:
      "Get your compressed PDF instantly. Save up to 90% of the original file size.",
    icon: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg opacity-20"></div>
        <div className="relative">
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 7v7m0 0l-3-3m3 3l3-3"
              className="stroke-teal-600"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 15v2a2 2 0 002 2h10a2 2 0 002-2v-2"
              className="stroke-teal-500"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute -right-1 -bottom-1">
            <div className="w-2.5 h-2.5 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    ),
  },
];

const CompressPDFPage = () => {
  const [files, setFiles] = useState([]);
  const [compressionLevel, setCompressionLevel] = useState("medium"); // low, medium, high

  const handleFilesAdded = (newFiles) => {
    const updatedFiles = [...files];
    Array.from(newFiles).forEach((file) => {
      if (file.type === "application/pdf") {
        updatedFiles.push({
          id: `file-${Date.now()}-${file.name}`,
          file,
          name: file.name,
          size: file.size,
        });
      }
    });
    setFiles(updatedFiles);
  };

  const handleRemoveFile = (fileId) => {
    setFiles(files.filter((file) => file.id !== fileId));
  };

  const handleCompress = async () => {
    if (files.length === 0) {
      alert("Please add a PDF file to compress");
      return;
    }
    // Implement PDF compression logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-50 to-white pb-16">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-secondary-600 mb-4">
              Compress PDF Files
            </h1>
            <p className="text-lg text-secondary-500 max-w-2xl mx-auto">
              Reduce PDF file size while maintaining quality. Fast, easy, and
              secure.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Dropzone */}
          <PDFDropzone onFilesAdded={handleFilesAdded} />

          {/* Compression Options */}
          {files.length > 0 && (
            <div className="mt-8 space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-secondary-800 mb-4">
                  Compression Level
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    {
                      value: "low",
                      label: "Low Compression",
                      description: "Best quality, larger file size",
                    },
                    {
                      value: "medium",
                      label: "Balanced",
                      description: "Good quality, medium file size",
                    },
                    {
                      value: "high",
                      label: "High Compression",
                      description: "Smaller file size, lower quality",
                    },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setCompressionLevel(option.value)}
                      className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                        compressionLevel === option.value
                          ? "border-primary-500 bg-primary-50"
                          : "border-secondary-200 hover:border-primary-200"
                      }`}
                    >
                      <div className="font-medium text-secondary-800">
                        {option.label}
                      </div>
                      <div className="text-sm text-secondary-500">
                        {option.description}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* File List */}
              <PDFList files={files} onRemove={handleRemoveFile} />

              {/* Compress Button */}
              <div className="flex justify-center">
                <button
                  onClick={handleCompress}
                  className="px-8 py-4 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                    />
                  </svg>
                  <span>Compress PDF</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* How to Use Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary-800 sm:text-4xl">
            How to Compress PDF Files
          </h2>
          <p className="mt-4 text-lg text-secondary-600 max-w-2xl mx-auto">
            Follow these simple steps to reduce your PDF file size without
            losing quality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {howToSteps.map((step) => (
            <div
              key={step.number}
              className="relative bg-secondary-50 rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-8 bg-primary-600 text-white text-sm font-bold py-2 px-3 rounded-lg">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 relative rounded-xl bg-gradient-to-br from-white to-secondary-50 p-3 shadow-inner">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-secondary-800 mb-3">
                {step.title}
              </h3>
              <p className="text-secondary-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Smart Compression",
              description:
                "Our intelligent algorithm analyzes your PDF content to apply optimal compression techniques",
              icon: (
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-violet-600 rounded-lg opacity-20"></div>
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path
                      className="fill-violet-500"
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                </div>
              ),
              color: "violet",
            },
            {
              title: "Quality Control",
              description:
                "Choose from multiple compression levels to balance size reduction and quality",
              icon: (
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg opacity-20"></div>
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path
                      className="fill-amber-500"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </div>
              ),
              color: "amber",
            },
            {
              title: "Batch Processing",
              description:
                "Compress multiple PDF files simultaneously to save time and effort",
              icon: (
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg opacity-20"></div>
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path
                      className="fill-emerald-500"
                      d="M4 5a2 2 0 012-2h4.586A2 2 0 0112 3.586L15.414 7A2 2 0 0116 8.414V19a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm12 7h2a2 2 0 012 2v5a2 2 0 01-2 2h-8a2 2 0 01-2-2v-1m8-10h2a2 2 0 012 2v5a2 2 0 01-2 2h-8a2 2 0 01-2-2v-1"
                    />
                  </svg>
                </div>
              ),
              color: "emerald",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 bg-white border border-secondary-200 rounded-xl hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex-shrink-0">
                <div
                  className={`w-12 h-12 bg-${feature.color}-50 rounded-xl flex items-center justify-center p-3`}
                >
                  {feature.icon}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-secondary-800 mb-1">
                  {feature.title}
                </h4>
                <p className="text-secondary-600 text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-gradient-to-br from-secondary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-800 sm:text-4xl">
              Why Choose Our PDF Compressor
            </h2>
            <p className="mt-4 text-lg text-secondary-600 max-w-2xl mx-auto">
              Experience the most advanced and user-friendly PDF compression
              tool designed for all your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Advanced Compression",
                description:
                  "Our smart algorithms ensure maximum compression while preserving the quality of text, images, and graphics.",
                icon: (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg opacity-20"></div>
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                      <path
                        className="fill-blue-500"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                ),
                color: "blue",
              },
              {
                title: "Secure Processing",
                description:
                  "All compression is done locally in your browser. Your files never leave your device.",
                icon: (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg opacity-20"></div>
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                      <path
                        className="fill-indigo-500"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                ),
                color: "indigo",
              },
              {
                title: "Format Retention",
                description:
                  "Maintains the original formatting, fonts, and layout of your PDF documents after compression.",
                icon: (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-rose-600 rounded-lg opacity-20"></div>
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                      <path
                        className="fill-rose-500"
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                ),
                color: "rose",
              },
              // ... Add more features as needed
            ].map((feature, index) => (
              <div
                key={index}
                className="relative group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-12 h-12 bg-${feature.color}-50 rounded-xl flex items-center justify-center group-hover:bg-${feature.color}-100 transition-colors duration-300 p-3`}
                    >
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-secondary-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-secondary-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompressPDFPage;
