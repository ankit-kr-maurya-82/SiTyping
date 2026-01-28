import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Sentence bank
const sentenceBank = [
  "The quick brown fox jumps over the lazy dog.",
  "Pack my box with five dozen liquor jugs.",
  "How vexingly quick daft zebras jump!",
  "Bright vixens jump; dozy fowl quack.",
  "Sphinx of black quartz, judge my vow.",
  "Jackdaws love my big sphinx of quartz.",
  "The five boxing wizards jump quickly.",
  "Crazy Fredrick bought many very exquisite opal jewels.",
  "We promptly judged antique ivory buckles for the next prize.",
  "Amazingly few discotheques provide jukeboxes."
];

// Get random sentences
const getRandomSentences = (count = 5) => {
  const shuffled = [...sentenceBank].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count).join(" ").split(/\s+/);
};

const Typing = () => {
  const [text, setText] = useState(getRandomSentences());
  const [typedWords, setTypedWords] = useState([]);
  const [currentWord, setCurrentWord] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const totalTime = 30;
  const textContainerRef = useRef(null);
  const caretRef = useRef(null);

  // Typing logic
  const handleKeyDown = (e) => {
    if (isFinished) return;
    if (!startTime) setStartTime(Date.now());

    if (e.key === " ") {
      setTypedWords((prev) => [...prev, currentWord]);
      setCurrentWord("");
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);

      // Finish immediately if last word typed
      if (nextIndex >= text.length) {
        setIsFinished(true);
        setElapsedTime((Date.now() - startTime) / 1000);
      }
      e.preventDefault();
    } else if (e.key === "Backspace") {
      setCurrentWord((prev) => prev.slice(0, -1));
    } else if (e.key.length === 1) {
      setCurrentWord((prev) => prev + e.key);
    }
  };

  // Timer
  useEffect(() => {
    let timer;
    if (startTime && !isFinished) {
      timer = setInterval(() => {
        const timePassed = (Date.now() - startTime) / 1000;
        setElapsedTime(timePassed);

        if (timePassed >= totalTime) {
          setIsFinished(true);
          clearInterval(timer);
        }
      }, 100);
    }
    return () => clearInterval(timer);
  }, [startTime, isFinished]);

  // Stats
  const correctWords = typedWords.filter((w, i) => w === text[i]).length;
  const accuracy =
    typedWords.length === 0
      ? 100
      : Math.round((correctWords / typedWords.length) * 100);
  const wpm = Math.round((correctWords / (elapsedTime / 60)) || 0);
  const totalCharsTyped = typedWords.join("").length + currentWord.length;

  // Restart
  const restartTest = () => {
    setText(getRandomSentences());
    setTypedWords([]);
    setCurrentWord("");
    setCurrentIndex(0);
    setStartTime(null);
    setElapsedTime(0);
    setIsFinished(false);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  // Caret movement
  useEffect(() => {
    if (!textContainerRef.current || !caretRef.current) return;
    const container = textContainerRef.current;
    const activeWord = container.querySelector(`.word-${currentIndex}`);
    if (!activeWord) return;
    const span =
      activeWord.querySelector(`.char-${currentWord.length}`) || activeWord;
    const { offsetLeft, offsetTop } = span;
    caretRef.current.style.transform = `translate(${offsetLeft}px, ${offsetTop}px)`;
  }, [currentWord, currentIndex]);

  // Per-character coloring
  const renderWord = (word, typed) => {
    return word.split("").map((letter, i) => {
      const typedChar = typed[i] || "";
      let color = "";
      if (typedChar) color = typedChar === letter ? "text-green-500" : "text-red-500";
      return (
        <span key={i} className={`inline-block char-${i} ${color}`}>
          {letter}
        </span>
      );
    });
  };

  return (
    <div className="flex top-[-65px] flex-col items-center justify-center w-screen  bg-[#0e0e0e] text-gray-200 font-mono relative overflow-hidden p-4 h-[40rem]">
      <h1 className="text-3xl font-semibold text-gray-400 mb-8 select-none">
        Si Typing 
      </h1>

      {/* Progress bar */}
      <div
        className="absolute top-0 left-0 h-1 bg-yellow-500"
        style={{ width: `${(elapsedTime / totalTime) * 100}%` }}
      />

      {/* Typing text */}
      <div
        ref={textContainerRef}
        className="w-full max-w-[90%] text-2xl leading-relaxed text-center select-none flex flex-wrap justify-center relative"
      >
        {text.map((word, i) => {
          const isDone = i < currentIndex;
          const isActive = i === currentIndex;

          return (
            <span key={i} className={`m-1 word-${i} relative`}>
              {isDone
                ? renderWord(word, typedWords[i] || "")
                : isActive
                ? renderWord(word, currentWord)
                : <span className="text-gray-500">{word}</span>}
            </span>
          );
        })}

        {/* Caret */}
        {!isFinished && (
          <motion.span
            ref={caretRef}
            className="absolute w-[2px] bg-yellow-400 animate-blink h-[1em] pointer-events-none"
            style={{ top: 0, left: 0 }}
            layout
          />
        )}
      </div>

      {/* Stats */}
      <div className="mt-10 flex gap-10 text-gray-400 text-sm">
        <div>
          <span className="text-white font-bold text-lg">{wpm}</span> WPM
        </div>
        <div>
          <span className="text-white font-bold text-lg">{accuracy}%</span> Accuracy
        </div>
        <div>
          <span className="text-white font-bold text-lg">{Math.max(totalTime - Math.floor(elapsedTime), 0)}s</span> Time
        </div>
        <div>
          <span className="text-white font-bold text-lg">{totalCharsTyped}</span> Chars
        </div>
      </div>

      {/* End overlay */}
      {isFinished && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">Test Finished!</h2>
          <p className="text-gray-300 mb-6">
            <span className="text-white font-semibold">{wpm}</span> WPM · <span className="text-white font-semibold">{accuracy}%</span> Accuracy · <span className="text-white font-semibold">{totalCharsTyped}</span> Chars
          </p>
          <button
            onClick={restartTest}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-lg transition"
          >
            Restart
          </button>
        </div>
      )}

      {/* Caret animation */}
      <style>
        {`
          @keyframes blink {
            0%, 50%, 100% { opacity: 1; }
            25%, 75% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 1s step-start infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Typing;
