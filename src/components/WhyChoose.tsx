import React from "react";

const WhyChooseTronado: React.FC = () => {
  return (
    <section id="features" className="bg-[#0d0b20] text-white py-20 px-6 md:px-20">
      {/* Section Heading */}
      <h2 className="text-center text-4xl font-bold text-[#d1caff] mb-16">
        Why You Choose Tronado?
      </h2>

      {/* Top Row */}
      <div className="grid md:grid-cols-3 gap-6 mb-10 items-stretch">
        {/* Left Card */}
        <div className="rounded-2xl border border-[#372d5a] p-6 bg-gradient-to-b from-[#16122e] to-[#0f0b20] cursor-pointer transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-orange-400 to-purple-500 flex items-center justify-center">
              <img
                src="/dollar.svg"
                alt="Donation Icon"
                className="w-[clamp(1.25rem,5vw,2.25rem)] h-auto pointer-events-none"
              />
            </div>
            <div>
              <h3 className="text-[1.1rem] font-semibold text-[#d1caff] mb-2">
                Donation and Charity Drives
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                TRDO tokens will be used to facilitate donations to various
                charitable organisations. By integrating smart contracts, the
                process will be transparent, ensuring that funds reach the
                intended recipients without any delay.
              </p>
            </div>
          </div>
        </div>

        {/* Center Image */}
        <div className="rounded-2xl overflow-hidden h-full cursor-default">
          <img
            src="/why-us.jpeg"
            alt="Tronado Visual"
            className="w-full h-full object-cover rounded-2xl pointer-events-none"
          />
        </div>

        {/* Right Card */}
        <div className="rounded-2xl border border-[#372d5a] p-6 bg-gradient-to-b from-[#16122e] to-[#0f0b20] cursor-pointer transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-green-400 to-purple-500 flex items-center justify-center">
              <img
                src="/bank_building.svg"
                alt="Community Icon"
                className="w-[clamp(1.25rem,5vw,2.25rem)] h-auto pointer-events-none"
              />
            </div>
            <div>
              <h3 className="text-[1.1rem] font-semibold text-[#d1caff] mb-2">
                Community Development Projects
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                TRDO will partner with local communities to fund development
                projects such as building schools, hospitals, and
                infrastructure. The decentralised nature of TRDO allows for
                direct contributions from token holders, ensuring that projects
                align with community needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Education */}
        <div className="rounded-2xl border border-[#372d5a] p-6 bg-gradient-to-b from-[#16122e] to-[#0f0b20] cursor-pointer transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-green-400 to-cyan-500 flex items-center justify-center">
              <img
                src="/scan.svg"
                alt="Education Icon"
                className="w-[clamp(1.25rem,5vw,2.25rem)] h-auto pointer-events-none"
              />
            </div>
            <div>
              <h3 className="text-[1.1rem] font-semibold text-[#d1caff] mb-2">
                Educational Investment Initiatives
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                To promote financial literacy and blockchain education, TRDO
                will fund workshops, online courses, and scholarships. These
                initiatives will empower individuals with skills needed to
                participate in the digital economy.
              </p>
            </div>
          </div>
        </div>

        {/* Environment */}
        <div className="rounded-2xl border border-[#372d5a] p-6 bg-gradient-to-b from-[#16122e] to-[#0f0b20] cursor-pointer transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-pink-500 to-violet-600 flex items-center justify-center">
              <img
                src="/pinpoint.png"
                alt="Sustainability Icon"
                className="w-[clamp(1.25rem,5vw,2.25rem)] h-auto pointer-events-none"
              />
            </div>
            <div>
              <h3 className="text-[1.1rem] font-semibold text-[#d1caff] mb-2">
                Environmental Sustainability
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                TRDO supports renewable energy, reforestation, and sustainable
                agriculture projects through transparent blockchain-powered
                funding systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseTronado;
