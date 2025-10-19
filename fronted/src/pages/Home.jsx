import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-[80vh] text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1 className="text-5xl font-bold mb-6 text-blue-400">Si Typing</h1>
      <p className="text-lg mb-8 text-gray-300">
        Test your speed, improve your accuracy, and compete with others!
      </p>
      <Link
        to="/test"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition"
      >
        Start Typing Test
      </Link>
    </motion.div>
  );
}
