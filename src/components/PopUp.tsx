"use client";
import React, { useState } from "react";

const PopUp = ({
  children,
  title,
  message,
  handle,
}: {
  children: React.ReactNode;
  title: string;
  message: string;
  handle?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          setShow(true);
        }}
      >
        {children}
      </button>
      {show && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50 z-10" />
          <div className="bg-white p-4 rounded-md shadow-lg border border-gray-200 z-20">
            <p className="mb-4">{title}</p>
            <p className="mb-4">{message}</p>
            <div className="flex gap-2 justify-end">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShow(false);
                }}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handle?.(e);
                  setShow(false);
                }}
                className="px-4 py-2 bg-red-400 text-white hover:bg-red-600 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default PopUp;