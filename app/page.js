// pages/app/page.js
"use client";
import React from "react";
import Calculator from "./components/calculator"; // Import the Calculator component

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 flex flex-col justify-center items-center p-6">
      <h1 className="text-4xl font-semibold text-gray-800 mb-4 tracking-tight">
        Simple Calculator
      </h1>
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-sm">
        <Calculator />
      </div>
    </div>
  );
};

export default Page;
