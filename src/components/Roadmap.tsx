import React from "react";

const roadmap = [
  {
    items: [
      { quarter: "Q4 - 2020", title: "Community Building" },
      { quarter: "Q2 - 2021", title: "Token Distribution" },
      { quarter: "Q3 - 2021", title: "Exchange Listing" },
      { quarter: "Q4 - 2021", title: "Launch of Utility App (Beta Version)" },
      { quarter: "Q4 - 2021", title: "Token Updation" },
    ],
  },
  {
    items: [
      { quarter: "Q2 - 2022", title: "Asian Exchange" },
      { quarter: "Q3 - 2022", title: "Utility App Product Delivery" },
      { quarter: "Q3 - 2022", title: "Token Based Gaming Platform" },
    ],
  },
  {
    items: [
      { quarter: "Q1 - 2024", title: "Community Expansion Globally" },
      { quarter: "Q2 - 2024", title: "Updation on Polygon Chain" },
      { quarter: "Q3 - 2024", title: "Crypto Application Beta Version (Indus Store)" },
    ],
  },
  {
    items: [
      { quarter: "Q1 - 2025", title: "Crypto Application Subscription on Token" },
      { quarter: "Q2 - 2025", title: "Rolling Out Formidable Model Crypto CAFE" },
      { quarter: "Q3 - 2025", title: "Blockchain Lottery" },
      { quarter: "Q1 - 2026", title: "Gadgets with Tronado Token" },
      { quarter: "Q3 - 2026", title: "Listing on 2 Global Exchanges" },
    ],
  },
];

const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="relative bg-[#0a0a23] text-white py-20 px-6 md:px-12 overflow-hidden">
      {/* Top Glow Arc */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-16 rounded-b-[40%] bg-gradient-to-b from-purple-700/50 to-transparent z-0" />

      <h2 className="text-4xl font-bold text-center text-[#c4c1e0] mb-14 relative z-10">Roadmap</h2>

      <div className="relative z-10 flex flex-wrap justify-center gap-6">
        {roadmap.map((block, index) => (
          <div
            key={index}
            className="w-full sm:w-[45%] lg:w-[22%] bg-[#0d0d26] border border-[#2e2e4d] rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_25px_#a855f7] hover:border-purple-500 hover:scale-[1.03] cursor-pointer group hover:bg-gradient-to-br hover:from-[#1f183e] hover:to-[#0c0a1a]"
          >
            {block.items.map((item, i) => (
              <div key={i} className="mb-6">
                <div className="inline-block bg-[#1d1d3c] text-purple-400 font-semibold text-sm px-4 py-2 rounded-md mb-2 transition group-hover:bg-purple-700">
                  {item.quarter}
                </div>
                <h3 className="text-base font-semibold text-[#dcd7f5] leading-snug transition group-hover:text-white">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom Glow Arc */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-16 rounded-t-[40%] bg-gradient-to-t from-purple-700/50 to-transparent z-0" />
    </section>
  );
};

export default Roadmap;
