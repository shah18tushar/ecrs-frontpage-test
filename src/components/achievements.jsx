// 'use client';

// import React from 'react';
// import {Users, Award} from 'lucide-react';
// import SpotlightCard from '@/components/ui/SpotlightCard';
// import SplitText from '@/components/ui/SplitText';

// const achievementsData = [
//   {
//     icon: <Users size={40} className="text-black" />,
//     count: '175+',
//     title: 'Happy Corporate Customers',
//     description: 'Where satisfaction meets service excellence. Join our community and experience unparalleled and smiles every step of the way.',
//   },
//   {
//     icon: <Award size={40} className="text-black" />,
//     count: '13+',
//     title: 'Years Experience',
//     description: 'Our seasoned expertise will brings reliability and trust. Count on us for quality service backed by years of proven experience.',
//   },
// ];

// const Achievements = () => {
//   return (
//     <section className=" py-16 px-4 text-black">
//       <div className="max-w-6xl mx-auto">
//         <div className="flex justify-center mb-12">
//           <SplitText
//             text="Our Achievements"
//             className="text-4xl md:text-6xl font-bold text-center"
//             delay={100}
//             duration={0.6}
//             ease="power3.out"
//             splitType="chars"
//             from={{opacity: 0, y: 40}}
//             to={{opacity: 1, y: 0}}
//             threshold={0.1}
//             rootMargin="-100px"
//             textAlign="center"
//           />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {achievementsData.map ((item, idx) => (
//             <SpotlightCard
//               key={idx}
//               className="bg-white text-black border border-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-all duration-300"
//               spotlightColor="rgb(193, 0, 7)"
//             >
//               <div className="flex justify-center mb-4">{item.icon}</div>
//               <div className="text-4xl font-bold text-red-700 mb-2">
//                 {item.count}
//               </div>
//               <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
//               <p className="text-gray-500 text-sm">{item.description}</p>
//             </SpotlightCard>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Achievements;













"use client";

import React, { useEffect, useRef } from "react";
import { Users, Award, ShieldCheck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagnifierCursor from "./MagnifierCursor";

const Achievements = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const animationRef = useRef(null);
  const floatAnimations = useRef([]);

     const text = "Our Unmatched Excellence";


  const achievementsData = [
    {
      icon: <Users size={40} className="text-red-500" />,
      count: "175+",
      title: "Exclusive Corporate Clients",
      description:
        "Trusted by Fortune 175+ executives, celebrities, and royalty who expect nothing but perfection in their transportation.",
      accentColor: "bg-gradient-to-br from-red-500 to-red-700",
      shadowColor: "shadow-red-300",
      borderColor: "border-red-200",
    },
    {
      icon: <Award size={40} className="text-red-500" />,
      count: "13+",
      title: "Years of Excellence",
      description:
        "Nearly two decades of setting the standard for luxury mobility with impeccable service records by ECRS.",
      accentColor: "bg-gradient-to-br from-red-500 to-red-700",
      shadowColor: "shadow-red-300",
      borderColor: "border-red-200",
    },
    {
      icon: <ShieldCheck size={40} className="text-red-500" />,
      count: "100%",
      title: "Safety Record",
      description:
        "Flawless safety maintained by our professional chauffeurs with special forces training backgrounds.",
      accentColor: "bg-gradient-to-br from-red-500 to-red-700",
      shadowColor: "shadow-red-300",
      borderColor: "border-red-200",
    },
  ];

  return (
    <section className="relative py-24 px-4  overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex justify-center mb-10">
          <div className="text-center max-w-2xl">
            <p className="text-red-500 font-medium  tracking-widest mb-3 text-sm uppercase">
              Elite Standards
            </p>
            <h2 className="text-4xl md:text-3xl font-serif font-medium text-gray-900 mb-3">
              <MagnifierCursor text={text} cursorSize={45} />
            </h2>
            <div className="w-28 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievementsData.map((item, idx) => (
            <div
              className={`relative bg-white rounded-xl border ${item.borderColor} p-8 hover:bg-red-50 text-center transition-all duration-500 group overflow-hidden hover:${item.shadowColor} hover:shadow-xl`}
              style={{
                boxShadow: "0 15px 40px -15px rgba(0,0,0,0.08)",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Luxury shine effect */}
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                <div
                  className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.4)_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ transform: "translateZ(20px)" }}
                ></div>
              </div>

              {/* Card content */}
              <div
                className="relative z-10"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="flex justify-center mb-6">
                  <div
                    // className={`p-4 bg-white rounded-full border ${item.borderColor} group-hover:border-red-500 transition-all duration-500 shadow-sm`}
                    style={{ transform: "translateZ(30px)" }}
                  >
                    {item.icon}
                  </div>
                </div>
                <div
                  className={`text-5xl font-serif font-medium mb-3 bg-clip-text text-transparent ${item.accentColor}`}
                  style={{ transform: "translateZ(20px)" }}
                >
                  {item.count}
                </div>
                <h3
                  className="text-xl font-medium text-gray-900 mb-4"
                  style={{ transform: "translateZ(15px)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-gray-600 font-light text-sm leading-relaxed"
                  style={{ transform: "translateZ(10px)" }}
                >
                  {item.description}
                </p>
              </div>

              {/* Depth effect */}
              <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                <div className="absolute inset-0 border border-transparent group-hover:border-red-500/30 transition-all duration-500 rounded-xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
