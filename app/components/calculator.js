// components/Calculator.js
"use client";
import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  // Handle button clicks
  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  // Handle calculation
  const handleCalculate = () => {
    try {
      setResult(eval(input)); // Evaluate the expression
    } catch (error) {
      setResult("Error");
    }
  };

  // Handle clearing the input
  const handleClear = () => {
    setInput("");
    setResult("");
  };

  // Handle backspace (delete one character from the input)
  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <div className="max-w-sm mx-auto p-6 border-2 border-black rounded-xl bg-gray-100">
      <div className="mb-4">
        <input
          type="text"
          value={input}
          readOnly
          className="w-full p-4 text-2xl text-right border-none bg-gray-300 rounded"
        />
        {result && <div className="text-lg text-green-600 mt-2">Result: {result}</div>}
      </div>

      <div className="grid grid-cols-4 gap-4">
        <button
          onClick={() => handleClick("1")}
          className="p-4 text-xl bg-gray-200 rounded hover:bg-gray-300"
        >
          1
        </button>
        <button
          onClick={() => handleClick("2")}
          className="p-4 text-xl bg-gray-200 rounded hover:bg-gray-300"
        >
          2
        </button>
        <button
          onClick={() => handleClick("3")}
          className="p-4 text-xl bg-gray-200 rounded hover:bg-gray-300"
        >
          3
        </button>
        <button
          onClick={() => handleClick("+")}
          className="p-4 text-xl bg-blue-200 rounded hover:bg-blue-300"
        >
          +
        </button>

        <button
          onClick={() => handleClick("4")}
          className="p-4 text-xl bg-gray-200 rounded hover:bg-gray-300"
        >
          4
        </button>
        <button
          onClick={() => handleClick("5")}
          className="p-4 text-xl bg-gray-200 rounded hover:bg-gray-300"
        >
          5
        </button>
        <button
          onClick={() => handleClick("6")}
          className="p-4 text-xl bg-gray-200 rounded hover:bg-gray-300"
        >
          6
        </button>
        <button
          onClick={() => handleClick("-")}
          className="p-4 text-xl bg-blue-200 rounded hover:bg-blue-300"
        >
          -
        </button>

        <button
          onClick={() => handleClick("7")}
          className="p-4 text-xl bg-gray-200 rounded hover:bg-gray-300"
        >
          7
        </button>
        <button
          onClick={() => handleClick("8")}
          className="p-4 text-xl bg-gray-200 rounded hover:bg-gray-300"
        >
          8
        </button>
        <button
          onClick={() => handleClick("9")}
          className="p-4 text-xl bg-gray-200 rounded hover:bg-gray-300"
        >
          9
        </button>
        <button
          onClick={() => handleClick("*")}
          className="p-4 text-xl bg-blue-200 rounded hover:bg-blue-300"
        >
          *
        </button>

        <button
          onClick={() => handleClick("0")}
          className="p-4 text-xl bg-gray-200 rounded hover:bg-gray-300"
        >
          0
        </button>
        <button
          onClick={() => handleClick(".")}
          className="p-4 text-xl bg-gray-200 rounded hover:bg-gray-300"
        >
          .
        </button>
        <button
          onClick={handleClear}
          className="p-4 text-xl bg-red-200 rounded hover:bg-red-300 col-span-2"
        >
          C
        </button>
        <button
          onClick={() => handleClick("/")}
          className="p-4 text-xl bg-blue-200 rounded hover:bg-blue-300"
        >
          /
        </button>

        <button
          onClick={handleBackspace}
          className="p-4 text-xl bg-gray-200 rounded hover:bg-gray-300 col-span-2"
        >
          ←
        </button>
        <button
          onClick={handleCalculate}
          className="p-4 text-xl bg-green-200 rounded hover:bg-green-300 col-span-2"
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
