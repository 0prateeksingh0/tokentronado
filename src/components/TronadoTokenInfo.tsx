import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { GiTechnoHeart } from "react-icons/gi";
import { BsLightningCharge } from "react-icons/bs";

const TronadoHowItWorks: React.FC = () => {
  return (
    <section className="bg-[#0a0a23] text-white py-24 px-6 md:px-16">
      <h2 className="text-4xl font-extrabold text-center text-[#c4c1e0] mb-16">
        HOW TRONADO WORKS?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side */}
        <div className="bg-gradient-to-br from-[#151534] to-[#1b0f23] rounded-2xl border border-[#2f2f53] p-8 shadow-md hover:shadow-[0_0_20px_#a855f7] transition-all duration-300">
          <div className="flex items-center gap-4 mb-6">
            <GiTechnoHeart className="text-orange-400 text-3xl" />
            <h3 className="text-2xl font-bold text-white">TRDO TOKEN</h3>
          </div>

          {[
            {
              title: "Utility Token",
              desc: [
                "TRDO is a utility token used within a decentralized financial (DeFi) ecosystem, offering seamless payment solutions for services like mobile recharges, utility bill payments, and travel bookings.",
                "It operates on the Polygon (Matic) blockchain, which provides scalability and low transaction fees, ensuring efficiency and security."
              ]
            },
            {
              title: "Fixed Supply and Token Allocation",
              desc: [
                "TRDO has a capped supply of 250 million tokens, with 200 million locked for long-term sustainability and only 50 million in circulation.",
                "The token allocation includes development funds, community rewards, and future funding, ensuring a well-distributed flow of tokens to support different aspects of the ecosystem."
              ]
            },
            {
              title: "Burn and Buyback Mechanisms",
              desc: [
                "TRDO implements transaction fee burns and periodic buybacks to reduce supply and support price stability. This creates scarcity, which increases token value.",
                "Additionally, vesting schedules prevent large token dumps, ensuring long-term commitment and avoiding sudden price drops."
              ]
            }
          ].map((item, idx) => (
            <div key={idx} className="mb-6">
              <div className="flex items-start gap-3 mb-2">
                <FaCheckCircle className="text-purple-400 mt-1" />
                <h4 className="font-semibold text-white text-md">{item.title}</h4>
              </div>
              {item.desc.map((p, i) => (
                <p key={i} className="text-sm text-[#b8b6d1] ml-6 mb-1">{p}</p>
              ))}
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div className="bg-gradient-to-br from-[#151534] to-[#1b0f23] rounded-2xl border border-[#2f2f53] p-8 shadow-md hover:shadow-[0_0_20px_#a855f7] transition-all duration-300">
          <div className="flex items-center gap-4 mb-6">
            <BsLightningCharge className="text-pink-500 text-2xl" />
            <h3 className="text-2xl font-bold text-white">Factors Driving Price Appreciation</h3>
          </div>

          {[
            {
              title: "Futuristic Products and Expanded Use Cases",
              desc: [
                "E-Commerce Integration: TRDO enables secure, fast, low-cost cross-border payments within e-commerce platforms, expanding its utility and market demand.",
                "International Payments: TRDO can capture a larger share of the global remittance market, driving token adoption."
              ]
            },
            {
              title: "Evolving DeFi Landscape",
              desc: [
                "As DeFi expands, TRDO’s role in staking, lending, and governance voting increases its utility and drives demand."
              ]
            },
            {
              title: "Governance and CSR Initiatives",
              desc: [
                "TRDO holders engage in decentralized governance and CSR initiatives, increasing community value and long-term engagement."
              ]
            }
          ].map((item, idx) => (
            <div key={idx} className="mb-6">
              <div className="flex items-start gap-3 mb-2">
                <FaCheckCircle className="text-purple-400 mt-1" />
                <h4 className="font-semibold text-white text-md">{item.title}</h4>
              </div>
              {item.desc.map((p, i) => (
                <p key={i} className="text-sm text-[#b8b6d1] ml-6 mb-1">{p}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TronadoHowItWorks;
