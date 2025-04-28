import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls past Partners section
  const toggleVisibility = () => {
    const partnersSection = document.getElementById("partners");
    if (partnersSection) {
      const partnersSectionPosition = partnersSection.getBoundingClientRect().bottom;
      // If the bottom of Partners section is above the viewport, show the button
      setIsVisible(partnersSectionPosition < 0);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="bg-[#1a1a2e] hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 
                  border border-pink-500 rounded-full p-3 shadow-lg hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]
                  transition-all duration-300 hover:scale-110"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-pink-500 hover:text-white" size={20} />
      </button>
    </div>
  );
};

export default ScrollToTop;
