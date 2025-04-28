import React from "react";

const WhitepaperSection: React.FC = () => {
  return (
    <section className="bg-[#0d0b20] text-white px-6 md:px-20 py-20">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-[#cfc4ff]">Whitepaper</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-10 rounded-2xl overflow-hidden border border-[#302352] bg-[#161129] shadow-lg">
        {/* Left: Background Image Block */}
        <div
          className="min-h-[500px] bg-cover bg-center"
          style={{
            backgroundImage: "url('/whitepaper_image_bg.webp')",
          }}
        ></div>

        {/* Right: Content Block */}
        <div className="flex flex-col justify-between py-10 px-6 md:px-12 space-y-10">
          {/* Audit Results */}
          <div>
            <h3 className="text-2xl font-bold text-[#cfc4ff] mb-3">Audit Results</h3>
            <p className="text-gray-300 mb-6">
              Tronado has been successfully audited by the trusted organizations like 0xcommit. Passing these audits
              underscores our dedication to building a safe and robust solution for all users.
            </p>
            <a
              href="/pdf/Security Assessment Report - Tronado (Final).pdf"
              download
              className="relative inline-flex items-center justify-center px-8 py-3 border border-fuchsia-500 text-fuchsia-400 rounded-lg transition-all hover:bg-fuchsia-700/10 hover:shadow-[0_0_25px_rgba(255,0,255,0.5)] group"
            >
              <span className="pr-2 group-hover:-translate-x-1 transition-transform">←</span>
              Download Audit Report
              <span className="pl-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          <hr className="border-t border-[#2a2252]" />

          {/* Explore Whitepaper */}
          <div>
            <h3 className="text-2xl font-bold text-[#cfc4ff] mb-3">Explore Whitepaper</h3>
            <p className="text-gray-300 mb-6">
              Here is our full documents that help you to understand deeply about us and our operation.
            </p>
            <a
              href="/pdf/Tronado White Paper.pdf"
              download
              className="relative inline-flex items-center justify-center px-8 py-3 border border-fuchsia-500 text-fuchsia-400 rounded-lg transition-all hover:bg-fuchsia-700/10 hover:shadow-[0_0_25px_rgba(255,0,255,0.5)] group"
            >
              <span className="pr-2 group-hover:-translate-x-1 transition-transform">←</span>
              Download Whitepaper
              <span className="pl-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhitepaperSection;
