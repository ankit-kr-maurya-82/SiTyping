import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h1
        className="text-5xl font-bold mb-6 text-blue-400"
        whileHover={{ scale: 1.05, color: "#60A5FA" }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Si Typing
      </motion.h1>

      <p className="text-lg mb-8 text-gray-300 max-w-md">
        Test your speed, improve your accuracy, and compete with others!
      </p>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          to="/type"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition-colors"
        >
          Start Typing Test
        </Link>
      </motion.div>
    </motion.div>
  );
}
