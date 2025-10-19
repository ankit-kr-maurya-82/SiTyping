import React, { useState, useEffect } from "react";
import { generateWords } from "../utils/generateWords";
import TypingPreview from "./TypingPreview";
import Timer from "../components/Timer";
import Stats from "../components/Stats";

export default function TypingTest() {
  const [text, setText] = useState(generateWords());
  const [typed, setTyped] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [started, setStarted] = useState(false);

  const words = text.split(" ");
  const currentWordIndex = typed.split(" ").length - 1;

  // Timer
  useEffect(() => {
    let timer;
    if (started && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [started, timeLeft]);

  // Key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!started) setStarted(true);
      if (timeLeft <= 0) return;

      if (e.key.length === 1) setTyped((prev) => prev + e.key);
      else if (e.key === "Backspace") setTyped((prev) => prev.slice(0, -1));
      else if (e.key === " ") setTyped((prev) => prev + " ");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [started, timeLeft]);

  // Calculate WPM & Accuracy
  const wpm = Math.round(typed.trim().split(" ").length / ((60 - timeLeft) / 60)) || 0;
  const accuracy = Math.round(
    (typed
      .split("")
      .filter((c, i) => c === text[i])
      .length /
      typed.length) *
      100
  ) || 100;

  return (
    <div className="w-[90%] md:w-[70%] lg:w-[60%] p-6 bg-gray-900 rounded-2xl shadow-lg mx-auto mt-10 min-h-[200px] flex flex-col justify-start">
      <div className="flex justify-between mb-4">
        <Timer timeLeft={timeLeft} />
        <Stats wpm={wpm} accuracy={accuracy} />
      </div>

      <TypingPreview
        words={words}
        typed={typed}
        currentWordIndex={currentWordIndex}
      />

      {timeLeft <= 0 && (
        <p className="mt-4 text-red-400 font-semibold text-sm">
          Time's up!
        </p>
      )}
    </div>
  );
}
