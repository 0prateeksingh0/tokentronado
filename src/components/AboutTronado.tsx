import React from "react";

const AboutTronado: React.FC = () => {
  const items = [
    {
      title: "What is Tronado?",
      content: `Tronado (TRDO), a pioneering utility token designed to revolutionise digital transactions through seamless,
      secure, and efficient payment solutions. Founded on September 23, 2020, Tronado aims to redefine the financial
      landscape with its decentralised and fixed supply model, providing stability and security for users.
      Initially issued with 500 million tokens, the supply was halved to 250 million tokens in December 2021 to
      enhance value and create scarcity.`,
    },
    {
      title: "OUR MISSION",
      content:
        "To offer a decentralised, transparent, and user friendly platform for payments, recharges, and bookings, thereby streamlining the digital transaction experience.",
    },
    {
      title: "OUR VISION",
      content:
        "To emerge as the leading utility token for secure and efficient digital transactions across diverse sectors.",
    },
  ];

  return (
    <section id="about" className="bg-[#0d0b20] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-20 overflow-hidden">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        {/* Left: Timeline */}
        <div className="relative flex-1 order-2 md:order-1">
          {/* Vertical line */}
          <div className="absolute left-[18px] top-0 bottom-0 w-1 bg-gradient-to-b from-[#7450f7] via-[#4c2dff] to-[#311d80] rounded-full" />

          {/* Timeline items */}
          <ul className="space-y-8 sm:space-y-12 md:space-y-16 pl-12 sm:pl-14">
            {items.map((item, idx) => (
              <li key={idx} className="relative">
                {/* Circular Dot */}
                <div className="absolute -left-9 top-1 w-6 sm:w-7 h-6 sm:h-7 rounded-full bg-[#0d0b20] border-4 border-[#7450f7] flex items-center justify-center shadow-[0_0_10px_#7450f7]">
                  <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#7450f7]" />
                </div>

                {/* Content */}
                <h3 className="text-base sm:text-lg font-bold text-[#b197fc] mb-2">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{item.content}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: SVG Display */}
        <div className="flex-1 flex justify-center items-center md:items-start pt-0 md:pt-4 order-1 md:order-2 mb-8 md:mb-0">
          <div className="p-4 sm:p-6 bg-[#19103b] rounded-3xl shadow-lg hover:shadow-purple-500/50 transition-shadow duration-300 cursor-pointer">
            <img
              src="/about_image.svg"
              alt="Tronado Crypto Illustration"
              className="w-[280px] sm:w-[320px] md:w-[400px] transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTronado;
