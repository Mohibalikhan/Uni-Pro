'use client'
import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-blue-950 via-blue-800 to-cyan-600 text-white py-10 mt-16 shadow-inner overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)] opacity-20"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Main Footer Text */}
        <p className="text-sm sm:text-base font-medium">
          &copy; {new Date().getFullYear()} <span className="font-semibold">University of Sindh</span>. All rights reserved.
        </p>

        {/* Developer Credit */}
        <p className="text-xs sm:text-sm text-gray-200 mt-2 tracking-wide">
          Designed & Developed by{" "}
          <span className="font-semibold text-cyan-300 hover:text-white transition">
            Mahnoor Jawaid
          </span>
        </p>

        {/* 🌐 Social Media Links */}
        <div className="flex justify-center items-center gap-8 mt-5">
          <motion.a
            href="https://www.linkedin.com/in/mahnoor-jawaid-85ba6a384/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="text-white text-2xl hover:text-cyan-300 transition-all"
          >
            <FaLinkedin />
          </motion.a>


        </div>

        {/* Glow Line */}
        <div className="mt-6 mx-auto w-32 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-70"></div>
      </div>
    </footer>
  );
};

export default Footer;
