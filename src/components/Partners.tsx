"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const partners = [
  { name: "Deepcoin", logo: "/deepcoin.png" },
  { name: "Bitget", logo: "/bitget.png" },
  { name: "BingX", logo: "/bingx.png" },
  { name: "Cryptoforce", logo: "/Cryptoforce.png" },
  { name: "Biconomy", logo: "/biconomy.png" },
];

// Create a duplicate set of partners to ensure continuous chain effect
const allPartners = [...partners, ...partners];

const PartnerSection: React.FC = () => {
  return (
    <section id="partners" className="relative bg-[#090818] overflow-hidden py-24">
      {/* Background Mountain */}
      <div className="absolute top-0 left-0 w-full z-0">
        <img
          src="/mountain-footer-shape.svg"
          alt="Mountain Background"
          className="w-full h-auto"
        />
      </div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-sm font-bold text-[#d1caff] uppercase flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-400"></span>
          Our Partner
          <span className="w-2 h-2 rounded-full bg-purple-400"></span>
        </h2>
      </div>

      {/* Partner Logos Carousel */}
      <div className="relative z-10">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          slidesPerView={5}
          spaceBetween={30}
          autoplay={{
            delay: 0, // No delay for continuous movement
            disableOnInteraction: false,
            reverseDirection: true, // Right to left movement
          }}
          speed={8000} // Very slow transition speed for continuous movement
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 20 },
            640: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 5, spaceBetween: 30 },
          }}
          className="partners-swiper"
          grabCursor={false} // Disable grab cursor for continuous movement
          centeredSlides={false}
          initialSlide={0}
        >
          {allPartners.map((partner, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative p-6 bg-gradient-to-b from-[#16122e] to-[#0f0b20] border border-[#372d5a] rounded-2xl flex items-center justify-center h-32 transition-transform duration-300 hover:scale-105">
                <a href="#!" className="relative block">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} Logo`}
                    className="max-h-14 w-auto mx-auto object-contain"
                  />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PartnerSection;
