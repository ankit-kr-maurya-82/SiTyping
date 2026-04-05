import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Info, Crown, Mail, Shield } from "lucide-react";
// import { useTheme } from "../context/ThemeContext"; // optional

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // const { theme, toggleTheme } = useTheme();

  const links = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    // { name: "Type", path: "/type", icon: <Terminal size={18} /> },
    { name: "About", path: "/about", icon: <Info size={18} /> },
    { name: "Contact", path: "/contact", icon: <Mail size={18} /> },
    { name: "Privacy", path: "/privacy", icon: <Shield size={18} /> },
    { name: "Pro", path: "/pro", icon: <Crown size={18} /> },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0e0e0e]/95 text-white shadow-md backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="shrink-0 text-xl font-extrabold tracking-wide sm:text-2xl">
          <span className="text-yellow-400">Si</span>Typing
        </div>

        {/* Desktop Links */}
        <nav className="hidden items-center space-x-3 md:flex lg:space-x-4">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-all duration-200 ${
                  isActive
                    ? "bg-yellow-500/10 text-yellow-400"
                    : "text-gray-300 hover:bg-gray-800"
                }`
              }
            >
              {link.icon}
              {link.name}
            </NavLink>
          ))}

          {/* Theme Toggle (optional) */}
          {/* 
          <button onClick={toggleTheme} className="p-2 rounded hover:bg-gray-800">
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button> 
          */}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="rounded-md p-2 text-gray-300 transition hover:text-yellow-400 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-full w-full border-t border-gray-800 bg-gray-900/95 md:hidden"
          >
            <div className="mx-auto flex w-full max-w-7xl flex-col px-4 py-2 sm:px-6">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex w-full items-center justify-center gap-2 rounded-md px-4 py-3 text-base transition ${
                      isActive
                        ? "bg-yellow-500/10 text-yellow-400"
                        : "text-gray-300 hover:bg-gray-800"
                    }`
                  }
                >
                  {link.icon}
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Optional theme toggle */}
            {/* 
            <button
              onClick={toggleTheme}
              className="p-2 my-3 rounded hover:bg-gray-800 text-gray-300"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button> 
            */}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
