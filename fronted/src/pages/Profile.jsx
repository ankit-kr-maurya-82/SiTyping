import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState({
    name: "Ankit Maurya",
    avatar: "https://api.dicebear.com/9.x/thumbs/svg?seed=ankit",
    joined: "June 2024",
    bestWPM: 105,
    bestAccuracy: 98,
  });

  const [tests, setTests] = useState([]);

  useEffect(() => {
    const mockTests = [
      { id: 1, date: "2025-10-19", wpm: 98, accuracy: 96 },
      { id: 2, date: "2025-10-18", wpm: 92, accuracy: 94 },
      { id: 3, date: "2025-10-17", wpm: 87, accuracy: 91 },
    ];
    setTests(mockTests);
  }, []);

  const averageWPM =
    tests.length > 0
      ? Math.round(tests.reduce((a, b) => a + b.wpm, 0) / tests.length)
      : 0;

  const averageAccuracy =
    tests.length > 0
      ? Math.round(tests.reduce((a, b) => a + b.accuracy, 0) / tests.length)
      : 0;

  return (
    <motion.div
      className="flex flex-col items-center py-10 px-4 bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Profile Header Card */}
      <div className="relative bg-gray-800 rounded-3xl shadow-2xl p-8 w-full md:w-[60%] mb-10 text-center overflow-hidden">
        {/* Decorative Gradient Circle */}
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-blue-500/30 rounded-full filter blur-3xl animate-pulse"></div>

        <img
          src={user.avatar}
          alt="User Avatar"
          className="w-32 h-32 mx-auto rounded-full border-4 border-blue-400 mb-4 z-10 relative"
        />
        <h1 className="text-3xl font-bold text-white z-10 relative">{user.name}</h1>
        <p className="text-gray-300 mt-1 z-10 relative">Joined {user.joined}</p>

        <div className="flex justify-around mt-6 gap-6 z-10 relative">
          <div className="bg-gray-700 rounded-xl p-4 w-28 hover:scale-105 transition-transform">
            <p className="text-2xl font-bold text-yellow-400">{user.bestWPM}</p>
            <p className="text-sm text-gray-300">Best WPM</p>
          </div>
          <div className="bg-gray-700 rounded-xl p-4 w-28 hover:scale-105 transition-transform">
            <p className="text-2xl font-bold text-green-400">{user.bestAccuracy}%</p>
            <p className="text-sm text-gray-300">Best Accuracy</p>
          </div>
        </div>
      </div>

      {/* Average Stats */}
      <motion.div
        className="bg-gray-800 rounded-2xl shadow-lg p-6 w-full md:w-[60%] mb-8 flex justify-around"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex flex-col items-center hover:scale-105 transition-transform">
          <p className="text-xl font-bold text-blue-400">{averageWPM}</p>
          <p className="text-gray-300 text-sm">Avg WPM</p>
        </div>
        <div className="flex flex-col items-center hover:scale-105 transition-transform">
          <p className="text-xl font-bold text-green-400">{averageAccuracy}%</p>
          <p className="text-gray-300 text-sm">Avg Accuracy</p>
        </div>
      </motion.div>

      {/* Recent Tests */}
      <motion.div
        className="bg-gray-800 rounded-2xl shadow-lg p-6 w-full md:w-[60%] overflow-x-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-xl font-semibold text-blue-400 mb-4 text-center">🧾 Recent Tests</h2>
        {tests.length > 0 ? (
          <table className="w-full text-left border-collapse">
            <thead className="text-gray-300 border-b border-gray-700">
              <tr>
                <th className="p-2">Date</th>
                <th className="p-2">WPM</th>
                <th className="p-2">Accuracy</th>
              </tr>
            </thead>
            <tbody>
              {tests.map((t) => (
                <tr key={t.id} className="border-b border-gray-700 hover:bg-gray-700/50 transition">
                  <td className="p-2 text-gray-300">{t.date}</td>
                  <td className="p-2 text-blue-400">{t.wpm}</td>
                  <td className="p-2 text-green-400">{t.accuracy}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-400 italic text-center">No tests yet — take your first typing test!</p>
        )}
      </motion.div>
    </motion.div>
  );
}
