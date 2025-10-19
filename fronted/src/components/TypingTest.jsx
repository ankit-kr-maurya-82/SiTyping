import React, { useState, useRef, useEffect } from "react";

export default function TypingTest() {
  const [text] = useState("The quick brown fox jumps over the lazy dog");
  const [typed, setTyped] = useState("");
  const [completed, setCompleted] = useState(false);
  const inputRef = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setTyped(value);

    if (value.length >= text.length) {
      setCompleted(true);
    }
  };

  // focus on input when clicking anywhere in test box
  const handleFocusBox = () => {
    inputRef.current?.focus();
  };

  const getColoredText = () => {
    return text.split("").map((char, index) => {
      if (index < typed.length) {
        if (typed[index] === char) {
          return (
            <span key={index} className="text-green-400">
              {char}
            </span>
          );
        } else {
          return (
            <span key={index} className="text-red-500">
              {char}
            </span>
          );
        }
      } else {
        return (
          <span key={index} className="text-gray-500">
            {char}
          </span>
        );
      }
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-[#0e0e0e] text-white px-4">
      <h1 className="text-3xl font-bold mb-6">Typing Test</h1>

      {!completed ? (
        <div
          onClick={handleFocusBox}
          className="bg-gray-900 border border-gray-700 rounded-lg p-6 text-lg leading-relaxed max-w-2xl cursor-text w-full sm:w-[90%]"
        >
          <p className="select-none mb-2">{getColoredText()}</p>

          {/* Hidden input captures typing on both desktop and mobile */}
          <input
            ref={inputRef}
            type="text"
            value={typed}
            onChange={handleChange}
            className="absolute opacity-0 pointer-events-none"
            autoFocus
          />

          <p className="text-sm text-gray-400 mt-3">
            Tap here and start typing... ({typed.length}/{text.length})
          </p>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl text-yellow-400 font-semibold mb-3">
            ✅ Typing Completed!
          </h2>
          <p className="text-gray-300">
            You typed {typed.length} characters in total.
          </p>
          <button
            onClick={() => {
              setTyped("");
              setCompleted(false);
            }}
            className="mt-4 px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-400 transition"
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
}
