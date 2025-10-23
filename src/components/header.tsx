'use client'
import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-blue-800 to-cyan-500 text-white py-12 shadow-2xl">
      {/* Animated Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2),_transparent_70%)] animate-pulse opacity-60"></div>

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-950 opacity-50"></div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center gap-5 px-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* University Logo */}
        <motion.img
          src="/image.png" // 👈 replace with actual path
          alt="University Logo"
          className="w-28 h-28 sm:w-36 sm:h-36 object-cover rounded-full border-4 border-white shadow-[0_0_25px_rgba(255,255,255,0.4)]"
          whileHover={{ scale: 1.05, rotate: 3 }}
          transition={{ duration: 0.4 }}
        />

        {/* University Title */}
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-wide drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)] bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 to-white">
          University of Sindh
        </h1>

        {/* Tagline / Subtitle */}
        <p className="text-lg sm:text-2xl text-gray-100 font-medium tracking-wide">
          🎓 Smart CPN Calculator
        </p>

        {/* Decorative Line */}
        <div className="mt-3 h-1 w-32 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.6)]"></div>
      </motion.div>

      {/* Floating Decorative Elements */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-400 opacity-10 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-300 opacity-10 blur-3xl rounded-full animate-pulse delay-500"></div>
    </header>
  );
};

export default Header;
