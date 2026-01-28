import React from "react";
import { motion } from "framer-motion";

export default function Timer({ timeLeft }) {
  const getColor = () => {
    if (timeLeft <= 5) return "text-red-500";
    if (timeLeft <= 10) return "text-yellow-400";
    return "text-green-400";
  };

  return (
    <div className="text-gray-400 font-semibold text-lg flex items-center">
      {" "}
      <motion.span
        key={timeLeft} // triggers animation on change
        className={`${getColor()} ml-1`}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {timeLeft}
      </motion.span>
    </div>
  );
}
