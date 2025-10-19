import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-[80vh] text-center px-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-8xl font-bold text-blue-500 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-200 mb-2">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-400 mb-8 max-w-md">
        The page you’re looking for doesn’t exist or might have been moved.
      </p>

      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-semibold transition"
      >
        ⌨️ Back to Home
      </Link>

      <motion.div
        className="mt-10 text-5xl"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        💨
      </motion.div>
    </motion.div>
  );
}
