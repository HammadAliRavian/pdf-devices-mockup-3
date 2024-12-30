"use client";

import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import PDFDropzone from "@/components/merge-pdf/PDFDropzone";
import PDFList from "@/components/merge-pdf/PDFList";

const howToSteps = [
  {
    number: "01",
    title: "Upload Your PDFs",
    description:
      "Drag and drop your PDF files or click to browse. You can select multiple files at once.",
    icon: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg opacity-20 animate-pulse"></div>
        <div className="relative">
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
            <path
              d="M7 10V9a5 5 0 015-5v0a5 5 0 015 5v1"
              className="stroke-blue-500"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M12 12v5m0 0l-2-2m2 2l2-2"
              className="stroke-blue-600"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 12h14v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6z"
              className="fill-blue-500"
              fillOpacity="0.2"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
          <div className="absolute -right-1 -top-1">
            <div className="w-3 h-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>
    ),
    color: "blue",
  },
  {
    number: "02",
    title: "Arrange Order",
    description:
      "Drag and drop the files to reorder them. The PDFs will be merged in the order shown.",
    icon: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg opacity-20"></div>
        <div className="relative">
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
            <rect
              x="4"
              y="4"
              width="16"
              height="16"
              rx="2"
              className="fill-purple-500 fill-opacity-20 stroke-purple-500"
              strokeWidth="2"
            />
            <path
              d="M9 8h6M9 12h6M9 16h6"
              className="stroke-purple-600"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="19" cy="5" r="2" className="fill-purple-500" />
          </svg>
          <div className="absolute -left-1 -bottom-1">
            <div className="w-2 h-2 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full"></div>
          </div>
        </div>
      </div>
    ),
    color: "purple",
  },
  {
    number: "03",
    title: "Merge PDFs",
    description:
      "Click the 'Merge PDFs' button to combine your files into a single PDF document.",
    icon: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg opacity-20"></div>
        <div className="relative">
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"
              className="fill-emerald-500 fill-opacity-20 stroke-emerald-500"
              strokeWidth="2"
            />
            <path
              d="M8 12h8m-4-4v8"
              className="stroke-emerald-600"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="19" cy="5" r="2" className="fill-emerald-500" />
          </svg>
          <div className="absolute -right-1 -bottom-1">
            <div className="w-2.5 h-2.5 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    ),
    color: "green",
  },
];

