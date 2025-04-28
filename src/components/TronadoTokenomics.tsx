import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const data = [
  { label: "Team & Founders", percentage: "15%", color: "bg-pink-500" },
  { label: "Development Fund", percentage: "20%", color: "bg-orange-500" },
  { label: "Liquidity Reserve", percentage: "10%", color: "bg-green-500" },
  { label: "Future Strategic Funding", percentage: "15%", color: "bg-sky-400" },
  { label: "Token Sale", percentage: "10%", color: "bg-yellow-400" },
  { label: "Community & Staking", percentage: "25%", color: "bg-rose-500" },
];

const TronadoTokenomics: React.FC = () => {
  return (
    <section className="bg-[#0a0a23] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-20">
      {/* Section Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-[#c4c1e0] mb-8 sm:mb-12 md:mb-16">
        Tronado Tokenomics
      </h2>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 sm:gap-12 lg:gap-16">
        
        {/* Left - Data List */}
        <div className="space-y-4 sm:space-y-6 w-full max-w-md">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 sm:gap-4 border-b border-[#2e2e4d] pb-2"
            >
              <div
                className={`w-12 sm:w-16 h-8 sm:h-10 text-white text-sm sm:text-base font-bold flex items-center justify-center rounded-md ${item.color} shadow-md hover:scale-105 transition-transform duration-200`}
              >
                {item.percentage}
              </div>
              <span className="text-base sm:text-lg font-medium">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Center - Donut Chart */}
        <div className="w-full max-w-xs md:max-w-sm my-6 sm:my-8 lg:my-0">
          <img
            src="/trdo-chart.png"
            alt="Tokenomics Donut Chart"
            className="w-full"
          />
        </div>

        {/* Right - Token Supply Info Cards */}
        <div className="space-y-4 sm:space-y-6 w-full max-w-xs">
          {/* Total Token Supply */}
          <div className="bg-[#13132e] border border-[#2e2e4d] rounded-lg p-4 sm:p-5 flex items-center gap-3 sm:gap-4">
            <div className="flex items-center justify-center bg-[#1f1f3a] p-2 sm:p-3 rounded-full cursor-pointer hover:bg-[#29294a] transition-colors duration-300">
              <img
                src="/token_supply.svg"
                alt="Token Supply Icon"
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </div>
            <div>
              <p className="text-[#aaa] text-xs sm:text-sm mb-1">Total Token Supply</p>
              <p className="text-base sm:text-lg font-bold text-white">250 Million</p>
            </div>
          </div>

          {/* Token Network */}
          <div className="bg-[#13132e] border border-[#2e2e4d] rounded-lg p-4 sm:p-5 flex items-center gap-3 sm:gap-4">
            <div className="flex items-center justify-center bg-[#1f1f3a] p-2 sm:p-3 rounded-full cursor-pointer hover:bg-[#29294a] transition-colors duration-300">
              <img
                src="/token_network.svg"
                alt="Token Network Icon"
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </div>
            <div>
              <p className="text-[#aaa] text-xs sm:text-sm mb-1">Token Network</p>
              <p className="text-base sm:text-lg font-bold text-white">Polygon (Matic)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Buy Button */}
      <div className="mt-10 sm:mt-12 md:mt-16 flex justify-center">
        <button className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 border border-purple-500 rounded-full text-white font-semibold text-base sm:text-lg bg-gradient-to-r from-fuchsia-500 via-purple-600 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 shadow-xl">
          <FaArrowLeft className="text-sm sm:text-lg" />
          Buy TRDO
          <FaArrowRight className="text-sm sm:text-lg" />
        </button>
      </div>
    </section>
  );
};

export default TronadoTokenomics;
