import React, { useEffect, useRef } from 'react';

type Feature = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
};

const FEATURES: Feature[] = [
  {
    title: 'STAKING',
    description: `Staking unlike its staking counterparts which works with purchasing and then staking proof-of-stake tokens to earn a return denominated in the same assets, allows TRDO holders to earn reserved currencies (BNB, TRDO, PANCAKE and other stipulated currencies for holding TRDO). This reward and consensus mechanism provides a more direct way for holders to earn other cryptocurrencies as well as TRDO.`,
    imageSrc: '/about/Staking.png',
    imageAlt: 'Staking Illustration',
  },
  {
    title: 'TRONADO GAMES',
    description: `The introduction of the Tronado Games allows users to hatch and earn more Tronado every few days. This tends to keep the community active and also encourages hodlers to participate in the developments proposed by the development team. The top hodlers are incentivised with the opportunity to earn more Tronado by claiming extra rewards every few days.`,
    imageSrc: '/about/crypto-games.png',
    imageAlt: 'Game Controller Illustration',
    reverse: true,
  },
  {
    title: 'MARKET PLACE / ECOMMERCE',
    description: `Non-Fungible Token (NFT) is a phenomenon that has gained attention in the crypto world over the past few years with increasing acceptance and use cases. The Tronado NFT marketplace will allow users and community to display their artwork which can be bid on and purchased as NFTs are singularly owned by the buyer and have a unique identity code as metadata.`,
    imageSrc: '/about/ecommerce.png',
    imageAlt: 'Ecommerce Illustration',
  },
  {
    title: 'CRYPTO EXCHANGE',
    description: `Your gateway to digital asset trading. Our platform empowers users to securely buy, sell, and trade a wide variety of cryptocurrencies, from Bitcoin and Ethereum to emerging altcoins. Designed for all experience levels, we offer intuitive tools, real-time market data, and seamless transactions to make trading accessible and efficient.`,
    imageSrc: '/about/crypto-exchange.png',
    imageAlt: 'Crypto Exchange Illustration',
    reverse: true,
  },
  {
    title: 'TRONADO LOTTERY – COMING SOON',
    description: `Our lottery is another fun game that enables participants to earn a considerable amount of Tronado. Users can participate by depositing a small amount of TRDO that enables them to purchase the lottery ticket thereby contributing to the lottery pool. The user can get more tickets to increase their chances of winning and if the user is lucky to win the jackpot, a huge amount of TRDO goes to them.`,
    imageSrc: '/about/crypto-lottery.png',
    imageAlt: 'Lottery Illustration',
  },
  {
    title: 'QR CODE CRYPTO POS PAYMENT SOLUTION – COMING IN 2025',
    description: `Point-of-Sale services and QR code scanning would be employed in payment processing. This will be similar to the QR code use in cryptocurrency wallets but would contain all necessary payment details for easy, reliable, efficient and secure transaction processes to pay.`,
    imageSrc: '/about/qr-pos.png',
    imageAlt: 'POS & QR Code Illustration',
    reverse: true,
  },
];

const TimelineMarker: React.FC = () => (
  <div className="flex flex-col items-center">
    <div
      className="w-5 h-5 rounded-full border-2 border-white"
      style={{
        backgroundImage: 'linear-gradient(135deg, #6E41FF 0%, #FF2D95 100%)',
      }}
    />
    <div
      className="flex-1 w-px mt-1"
      style={{
        backgroundImage: 'linear-gradient(180deg, #6E41FF 0%, #FF2D95 100%)',
      }}
    />
  </div>
);

const FloatingImageContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationId: number;
    let startTime: number | null = null;
    const duration = 3000; // 3 seconds for full up-down cycle
    const distance = 20; // 20px up and down

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = (elapsed % duration) / duration;
      
      // Use sine wave for smooth up-down motion
      const offset = Math.sin(progress * Math.PI * 2) * distance;
      
      if (container) {
        container.style.transform = `translateY(${offset}px)`;
      }
      
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full transition-transform duration-1000 ease-in-out"
    >
      {children}
    </div>
  );
};

