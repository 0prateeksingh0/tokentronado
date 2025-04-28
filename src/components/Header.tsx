// src/components/Header.tsx
import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

const Header: React.FC = () => {
  // track which section is active
  const [active, setActive] = useState<
    "home" | "about" | "features" | "roadmap"
  >("home");

  // Function to check which section is currently in view
  const checkVisibleSection = () => {
    const aboutSection = document.getElementById("about");
    const featuresSection = document.getElementById("features");
    const roadmapSection = document.getElementById("roadmap");
    
    // Get the current scroll position
    const scrollPosition = window.scrollY + window.innerHeight / 3;
    
    // Check if we're in a specific section
    if (roadmapSection && 
        scrollPosition >= roadmapSection.offsetTop && 
        scrollPosition < roadmapSection.offsetTop + roadmapSection.offsetHeight) {
      return "roadmap";
    } else if (featuresSection && 
        scrollPosition >= featuresSection.offsetTop && 
        scrollPosition < featuresSection.offsetTop + featuresSection.offsetHeight) {
      return "features";
    } else if (aboutSection && 
        scrollPosition >= aboutSection.offsetTop && 
        scrollPosition < aboutSection.offsetTop + aboutSection.offsetHeight) {
      return "about";
    } else {
      return "home";
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      setActive(checkVisibleSection());
    };
    
    // Check initially and add scroll listener
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (section: typeof active) => {
    if (section === "home") {
      // scroll to very top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // scroll to named section
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-[#0a0a0f] px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      {/* Logo as image */}
      <button
        onClick={() => handleNavClick("home")}
        className={`cursor-pointer ${active === "home" ? "" : "opacity-70 hover:opacity-100"}`}
      >
        <img src="/logo.png" alt="Tronado Logo" className="h-10 w-auto" />
      </button>

      {/* Navigation */}
      <nav className="flex space-x-10 text-sm font-semibold tracking-wide">
        <button
          onClick={() => handleNavClick("home")}
          className={`${
            active === "home"
              ? "text-pink-500"
              : "text-gray-300 hover:text-white"
          }`}
        >
          HOME
        </button>
        <button
          onClick={() => handleNavClick("about")}
          className={`${
            active === "about"
              ? "text-pink-500"
              : "text-gray-300 hover:text-pink-500"
          }`}
        >
          ABOUT US
        </button>
        <button
          onClick={() => handleNavClick("features")}
          className={`${
            active === "features"
              ? "text-pink-500"
              : "text-gray-300 hover:text-pink-500"
          }`}
        >
          FEATURES
        </button>
        <button
          onClick={() => handleNavClick("roadmap")}
          className={`${
            active === "roadmap"
              ? "text-pink-500"
              : "text-gray-300 hover:text-pink-500"
          }`}
        >
          ROADMAP
        </button>
      </nav>

      {/* Whitepaper Button */}
      <a
        href="/pdf/Tronado White Paper.pdf"
        download
        className="
          flex items-center gap-2 px-4 py-2 rounded-md border border-pink-500
          bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium
          shadow-md hover:shadow-pink-500/40 hover:scale-105 transition-all duration-300
        "
      >
        <FaUser />
        <span>Whitepaper</span>
      </a>
    </header>
  );
};

export default Header;
