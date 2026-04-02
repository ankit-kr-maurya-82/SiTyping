import React, { useState, useRef, useEffect } from "react";

export default function TypingTest() {
  const [text] = useState(
    "The quick brown fox jumps over the lazy dog"
  );
  const [typed, setTyped] = useState("");
  const [completed, setCompleted] = useState(false);

  const [time, setTime] = useState(60);
  const [isActive, setIsActive] = useState(false);

  const inputRef = useRef(null);

  // ⏱ Timer
  useEffect(() => {
    let timer;
    if (isActive && time > 0) {
      timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (time === 0) {
      setCompleted(true);
      setIsActive(false);
    }
    return () => clearInterval(timer);
  }, [isActive, time]);

  // 🔤 Typing handler
  const handleChange = (e) => {
    const value = e.target.value;

    if (!isActive) setIsActive(true);

    if (value.length <= text.length) {
      setTyped(value);
    }

    if (value.length === text.length) {
      setCompleted(true);
      setIsActive(false);
    }
  };

  // 🎯 Focus
  const handleFocusBox = () => {
    inputRef.current?.focus();
  };

  // 🎨 Coloring
  const getColoredText = () => {
    return text.split("").map((char, index) => {
      if (index < typed.length) {
        return (
          <span
            key={index}
            className={
              typed[index] === char
                ? "text-green-400"
                : "text-red-500"
            }
          >
            {char}
          </span>
        );
      }
      return (
        <span key={index} className="text-gray-500">
          {char}
        </span>
      );
    });
  };

  // 📊 Metrics
  const correctChars = typed.split("").filter((char, i) => char === text[i]).length;
  const accuracy = typed.length
    ? Math.round((correctChars / typed.length) * 100)
    : 0;

  const words = typed.length / 5;
  const timeSpent = 60 - time;
  const wpm = timeSpent > 0 ? Math.round(words / (timeSpent / 60)) : 0;

  const errors = typed.length - correctChars;

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-[#0e0e0e] text-white px-4">
      <h1 className="text-3xl font-bold mb-6">Typing Test</h1>

      {/* 📊 Stats */}
      <div className="flex gap-6 mb-4 text-sm text-gray-300">
        <p>⏱ {time}s</p>
        <p>⚡ WPM: {wpm}</p>
        <p>🎯 Accuracy: {accuracy}%</p>
        <p>❌ Errors: {errors}</p>
      </div>

      {!completed ? (
        <div
          onClick={handleFocusBox}
          className="bg-gray-900 border border-gray-700 rounded-lg p-6 text-lg leading-relaxed max-w-2xl cursor-text w-full"
        >
          <p className="select-none mb-2">{getColoredText()}</p>

          <input
            ref={inputRef}
            type="text"
            value={typed}
            onChange={handleChange}
            className="absolute opacity-0"
            autoFocus
          />

          <p className="text-sm text-gray-400 mt-3">
            Click here and start typing...
          </p>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl text-yellow-400 font-semibold mb-3">
            ✅ Test Completed!
          </h2>

          <p className="text-gray-300">⚡ WPM: {wpm}</p>
          <p className="text-gray-300">🎯 Accuracy: {accuracy}%</p>
          <p className="text-gray-300">❌ Errors: {errors}</p>

          <button
            onClick={() => {
              setTyped("");
              setCompleted(false);
              setTime(60);
              setIsActive(false);
            }}
            className="mt-4 px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-400"
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
}