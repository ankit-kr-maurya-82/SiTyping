import React from "react";

export default function Timer({ timeLeft }) {
  return (
    <div className="text-gray-400 font-semibold text-lg">
      Time: <span className="text-yellow-400">{timeLeft}s</span>
    </div>
  );
}
