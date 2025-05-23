import React from "react";
import { FaInstagram, FaTelegramPlane, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#0a0a0f] text-center text-white pt-20 sm:pt-24 md:pt-32 pb-6 sm:pb-8 overflow-hidden px-4">
      {/* Gradient glow connector from above */}
      <div className="absolute top-0 left-0 w-full h-16 sm:h-20 md:h-24 bg-gradient-to-t from-[#1c002c] to-transparent z-0" />

      {/* Footer Content */}
      <div className="relative z-10">
        <h2 className="text-xs sm:text-sm text-gray-300 font-semibold tracking-wider mb-4 sm:mb-6">
          JOIN OUR SOCIAL GROUP
        </h2>

        <div className="flex justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <a
            href="https://www.instagram.com/tronadoofficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1a1a2e] hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 border border-pink-500 rounded-md p-2 sm:p-3 transition shadow-md hover:scale-105"
          >
            <FaInstagram size={16} className="sm:w-5 sm:h-5" />
          </a>
          <a
            href="https://t.me/tronadoofficialgroup"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1a1a2e] hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 border border-purple-500 rounded-md p-2 sm:p-3 transition shadow-md hover:scale-105"
          >
            <FaTelegramPlane size={16} className="sm:w-5 sm:h-5" />
          </a>
          <a
            href="https://www.linkedin.com/company/tronadotoken/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1a1a2e] hover:bg-gradient-to-r hover:from-indigo-500 hover:to-cyan-500 border border-indigo-500 rounded-md p-2 sm:p-3 transition shadow-md hover:scale-105"
          >
            <FaLinkedinIn size={16} className="sm:w-5 sm:h-5" />
          </a>
          <a
            href="https://x.com/TRDOtoken"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1a1a2e] hover:bg-gradient-to-r hover:from-blue-500 hover:to-sky-400 border border-blue-500 rounded-md p-2 sm:p-3 transition shadow-md hover:scale-105"
          >
            <FaTwitter size={16} className="sm:w-5 sm:h-5" />
          </a>
        </div>

        <p className="text-xs sm:text-sm text-gray-500">
          Copyright 2025 <span className="text-purple-400">Coinpay</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
