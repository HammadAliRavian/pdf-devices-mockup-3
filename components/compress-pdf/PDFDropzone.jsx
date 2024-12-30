"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const PDFDropzone = ({ onFilesAdded }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      onFilesAdded(acceptedFiles);
    },
    [onFilesAdded]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
    },
    multiple: true,
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors duration-200 ${
        isDragActive
          ? "border-primary-500 bg-primary-50"
          : "border-secondary-200 hover:border-primary-400 hover:bg-secondary-50"
      }`}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center justify-center">
        <svg
          className={`w-12 h-12 mb-4 ${
            isDragActive ? "text-primary-500" : "text-secondary-400"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
        <p className="text-lg font-medium text-secondary-700 mb-2">
          {isDragActive
            ? "Drop your PDF files here"
            : "Drag & drop PDF files here, or click to select"}
        </p>
        <p className="text-sm text-secondary-500">
          Maximum file size: 100MB per PDF
        </p>
      </div>
    </div>
  );
};

export default PDFDropzone;
