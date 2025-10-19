import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Home, Trophy, User, Terminal } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const links = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    { name: "Test", path: "/test", icon: <Terminal size={18} /> },
    // { name: "Leaderboard", path: "/leaderboard", icon: <Trophy size={18} /> },
    // { name: "Profile", path: "/profile", icon: <User size={18} /> },
  ];

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
      <div className="text-2xl font-bold">SiTyping</div>

      {/* Desktop Links */}
      <nav className="hidden md:flex space-x-6 items-center">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-800 transition ${
                isActive ? "bg-gray-800" : ""
              }`
            }
          >
            {link.icon}
            {link.name}
          </NavLink>
        ))}

        {/* Theme Toggle */}
        {/* <button onClick={toggleTheme} className="p-2 rounded hover:bg-gray-800">
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button> */}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 w-full bg-gray-900 flex flex-col items-center md:hidden"
          >
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-1 px-4 py-2 w-full justify-center hover:bg-gray-800 transition ${
                    isActive ? "bg-gray-800" : ""
                  }`
                }
              >
                {link.icon}
                {link.name}
              </NavLink>
            ))}

            {/* <button
              onClick={toggleTheme}
              className="p-2 my-2 rounded hover:bg-gray-800"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button> */}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
