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
      className={`p-8 border-2 border-dashed rounded-xl cursor-pointer transition-colors duration-200 flex flex-col items-center justify-center min-h-[200px] ${
        isDragActive
          ? "border-primary-500 bg-primary-50"
          : "border-secondary-300 hover:border-primary-500 hover:bg-secondary-50"
      }`}
    >
      <input {...getInputProps()} />
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
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
        />
      </svg>
      <p className="text-center text-secondary-600">
        {isDragActive ? (
          <span className="font-medium text-primary-600">
            Drop your PDF files here
          </span>
        ) : (
          <span>
            Drag and drop PDF files here, or{" "}
            <span className="text-primary-500 font-medium">browse</span>
          </span>
        )}
      </p>
      <p className="mt-2 text-sm text-secondary-500">
        Supported format: PDF files only
      </p>
    </div>
  );
};

export default PDFDropzone;
