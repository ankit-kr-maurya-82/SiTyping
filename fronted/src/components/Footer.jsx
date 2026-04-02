import React from "react";
import { Link } from "react-router-dom";
import { Twitter, Github, Linkedin, Instagram } from "lucide-react";

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
        </div>

        {/* Social Icons */}
        <div className="flex min-h-5 gap-4">
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
