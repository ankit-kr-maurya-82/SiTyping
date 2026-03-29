import React from "react";
import { Link } from "react-router-dom";
import { Twitter, Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0e0e0e] text-gray-400 py-6  bottom-30 relative mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Branding */}
        <div className="text-white font-bold text-xl mb-4 md:mb-0">
          SiTyping
        </div>

        {/* Links */}
        <div className="flex gap-4 mb-4 md:mb-0">
          <Link to="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-400 transition">
            About
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mb-4 md:mb-0">
          {/* <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Twitter size={20} />
          </a> */}
          {/* <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
          >
            <Github size={20} />
          </a> */}
          {/* <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <Linkedin size={20} />
          </a> */}
          {/* <a
            href="https://www.instagram.com/ak_maurya_50/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <Instagram size={20} />
          </a> */}
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
