import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import AdBanner from "../components/AdBanner";

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
  "Amazingly few discotheques provide jukeboxes.",
];

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
  const [inputValue, setInputValue] = useState("");

  const totalTime = 30;
  const textContainerRef = useRef(null);
  const caretRef = useRef(null);
  const inputRef = useRef(null);

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

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (isFinished) {
      inputRef.current?.blur();
    }
  }, [isFinished]);

  const correctWords = typedWords.filter((w, i) => w === text[i]).length;
  const accuracy =
    typedWords.length === 0
      ? 100
      : Math.round((correctWords / typedWords.length) * 100);
  const wpm = Math.round((correctWords / (elapsedTime / 60)) || 0);
  const totalCharsTyped = typedWords.join("").length + currentWord.length;

  const focusInput = () => {
    if (!isFinished) {
      inputRef.current?.focus();
    }
  };

  const restartTest = () => {
    setText(getRandomSentences());
    setTypedWords([]);
    setCurrentWord("");
    setCurrentIndex(0);
    setStartTime(null);
    setElapsedTime(0);
    setIsFinished(false);
    setInputValue("");

    requestAnimationFrame(() => {
      inputRef.current?.focus();
    });
  };

  const handleInputChange = (e) => {
    if (isFinished) return;

    const nextValue = e.target.value.replace(/\n/g, " ");
    if (!startTime && nextValue.trim().length > 0) {
      setStartTime(Date.now());
    }

    const endsWithSpace = /\s$/.test(nextValue);
    const trimmedValue = nextValue.trim();
    const words = trimmedValue ? trimmedValue.split(/\s+/) : [];
    const nextTypedWords = endsWithSpace ? words : words.slice(0, -1);
    const nextCurrentWord = endsWithSpace ? "" : words[words.length - 1] || "";
    const nextIndex = nextTypedWords.length;

    setInputValue(nextValue);
    setTypedWords(nextTypedWords);
    setCurrentWord(nextCurrentWord);
    setCurrentIndex(nextIndex);

    if (nextIndex >= text.length) {
      setIsFinished(true);
      if (startTime) {
        setElapsedTime((Date.now() - startTime) / 1000);
      }
    }
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

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

  const renderWord = (word, typed) =>
    word.split("").map((letter, i) => {
      const typedChar = typed[i] || "";
      let color = "";
      if (typedChar) {
        color = typedChar === letter ? "text-green-500" : "text-red-500";
      }

      return (
        <span key={i} className={`inline-block char-${i} ${color}`}>
          {letter}
        </span>
      );
    });

  return (
    <section className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-[#0e0e0e] px-4 py-8 text-gray-200 shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:px-6 sm:py-10 lg:px-10 lg:py-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-yellow-500/10 to-transparent" />
      <div className="relative mx-auto flex min-h-[65svh] w-full max-w-5xl flex-col items-center justify-center">
        <h1 className="mb-4 select-none text-center text-2xl font-semibold text-gray-300 sm:text-3xl lg:text-4xl">
          Si Typing
        </h1>
        <p className="mb-8 max-w-2xl text-center text-sm leading-6 text-gray-500 sm:text-base">
          Tap the text area and start typing. Mobile keyboards are supported now.
        </p>

        <div
          className="absolute left-0 top-0 h-1 rounded-full bg-yellow-500"
          style={{ width: `${(elapsedTime / totalTime) * 100}%` }}
        />

        <div
          ref={textContainerRef}
          onClick={focusInput}
          className="relative w-full cursor-text rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-5 text-center text-lg leading-8 select-none sm:px-6 sm:py-6 sm:text-xl sm:leading-9 lg:px-8 lg:text-2xl lg:leading-10"
        >
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            autoCapitalize="none"
            autoCorrect="off"
            autoComplete="off"
            spellCheck={false}
            inputMode="text"
            className="absolute inset-0 h-full w-full opacity-0"
            aria-label="Typing input"
          />

          <div className="flex flex-wrap justify-center">
            {text.map((word, i) => {
              const isDone = i < currentIndex;
              const isActive = i === currentIndex;

              return (
                <span key={i} className={`word-${i} relative m-1`}>
                  {isDone
                    ? renderWord(word, typedWords[i] || "")
                    : isActive
                      ? renderWord(word, currentWord)
                      : <span className="text-gray-500">{word}</span>}
                </span>
              );
            })}
          </div>

          {!isFinished && (
            <motion.span
              ref={caretRef}
              className="pointer-events-none absolute h-[1em] w-[2px] animate-blink bg-yellow-400"
              style={{ top: 0, left: 0 }}
              layout
            />
          )}
        </div>

        <div className="mt-8 grid w-full max-w-3xl grid-cols-2 gap-3 text-sm text-gray-400 sm:mt-10 sm:grid-cols-4">
          <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-center">
            <span className="block text-lg font-bold text-white sm:text-xl">
              {wpm}
            </span>
            WPM
          </div>
          <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-center">
            <span className="block text-lg font-bold text-white sm:text-xl">
              {accuracy}%
            </span>
            Accuracy
          </div>
          <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-center">
            <span className="block text-lg font-bold text-white sm:text-xl">
              {Math.max(totalTime - Math.floor(elapsedTime), 0)}s
            </span>
            Time
          </div>
          <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-center">
            <span className="block text-lg font-bold text-white sm:text-xl">
              {totalCharsTyped}
            </span>
            Chars
          </div>
        </div>

        <div className="mt-6 w-full max-w-3xl">
          <AdBanner />
        </div>

        {isFinished && (
          <div className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl bg-black/70 p-4 text-center backdrop-blur-sm">
            <h2 className="mb-4 text-3xl font-bold text-yellow-400 sm:text-4xl">
              Test Finished!
            </h2>
            <p className="mb-6 max-w-md text-sm leading-6 text-gray-300 sm:text-base">
              <span className="font-semibold text-white">{wpm}</span> WPM |{" "}
              <span className="font-semibold text-white">{accuracy}%</span>{" "}
              Accuracy |{" "}
              <span className="font-semibold text-white">{totalCharsTyped}</span>{" "}
              Chars
            </p>
            <button
              onClick={restartTest}
              className="rounded-lg bg-yellow-500 px-6 py-2 font-semibold text-black transition hover:bg-yellow-600"
            >
              Restart
            </button>
          </div>
        )}
      </div>

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
    </section>
  );
};

export default Typing;