const IcoAboutSection: React.FC = () => (
  <section
    id="ico-about-section"
    className="relative bg-[#0a0a23] text-white py-16 px-6 md:px-12 overflow-hidden"
  >
    <div className="max-w-7xl mx-auto">
      {FEATURES.map((feat, idx) => (
        <div
          key={idx}
          className={`
            flex flex-col lg:flex-row items-start lg:items-center lg:justify-between mb-16
            ${feat.reverse ? 'lg:flex-row-reverse' : ''}
            group transition-all duration-300 hover:scale-[1.01]
          `}
        >
          {/* timeline + text */}
          <div className="flex w-full lg:w-1/2 px-4">
            <TimelineMarker />
            <div className="ml-6">
              <h3 className="text-3xl font-semibold mb-4 transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-[#6E41FF] to-[#FF2D95]">
                {feat.title}
              </h3>
              <p className="text-gray-300 leading-relaxed transition-colors duration-300 group-hover:text-gray-100">
                {feat.description}
              </p>
            </div>
          </div>

          {/* image container */}
          <div className="w-full lg:w-5/12 px-4 mt-8 lg:mt-0">
            <div className="relative w-full h-64 sm:h-80 lg:h-96">
              <FloatingImageContainer>
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Animated circle background */}
                  <div className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-[#6E41FF] to-[#FF2D95] opacity-20 blur-xl transition-all duration-1000 ease-in-out group-hover:opacity-30 group-hover:blur-2xl" />
                  
                  {/* Image */}
                  <img
                    src={feat.imageSrc}
                    alt={feat.imageAlt}
                    className="relative z-10 w-full h-full object-contain transition-all duration-1000 ease-in-out group-hover:scale-105"
                  />
                </div>
              </FloatingImageContainer>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default IcoAboutSection;

// import React from 'react'

// type Feature = {
//   title: string
//   description: string
//   imageSrc: string
//   imageAlt: string
//   reverse?: boolean
// }

// const FEATURES: Feature[] = [
//   {
//     title: 'STAKING',
//     description: `Staking unlike its staking counterparts which works with purchasing and then staking proof-of-stake tokens to earn a return denominated in the same assets, allows TRDO holders to earn reserved currencies (BNB, TRDO, PANCAKE and other stipulated currencies for holding TRDO). This reward and consensus mechanism provides a more direct way for holders to earn other cryptocurrencies as well as TRDO.`,
//     imageSrc: '/about/Staking.png',
//     imageAlt: 'Staking Illustration',
//   },
//   {
//     title: 'TRONADO GAMES',
//     description: `The introduction of the Tronado Games allows users to hatch and earn more Tronado every few days. This tends to keep the community active and also encourages hodlers to participate in the developments proposed by the development team. The top hodlers are incentivised with the opportunity to earn more Tronado by claiming extra rewards every few days.`,
//     imageSrc: '/about/crypto-games.png',
//     imageAlt: 'Game Controller Illustration',
//     reverse: true,
//   },
//   {
//     title: 'MARKET PLACE / ECOMMERCE',
//     description: `Non-Fungible Token (NFT) is a phenomenon that has gained attention in the crypto world over the past few years with increasing acceptance and use cases. The Tronado NFT marketplace will allow users and community to display their artwork which can be bid on and purchased as NFTs are singularly owned by the buyer and have a unique identity code as metadata.`,
//     imageSrc: '/about/ecommerce.png',
//     imageAlt: 'Ecommerce Illustration',
//   },
//   {
//     title: 'CRYPTO EXCHANGE',
//     description: `Your gateway to digital asset trading. Our platform empowers users to securely buy, sell, and trade a wide variety of cryptocurrencies, from Bitcoin and Ethereum to emerging altcoins. Designed for all experience levels, we offer intuitive tools, real-time market data, and seamless transactions to make trading accessible and efficient.`,
//     imageSrc: '/about/crypto-exchange.png',
//     imageAlt: 'Crypto Exchange Illustration',
//     reverse: true,
//   },
//   {
//     title: 'TRONADO LOTTERY – COMING SOON',
//     description: `Our lottery is another fun game that enables participants to earn a considerable amount of Tronado. Users can participate by depositing a small amount of TRDO that enables them to purchase the lottery ticket thereby contributing to the lottery pool. The user can get more tickets to increase their chances of winning and if the user is lucky to win the jackpot, a huge amount of TRDO goes to them.`,
//     imageSrc: '/about/crypto-lottery.png',
//     imageAlt: 'Lottery Illustration',
//   },
//   {
//     title: 'QR CODE CRYPTO POS PAYMENT SOLUTION – COMING IN 2025',
//     description: `Point-of-Sale services and QR code scanning would be employed in payment processing. This will be similar to the QR code use in cryptocurrency wallets but would contain all necessary payment details for easy, reliable, efficient and secure transaction processes to pay.`,
//     imageSrc: '/about/qr-pos.png',
//     imageAlt: 'POS & QR Code Illustration',
//     reverse: true,
//   },
// ]

// const TimelineMarker: React.FC = () => (
//   <div className="flex flex-col items-center">
//     <div
//       className="w-5 h-5 rounded-full border-2 border-white"
//       style={{
//         backgroundImage: 'linear-gradient(135deg, #6E41FF 0%, #FF2D95 100%)',
//       }}
//     />
//     <div
//       className="flex-1 w-px mt-1"
//       style={{
//         backgroundImage: 'linear-gradient(180deg, #6E41FF 0%, #FF2D95 100%)',
//       }}
//     />
//   </div>
// )

// const IcoAboutSection: React.FC = () => (
//   <section
//     id="ico-about-section"
//     className="relative bg-[#0a0a23] text-white py-16 px-6 md:px-12 overflow-hidden"
//   >
//     <div className="max-w-7xl mx-auto">
//       {FEATURES.map((feat, idx) => (
//         <div
//           key={idx}
//           className={`
//             flex flex-col lg:flex-row items-start lg:items-center lg:justify-between mb-16
//             ${feat.reverse ? 'lg:flex-row-reverse' : ''}
//           `}
//         >
//           {/* timeline + text */}
//           <div className="flex w-full lg:w-1/2 px-4">
//             <TimelineMarker />
//             <div className="ml-6">
//               <h3 className="text-3xl font-semibold mb-4">{feat.title}</h3>
//               <p className="text-gray-300 leading-relaxed">{feat.description}</p>
//             </div>
//           </div>

//           {/* image with circular background */}
//           <div className="w-full lg:w-5/12 px-4 mt-8 lg:mt-0">
//             <div className="relative w-full h-64 sm:h-80 lg:h-96 flex items-center justify-center">
//               {/* Circular background */}
//               <div className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-[#6E41FF] to-[#FF2D95] opacity-20 blur-xl"></div>
              
//               {/* Image */}
//               <img
//                 src={feat.imageSrc}
//                 alt={feat.imageAlt}
//                 className="relative z-10 w-full h-full object-contain"
//               />
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </section>
// )

// export default IcoAboutSection

// src/components/IcoAboutSection.tsx
// import React from 'react'

// type Feature = {
//   title: string
//   description: string
//   imageSrc: string
//   imageAlt: string
//   reverse?: boolean
// }

// // six feature blocks...
// const FEATURES: Feature[] = [
//   {
//     title: 'STAKING',
//     description: `Staking unlike its staking counterparts which works with purchasing and then staking proof-of-stake tokens to earn a return denominated in the same assets, allows TRDO holders to earn reserved currencies (BNB, TRDO, PANCAKE and other stipulated currencies for holding TRDO). This reward and consensus mechanism provides a more direct way for holders to earn other cryptocurrencies as well as TRDO.`,
//     imageSrc: '/about/Staking.png',
//     imageAlt: 'Staking Illustration',
//   },
//   {
//     title: 'TRONADO GAMES',
//     description: `The introduction of the Tronado Games allows users to hatch and earn more Tronado every few days. This tends to keep the community active and also encourages hodlers to participate in the developments proposed by the development team. The top hodlers are incentivised with the opportunity to earn more Tronado by claiming extra rewards every few days.`,
//     imageSrc: '/about/crypto-games.png',
//     imageAlt: 'Game Controller Illustration',
//     reverse: true,
//   },
//   {
//     title: 'MARKET PLACE / ECOMMERCE',
//     description: `Non-Fungible Token (NFT) is a phenomenon that has gained attention in the crypto world over the past few years with increasing acceptance and use cases. The Tronado NFT marketplace will allow users and community to display their artwork which can be bid on and purchased as NFTs are singularly owned by the buyer and have a unique identity code as metadata.`,
//     imageSrc: '/about/ecommerce.png',
//     imageAlt: 'Ecommerce Illustration',
//   },
//   {
//     title: 'CRYPTO EXCHANGE',
//     description: `Your gateway to digital asset trading. Our platform empowers users to securely buy, sell, and trade a wide variety of cryptocurrencies, from Bitcoin and Ethereum to emerging altcoins. Designed for all experience levels, we offer intuitive tools, real-time market data, and seamless transactions to make trading accessible and efficient.`,
//     imageSrc: '/about/crypto-exchange.png',
//     imageAlt: 'Crypto Exchange Illustration',
//     reverse: true,
//   },
//   {
//     title: 'TRONADO LOTTERY – COMING SOON',
//     description: `Our lottery is another fun game that enables participants to earn a considerable amount of Tronado. Users can participate by depositing a small amount of TRDO that enables them to purchase the lottery ticket thereby contributing to the lottery pool. The user can get more tickets to increase their chances of winning and if the user is lucky to win the jackpot, a huge amount of TRDO goes to them.`,
//     imageSrc: '/about/crypto-lottery.png',
//     imageAlt: 'Lottery Illustration',
//   },
//   {
//     title: 'QR CODE CRYPTO POS PAYMENT SOLUTION – COMING IN 2025',
//     description: `Point-of-Sale services and QR code scanning would be employed in payment processing. This will be similar to the QR code use in cryptocurrency wallets but would contain all necessary payment details for easy, reliable, efficient and secure transaction processes to pay.`,
//     imageSrc: '/about/qr-pos.png',
//     imageAlt: 'POS & QR Code Illustration',
//     reverse: true,
//   },
// ]

// const TimelineMarker: React.FC = () => (
//   <div className="flex flex-col items-center">
//     {/* colored dot */}
//     <div
//       className="w-5 h-5 rounded-full border-2 border-white"
//       style={{
//         backgroundImage: 'linear-gradient(135deg, #6E41FF 0%, #FF2D95 100%)',
//       }}
//     />
//     {/* colored line */}
//     <div
//       className="flex-1 w-px mt-1"
//       style={{
//         backgroundImage: 'linear-gradient(180deg, #6E41FF 0%, #FF2D95 100%)',
//       }}
//     />
//   </div>
// )

// const IcoAboutSection: React.FC = () => (
//   <section
//     id="ico-about-section"
//     className="relative bg-[#0a0a23] text-white py-16 px-6 md:px-12 overflow-hidden"
//   >
//     <div className="max-w-7xl mx-auto">
//       {FEATURES.map((feat, idx) => (
//         <div
//           key={idx}
//           className={`
//             flex flex-col lg:flex-row items-start lg:items-center lg:justify-between mb-16
//             ${feat.reverse ? 'lg:flex-row-reverse' : ''}
//           `}
//         >
//           {/* timeline + text */}
//           <div className="flex w-full lg:w-1/2 px-4">
//             <TimelineMarker />
//             <div className="ml-6">
//               <h3 className="text-3xl font-semibold mb-4">{feat.title}</h3>
//               <p className="text-gray-300 leading-relaxed">{feat.description}</p>
//             </div>
//           </div>

//           {/* image + ripple */}
//           <div className="w-full lg:w-5/12 px-4 mt-8 lg:mt-0">
//             <div className="relative w-full h-64 sm:h-80 lg:h-96">
//               {/* ripple SVG */}
//               <svg
//                 className="absolute inset-0 w-full h-full"
//                 viewBox="0 0 501 455"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 {/* …your ripple paths & gradients… */}
//               </svg>
//               {/* feature illustration */}
//               <img
//                 src={feat.imageSrc}
//                 alt={feat.imageAlt}
//                 className="absolute inset-0 w-full h-full object-contain"
//               />
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </section>
// )

// export default IcoAboutSection

// src/components/IcoAboutSection.tsx
// import React from 'react'

// type Feature = {
//   title: string
//   description: string
//   imageSrc: string
//   imageAlt: string
//   reverse?: boolean
// }

// const FEATURES: Feature[] = [
//   {
//     title: 'STAKING',
//     description: `Staking unlike its staking counterparts which works with purchasing and then staking proof-of-stake tokens to earn a return denominated in the same assets, allows TRDO holders to earn reserved currencies (BNB, TRDO, PANCAKE and other stipulated currencies for holding TRDO). This reward and consensus mechanism provides a more direct way for holders to earn other cryptocurrencies as well as TRDO.`,
//     imageSrc: '/public/about/Staking.png',
//     imageAlt: 'Staking Illustration',
//   },
//   {
//     title: 'TRONADO GAMES',
//     description: `The introduction of the Tronado Games allows users to hatch and earn more Tronado every few days. This tends to keep the community active and also encourages hodlers to participate in the developments proposed by the development team. The top hodlers are incentivised with the opportunity to earn more Tronado by claiming extra rewards every few days.`,
//     imageSrc: '/public/about/crypto-games.png',
//     imageAlt: 'Game Controller Illustration',
//     reverse: true,
//   },
//   {
//     title: 'MARKET PLACE / ECOMMERCE',
//     description: `Non-Fungible Token (NFT) is a phenomenon that has gained attention in the crypto world over the past few years with increasing acceptance and use cases. The Tronado NFT marketplace will allow users and community to display their artwork which can be bid on and purchased as NFTs are singularly owned by the buyer and have a unique identity code as metadata.`,
//     imageSrc: '/public/about/ecommerce.png',
//     imageAlt: 'Ecommerce Illustration',
//   },
//   {
//     title: 'CRYPTO EXCHANGE',
//     description: `Your gateway to digital asset trading. Our platform empowers users to securely buy, sell, and trade a wide variety of cryptocurrencies, from Bitcoin and Ethereum to emerging altcoins. Designed for all experience levels, we offer intuitive tools, real-time market data, and seamless transactions to make trading accessible and efficient.`,
//     imageSrc: '/public/about/crypto-exchange.png',
//     imageAlt: 'Crypto Exchange Illustration',
//     reverse: true,
//   },
//   {
//     title: 'TRONADO LOTTERY – COMING SOON',
//     description: `Our lottery is another fun game that enables participants to earn a considerable amount of Tronado. Users can participate by depositing a small amount of TRDO that enables them to purchase the lottery ticket thereby contributing to the lottery pool. The user can get more tickets to increase their chances of winning and if the user is lucky to win the jackpot, a huge amount of TRDO goes to them.`,
//     imageSrc: '/public/about/crypto-lottery.png',
//     imageAlt: 'Lottery Illustration',
//   },
//   {
//     title: 'QR CODE CRYPTO POS PAYMENT SOLUTION – COMING IN 2025',
//     description: `Point-of-Sale services and QR code scanning would be employed in payment processing. This will be similar to the QR code use in cryptocurrency wallets but would contain all necessary payment details for easy, reliable, efficient and secure transaction processes to pay.`,
//     imageSrc: '/public/about/qr-pos.png',
//     imageAlt: 'POS & QR Code Illustration',
//     reverse: true,
//   },
// ]

// const TimelineMarker: React.FC = () => (
//   <div className="flex flex-col items-center">
//     {/* Circle */}
//     <div
//       className="w-5 h-5 rounded-full border-2 border-white"
//       style={{
//         backgroundImage: 'linear-gradient(135deg, #6E41FF 0%, #FF2D95 100%)',
//       }}
//     />
//     {/* Vertical line */}
//     <div
//       className="flex-1 w-px mt-1"
//       style={{
//         backgroundImage: 'linear-gradient(180deg, #6E41FF 0%, #FF2D95 100%)',
//       }}
//     />
//   </div>
// )

// const IcoAboutSection: React.FC = () => (
//   <section id="ico-about-section" className="py-16 bg-black text-white">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       {FEATURES.map((feat, idx) => (
//         <div
//           key={idx}
//           className={`
//             flex flex-col lg:flex-row items-start lg:items-center lg:justify-between mb-16
//             ${feat.reverse ? 'lg:flex-row-reverse' : ''}
//           `}
//         >
//           {/* Timeline + Text */}
//           <div className="flex w-full lg:w-1/2 px-4">
//             <TimelineMarker />
//             <div className="ml-6">
//               <h3 className="text-3xl font-semibold mb-4">{feat.title}</h3>
//               <p className="text-gray-300 leading-relaxed">{feat.description}</p>
//             </div>
//           </div>

//           {/* Image + Ripple */}
//           <div className="w-full lg:w-5/12 px-4 mt-8 lg:mt-0">
//             <div className="relative w-full h-64 sm:h-80 lg:h-96">
//               {/* Ripple SVG */}
//               <svg
//                 className="absolute inset-0 w-full h-full"
//                 viewBox="0 0 501 455"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M500.5 227.5C500.5 352.824 388.618 454.5 250.5 454.5C112.382 454.5 0.5 352.824 0.5 227.5C0.5 102.176 112.382 0.5 250.5 0.5C388.618 0.5 500.5 102.176 500.5 227.5Z"
//                   stroke="url(#r0)"
//                 />
//                 <path
//                   d="M463.5 247.5C463.5 361.81 368.15 454.5 250.5 454.5C132.85 454.5 37.5 361.81 37.5 247.5C37.5 133.19 132.85 40.5 250.5 40.5C368.15 40.5 463.5 133.19 463.5 247.5Z"
//                   stroke="url(#r1)"
//                 />
//                 <path
//                   d="M425.5 268C425.5 371.031 347.12 454.5 250.5 454.5C153.88 454.5 75.5 371.031 75.5 268C75.5 164.969 153.88 81.5 250.5 81.5C347.12 81.5 425.5 164.969 425.5 268Z"
//                   stroke="url(#r2)"
//                 />
//                 <path
//                   d="M379.5 268C379.5 343.97 321.715 405.5 250.5 405.5C179.285 405.5 121.5 343.97 121.5 268C121.5 192.03 179.285 130.5 250.5 130.5C321.715 130.5 379.5 192.03 379.5 268Z"
//                   stroke="url(#r3)"
//                 />
//                 <defs>
//                   {['r0', 'r1', 'r2', 'r3'].map((id, i) => (
//                     <linearGradient
//                       key={id}
//                       id={id}
//                       x1="250.5"
//                       y1={String(i * 40)}
//                       x2="250.5"
//                       y2="455"
//                       gradientUnits="userSpaceOnUse"
//                     >
//                       <stop offset="0" stopColor="#2A246D" />
//                       <stop offset="1" stopColor="#2A246D" stopOpacity="0" />
//                     </linearGradient>
//                   ))}
//                 </defs>
//               </svg>

//               <img
//                 src={feat.imageSrc}
//                 alt={feat.imageAlt}
//                 className="absolute inset-0 w-full h-full object-contain"
//               />
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </section>
// )

// export default IcoAboutSection
