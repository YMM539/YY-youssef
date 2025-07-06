"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full py-6 px-8 sm:px-16 bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center gap-2">
          <div className="relative w-10 h-10 bg-blue-600 rounded-lg overflow-hidden flex items-center justify-center">
            <span className="text-white font-bold text-xl">YY</span>
          </div>
          <h1 className="text-xl font-bold text-white">Youssef</h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={
              pathname === "/"
                ? "text-blue-400 font-medium underline"
                : "text-gray-300 hover:text-blue-400 transition-colors"
            }
          >
            Home
          </Link>
          <Link
            href="/services"
            className={
              pathname === "/services"
                ? "text-blue-400 font-medium underline"
                : "text-gray-300 hover:text-blue-400 transition-colors"
            }
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            className={
              pathname === "/portfolio"
                ? "text-blue-400 font-medium underline"
                : "text-gray-300 hover:text-blue-400 transition-colors"
            }
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className={
              pathname === "/contact"
                ? "text-blue-400 font-medium underline"
                : "text-gray-300 hover:text-blue-400 transition-colors"
            }
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden mt-4 py-6 px-4 bg-gray-800/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-700 absolute left-4 right-4 z-50"
        >
          <nav className="flex flex-col gap-5">
            <Link
              href="/"
              className={
                pathname === "/"
                  ? "text-blue-400 font-medium flex items-center px-4 py-2 rounded-lg bg-gray-700/50"
                  : "text-gray-300 hover:text-blue-400 flex items-center px-4 py-2 rounded-lg hover:bg-gray-700/50 transition-all"
              }
            >
              <span className="mr-2">🏠</span> Home
            </Link>
            <Link
              href="/services"
              className={
                pathname === "/services"
                  ? "text-blue-400 font-medium flex items-center px-4 py-2 rounded-lg bg-gray-700/50"
                  : "text-gray-300 hover:text-blue-400 flex items-center px-4 py-2 rounded-lg hover:bg-gray-700/50 transition-all"
              }
            >
              <span className="mr-2">🛠️</span> Services
            </Link>
            <Link
              href="/portfolio"
              className={
                pathname === "/portfolio"
                  ? "text-blue-400 font-medium flex items-center px-4 py-2 rounded-lg bg-gray-700/50"
                  : "text-gray-300 hover:text-blue-400 flex items-center px-4 py-2 rounded-lg hover:bg-gray-700/50 transition-all"
              }
            >
              <span className="mr-2">💼</span> Portfolio
            </Link>
            <Link
              href="/contact"
              className={
                pathname === "/contact"
                  ? "text-blue-400 font-medium flex items-center px-4 py-2 rounded-lg bg-gray-700/50"
                  : "text-gray-300 hover:text-blue-400 flex items-center px-4 py-2 rounded-lg hover:bg-gray-700/50 transition-all"
              }
            >
              <span className="mr-2">✉️</span> Contact
            </Link>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
