import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Mock leaderboard data — replace later with API or Firebase
const mockData = [
  { id: 1, name: "Ankit", wpm: 98, accuracy: 95, date: "2025-10-19" },
  { id: 2, name: "Riya", wpm: 92, accuracy: 90, date: "2025-10-18" },
  { id: 3, name: "Aarav", wpm: 88, accuracy: 94, date: "2025-10-18" },
  { id: 4, name: "Neha", wpm: 82, accuracy: 89, date: "2025-10-17" },
  { id: 5, name: "Vikram", wpm: 75, accuracy: 87, date: "2025-10-17" },
];

export default function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    // Simulate fetching data from backend
    setTimeout(() => {
      setLeaders(mockData);
    }, 500);
  }, []);

  return (
    <motion.div
      className="flex flex-col items-center py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="text-4xl font-bold mb-8 text-blue-400">🏆 Leaderboard</h1>

      <div className="w-[90%] md:w-[70%] bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-900 text-gray-300">
            <tr>
              <th className="p-4">Rank</th>
              <th className="p-4">Player</th>
              <th className="p-4">WPM</th>
              <th className="p-4">Accuracy</th>
              <th className="p-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {leaders.length > 0 ? (
              leaders.map((player, index) => (
                <motion.tr
                  key={player.id}
                  className={`border-b border-gray-700 hover:bg-gray-700 transition ${
                    index === 0
                      ? "bg-yellow-900/30 text-yellow-300"
                      : index === 1
                      ? "bg-gray-700/40 text-gray-200"
                      : index === 2
                      ? "bg-orange-900/30 text-orange-300"
                      : ""
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <td className="p-4 font-bold">#{index + 1}</td>
                  <td className="p-4">{player.name}</td>
                  <td className="p-4 text-blue-400">{player.wpm}</td>
                  <td className="p-4 text-green-400">{player.accuracy}%</td>
                  <td className="p-4 text-gray-400">{player.date}</td>
                </motion.tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="p-6 text-center text-gray-400 italic"
                >
                  Loading leaderboard...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
