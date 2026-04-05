import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-auto w-full border-t border-white/5 bg-[#0e0e0e] py-6 text-gray-400">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-4 px-4 text-center sm:px-6 md:flex-row md:justify-between md:text-left lg:px-8">
        {/* Branding */}
        <div className="text-xl font-bold text-white">
          SiTyping
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link to="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-400 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-yellow-400 transition">
            Contact
          </Link>
          <Link to="/privacy" className="hover:text-yellow-400 transition">
            Privacy
          </Link>
        </div>

        <div className="text-sm text-gray-500">
          Built for steady typing practice and transparent site policies.
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} SiTyping. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
