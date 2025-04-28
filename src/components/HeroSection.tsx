// src/components/HeroSection.tsx
import React from 'react'

const HeroSection: React.FC = () => (
  <section
    id="hero"
    className="relative overflow-hidden bg-[#0a0a23] text-white"
  >
    {/* dotted‐net background */}
    <img
      src="/shape_net_ico_hero_section_bg.svg"
      alt=""
      className="absolute inset-0 w-full h-full object-cover pointer-events-none"
    />

    {/* left globe: floats up */}
    <img
      src="/shape_globe.webp"
      alt="rotating globe"
      className="absolute left-0 top-1/2 -translate-y-1/2 w-24 sm:w-32 md:w-48 h-auto animate-float pointer-events-none opacity-70 sm:opacity-100"
    />

    {/* right coin: floats down */}
    <img
      src="/shape_coin.webp"
      alt="crypto coin"
      className="absolute right-0 top-1/2 -translate-y-1/2 w-24 sm:w-32 md:w-48 h-auto animate-float-reverse pointer-events-none opacity-70 sm:opacity-100"
    />

    <div className="relative z-10 max-w-4xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 text-center">
      <h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        Welcome to TRONADO ecosystem
      </h1>
      <p
        className="mb-8 sm:mb-12 text-base sm:text-lg md:text-xl max-w-3xl mx-auto"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        We are Crypto-Enthusiasts, building a community around the Blockchain
        technology, giving a true meaning to the cryptocurrency world.
      </p>

      <ul
        className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 list-none p-0 max-w-md mx-auto"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="100"
      >
        {/* Buy TRDO */}
        <li className="w-full sm:w-auto">
          <a
            href="#!"
            className="relative inline-block w-full sm:w-auto px-6 py-3 border border-pink-500 rounded-lg overflow-hidden group"
          >
            <span className="absolute inset-0 transition duration-300 group-hover:bg-gradient-to-br group-hover:from-[#6E41FF] group-hover:to-[#FF2D95]" />
            <span className="relative flex items-center justify-center text-pink-500 group-hover:text-white">
              {/* …arrow SVGs & label… */}
              <svg className="w-4 h-4 mr-2" /* … */></svg>
              <span className="font-semibold">Buy TRDO</span>
              <svg className="w-4 h-4 ml-2" /* … */></svg>
            </span>
          </a>
        </li>

        {/* Roadmap */}
        <li className="w-full sm:w-auto">
          <a
            href="#roadmap"
            className="relative inline-block w-full sm:w-auto px-6 py-3 border border-pink-500 rounded-lg overflow-hidden group"
          >
            <span className="absolute inset-0 transition duration-300 group-hover:bg-gradient-to-br group-hover:from-[#6E41FF] group-hover:to-[#FF2D95]" />
            <span className="relative flex items-center justify-center text-pink-500 group-hover:text-white">
              <svg className="w-4 h-4 mr-2" /* … */></svg>
              <span className="font-semibold">Roadmap</span>
              <svg className="w-4 h-4 ml-2" /* … */></svg>
            </span>
          </a>
        </li>
      </ul>
    </div>
  </section>
)

export default HeroSection
