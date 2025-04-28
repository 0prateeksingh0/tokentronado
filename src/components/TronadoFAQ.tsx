import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const TronadoFAQBox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="relative bg-[#0a0a23] text-white pt-24 pb-48 px-4 flex flex-col items-center justify-center overflow-hidden">
      <h1 className="text-5xl font-extrabold text-[#c4c1e0] mb-12 z-10">FAQ</h1>

      <div className="relative flex max-w-4xl w-full border border-[#3f3f7f] rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_#a855f7] hover:border-purple-500 z-10">
        <div className="flex-1 p-6 bg-[#0d0d26] text-white">
          <button onClick={toggleFAQ} className="w-full text-left group">
            <h2 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition">
              What is Tronado contract address?
            </h2>
            {isOpen && (
              <p className="text-[#b8b6d1] break-words mt-2 transition-opacity duration-500 opacity-100">
                0xC396b3198b5Bd6OCF2cDaB9b34F646A58C029998
              </p>
            )}
          </button>
        </div>

        <button
          onClick={toggleFAQ}
          className="w-16 flex items-center justify-center bg-[#0d0d26] border-l border-[#3f3f7f] text-purple-400 transition-colors duration-300 hover:text-fuchsia-400"
        >
          {isOpen ? <FaChevronUp size={18} /> : <FaChevronDown size={18} />}
        </button>
      </div>

      {/* Footer Glow Behind Image */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-purple-800/40 to-transparent z-0" />
      <div className="absolute bottom-0 left-0 w-full h-16 bg-[#0a0a23] z-10" />

      {/* Mountain Shape Overlay (on top of gradient) */}
      <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none">
        <img
          src="/mountain-footer-shape.svg"
          alt="Footer Silhouette"
          className="w-full object-cover"
        />
      </div>
    </section>
  );
};

export default TronadoFAQBox;
