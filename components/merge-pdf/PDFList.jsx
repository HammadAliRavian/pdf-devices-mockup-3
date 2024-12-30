"use client";

import { useDrag, useDrop } from "react-dnd";
import { formatFileSize } from "@/lib/utils";

const PDFItem = ({ file, index, onRemove, onReorder }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "PDF_FILE",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "PDF_FILE",
    hover: (item, monitor) => {
      if (item.index === index) return;
      onReorder(item.index, index);
      item.index = index;
    },
  });

  return (
    <div
      ref={(node) => drag(drop(node))}
      className={`p-4 bg-white rounded-lg border border-secondary-200 flex items-center justify-between ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
          <svg
            className="w-6 h-6 text-primary-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <div>
          <p className="font-medium text-secondary-700">{file.name}</p>
          <p className="text-sm text-secondary-500">
            {formatFileSize(file.size)}
          </p>
        </div>
      </div>
      <button
        onClick={() => onRemove(file.id)}
        className="text-secondary-400 hover:text-secondary-600 transition-colors duration-200"
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

const PDFList = ({ files, onRemove, onReorder }) => {
  return (
    <div className="space-y-3">
      {files.map((file, index) => (
        <PDFItem
          key={file.id}
          file={file}
          index={index}
          onRemove={onRemove}
          onReorder={onReorder}
        />
      ))}
    </div>
  );
};

export default PDFList;
