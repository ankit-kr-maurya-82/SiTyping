import React from "react";

export default function Stats({ wpm, accuracy }) {
  return (
    <div className="flex gap-4 text-gray-400 font-semibold text-lg">
      <span>WPM: <span className="text-blue-400">{wpm}</span></span>
      <span>Accuracy: <span className="text-green-400">{accuracy}%</span></span>
    </div>
  );
}
