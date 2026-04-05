import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <motion.div
      className="flex h-[80vh] flex-col items-center justify-center px-6 text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Seo
        title="Page Not Found"
        description="The page you requested could not be found on SiTyping."
        path="/404"
      />
      <h1 className="mb-4 text-8xl font-bold text-blue-500">404</h1>
      <h2 className="mb-2 text-3xl font-semibold text-gray-200">
        Oops! Page Not Found
      </h2>
      <p className="mb-8 max-w-md text-gray-400">
        The page you&apos;re looking for doesn&apos;t exist or might have been
        moved.
      </p>

      <Link
        to="/"
        className="rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition hover:bg-blue-700"
      >
        Back to Home
      </Link>
    </motion.div>
  );
}
