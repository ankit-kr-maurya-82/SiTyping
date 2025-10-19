import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Home, Terminal, Info } from "lucide-react";
// import { useTheme } from "../context/ThemeContext"; // optional

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // const { theme, toggleTheme } = useTheme();

  const links = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    // { name: "Type", path: "/type", icon: <Terminal size={18} /> },
    { name: "About", path: "/about", icon: <Info size={18} /> },
  ];

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-[#0e0e0e] text-white relative z-50 shadow-md">
      {/* Logo */}
      <div className="text-2xl font-extrabold tracking-wide">
        <span className="text-yellow-400">Si</span>Typing
      </div>

      {/* Desktop Links */}
      <nav className="hidden md:flex space-x-6 items-center">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-1 rounded-md transition-all duration-200 ${
                isActive
                  ? "bg-yellow-500/10 text-yellow-400"
                  : "hover:bg-gray-800 text-gray-300"
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
        className="md:hidden p-2 text-gray-300 hover:text-yellow-400 transition"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 w-full bg-gray-900 flex flex-col items-center md:hidden border-t border-gray-800"
          >
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-3 w-full justify-center transition ${
                    isActive
                      ? "bg-yellow-500/10 text-yellow-400"
                      : "hover:bg-gray-800 text-gray-300"
                  }`
                }
              >
                {link.icon}
                {link.name}
              </NavLink>
            ))}

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