const MergePDFPage = () => {
  const [files, setFiles] = useState([]);

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

  const handleReorderFiles = (dragIndex, hoverIndex) => {
    const draggedFile = files[dragIndex];
    const updatedFiles = [...files];
    updatedFiles.splice(dragIndex, 1);
    updatedFiles.splice(hoverIndex, 0, draggedFile);
    setFiles(updatedFiles);
  };

  const handleMerge = async () => {
    if (files.length < 2) {
      alert("Please add at least 2 PDF files to merge");
      return;
    }
    // Implement PDF merging logic here
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-gradient-to-b from-secondary-50 to-white pb-16">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-secondary-600 mb-4">
                Merge PDF Files
              </h1>
              <p className="text-lg text-secondary-500 max-w-2xl mx-auto">
                Combine multiple PDF files into a single document. Drag and drop
                your files to reorder them before merging.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8 sm:py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Dropzone */}
            <PDFDropzone onFilesAdded={handleFilesAdded} />

            {/* File List */}
            {files.length > 0 && (
              <div className="mt-8">
                <PDFList
                  files={files}
                  onRemove={handleRemoveFile}
                  onReorder={handleReorderFiles}
                />

                {/* Merge Button */}
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={handleMerge}
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
                        d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                      />
                    </svg>
                    <span>Merge PDFs</span>
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
              How to Use PDF Merger
            </h2>
            <p className="mt-4 text-lg text-secondary-600 max-w-2xl mx-auto">
              Follow these simple steps to merge your PDF files quickly and
              efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {howToSteps.map((step, index) => (
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

          {/* Additional Features */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Secure Processing",
                description:
                  "Your files are processed securely and never stored on our servers",
                icon: (
                  <div className="relative">
                    <div className="absolute inset-0 bg-indigo-100 rounded-lg transform rotate-6"></div>
                    <svg className="relative w-6 h-6" viewBox="0 0 24 24">
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
                title: "Maintain Quality",
                description:
                  "Original PDF quality is preserved during the merging process",
                icon: (
                  <div className="relative">
                    <div className="absolute inset-0 bg-purple-100 rounded-lg transform rotate-6"></div>
                    <svg className="relative w-6 h-6" viewBox="0 0 24 24">
                      <path
                        className="fill-purple-500"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                ),
                color: "purple",
              },
              {
                title: "Fast Processing",
                description:
                  "Advanced algorithms ensure quick merging of your PDF files",
                icon: (
                  <div className="relative">
                    <div className="absolute inset-0 bg-green-100 rounded-lg transform rotate-6"></div>
                    <svg className="relative w-6 h-6" viewBox="0 0 24 24">
                      <path
                        className="fill-green-500"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                ),
                color: "green",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-white border border-secondary-200 rounded-xl hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex-shrink-0">
                  <div
                    className={`w-10 h-10 bg-${feature.color}-100 rounded-lg flex items-center justify-center`}
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

        {/* Why Choose Our PDF Merger Section */}
        <section className="py-16 bg-gradient-to-br from-secondary-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary-800 sm:text-4xl">
                Why Choose Our PDF Merger
              </h2>
              <p className="mt-4 text-lg text-secondary-600 max-w-2xl mx-auto">
                Experience the most reliable and user-friendly PDF merging tool
                designed for professionals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Browser-Based Solution",
                  description:
                    "No downloads or installations required. Access our PDF merger directly from your web browser on any device.",
                  icon: (
                    <div className="relative">
                      <div className="absolute inset-0 bg-rose-100 rounded-lg transform rotate-6"></div>
                      <svg className="relative w-6 h-6" viewBox="0 0 24 24">
                        <path
                          className="fill-rose-500"
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    </div>
                  ),
                  color: "rose",
                },
                {
                  title: "Drag & Drop Interface",
                  description:
                    "Intuitive drag and drop functionality makes it easy to upload and reorder your PDF files.",
                  icon: (
                    <div className="relative">
                      <div className="absolute inset-0 bg-purple-100 rounded-lg transform rotate-6"></div>
                      <svg className="relative w-6 h-6" viewBox="0 0 24 24">
                        <path
                          className="fill-purple-500"
                          d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                        />
                      </svg>
                    </div>
                  ),
                  color: "purple",
                },
                {
                  title: "Privacy First",
                  description:
                    "Your files are processed locally in your browser. We never store or access your sensitive documents.",
                  icon: (
                    <div className="relative">
                      <div className="absolute inset-0 bg-indigo-100 rounded-lg transform rotate-6"></div>
                      <svg className="relative w-6 h-6" viewBox="0 0 24 24">
                        <path
                          className="fill-indigo-500"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                  ),
                  color: "indigo",
                },
                {
                  title: "Preserve Formatting",
                  description:
                    "Maintain the original quality, formatting, and layout of your PDF documents after merging.",
                  icon: (
                    <div className="relative">
                      <div className="absolute inset-0 bg-green-100 rounded-lg transform rotate-6"></div>
                      <svg className="relative w-6 h-6" viewBox="0 0 24 24">
                        <path
                          className="fill-green-500"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                  ),
                  color: "green",
                },
                {
                  title: "Lightning Fast",
                  description:
                    "Optimized algorithms ensure quick processing even for large PDF files and multiple documents.",
                  icon: (
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-100 rounded-lg transform rotate-6"></div>
                      <svg className="relative w-6 h-6" viewBox="0 0 24 24">
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
                  title: "Cross-Platform Support",
                  description:
                    "Works seamlessly across all devices and operating systems with a modern web browser.",
                  icon: (
                    <div className="relative">
                      <div className="absolute inset-0 bg-purple-100 rounded-lg transform rotate-6"></div>
                      <svg className="relative w-6 h-6" viewBox="0 0 24 24">
                        <path
                          className="fill-purple-500"
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  ),
                  color: "purple",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="relative group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div
                        className={`w-12 h-12 bg-${feature.color}-50 rounded-xl flex items-center justify-center group-hover:bg-${feature.color}-100 transition-colors duration-300`}
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
    </DndProvider>
  );
};

export default MergePDFPage;
